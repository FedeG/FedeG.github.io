# new.md — Auditoría y plan de mejora del portfolio + CV

Qué es este documento: revisé a fondo la guía (`linkedin.md`), tu CV (`cv.md`) y el sitio del portfolio (React, `src/`). Acá están **todos** los puntos a cambiar, sacar o mejorar que encontré, organizados en etapas que voy ejecutando en orden. Cada etapa termina en un commit. No hay push de nada: vos revisás el estado final y mandás lo que quieras.

Criterio usado (de la guía): CV/portafolio como **documento de ventas ejecutivo** — impacto y negocio por sobre tareas, títulos estándar de mercado global, keywords visibles en los primeros 6 segundos de escaneo, cero fraseo commodity ("apasionado por la tecnología", "disponible para oportunidades"), y todo dato verificable (links, nombres, métricas).

---

## Resumen del diagnóstico

| Área | Problema principal | Acción |
|------|--------------------|--------|
| `cv.md` | Bullets de tareas sin impacto, resumen que no muestra escala, orden cronológico roto, sin versión en inglés | Reescritura completa + `cv-en.md` |
| Hero | Rol ES sin "Senior", sin stack visible, badge genérico | Reposicionar + keywords de stack |
| About | Bio commodity, ubicación sin ciudad | Bio ejecutiva con escala y logros |
| Experience | Highlights de tareas, títulos débiles, 3 entradas de bajo valor | Reformular + podar |
| Skills | **Bug i18n** (títulos solo en español), sin categoría IA (el CV la tiene), sin TypeScript/SQL/Redis | Fix + categoría "IA y Automatización" |
| Projects | Falta "Cuando Jugamos", descripción desalineada con el CV, workshops duplicados | Agregar + alinear + deduplicar |
| Comunidad | Faltan charlas y conferencias (PyCon, FLISoL) | Agregar card de talks |
| Nav/Contact | Contacto no navegable desde el menú | Anchor + link en nav |
| SEO/JSON-LD | `knowsAbout` y keywords incompletos | Completar |
| Consistencia | Email distinto entre CV y portfolio, datos sin verificar | Pendientes (abajo) |

---

## Etapas de ejecución

- [x] **Etapa 1 — Plan**: este documento (`new.md`) + tracking. Commit: `docs: add portfolio & CV improvement plan (new.md)`
- [x] **Etapa 2 — CV**: reescritura de `cv.md` (resumen ejecutivo, bullets de impacto, orden cronológico estricto, títulos estándar, typo "Sorftware", links verificables) + nuevo `cv-en.md` en inglés. Commit: `docs(cv): impact-oriented rewrite and English version`
- [x] **Etapa 3 — Hero/About/SEO**: rol ES con Senior, línea de stack en el hero, badge "roles remotos", bio ejecutiva ES/EN, ubicación "Buenos Aires, Argentina", JSON-LD y meta keywords. Commit: `feat(hero): senior positioning, stack keywords, executive bio`
- [x] **Etapa 4 — Experience**: highlights orientados a impacto ES/EN, títulos estándar, sacar las 3 entradas de bajo valor. Commit: `feat(experience): impact highlights, standard titles, prune low-signal entries`
- [x] **Etapa 5 — Skills + tests**: categorías bilingües (fix bug), categoría "IA y Automatización", TypeScript/SQL/Redis, fix de iconos, tests de integridad de datos. Commit: `fix(skills): bilingual categories, AI section, icon coverage and data tests`
- [x] **Etapa 6 — Projects/Comunidad**: agregar "Cuando Jugamos", alinear al.horno.con.papa con el CV, workshops fuera de destacados, card de charlas. Commit: `feat(projects): add Cuando Jugamos, talks card, dedupe workshops`
- [x] **Etapa 7 — Nav/Contacto**: anchor de contacto + link en navbar. Commit: `feat(nav): contact anchor and nav link`
- [x] **Etapa 8 — Verificación final**: build + tests + actualización de este documento. Commit: `docs: final verification status`

---

## Detalle: cv.md

