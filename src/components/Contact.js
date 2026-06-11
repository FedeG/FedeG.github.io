import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';
import { FiMail, FiGithub, FiLinkedin, FiGitlab, FiSend } from 'react-icons/fi';

export default function Contact() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
          <div className="glow-line" />
        </motion.div>

        <div className="contact-wrap">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            className="contact-card"
          >
            <div className="contact-icon"><FiSend size={32} /></div>
            <p className="contact-text">{t('contact.text')}</p>
            <div className="contact-actions">
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                <FiMail size={16} /> {t('contact.emailMe')}
              </a>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FiGithub size={16} /> GitHub
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FiLinkedin size={16} /> LinkedIn
              </a>
              <a href={personalInfo.social.gitlab} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FiGitlab size={16} /> GitLab
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
