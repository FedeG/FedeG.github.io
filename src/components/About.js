import { personalInfo } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';
import { FiMapPin, FiMail, FiAward, FiExternalLink, FiBook } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { GiBoxingGlove } from 'react-icons/gi';

const hobbyIcons = {
  events: <FiAward size={18} />,
  kickboxing: <GiBoxingGlove size={18} />,
  cooking: <SiInstagram size={18} />,
  coop: <FiExternalLink size={18} />,
};

export default function About() {
  const { t, lang } = useI18n();

  return (
    <section className="section" aria-label={t('about.title')}>
      <div className="container">
        <div>
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="glow-line" />
        </div>

        <div className="about-grid">
          <div
            className="about-text fade-in-up"
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
          </div>

          <div
            className="about-card fade-in-up"
            style={{ animationDelay: '80ms' }}
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
            <div className="about-card-item">
              <FiBook className="about-card-icon" size={18} aria-hidden="true" />
              <div>
                <p className="about-card-label">{t('about.education')}</p>
                <p className="about-card-value">{lang === 'en' ? 'Information Systems Engineer - UTN' : 'Ing. en Sistemas de Información - UTN'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
