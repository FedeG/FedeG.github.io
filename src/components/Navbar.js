import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiGitlab, FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import { useI18n } from '../context/I18nContext';

const navLinks = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/#experience', labelKey: 'nav.experience' },
  { href: '/#skills', labelKey: 'nav.skills' },
  { href: '/projects', labelKey: 'nav.projects' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { t, lang, switchLang } = useI18n();
  const mobileRef = useRef(null);

  // Scroll handler: set active section based on scroll position
  useEffect(() => {
    const SECTION_TOP_OFFSET = 120; // px from top to consider a section "active"
    const sectionIds = ['experience', 'skills'];
    let requestId;

    function updateActiveSection() {
      const scrollY = window.scrollY;

      // Scroll to top? -> home
      if (scrollY < SECTION_TOP_OFFSET) {
        setActiveSection('home');
        requestId = requestAnimationFrame(updateActiveSection);
        return;
      }

      // Check each section from bottom to top (last one wins)
      let found = 'home';
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Section is "active" when its top is at or above the offset
        if (rect.top <= SECTION_TOP_OFFSET) {
          found = id;
        }
      });
      setActiveSection(found);
      requestId = requestAnimationFrame(updateActiveSection);
    }

    // Wait a tick so lazy-loaded DOM is ready before starting
    const startTimer = setTimeout(() => {
      requestId = requestAnimationFrame(updateActiveSection);
    }, 100);

    return () => {
      clearTimeout(startTimer);
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      return;
    }
    if (e.key === 'Tab' && mobileRef.current && isOpen) {
      const focusable = mobileRef.current.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const handleNavClick = (e, href) => {
    if (href === '/' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const themeLabel = theme === 'dark'
    ? (lang === 'es' ? 'Activar modo claro' : 'Switch to light mode')
    : (lang === 'es' ? 'Activar modo oscuro' : 'Switch to dark mode');
  const langLabel = lang === 'es' ? 'Switch to English' : 'Cambiar a Español';

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label={lang === 'es' ? 'Navegación principal' : 'Main navigation'}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" aria-label="Ir al inicio">
            {'<FG />'}
          </Link>

          <div className="navbar-links">
            {navLinks.map((link) => {
              const isActive = link.href === '/'
                ? location.pathname === '/' && activeSection === 'home'
                : link.href.startsWith('/#')
                  ? location.pathname === '/' && activeSection === link.href.slice(2)
                  : location.pathname === link.href;
              return (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={isActive ? 'active' : ''}
              >
                {t(link.labelKey)}
              </Link>
              );
            })}
            <div className="navbar-social">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={18} /></a>
              <a href={personalInfo.social.gitlab} target="_blank" rel="noopener noreferrer" aria-label="GitLab"><FiGitlab size={18} /></a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
            </div>
            <div className="navbar-actions">
              <button onClick={toggleTheme} className="theme-toggle" aria-label={themeLabel} title={themeLabel}>
                {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
              </button>
              <button onClick={() => switchLang(lang === 'es' ? 'en' : 'es')} className="lang-toggle" aria-label={langLabel} title={langLabel}>
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? (lang === 'es' ? 'Cerrar menú' : 'Close menu') : (lang === 'es' ? 'Abrir menú' : 'Open menu')}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} ref={mobileRef}>
        {navLinks.map((link) => {
          const isActive = link.href === '/'
            ? location.pathname === '/' && activeSection === 'home'
            : link.href.startsWith('/#')
              ? location.pathname === '/' && activeSection === link.href.slice(2)
              : location.pathname === link.href;
          return (
          <Link
            key={link.href}
            to={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={isActive ? 'active' : ''}
          >
            {t(link.labelKey)}
          </Link>
          );
        })}
        <div style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem' }}>
          <button onClick={toggleTheme} className="theme-toggle" aria-label={themeLabel}>
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button onClick={() => switchLang(lang === 'es' ? 'en' : 'es')} className="lang-toggle" aria-label={langLabel}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
        <div className="mobile-social">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={18} /></a>
          <a href={personalInfo.social.gitlab} target="_blank" rel="noopener noreferrer" aria-label="GitLab"><FiGitlab size={18} /></a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
        </div>
      </div>
    </header>
  );
}
