import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';
import { FiCalendar, FiMapPin, FiExternalLink, FiAward, FiStar } from 'react-icons/fi';

const companyColors = {
  'Batuta': 'timeline-dot-batuta',
  'Devecoop': 'timeline-dot-devecoop',
  'Kilimo': 'timeline-dot-kilimo',
  'Receptiviti Inc. (Canadá)': 'timeline-dot-receptiviti',
};

function ExpCard({ exp, index }) {
  const { lang } = useI18n();
  const role = lang === 'en' && exp.roleEn ? exp.roleEn : exp.role;
  const period = lang === 'en' && exp.periodEn ? exp.periodEn : exp.period;
  const description = lang === 'en' && exp.descriptionEn ? exp.descriptionEn : exp.description;
  const highlights = lang === 'en' && exp.highlightsEn ? exp.highlightsEn : exp.highlights;

  return (
    <div className="timeline-card">
      <div className="timeline-header">
        <div>
          <div className="timeline-role">{role}</div>
          <div className="timeline-company">
            {exp.companyUrl ? (
              <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="timeline-company-link">
                {exp.company} <FiExternalLink size={12} />
              </a>
            ) : (
              exp.company
            )}
            {exp.isOwn && (
              <span className="timeline-own-badge"><FiAward size={10} /> Cooperativa propia</span>
            )}
          </div>
        </div>
      </div>
      <div className="timeline-meta">
        <span><FiCalendar size={14} /> {period}</span>
        <span><FiMapPin size={14} /> {exp.location}</span>
      </div>
      <p className="timeline-desc">{description}</p>
      <ul className="timeline-highlights">
        {highlights.map((h, j) => (
          <li key={j}>{h}</li>
        ))}
      </ul>
      <div className="timeline-tech">
        {exp.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const { t, lang } = useI18n();
  const current = experience.find((e) => e.current);
  const past = experience.filter((e) => !e.current);

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle">{t('experience.subtitle')}</p>
          <div className="glow-line" />
        </motion.div>

        {current && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="current-role"
          >
            <div className="current-role-badge">
              <FiStar size={14} /> {lang === 'es' ? 'Rol Actual' : 'Current Role'}
            </div>
            <ExpCard exp={current} />
          </motion.div>
        )}

        <div className="timeline" style={{ marginTop: current ? '3rem' : 0 }}>
          <div className="timeline-line" />

          {past.map((exp, i) => (
            <motion.div
              key={exp.company + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-spacer" />
              <div className={`timeline-dot ${companyColors[exp.company] || 'timeline-dot-batuta'}`} />
              <div className="timeline-content">
                <ExpCard exp={exp} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
