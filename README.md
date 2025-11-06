🏗️ NewHausNext

Modern TypeScript React frontend built with Vite, Tailwind, and shadcn/ui — optimized for speed, scalability, and clean UI design.

<p align="center"> <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white" alt="React"></a> <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white" alt="Vite"></a> <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript"></a> <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwindcss&logoColor=white" alt="TailwindCSS"></a> <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/shadcn--ui-Components-111827?logo=radixui&logoColor=white" alt="shadcn-ui"></a> <a href="#"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a> </p>
🚀 Project Overview

NewHausNext is a modular, high-performance frontend built for modern web applications.
It focuses on speed, reusability, and developer experience, using Vite for ultra-fast builds and React + TypeScript for maintainable architecture.

🧰 Tech Stack

⚡ Vite — blazing-fast build tool

⚛️ React 18 with TypeScript

🎨 Tailwind CSS + Tailwind Animate

🧩 shadcn/ui — accessible components built on Radix UI

🧠 @tanstack/react-query — async state management

🌗 next-themes — dark/light mode control

📈 Recharts — data visualization

✅ Zod + react-hook-form — form validation

🖋️ Editing the Project

You can edit this project locally in your preferred IDE.

# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Navigate into the directory
cd newhausnext

# 3. Install dependencies
npm install

# 4. Start the local dev server
npm run dev


💡 The development server supports hot reloading and instant preview.

🧑‍💻 Development Scripts
Command	Description
npm run dev	Start the development server
npm run build	Build the app for production
npm run preview	Preview the production build
npm run lint	Run ESLint across the codebase
🌍 Deployment

Deploy seamlessly to any modern static hosting provider:

Vercel

Netlify

Cloudflare Pages

GitHub Pages

To create a production build:

npm run build


Your optimized site will be located in the /dist directory.

🌐 Custom Domain

If you’re hosting on Vercel or Netlify, connect a custom domain directly from their dashboard.
SSL certificates will be automatically configured.

🧱 Folder Structure
src/
 ├── components/     # Reusable UI components
 ├── pages/          # Page-level views (Index, About, Services, Blog, etc.)
 ├── assets/         # Images and static resources
 ├── hooks/          # Reusable React hooks
 ├── lib/            # Utility functions and configs
 ├── styles/         # Tailwind and global CSS
 └── main.tsx        # Entry point for Vite

💬 Social & SEO Metadata

This project includes Open Graph and Twitter meta tags in index.html for rich previews.

Example:

<meta property="og:title" content="NewHausNext — Modern React + TypeScript UI" />
<meta property="og:description" content="Modern TypeScript React frontend built with Vite, Tailwind, and shadcn/ui — optimized for speed, scalability, and clean UI design." />
<meta property="og:image" content="https://your-domain.com/og-image.png" />
<meta property="og:url" content="https://your-domain.com/" />
<meta name="twitter:card" content="summary_large_image" />


Place your OG image at public/og-image.png (recommended: 1200×630 px).

🔮 Future Enhancements

Migration to Next.js for SSR and advanced SEO

Enhanced per-page meta tags with react-helmet-async

Accessibility improvements (WCAG compliance)

Expanded shadcn/ui component library
