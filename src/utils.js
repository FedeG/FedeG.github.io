const catMap = {
  'full-stack': { es: 'Full-Stack', en: 'Full-Stack' },
  'open-source': { es: 'Open Source', en: 'Open Source' },
  devops: { es: 'DevOps', en: 'DevOps' },
  iot: { es: 'IoT', en: 'IoT' },
  training: { es: 'Capacitación', en: 'Training' },
  enterprise: { es: 'Empresarial', en: 'Enterprise' },
};

export function catLabel(cat, lang) {
  return catMap[cat] ? catMap[cat][lang] : cat;
}

export const SITE_URL = 'https://fedeg.github.io';
