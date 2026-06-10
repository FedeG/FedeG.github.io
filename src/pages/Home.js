import { Helmet } from 'react-helmet-async';
import { useI18n } from '../context/I18nContext';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import OpenSource from '../components/OpenSource';
import Contact from '../components/Contact';

const SITE_URL = 'https://fedeg.github.io';

export default function Home() {
  const { lang } = useI18n();
  const titleEs = 'Federico Gonzalez | Desarrollador Full-Stack y DevOps';
  const titleEn = 'Federico Gonzalez | Senior Full-Stack Developer & DevOps Engineer';
  const title = lang === 'es' ? titleEs : titleEn;
  const descEs = 'Portfolio profesional de Federico Gonzalez. Desarrollador Full-Stack y DevOps con más de 10 años de experiencia en Python, Django, React, Node.js, AWS y Docker.';
  const descEn = 'Professional portfolio of Federico Gonzalez. Senior Full-Stack Developer & DevOps Engineer with over 10 years of experience in Python, Django, React, Node.js, AWS and Docker.';
  const desc = lang === 'es' ? descEs : descEn;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={lang === 'es'
          ? 'Federico Gonzalez, desarrollador full-stack, devops, portfolio, python, django, react, argentina'
          : 'Federico Gonzalez, full-stack developer, devops engineer, portfolio, python, django, react, argentina'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:locale" content={lang === 'es' ? 'es_AR' : 'en_US'} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
      </Helmet>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <OpenSource />
      <Contact />
    </>
  );
}
