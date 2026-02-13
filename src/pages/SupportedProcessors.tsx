import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

type Row = Record<string, string>;

const CURRENCIES_COL = "Currencies";
const PLATFORM_COL = "Platform";

/**
 * Brand-color mapping for processor names.
 * Each entry is [substring to match (lowercase), hex color].
 * Order matters — first match wins.
 */
const PROCESSOR_BRAND_COLORS: [string, string][] = [
  // Visa
  ["visa", "#1A1F71"],
  // Mastercard
  ["mastercard", "#EB001B"],
  // American Express
  ["american express", "#2E77BC"],
  ["amex", "#2E77BC"],
  // Discover
  ["discover", "#FF6000"],
  // JCB
  ["jcb", "#0063A6"],
  // UnionPay
  ["unionpay", "#E21836"],
  // PayPal
  ["paypal", "#003087"],
  // Apple Pay (white for dark bg)
  ["apple pay", "#FFFFFF"],
  // Google Pay
  ["google pay", "#4285F4"],
  // Stripe
  ["stripe", "#635BFF"],
  // Authorize.net
  ["authorize", "#E1A200"],
  // Square / Block
  ["square", "#28A745"],
  // Checkout.com
  ["checkout.com", "#6B3FF2"],
  // Adyen
  ["adyen", "#0ABF53"],
  // Elavon
  ["elavon", "#00529B"],
  // Fiserv / First Data
  ["fiserv", "#FF2A2A"],
  ["first data", "#FF2A2A"],
  // TSYS
  ["tsys", "#6F2DBD"],
  // Worldpay
  ["worldpay", "#6D2077"],
  ["world pay", "#6D2077"],
  // Nuvei
  ["nuvei", "#0ABF53"],
  // Braintree (PayPal subsidiary)
  ["braintree", "#003087"],
  // Chase Paymentech
  ["chase", "#117ACA"],
  // Paysafe
  ["paysafe", "#2C2C7C"],
  // Global Payments
  ["global payments", "#1B365D"],
  // Heartland
  ["heartland", "#E31837"],
  // Moneris
  ["moneris", "#00A651"],
  // BlueSnap
  ["bluesnap", "#0073E6"],
  // EVO
  ["evo", "#003DA5"],
  // EPX
  ["epx", "#005EB8"],
  // Barclaycard
  ["barclaycard", "#00AEEF"],
  // HSBC
  ["hsbc", "#DB0011"],
  // NCR
  ["ncr", "#00843D"],
  // Santander
  ["santander", "#EC0000"],
  // Skrill
  ["skrill", "#862165"],
  // Lloyds
  ["lloyds", "#006A4D"],
  // NMI
  ["nmi", "#0074D9"],
  // Optimal / Paysafe Processing
  ["optimal", "#2C2C7C"],
  // ProPay
  ["propay", "#1E88E5"],
  // Vantiv
  ["vantiv", "#6D2077"],
  // AIBMS
  ["aibms", "#3F51B5"],
  // eMerchantPay
  ["emerchantpay", "#26C6DA"],
  // CredoRax
  ["credorax", "#FF6D00"],
  ["credorax", "#FF6D00"],
  // CreditGuard
  ["creditguard", "#0D47A1"],
  // Cashflows
  ["cashflows", "#00BFA5"],
  // PROSA
  ["prosa", "#0D47A1"],
  // PowerCARD
  ["powercard", "#F57C00"],
  // Paya
  ["paya", "#0091EA"],
  // FACe
  ["face", "#6D2077"],
];

function getProcessorBrandColor(name: string): string | null {
  const lower = name.toLowerCase();
  for (const [keyword, color] of PROCESSOR_BRAND_COLORS) {
    if (lower.includes(keyword)) return color;
  }
  return null;
}

function isBooleanValue(val: string): boolean {
  const v = val.trim().toLowerCase();
  return v === "true" || v === "false";
}

function BooleanCell({ value }: { value: string }) {
  const isTrue = value.trim().toLowerCase() === "true";
  if (isTrue) {
    return <Check className="h-5 w-5 text-emerald-500" aria-label="Yes" />;
  }
  return null;
}

function parseCsv(csvText: string): Row[] {
  const lines = csvText
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  if (lines.length < 2) return [];

  // Minimal CSV parser (handles quoted commas)
  const splitLine = (line: string) => {
    const out: string[] = [];
    let cur = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];

      if (ch === '"') {
        // handle escaped quotes ""
        if (inQuotes && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
        continue;
      }

      if (ch === "," && !inQuotes) {
        out.push(cur);
        cur = "";
        continue;
      }

      cur += ch;
    }
    out.push(cur);
    return out.map((v) => v.trim());
  };

  const headers = splitLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = splitLine(line);
    const row: Row = {};
    headers.forEach((h, idx) => (row[h] = values[idx] ?? ""));
    return row;
  });
}

