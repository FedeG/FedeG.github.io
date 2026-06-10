import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { projects } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';
import { FiExternalLink, FiFolder } from 'react-icons/fi';

const SITE_URL = 'https://fedeg.github.io';

const filters = [
  { key: 'all', labelEs: 'Todos', labelEn: 'All' },
  { key: 'full-stack', labelEs: 'Full-Stack', labelEn: 'Full-Stack' },
  { key: 'devops', labelEs: 'DevOps', labelEn: 'DevOps' },
  { key: 'open-source', labelEs: 'Open Source', labelEn: 'Open Source' },
  { key: 'iot', labelEs: 'IoT', labelEn: 'IoT' },
  { key: 'training', labelEs: 'Capacitación', labelEn: 'Training' },
  { key: 'enterprise', labelEs: 'Empresarial', labelEn: 'Enterprise' },
];

const catLabel = (cat, lang) => {
  const map = { 'full-stack': { es: 'Full-Stack', en: 'Full-Stack' }, 'open-source': { es: 'Open Source', en: 'Open Source' }, devops: { es: 'DevOps', en: 'DevOps' }, iot: { es: 'IoT', en: 'IoT' }, training: { es: 'Capacitación', en: 'Training' }, enterprise: { es: 'Empresarial', en: 'Enterprise' } };
  return map[cat] ? map[cat][lang] : cat;
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t, lang } = useI18n();

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  const title = lang === 'es' ? 'Proyectos | Federico Gonzalez' : 'Projects | Federico Gonzalez';
  const desc = lang === 'es'
    ? 'Explorá los proyectos destacados de Federico Gonzalez: contribuciones open-source, plataformas empresariales, IoT y capacitaciones React.'
    : 'Explore featured projects by Federico Gonzalez: open-source contributions, enterprise platforms, IoT and React workshops.';

  return (
    <main className="projects-page">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={lang === 'es'
          ? 'proyectos federico gonzalez, open source, devops, IoT, react workshops, eventol, encryptr, gantiem'
          : 'federico gonzalez projects, open source, devops, IoT, react workshops, eventol, encryptr, gantiem'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={`${SITE_URL}/projects`} />
        <meta property="og:locale" content={lang === 'es' ? 'es_AR' : 'en_US'} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
      </Helmet>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">{t('projects.title')}</h1>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
          <div className="glow-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="projects-filters"
          role="group"
          aria-label={lang === 'es' ? 'Filtrar proyectos' : 'Filter projects'}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              aria-pressed={activeFilter === f.key}
            >
              {lang === 'es' ? f.labelEs : f.labelEn}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid" role="list" aria-label={lang === 'es' ? 'Lista de proyectos' : 'Projects list'}>
          <AnimatePresence>
          {filtered.map((project, i) => {
            const title = lang === 'en' && project.titleEn ? project.titleEn : project.title;
            const role = lang === 'en' && project.roleEn ? project.roleEn : project.role;
            const desc = lang === 'en' && project.descriptionEn ? project.descriptionEn : project.description;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="project-detail-card"
                role="listitem"
              >
                <div className="project-detail-header">
                  <FiFolder className="project-detail-header-icon" size={24} aria-hidden="true" />
                  <div className="project-detail-header-links">
                    {project.links.slice(0, 2).map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.label}
                        aria-label={`${title} - ${link.label}`}
                      >
                        <FiExternalLink size={16} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>

                <h3 className="project-detail-title">{title}</h3>
                <p className="project-detail-role">{role}</p>
                <p className="project-detail-desc">{desc}</p>

                <div className="project-detail-cats">
                  {project.category.map((cat) => (
                    <span key={cat} className="project-card-tag">{catLabel(cat, lang)}</span>
                  ))}
                </div>

                <div className="project-detail-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
