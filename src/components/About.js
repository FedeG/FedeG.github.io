import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';
import { FiMapPin, FiMail, FiAward, FiExternalLink } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';

const hobbyIcons = {
  cooking: <SiInstagram size={18} />,
  kickboxing: <FiAward size={18} />,
  events: <FiAward size={18} />,
  coop: <FiExternalLink size={18} />,
};

export default function About() {
  const { t, lang } = useI18n();

  return (
    <section className="section" aria-label={t('about.title')}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="glow-line" />
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text"
          >
            <p>{lang === 'en' ? personalInfo.bioEn : personalInfo.bio}</p>
            <div className="about-langs">
              {personalInfo.languages.map((lang) => (
                <span key={lang}>{lang}</span>
              ))}
            </div>

            <div className="hobbies-section">
              <h3 className="hobbies-title">{t('about.hobbies')}</h3>
              <div className="hobbies-grid">
                {personalInfo.hobbies.map((hobby) => {
                  const label = lang === 'en' && hobby.labelEn ? hobby.labelEn : hobby.label;
                  const detail = lang === 'en' && hobby.detailEn ? hobby.detailEn : hobby.detail;
                  return (
                  <div key={hobby.icon} className="hobby-card">
                    <span className="hobby-icon" aria-hidden="true">{hobbyIcons[hobby.icon] || <FiAward size={18} />}</span>
                    <div className="hobby-info">
                      <h4>{label}</h4>
                      {hobby.url ? (
                        <a href={hobby.url} target="_blank" rel="noopener noreferrer">
                          {detail} <FiExternalLink size={10} style={{ display: 'inline' }} aria-hidden="true" />
                        </a>
                      ) : detail ? (
                        <span>{detail}</span>
                      ) : null}
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-card"
          >
            <div className="about-card-item">
              <FiMapPin className="about-card-icon" size={18} aria-hidden="true" />
              <div>
                <p className="about-card-label">{t('about.location')}</p>
                <p className="about-card-value">{personalInfo.location}</p>
              </div>
            </div>
            <div className="about-card-item">
              <FiMail className="about-card-icon" size={18} aria-hidden="true" />
              <div>
                <p className="about-card-label">{t('about.email')}</p>
                <p className="about-card-value">{personalInfo.email}</p>
              </div>
            </div>
            <div className="about-card-item">
              <FiAward className="about-card-icon" size={18} aria-hidden="true" />
              <div>
                <p className="about-card-label">{t('about.role')}</p>
                <p className="about-card-value">{lang === 'en' ? personalInfo.roleEn : personalInfo.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
