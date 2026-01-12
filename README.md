# 🏗️ Merchanthaus.io

**Modern TypeScript React frontend built with Vite, Tailwind, and shadcn/ui — optimized for speed, scalability, and clean UI design.**

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white" alt="React"></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white" alt="Vite"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwindcss&logoColor=white" alt="TailwindCSS"></a>
  <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/shadcn--ui-Components-111827?logo=radixui&logoColor=white" alt="shadcn-ui"></a>
  <a href="#"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
</p>

---

## 🚀 Project Overview
**MerchantHaus.io**  is a modular, high-performance frontend built for modern web applications.  
It focuses on **speed**, **reusability**, and **developer experience**, powered by **Vite**, **React**, and **TypeScript**.

---

## 🧰 Tech Stack
- ⚡ **Vite** — blazing-fast build tool  
- ⚛️ **React 18** with TypeScript  
- 🎨 **Tailwind CSS** + **Tailwind Animate**  
- 🧩 **shadcn/ui** — accessible components built on **Radix UI**  
- 🧠 **@tanstack/react-query** — async state management  
- 🌗 **next-themes** — dark/light mode control  
- 📈 **Recharts** — data visualization  
- ✅ **Zod** + **react-hook-form** — form validation  

---

## 🖋️ Editing the Project
Set up the project locally using your preferred IDE:

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Navigate into the directory


# 3. Install dependencies
npm install

# 4. Start the local dev server
npm run dev
```

💡 The development server supports **hot reloading** and **instant preview**.

---

## 🧑‍💻 Development Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint across the codebase |

---

## 🌍 Deployment
Deploy seamlessly to any modern static hosting provider:

- [Vercel](https://vercel.com)  
- [Netlify](https://www.netlify.com)  
- [Cloudflare Pages](https://pages.cloudflare.com)  
- [GitHub Pages](https://pages.github.com)

To create a production build:

```bash
npm run build
```

Your optimized site will be located in the `/dist` directory.

---

## 🌐 Domain Configuration
This project powers **https://merchanthaus.io**.  
If deploying to a new environment, ensure your hosting configuration points your custom domain to the build output directory.  
SSL certificates will typically be auto-generated when hosted via **Vercel** or **Netlify**.

---

## 🧱 Folder Structure
```
src/
 ├── components/     # Reusable UI components
 ├── pages/          # Page-level views (Index, About, Services, Blog, etc.)
 ├── assets/         # Images and static resources
 ├── hooks/          # Reusable React hooks
 ├── lib/            # Utility functions and configs
 ├── styles/         # Tailwind and global CSS
 └── main.tsx        # Entry point for Vite
```

---

## 💬 SEO Metadata & Social Previews

### Global SEO Setup (`index.html`)
The project supports Open Graph and Twitter tags for rich link previews.  
Example configuration (inside `<head>`):

```html
<!-- Primary Meta -->
<title>MerchantHaus.io — Modern React + TypeScript UI</title>
<meta name="description" content="Modern TypeScript React frontend built with Vite, Tailwind, and shadcn/ui — optimized for speed, scalability, and clean UI design.">

<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:title" content="MerchantHaus.io — Modern React + TypeScript UI">
<meta property="og:description" content="Modern TypeScript React frontend with Vite, Tailwind, and shadcn/ui.">
<meta property="og:url" content="https://merchanthaus.io/">
<meta property="og:image" content="https://merchanthaus.io/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="MerchantHaus.io — Modern React + TypeScript UI">
<meta name="twitter:description" content="Modern TypeScript React frontend with Vite, Tailwind, and shadcn/ui.">
<meta name="twitter:image" content="https://merchanthaus.io/og-image.png">
```

Recommended OG image size: **1200×630 px**

---

### Dynamic Per-Page Metadata (`react-helmet-async`)
For unique meta titles and descriptions per route, install:

```bash
npm i react-helmet-async
```

Wrap your app with the `HelmetProvider` (e.g., in `main.tsx`):

```tsx
import { HelmetProvider } from 'react-helmet-async';

<HelmetProvider>
  <App />
</HelmetProvider>
```

Then add meta tags in each page (example for `Services.tsx`):

```tsx
import { Helmet } from 'react-helmet-async';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — MerchantHaus</title>
        <meta
          name="description"
          content="POS, e-commerce, and mobile payment solutions built for modern businesses."
        />
        <link rel="canonical" href="https://merchanthaus.io/services" />
        <meta property="og:title" content="Services — MerchantHaus" />
        <meta property="og:description" content="Fast, reliable, and flexible payment technology." />
        <meta property="og:image" content="https://merchanthaus.io/og-services.png" />
      </Helmet>

      {/* Page content here */}
    </>
  );
}
```

✅ **Tip:** Store per-page images (like `/og-services.png`, `/og-about.png`) in `/public` for better sharing previews.

---

## 🔮 Future Enhancements
- Migration to **Next.js** for SSR and advanced SEO  
- Enhanced per-page meta management  
- Improved Lighthouse & accessibility scores  
- Expanded **shadcn/ui** component library  

---
E2B for Startups
[![SPONSORED BY E2B FOR STARTUPS](https://img.shields.io/badge/SPONSORED%20BY-E2B%20FOR%20STARTUPS-ff8800?style=for-the-badge)](https://e2b.dev/startups)

E2B for Research
[![SPONSORED BY E2B FOR RESEARCH](https://img.shields.io/badge/SPONSORED%20BY-E2B%20FOR%20STARTUPS-ff8800?style=for-the-badge)](https://e2b.dev/research)





