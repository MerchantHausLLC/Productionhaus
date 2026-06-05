import type { Context } from '@netlify/edge-functions'
// Turndown is loaded as a Deno-native ESM bundle from esm.sh. esm.sh ships the
// package together with its DOM dependency so it resolves cleanly in the edge
// (Deno) runtime — a bare `npm:turndown` specifier is not reliably bundled here.
import TurndownService from 'https://esm.sh/turndown@7.2.0'

/**
 * Markdown-for-agents edge function
 * ---------------------------------
 * Serves a clean Markdown rendering of any content page when an AI agent (or
 * any client) asks for it via the `Accept: text/markdown` request header.
 * Human browsers send `Accept: text/html`, so they pass straight through to the
 * normal HTML response untouched. Markdown is typically ~80% smaller than the
 * rendered HTML, so agents that opt in spend far fewer tokens reading the page.
 *
 * ── How it works ────────────────────────────────────────────────────────────
 *   1. If the request does NOT include `Accept: text/markdown`, return early so
 *      the request proceeds to the origin unchanged.
 *   2. Otherwise fetch the origin HTML with `context.next()`, strip the
 *      non-content chrome (scripts, styles, nav, header, footer, sidebars),
 *      convert what remains to Markdown with Turndown, and return it.
 *   3. On ANY error, fall back to the original, unmodified HTML response.
 *
 * ── Test the Markdown response (curl) ───────────────────────────────────────
 *   curl -H "Accept: text/markdown" https://your-site.netlify.app/path
 *   # e.g.  curl -H "Accept: text/markdown" https://productionhaus.netlify.app/about
 *   # The default (HTML) response is unchanged:
 *   curl https://your-site.netlify.app/path
 *
 * ── Test locally with the Netlify CLI ───────────────────────────────────────
 *   netlify dev --port 8889
 *   curl -H "Accept: text/markdown" http://localhost:8889/about
 *
 * ── Add or remove paths from this function's scope ──────────────────────────
 *   The list of paths this function runs on is configured in `netlify.toml`
 *   under the `[[edge_functions]]` block named "markdown". It is registered on
 *   every path (`path = "/*"`) and then narrowed with `excludedPath`, which
 *   lists the utility routes, API endpoints, and asset paths that should never
 *   be converted.
 *     • To EXCLUDE a path (e.g. a new form or dashboard route): add it to the
 *       `excludedPath` array in `netlify.toml`.
 *     • To re-INCLUDE a previously excluded path: remove it from that array.
 *     • To restrict the function to an explicit allow-list instead of "all but
 *       excluded": replace `path = "/*"` with the specific content paths, e.g.
 *       `path = ["/", "/about", "/blog", "/services"]`.
 *   The `Accept: text/markdown` guard below means non-content requests that
 *   slip through the path config are still returned untouched.
 */

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
})

// Drop non-content elements entirely so they never reach the Markdown output.
turndownService.remove([
  'script',
  'style',
  'noscript',
  'nav',
  'header',
  'footer',
  'aside',
  'form',
  'svg',
  'iframe',
])

// Also drop elements whose role/class/id marks them as navigation or sidebar
// chrome even when they are plain <div>s.
const CHROME_PATTERN = /(^|[\s_-])(nav|navbar|menu|sidebar|footer|header|breadcrumb|cookie|banner|skip-link)([\s_-]|$)/i
turndownService.addRule('strip-chrome', {
  filter: (node) => {
    const role = node.getAttribute?.('role') ?? ''
    if (role === 'navigation' || role === 'banner' || role === 'contentinfo') return true
    const id = node.getAttribute?.('id') ?? ''
    const className =
      typeof node.className === 'string' ? node.className : node.getAttribute?.('class') ?? ''
    return CHROME_PATTERN.test(id) || CHROME_PATTERN.test(className)
  },
  replacement: () => '',
})

export default async (req: Request, context: Context) => {
  // 1. Only agents that explicitly opt in get Markdown. Everyone else passes through.
  const accept = req.headers.get('accept') ?? ''
  if (!accept.includes('text/markdown')) {
    return
  }

  let originResponse: Response | undefined
  let originHtml = ''

  try {
    // 2. Fetch the HTML the origin would normally serve.
    originResponse = await context.next()

    // Only attempt to convert actual HTML documents.
    const contentType = originResponse.headers.get('content-type') ?? ''
    if (!contentType.includes('text/html')) {
      return originResponse
    }

    originHtml = await originResponse.text()

    // 3. Convert to Markdown (Turndown parses the HTML and applies the strip
    //    rules registered above).
    const markdown = turndownService.turndown(originHtml).trim()

    // Rough token estimate: ~4 characters per token.
    const estimatedTokens = String(Math.round(markdown.length / 4))

    return new Response(markdown, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'X-Markdown-Tokens': estimatedTokens,
        'Content-Signal': 'ai-train=yes, search=yes, ai-input=yes',
        'Cache-Control': 'public, max-age=0, must-revalidate',
        Vary: 'Accept',
      },
    })
  } catch (error) {
    // 4. Fall back to the original HTML response on any error.
    console.error('markdown edge function failed, serving original HTML:', error)
    if (originHtml) {
      return new Response(originHtml, {
        status: originResponse?.status ?? 200,
        headers: originResponse?.headers,
      })
    }
    return originResponse
  }
}
