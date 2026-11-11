import { personalInfo } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';
import { FiMail, FiGithub, FiLinkedin, FiGitlab, FiSend } from 'react-icons/fi';

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
          <div className="glow-line" />
        </div>

        <div className="contact-wrap">
          <div className="contact-card fade-in-up">
            <div className="contact-icon"><FiSend size={32} /></div>
            <p className="contact-text">{t('contact.text')}</p>
            <div className="contact-actions">
              <div className="contact-email-row">
                <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                  <FiMail size={16} /> {t('contact.emailMe')}
                </a>
              </div>
              <div className="contact-social-row">
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  <FiGithub size={16} /> GitHub
                </a>
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  <FiLinkedin size={16} /> LinkedIn
                </a>
                <a href={personalInfo.social.gitlab} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  <FiGitlab size={16} /> GitLab
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