1. **Resumen profesional genérico**: no responde las 3 preguntas de la guía (¿quién sos?, ¿especialidad principal?, ¿mayor escala?). "Socio activo en Devecoop" como línea suelta no agrega; la escala (WEF, telemetría de alto volumen) no aparece. → Reescribir como resumen ejecutivo.
2. **Bullets orientados a tareas, no a impacto**: "Desarrollo full-stack de...", "Implementación de motor de Asset Discovery..." describen qué hiciste, no qué movió. La fórmula de la guía es verbo de acción + tecnología + resultado/métrica. → Reescribir todos con orientación a impacto (sin inventar números — ver "Pendientes").
3. **Orden cronológico roto**: "Instructor & Capacitador Corporativo (Sep 2018 – Mar 2020)" aparece después de Deportify y Receptiviti. → Reordenar estrictamente inverso.
4. **Sin versión en inglés** (regla 2 de la guía: inglés corporativo perfecto para USA/Europa). → Crear `cv-en.md` espejo, manteniendo `cv.md` en español para el mercado local.
5. **Typo**: "Sorftware Freedom Day" → "Software Freedom Day".
6. **Detalles menores**: "ollama" en minúscula → "Ollama"; homogeneizar títulos de puestos.
6b. **Proyectos sin links**: Eventol, Al Horno con Papa y Cuando Jugamos existen online — un recruiter técnico quiere clickear y verificar (proof of work). → Agregar URLs.
7. **Lo que ya cumple con la guía** (no tocar): sin foto, sin fecha de nacimiento ni estado civil ✓; formato mes/año ✓; stack por categorías ✓; títulos de rol mayormente estándar ✓; sección de IA como diferencial ✓.

## Detalle: Portfolio (sitio React)

### Hero
1. Rol ES "Desarrollador Full-Stack y DevOps" sin "Senior" (el EN sí lo tiene). → Agregar.
2. Sin stack técnico visible: el recluter escanea 6 segundos; el rol + tagline no dicen "Python · Django · React · Node.js · AWS · Terraform · Kafka". → Agregar línea de stack bajo el tagline.
3. Badge "Disponible para oportunidades" es frase commodity según la guía. → "Disponible para roles remotos" (más específico, mantiene la señal para inbound).

### About
4. Bio commodity ("proactivo, creativo... apasionado por las nuevas tecnologías"). → Reescribir como resumen ejecutivo con especialidad, escala y logros verificables (WEF, UTN, Eventol, Packt, PyCon).
5. Ubicación "Argentina" sola. → "Buenos Aires, Argentina" (ciudad principal para filtros geográficos, igual que el CV).

### Experience (datos)
6. Título EN de Devecoop "Partner & Developer" débil. → "Partner & Senior Full-Stack & DevOps Engineer". Batuta ES "Desarrollador Full Stack" → "Ingeniero Full-Stack Senior".
7. Highlights de tareas sin impacto/métricas. → Reformular con orientación a resultado (sin inventar números).
8. **Entradas de bajo valor para sacar** (no están en tu CV): "Proyecto Mobile App" (2017-2019), "Mobile Mall App" (Jul 2017) — genéricas, sin empresa ni link; "Gantiem (Devecoop)" (2016-2017) — duplicado bajo el paraguas de Devecoop, ya está como proyecto destacado. → Sacar las 3; el hito de Gantiem queda como highlight dentro de Devecoop.
9. Tech stacks incompletos vs CV: Batuta sin Bash/PowerShell; Kilimo sin Redis/ElastiCache; Devecoop sin LangChain/Langfuse/Terraform. → Completar.

### Skills
10. **Bug i18n**: las categorías ("Lenguajes de Programación", etc.) no tienen versión en inglés — en modo EN el sitio muestra títulos en español. → Estructura bilingüe.
11. **Sin categoría de IA**: tu CV tiene toda una sección de IA (RAG con Qdrant/pgvector, Langfuse, n8n, Ollama) y el portfolio no la muestra. En 2026 es el diferencial más buscado. → Agregar "IA y Automatización / AI & Automation".
12. Desalineado con el CV: Java sobra (no está en tu CV), faltan TypeScript, SQL, Redis, CI/CD. Docker duplicado en dos categorías. → Alinear.
13. **Bugs de iconos**: `iconMap` tiene claves que no coinciden con los items reales ("React.js" vs "React", "SASS/LESS" vs "SASS" y "LESS" separados) → React y SASS muestran icono genérico. → Corregir claves y agregar iconos nuevos (TypeScript, Redis, SQL).

### Projects
14. Falta **"Cuando Jugamos"** (SaaS PWA, ranking ELO) que sí está en tu CV como destacado. → Agregar.
15. Descripción de **al.horno.con.papa** desalineada con el CV ("generación de imágenes por IA" vs "pipeline de IA local para scraping y estructuración de recetas, mobile-first, SEO"). → Alinear con el CV (que es más específico e impresionante).
16. **Workshops de React duplicados**: aparecen como proyecto destacado Y como card "Capacitaciones Corporativas" en Comunidad. → Quitar de destacados del home (queda en /projects y en la sección comunidad).

