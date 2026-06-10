import { createContext, useContext, useState } from 'react';

const I18nContext = createContext();

const translations = {
  es: {
    nav: { home: 'Inicio', experience: 'Experiencia', skills: 'Habilidades', projects: 'Proyectos' },
    hero: {
      badge: 'Disponible para oportunidades',
      greeting: 'Hola, soy',
      viewExperience: 'Ver Experiencia',
      exploreProjects: 'Explorar Proyectos',
    },
    about: { title: 'Sobre Mí', location: 'Ubicación', email: 'Email', role: 'Rol', hobbies: 'Intereses' },
    experience: { title: 'Experiencia', subtitle: 'Una década construyendo software en startups, cooperativas y empresas.' },
    skills: { title: 'Habilidades y Tecnologías', subtitle: 'Tecnologías con las que trabajo diariamente, organizadas por dominio.' },
    featured: {
      title: 'Proyectos Destacados',
      subtitle: 'Proyectos clave que muestran mi rango en full-stack, DevOps y open-source.',
      viewAll: 'Ver Todos',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Una selección de contribuciones open-source, plataformas profesionales y capacitaciones.',
      all: 'Todos',
    },
    opensource: { title: 'Comunidad y Open Source', subtitle: 'Más allá del código – contribuciones a la comunidad.' },
    contact: {
      title: 'Contacto',
      subtitle: '¿Buscas un ingeniero full-stack senior con habilidades DevOps? Hablemos.',
      text: 'Siempre estoy abierto a oportunidades interesantes, colaboraciones o una charla sobre tecnología.',
      emailMe: 'Enviar Email',
      orFindMe: 'O encuéntrame en',
    },
    footer: { builtWith: 'Hecho con' },
  },
  en: {
    nav: { home: 'Home', experience: 'Experience', skills: 'Skills', projects: 'Projects' },
    hero: {
      badge: 'Available for opportunities',
      greeting: "Hi, I'm",
      viewExperience: 'View Experience',
      exploreProjects: 'Explore Projects',
    },
    about: { title: 'About Me', location: 'Location', email: 'Email', role: 'Role', hobbies: 'Interests' },
    experience: { title: 'Experience', subtitle: 'A decade of building and scaling software across startups, cooperatives, and enterprise.' },
    skills: { title: 'Skills & Technologies', subtitle: 'Technologies I work with daily, organized by domain.' },
    featured: {
      title: 'Featured Projects',
      subtitle: 'Key projects that showcase my range across full-stack, DevOps, and open-source.',
      viewAll: 'View All',
    },
    projects: {
      title: 'Projects',
      subtitle: "A selection of open-source contributions, professional platforms, and training artifacts I've built.",
      all: 'All',
    },
    opensource: { title: 'Community & Open Source', subtitle: 'Beyond the code – contributions to the developer community.' },
    contact: {
      title: 'Get In Touch',
      subtitle: "Looking for a senior full-stack engineer with DevOps chops? Let's talk.",
      text: "I'm always open to interesting opportunities, collaborations, or just a chat about tech. Feel free to reach out.",
      emailMe: 'Email Me',
      orFindMe: 'Or find me on',
    },
    footer: { builtWith: 'Built with' },
  },
};

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'es';
  });

  const switchLang = (l) => {
    setLang(l);
    localStorage.setItem('portfolio-lang', l);
  };

  const t = (path) => {
    const keys = path.split('.');
    let val = translations[lang];
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) val = val[k];
      else return path;
    }
    return val;
  };

  return (
    <I18nContext.Provider value={{ lang, switchLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
