
import { Project } from './types';
import { photographyProjects } from './photography-projects';
import { videoProjects } from './video-projects';
import { installationProjects } from './installation-projects';
import { performanceProjects } from './performance-projects';
import { performanceInstallationProjects } from './performance-installation-projects';
import { generativeArtProjects } from './generative-art-projects';
import { iluminaVideoProjects } from './ilumina-video-projects';

// One collection powers every portfolio view; deduplicate by slug.
const mergedProjects: Project[] = Array.from(new Map([
  ...videoProjects,
  ...photographyProjects,
  ...installationProjects,
  ...performanceProjects,
  ...performanceInstallationProjects,
  ...generativeArtProjects,
  ...iluminaVideoProjects,
].map(project => [project.slug, project])).values());

// Keep unpublished work in the source data so it can be restored later.
const hiddenProjectSlugs = new Set(['o-poder-da-floresta']);

// Curated portfolio order, matching the approved visual sequence.
const portfolioOrder = [
  'lemniscata',
  'sintography',
  'the-wedding-of-the-sun-and-the-moon',
  'devir-mulher',
  'quebranto',
  'premio-sim-tv-globo',
  'bodies-of-water',
  'lotus-bloom',
  'tea-in-alishan',
  'music-videos',
  'artist-videos',
  'china-oddities',
  'temple-of-reflections',
  'fluvial',
  'rainbow-road',
  'alma-da-selva-amazonia-mapping',
  'ancestresses',
  'nature-of-movement',
  'fanta-konate',
] as const;

const portfolioRank = new Map<string, number>(
  portfolioOrder.map((slug, index) => [slug, index]),
);

export const projects: Project[] = [...mergedProjects]
  .filter(project => !hiddenProjectSlugs.has(project.slug))
  .sort(
    (a, b) =>
      (portfolioRank.get(a.slug) ?? Number.MAX_SAFE_INTEGER) -
      (portfolioRank.get(b.slug) ?? Number.MAX_SAFE_INTEGER),
  );

// Compatibility alias for existing imports.
export const allProjectsIncludingIlumina = projects;

// Helper functions
export const getProjectBySlug = (slug: string): Project | undefined => {
  // Search in all projects including Ilumina-specific ones
  return allProjectsIncludingIlumina.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.isFeatured).slice(0, 6);
};

// Re-export the Project type for convenience
export type { Project };