function parseCurrencies(raw: string): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);
}

function CurrencyDropdown({ currencies }: { currencies: string[] }) {
  if (currencies.length === 0) {
    return <span className="text-muted-foreground">—</span>;
  }

  if (currencies.length === 1) {
    return <span className="text-muted-foreground">{currencies[0]}</span>;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-sm text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-colors"
        >
          {currencies.length} currencies
          <ChevronDown className="h-3.5 w-3.5 opacity-60" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-48 max-h-64 overflow-y-auto p-2"
      >
        <div className="text-xs font-semibold text-foreground mb-2 px-1">
          Supported Currencies ({currencies.length})
        </div>
        <ul className="space-y-0.5">
          {currencies.map((c) => (
            <li
              key={c}
              className="rounded px-2 py-1 text-sm text-muted-foreground hover:bg-muted/40"
            >
              {c}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

const SupportedProcessors = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    // IMPORTANT: absolute path + BASE_URL safe for subpath deploys
    const url = `${import.meta.env.BASE_URL}processors_simplified.csv`;

    fetch(url, { cache: "no-store" })
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load CSV (${r.status})`);
        return r.text();
      })
      .then((text) => setRows(parseCsv(text)))
      .catch((e) => setError(e?.message ?? "Failed to load processors list"));
  }, []);

  const columns = useMemo(() => {
    const first = rows[0];
    return first ? Object.keys(first) : [];
  }, [rows]);

  const booleanCols = useMemo(() => {
    if (rows.length === 0) return new Set<string>();
    const cols = new Set<string>();
    for (const col of columns) {
      const allBoolean = rows.every((r) => {
        const v = (r[col] ?? "").trim().toLowerCase();
        return v === "" || v === "true" || v === "false";
      });
      if (allBoolean && rows.some((r) => isBooleanValue(r[col] ?? ""))) {
        cols.add(col);
      }
    }
    return cols;
  }, [rows, columns]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;

    return rows.filter((r) =>
      Object.values(r).some((v) => (v ?? "").toLowerCase().includes(q))
    );
  }, [rows, query]);

  return (
    <div className="min-h-screen bg-background dark:bg-neutral-dark">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-ubuntu font-bold text-foreground mb-3">
            Supported Processors
          </h1>

          <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            This list shows the processors currently supported by our platform.
            Use the search box to quickly filter by name, region, platform, or notes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search processors…"
              className="w-full sm:max-w-md rounded-lg border border-border bg-background px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-primary"
            />

            <div className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
              of <span className="font-semibold text-foreground">{rows.length}</span>
            </div>
          </div>

          {error ? (
            <div className="rounded-xl border border-border p-6 text-foreground">
              <div className="font-semibold mb-2">Couldn't load the list</div>
              <div className="text-sm text-muted-foreground">
                {error}
                <div className="mt-2">
                  Confirm this file exists at{" "}
                  <code className="px-2 py-1 rounded bg-muted">
                    /processors_simplified.csv
                  </code>
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto overflow-y-auto max-h-[70vh] rounded-2xl border border-border">
              <table className="min-w-full text-sm">
                <thead className="bg-muted/40 sticky top-0 z-10">
                  <tr>
                    {columns.map((c) => (
                      <th
                        key={c}
                        className="text-left px-4 py-3 font-semibold text-foreground whitespace-nowrap bg-muted/40"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r, idx) => {
                    const brandColor = getProcessorBrandColor(r[PLATFORM_COL] ?? "");
                    return (
                      <tr
                        key={idx}
                        className="border-t border-border hover:bg-muted/20 transition-colors"
                        style={brandColor ? { borderLeft: `4px solid ${brandColor}` } : undefined}
                      >
                        {columns.map((c) => (
                          <td
                            key={c}
                            className={`px-4 py-3 align-top ${c === PLATFORM_COL ? "font-medium" : "text-muted-foreground"}`}
                            style={c === PLATFORM_COL && brandColor ? { color: brandColor } : undefined}
                          >
                            {c === CURRENCIES_COL ? (
                              <CurrencyDropdown currencies={parseCurrencies(r[c])} />
                            ) : booleanCols.has(c) ? (
                              <BooleanCell value={r[c]} />
                            ) : (
                              r[c] || "—"
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}

                  {!rows.length && (
                    <tr>
                      <td className="px-4 py-6 text-muted-foreground" colSpan={Math.max(columns.length, 1)}>
                        Loading…
                      </td>
                    </tr>
                  )}

                  {rows.length > 0 && filtered.length === 0 && (
                    <tr>
                      <td className="px-4 py-6 text-muted-foreground" colSpan={columns.length}>
                        No matches for "{query}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportedProcessors;