### Comunidad / OpenSource
17. Faltan las **charlas y conferencias** (PyCon Argentina, FLISoL, Software Freedom Day — el CV las lista). → Agregar card "Charlas y Conferencias".

### Nav / Contacto
18. La sección de Contacto no tiene `id`, no se puede linkear. → Agregar anchor + link "Contacto" en el navbar + tracking de sección activa.
19. `aria-label` del logo ("Ir al inicio") hardcodeado en español también en modo EN. → Bilingüe.

### SEO / metadatos
20. `knowsAbout` del JSON-LD incompleto (falta Node.js, TypeScript, Kafka, PostgreSQL, CI/CD). → Completar.
21. Meta keywords/description sin "senior", terraform, kafka, typescript. → Completar en Home y public/index.html.

---

## Pendientes que solo vos podés resolver (no los inventé)

**Métricas para los bullets** (la fórmula de impacto de la guía las pide, pero no voy a fabricar números). Si me pasás estos datos, los integro:
- Batuta: volumen de telemetría (eventos/día o endpoints gestionados), mejora medible del pipeline Kafka.
- Kilimo: cantidad de sensores/campos/hectáreas o volumen de datos satelitales.
- Eventol: eventos gestionados por año (FLISoL mueve miles de asistentes).
- Devecoop: tamaño de equipos que mentoreaste, cantidad de clientes internacionales.
- Cualquier optimización con número (latencia, costo, tiempo ahorrado).

**Datos a verificar**:
- `githubStats.stars = 8500` (el hero muestra "8.5k stars") — verificá contra tu GitHub real.
- **Encryptr**: figura como "Creador" con 1,600+ estrellas. Encryptr es conocido como el password manager open source de SpiderOak; si tu repo es un fork o tu rol fue otro, ajustar el rol (mantenedor/contribuidor) para que un recruiter técnico no lo lea como sobreventa. Solo vos sabés la historia de ese repo.
- **Email distinto**: portfolio muestra `federico.gonzalez@devecoop.com`, el CV `federicogonzalez761@gmail.com`. Elegí cuál es el canal de contacto y unificá (queda sin cambiar en esta pasada).
- `linkedin.md` quedó sin trackear a propósito: es una guía de un tercero con promoción incluida; no la commiteo a tu repo público salvo que quieras.

---

## Fuera del código: acciones de LinkedIn/X que sugiere la guía

Con tus datos reales, templates listos para usar:

1. **Headline (220 chars)**: `Senior Full-Stack Developer & DevOps Engineer | Python, Django, React, Node.js, AWS, Terraform, Kafka | Distributed Systems & Cloud Infrastructure | Remote: LATAM → US/EU`
2. **About**: storytelling de autoridad (empezá por escala/especialidad, cerrá con sección "Core Technologies" con la lista explícita de herramientas).
3. **Open to Work**: solo "Recruiters only" (sin marco verde público).
4. **Ubicación**: "Buenos Aires, Argentina" (capital, entra en filtros de búsqueda remota LATAM).
5. **Perfil en inglés**: crear la versión secundaria en inglés desde "Añadir perfil en otro idioma".
6. **Skills**: cargar las 50 y pedir validaciones en las 3 principales (Python, React, AWS).
7. **X (bio de 160 chars)**: `Senior Full-Stack & DevOps Engineer (Python/AWS). Scaled high-volume telemetry pipelines. Co-founder @Eventol.` + link al portfolio en la bio.

---

## Checklist final

- [x] `cv.md` con resumen ejecutivo, bullets de impacto y orden cronológico
- [x] `cv-en.md` en inglés espejando el CV mejorado
- [x] Hero con rol Senior (ES/EN), stack visible y badge específico
- [x] About con bio ejecutiva y ubicación con ciudad
- [x] Experience con highlights de impacto, sin entradas de bajo valor
- [x] Skills bilingüe, con IA y Automatización, TypeScript/SQL/Redis, iconos correctos
- [x] Projects: Cuando Jugamos agregado, al.horno.con.papa alineado, workshops sin duplicar
- [x] Comunidad con charlas y conferencias
- [x] Contacto navegable desde el navbar
- [x] SEO/JSON-LD completos
- [x] `CI=true npm test` y `npm run build` pasando
