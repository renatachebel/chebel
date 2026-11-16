import { test, expect } from 'bun:test';
import { projects, getProjectBySlug } from './projects';

test('all published work belongs to one portfolio', () => {
  for (const slug of ['alma-da-selva-amazonia-mapping', 'nature-of-movement', 'temple-of-reflections', 'rainbow-road', 'ancestresses', 'fanta-konate', 'sintography', 'tea-in-alishan', 'the-wedding-of-the-sun-and-the-moon']) {
    expect(projects.filter(project => project.slug === slug).length).toBe(1);
    expect(getProjectBySlug(slug)?.slug).toBe(slug);
  }
  expect(getProjectBySlug('o-poder-da-floresta')).toBeUndefined();
});
