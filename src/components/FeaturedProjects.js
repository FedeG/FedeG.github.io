import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';

const catLabel = (cat, lang) => {
  const map = {
    'full-stack': { es: 'Full-Stack', en: 'Full-Stack' },
    'open-source': { es: 'Open Source', en: 'Open Source' },
    devops: { es: 'DevOps', en: 'DevOps' },
    iot: { es: 'IoT', en: 'IoT' },
    training: { es: 'Capacitación', en: 'Training' },
    enterprise: { es: 'Empresarial', en: 'Enterprise' },
  };
  return map[cat] ? map[cat][lang] : cat;
};

export default function FeaturedProjects() {
  const { t, lang } = useI18n();
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="featured-header">
            <div>
              <h2 className="section-title">{t('featured.title')}</h2>
              <p className="section-subtitle">{t('featured.subtitle')}</p>
            </div>
            <Link to="/projects" className="featured-view-all">
              {t('featured.viewAll')} <FiArrowRight size={16} />
            </Link>
          </div>
          <div className="glow-line" />
        </motion.div>

        <div className="featured-grid">
          {featured.map((project, i) => {
            const title = lang === 'en' && project.titleEn ? project.titleEn : project.title;
            const desc = lang === 'en' && project.descriptionEn ? project.descriptionEn : project.description;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="project-card"
              >
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-desc">{desc}</p>
                <div className="project-card-tech">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-card-footer">
                  <div className="project-card-tags">
                    {project.category.map((cat) => (
                      <span key={cat} className="project-card-tag">{catLabel(cat, lang)}</span>
                    ))}
                  </div>
                  {project.links[0] && (
                    <a href={project.links[0].url} target="_blank" rel="noopener noreferrer" className="project-card-link">
                      <FiArrowRight size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="featured-mobile-link">
          <Link to="/projects" className="btn btn-secondary">
            {t('featured.viewAll')} <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
