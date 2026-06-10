import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { I18nProvider, useI18n } from './context/I18nContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';

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
    if (!hash) {
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

  return (
    <>
      <Helmet>
        <html lang="es" />
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      </Helmet>
      <HtmlLangSetter />
      <ScrollToTop />
      <CanonicalUrl path={location.pathname === '/' ? '' : location.pathname} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
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
