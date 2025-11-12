# Shruti Nilosey — Orwa.tech Style Portfolio

Next.js 14 + Tailwind + Framer Motion. Ready for Vercel one‑click deploy.

## Quickstart
```bash
npm i
npm run dev
```

Open http://localhost:3000

## Customize
- Edit `lib/siteConfig.ts` (name, tagline, lists).
- Replace `/public/avatar-placeholder.png` with your photo (same filename).
- Your resume is already available at `/Shruti_Nilosey_Resume.pdf` (in `public`).

## Contact Form (Formspree)
1. Create a free Formspree form: https://formspree.io/
2. Get your endpoint (looks like `/f/xxxxx`).
3. In `components/Sections.tsx`, replace `action` URL with your endpoint.
4. Submissions will arrive in your email.

## Deploy to Vercel (Free)
1. Go to https://vercel.com and sign in with Google.
2. Click **New Project** → **Import** the repo or **Deploy** a local folder.
3. If deploying from ZIP:
   - Unzip this folder.
   - Run `npm i && npm run build` locally once (optional but recommended).
   - Run `vercel` (if you have Vercel CLI) or upload via the dashboard (drag & drop).
4. Set your project name to get a subdomain like `shrutinilosey.vercel.app`.

## Domain (optional)
- Later, purchase `shrutinilosey.tech` (or any domain) and connect it in Vercel → **Settings → Domains**.

Enjoy!


---
## Vercel Troubleshooting
- If build fails with Node errors: set Node to 18 LTS (Project → Settings → General → Node.js Version).
- If Vercel asks for settings: framework = Next.js; Build Command = `npm run build`; Install = `npm i`.
- If drag-and-drop fails: try GitHub import method.
- If you see "Command not found next": ensure `next` is installed and `package.json` is present at repo root.
- For permission issues on Windows: unzip to a path without spaces and short path (e.g., `C:\sites\shruti`).
