import { useEffect, useRef, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { I18nProvider, useI18n } from './context/I18nContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));

const SITE_URL = 'https://fedeg.github.io';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Federico Gonzalez',
  givenName: 'Federico',
  familyName: 'Gonzalez',
  jobTitle: ['Senior Full-Stack Developer', 'DevOps Engineer'],
  description: 'Senior Full-Stack Developer & DevOps Engineer con más de 10 años de experiencia.',
  url: SITE_URL,
  sameAs: [
    'https://github.com/Fedeg',
    'https://gitlab.com/FedeG/',
    'https://www.linkedin.com/in/fedeg1/',
  ],
  email: 'federico.gonzalez@devecoop.com',
  knowsAbout: ['Python', 'Django', 'React', 'Node.js', 'AWS', 'Docker', 'Terraform', 'DevOps'],
  alumniOf: 'Universidad Tecnológica Nacional',
  nationality: { '@type': 'Country', name: 'Argentina' },
};

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function HtmlLangSetter() {
  const { lang } = useI18n();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

function CanonicalUrl({ path }) {
  return (
    <link rel="canonical" href={`${SITE_URL}${path}`} />
  );
}

function AppContent() {
  const location = useLocation();
  const { lang } = useI18n();
  const mainRef = useRef(null);

  return (
    <>
      <Helmet>
        <html lang="es" />
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      </Helmet>
      <HtmlLangSetter />
      <ScrollToTop />
      <CanonicalUrl path={location.pathname === '/' ? '' : location.pathname} />
      <a href="#main-content" className="skip-link">
        {lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>
      <Navbar />
      <main id="main-content" ref={mainRef}>
      <Suspense fallback={<div className="page-loading" aria-label={lang === 'es' ? 'Cargando...' : 'Loading...'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', color: 'var(--text-muted)' }}>{lang === 'es' ? 'Cargando...' : 'Loading...'}</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </Suspense>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AppContent />
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
