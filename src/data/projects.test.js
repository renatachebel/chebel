import { test, expect } from 'bun:test';
import { projects, getProjectBySlug } from './projects';

test('all formerly separated work belongs to one portfolio', () => {
  for (const slug of ['alma-da-selva-amazonia-mapping', 'nature-of-movement', 'temple-of-reflections', 'rainbow-road', 'ancestresses', 'fanta-konate', 'o-poder-da-floresta', 'sintography', 'tea-in-alishan', 'the-wedding-of-the-sun-and-the-moon']) {
    expect(projects.filter(project => project.slug === slug).length).toBe(1);
    expect(getProjectBySlug(slug)?.slug).toBe(slug);
  }
});
