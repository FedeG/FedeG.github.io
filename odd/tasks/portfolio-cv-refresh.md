# Portfolio & CV refresh per linkedin.md guide

Objective: apply the presentation standards in `linkedin.md` (impact-oriented bullets, market-standard titles, recruiter-proof scannability) to `cv.md` and the React portfolio, in staged commits with no push (user reviews and pushes).
Branch: `portfolio-cv-refresh` (from `main`). Delivery: direct work-unit commits on that branch, no push. Test runner: `CI=true npm test` (Jest via react-scripts; repo has no tests yet — one data-integrity test is added with the skills stage), `npm run build` as the build gate.

## Specs

S1. User provided `linkedin.md` as the criteria guide: "arme un md que se llama linkedin.md que tiene una guia de lo que se usa ahora en cuento a presentacion de cv, coomo mostrar las cosas, ettc. Quiero que lo leas como contexto general y como guia". Its CV/LinkedIn rules (executive summary answering who/specialty/scale, impact bullets with metrics, market-standard role titles, keyword sourcing, no commodity phrasing, English for international applications) are the review standard.
S2. "repases mi porfolio" — full review of the React portfolio (src/, public/, SEO, JSON-LD) against that standard.
S3. "mi cv (cv.md)" — cv.md is in scope for the same standards.
S4. "armes un new.md con todos los puntos a cambiar, sacar o mejorar que encuentres" — new.md must enumerate every found change/remove/improve point and the execution stages.
S5. "te armes etapas y empieces a realizarlas una tras otro hasta poder dejar el porfolio lo mejor posible" — staged execution until the portfolio is as good as possible.
S6. "hace los commits pero no hagas push de nada, de eso me encargo yo despues de revisar el estado final" — commits yes, push no; user reviews the final state and pushes.
S7. No invented metrics or personal facts: numbers absent from cv.md/linkedin.md/user-provided data become "needs your data" items in new.md, never fabricated content.

## Tasks

| ID | Spec | Task | Route | Status | Commit |
|----|------|------|-------|--------|--------|
| T1 | S1-S4 | Write new.md: full audit (cv.md + portfolio) with all findings, stages, and pending-user-data list | inline | done | 7cfa025 |
| T2 | S3, S7 | Rework cv.md: executive summary, impact-oriented bullets, strict reverse-chronological order, standard titles, typo fixes, verifiable project links; add cv-en.md (English version) | inline | done | this commit |
| T3 | S1, S2 | Hero/About/SEO: senior ES role, stack keywords line, executive bio ES/EN, Buenos Aires location, badge wording, JSON-LD and meta keywords | inline | done | this commit |
| T4 | S1, S2 | Experience data: impact highlights ES/EN, standard titles, prune low-signal 2017 entries and duplicate Gantiem umbrella entry | inline | done | this commit |
| T5 | S1, S2 | Skills: bilingual categories (fix i18n bug), AI & Data category, TypeScript/SQL/Redis, iconMap key fixes; add data-integrity tests (RED observed before fix, GREEN in commit) | inline | done | this commit |
| T6 | S1, S2 | Projects/Community: add Cuando Jugamos, align al.horno.con.papa description with CV, dedupe React workshops from featured, add talks & conferences card | inline | pending | — |
| T7 | S2 | Nav/Contact: contact section anchor, nav link, active-section tracking, EN aria-label for logo | inline | pending | — |
| T8 | S5, S6 | Final verification: CI=true npm test + npm run build; update new.md statuses and this document; report with Risk line | inline | pending | — |

## Log

L1 (2026-11-11, verbatim user request): "arme un md que se llama linkedin.md que tiene una guia de lo que se usa ahora en cuento a presentacion de cv, coomo mostrar las cosas, ettc. Quiero que lo leas como contexto general y como guia y despues repases mi porfolio para poder mejorarlos con esas cosas. Los pasos a seguir son que revises a fondo tanto esa guia como mi porfolio y mi cv (cv.md) y puedas armar un new.md con todos los puntos a cambiar, sacar o mejorar que encuentres, te armes etapas y empieces a realizarlas una tras otro hasta poder dejar el porfolio lo mejor posible, hace los commits pero no hagas push de nada, de eso me encargo yo despues de revisar el estado final."
L2 (2026-11-11): Exploration complete. Read linkedin.md (196 lines), cv.md (119), all src components/pages/contexts/utils, public/index.html, sitemap.xml, robots.txt, deploy.yml, package.json. Findings enumerated in new.md. Note: `linkedin.md` stays untracked (third-party guide, not portfolio content) unless the user asks to commit it.
L3 (2026-11-11): Stage 5 RED→GREEN. `src/data/portfolio.test.js` written first: RED observed with 2 failing suites before the fix — skills had no `titleEn` (skills was an object keyed by language, so categories only existed in ES) and Batuta/Kilimo/Deportify/Receptiviti/Exo lacked `periodEn`. Fix: skills restructured as a bilingual array of `{title, titleEn, items}` including a new "IA y Automatización / AI & Automation" category; `periodEn` added to the five entries; Skills.js rewritten to consume the array with an expanded iconMap (SiTypescript, SiRedis, SiExpress, SiC, SiOllama, SiLangchain, SiN8N, FiDatabase, FiGitMerge, FiCpu, FiZap). GREEN: CI=true npm test → 6/6 passing.
