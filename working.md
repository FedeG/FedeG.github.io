# Working.md - Portfolio Website

## Goal
Rebuild Federico Gonzalez's portfolio from old static HTML/jQuery to a modern React + CRA + React Router + Framer Motion + plain CSS site with dark/light theme, i18n (ES/EN), company links, more projects, images, and a striking hero.

## Stack
- React 18 + CRA (react-scripts 5.0.1) + React Router DOM v7 + Framer Motion + react-icons + lucide-react + react-helmet-async + plain CSS (no Tailwind, no TypeScript, no Next.js)
- Node 22 via nvm (`source ~/.nvm/nvm.sh && nvm use 22`)
- Package manager: npm
- Hosting: GitHub Pages with SPA fallback (`public/404.html`)

## State (2026-06-11)

### Done (cleanup)
- Removed ~32k lines of old Ceevee template code: `css/`, `js/`, `images/`, `index.html`, `indexmin.html`, `demo.html`, `Gruntfile.js`, `Ceevee-README.md`, `.jshintrc`, root `favicon.png`
- Updated `README.md` to reflect React portfolio
- Fixed `public/index.html` Twitter Card image from nonexistent `og-image.png` → `profile.jpg`
- Updated deploy.yml: branch `source_origin` → `main`
- Build verified: compiled successfully after cleanup

## State (2026-06-10)

### Done
- Site builds successfully (`npx react-scripts build` → compiled successfully)
- Data file `src/data/portfolio.js` with experience in Spanish (Batuta, Devecoop, Kilimo, Deportify, Receptiviti, Gantiem, Exo, Mobile Mall)
- Animation glitch fix: no `AnimatePresence mode="popLayout"`, no scale transforms, `backface-visibility: hidden`, `will-change`, specific CSS transitions
- All source files exist and are functional
- `src/context/ThemeContext.js` — dark/light toggle with CSS variables, persists to localStorage, respects `prefers-color-scheme`
- `src/context/I18nContext.js` — ES/EN translation system covering all UI strings
- `src/data/portfolio.js` updated with: company URLs (batuta.com, devecoop.com, kilimo.com, receptiviti.com), 6 new projects (Encryptr, al.horno.con.papa, anush_cuidarte_posts, eventol.org landing, TDC pancreas artificial, UTN ML), hobbies (cocina, kick boxing, eventos, cooperativista), GitHub stats (58 repos, 41 followers, 8.5k stars, orgs), Devecoop as own cooperative, English translations for all entries
- `src/index.css` — `[data-theme="light"]` CSS variables for light mode, hero redesign styles (avatar, stats, animated gradient background), hobbies grid, company links, theme/lang toggle buttons, responsive hero layout
- Components updated with i18n and new features: Navbar (theme/lang toggles), Hero (avatar + stats + org badges + animated bg), About (hobbies grid), Experience (company links + Devecoop badge), all components consume `useI18n()`
- `App.js` wrapped with `ThemeProvider` + `I18nProvider`
- Build verified: compiled successfully

### Todo / Next Steps
- Add actual avatar image (currently shows "FG" placeholder)
- Add project images/icons for each project card
- Add `react-snap` pre-rendering if needed
- Add more animations / micro-interactions
- Test on mobile devices
- Deploy to GitHub Pages

## Next Steps (immediate)
1. Create `src/context/ThemeContext.js`
2. Create `src/context/I18nContext.js`
3. Update `portfolio.js` with new data
4. Add light theme CSS vars to `index.css`
5. Update Navbar with toggle buttons
6. Redesign Hero
7. Update remaining components
8. Wire contexts in App.js
9. Build and verify

## Key Decisions
- Plain CSS over Tailwind: matches user's existing projects (al.horno.con.papa)
- No TypeScript: user explicitly wants JS only
- react-helmet-async for SEO meta tags
- SPA fallback via 404.html redirect script for GitHub Pages

## Critical Commands
```bash
source ~/.nvm/nvm.sh && nvm use 22
npm start   # dev server
npx react-scripts build  # production build
```

## Relevant Files
| File | Purpose |
|------|---------|
| `src/index.js` | Entry point, BrowserRouter + HelmetProvider |
| `src/App.js` | Route definitions, context providers |
| `src/index.css` | All global styles (cyber theme + light vars) |
| `src/data/portfolio.js` | All content data |
| `src/components/*.js` | UI components |
| `src/pages/*.js` | Page-level components |
| `src/context/*.js` | Theme + i18n providers (to create) |
| `public/index.html` | HTML template with SPA redirect |
| `.github/workflows/deploy.yml` | GitHub Actions deploy |
