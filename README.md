# Dhananjay Lokhande — UX Portfolio

Built with **Next.js 15**, **Tailwind CSS v4**, **TypeScript**, **Framer Motion**.

## Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Fonts:** Playfair Display (display) + Roboto (body)
- **Hosting:** Vercel (auto-deploy from GitHub)

---

## Local Development

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## File Structure

```
public/
├── images/
│   └── atlas-hero.png          ← Atlas dashboard screenshot
├── case-studies/
│   └── atlas-case-study.pdf    ← Atlas case study PDF
└── resume/
    └── resume.pdf              ← ⚠️ ADD YOUR RESUME HERE

app/
├── page.tsx                    ← Homepage
└── case-studies/
    └── atlas/
        └── page.tsx            ← Atlas case study page

components/
├── Navbar.tsx
├── Footer.tsx
├── Cursor.tsx
├── AnimateIn.tsx               ← Framer Motion scroll-reveal
└── PDFViewer.tsx               ← Inline PDF embed
```

---

## Adding Your Resume

1. Name your resume file `resume.pdf`
2. Drop it into `/public/resume/`
3. The navbar "Resume ↗" button links to it automatically

---

## Adding a New Case Study

1. Create `/app/case-studies/your-project/page.tsx` (copy Atlas as template)
2. Add hero image to `/public/images/your-project-hero.png`
3. Add PDF to `/public/case-studies/your-project.pdf`
4. Add a card in `app/page.tsx` inside the `cs-stack` section

---

## Deploy to Vercel

1. Push this repo to GitHub (see commands below)
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Every push to `main` auto-deploys ✓

---

## Push to GitHub

```bash
# First time
git init
git add .
git commit -m "Initial portfolio — Next.js 15 + Tailwind + Framer Motion"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/UX---Portfolio.git
git push -u origin main

# Every subsequent update
git add .
git commit -m "Your message"
git push
```

---

## Customisation

| What | Where |
|------|-------|
| Your name / bio | `app/page.tsx` → Hero section |
| Experience | `app/page.tsx` → `experience` array |
| Contact links | `app/page.tsx` → `contacts` array |
| Atlas content | `app/case-studies/atlas/page.tsx` |
| Colors | `app/globals.css` → `@theme` block |
| Fonts | `app/globals.css` → Google Fonts import |
