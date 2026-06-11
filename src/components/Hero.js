import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';
import { useTypewriter } from '../hooks/useTypewriter';
import { FiArrowDown, FiGithub, FiStar, FiUsers } from 'react-icons/fi';

export default function Hero() {
  const { t, lang } = useI18n();
  const name = lang === 'es' ? personalInfo.name : personalInfo.nameEn;
  const role = lang === 'es' ? personalInfo.role : personalInfo.roleEn;
  const tagline = lang === 'es' ? personalInfo.taglines[0] : personalInfo.taglinesEn[0];

  return (
    <section className="hero" aria-label={lang === 'es' ? 'Introducción' : 'Introduction'}>
      <div className="hero-bg-gradient" aria-hidden="true" />
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-left"
        >
          <div className="hero-badge" aria-live="polite">
            <span className="hero-badge-dot" aria-hidden="true" />
            {t('hero.badge')}
          </div>

          <h1 className="hero-title">
            {t('hero.greeting')}{' '}
            <span className="hero-title-highlight">{name}</span>
          </h1>

          <p className="hero-subtitle">{role}</p>

          <p className="hero-tagline">
            <TypewriterText text={tagline} />
          </p>

          <nav className="hero-actions" aria-label={lang === 'es' ? 'Acciones principales' : 'Main actions'}>
            <a href="/#experience" className="btn btn-primary" aria-label={t('hero.viewExperience')}>
              {t('hero.viewExperience')}
            </a>
            <a href="/projects" className="btn btn-secondary" aria-label={t('hero.exploreProjects')}>
              {t('hero.exploreProjects')}
            </a>
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-right"
        >
          <div className="hero-avatar" aria-hidden="true">
            <picture>
              <source srcSet="/profile.webp" type="image/webp" />
              <source srcSet="/profile.jpg" type="image/jpeg" />
              <img src="/profile.jpg" alt="Federico Gonzalez" className="hero-avatar-img" loading="eager" fetchpriority="high" width="220" height="220" decoding="async" />
            </picture>
          </div>

          <div className="hero-stats" aria-label={lang === 'es' ? 'Estadísticas de GitHub' : 'GitHub statistics'}>
            <div className="hero-stat">
              <span className="hero-stat-value hero-stat-icon">
                <FiGithub size={18} aria-hidden="true" /> {personalInfo.githubStats.repos}
              </span>
              <span className="hero-stat-label">{t('hero.repos')}</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value hero-stat-icon">
                <FiUsers size={18} aria-hidden="true" /> {personalInfo.githubStats.followers}
              </span>
              <span className="hero-stat-label">{t('hero.followers')}</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value hero-stat-icon">
                <FiStar size={18} aria-hidden="true" /> {(personalInfo.githubStats.stars / 1000).toFixed(1)}k
              </span>
              <span className="hero-stat-label">{t('hero.stars')}</span>
            </div>
          </div>

          <div className="hero-orgs" aria-label={lang === 'es' ? 'Organizaciones' : 'Organizations'}>
            {personalInfo.githubStats.organizations.map((org) => (
              <a key={org.name} href={org.url} target="_blank" rel="noopener noreferrer" className="hero-org-badge" title={org.name} aria-label={`${org.name}${t('hero.orgOn')}`}>
                <img src={`https://github.com/${org.name}.png?s=36`} alt={`${org.name} logo`} className="hero-org-avatar" loading="lazy" width="18" height="18" />
                <span>{org.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hero-scroll"
        aria-hidden="true"
      >
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  );
}

function TypewriterText({ text }) {
  const { displayed, done } = useTypewriter(text, { speed: 35, delay: 800 });
  return (
    <>
      {displayed}<span className={`typewriter-cursor ${done ? 'blink' : ''}`}>|</span>
    </>
  );
}
