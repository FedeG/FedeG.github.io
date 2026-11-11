import { personalInfo, skills, experience, projects, openSource } from './portfolio';

describe('portfolio data integrity', () => {
  test('skill categories are bilingual, non-empty and free of duplicates', () => {
    expect(Array.isArray(skills)).toBe(true);
    skills.forEach((category) => {
      expect(typeof category.title).toBe('string');
      expect(category.title.length).toBeGreaterThan(0);
      expect(typeof category.titleEn).toBe('string');
      expect(category.titleEn.length).toBeGreaterThan(0);
      expect(Array.isArray(category.items)).toBe(true);
      expect(category.items.length).toBeGreaterThan(0);
      const unique = new Set(category.items);
      expect(unique.size).toBe(category.items.length);
    });
  });

  test('hero exposes a core stack with enough keywords for scanning', () => {
    expect(Array.isArray(personalInfo.stack)).toBe(true);
    expect(personalInfo.stack.length).toBeGreaterThanOrEqual(8);
    personalInfo.stack.forEach((tech) => expect(tech).toBeTruthy());
  });

  test('experience entries are complete in both languages, unique by company', () => {
    const companies = experience.map((e) => e.company);
    expect(new Set(companies).size).toBe(companies.length);
    experience.forEach((exp) => {
      ['role', 'roleEn', 'period', 'periodEn', 'description', 'descriptionEn', 'location', 'company'].forEach((field) => {
        expect(exp[field]).toBeTruthy();
      });
      expect(Array.isArray(exp.highlights)).toBe(true);
      expect(exp.highlights.length).toBeGreaterThan(0);
      expect(exp.highlightsEn.length).toBe(exp.highlights.length);
      expect(Array.isArray(exp.tech)).toBe(true);
    });
    const current = experience.filter((e) => e.current);
    expect(current.length).toBe(1);
    expect(experience[0].current).toBe(true);
  });

  test('projects have unique ids and required fields in both languages', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    projects.forEach((project) => {
      ['id', 'title', 'titleEn', 'role', 'roleEn', 'description', 'descriptionEn'].forEach((field) => {
        expect(project[field]).toBeTruthy();
      });
      expect(Array.isArray(project.category)).toBe(true);
      expect(project.category.length).toBeGreaterThan(0);
      expect(Array.isArray(project.tech)).toBe(true);
      expect(Array.isArray(project.links)).toBe(true);
    });
  });

  test('featured projects always link somewhere', () => {
    projects.filter((p) => p.featured).forEach((project) => {
      expect(project.links.length).toBeGreaterThan(0);
      expect(project.links[0].url).toBeTruthy();
    });
  });

  test('community cards are bilingual', () => {
    openSource.forEach((card) => {
      expect(card.title).toBeTruthy();
      expect(card.titleEn).toBeTruthy();
      expect(Array.isArray(card.items)).toBe(true);
      expect(card.items.length).toBeGreaterThan(0);
      expect(card.itemsEn.length).toBe(card.items.length);
    });
  });
});
