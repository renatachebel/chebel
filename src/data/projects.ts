
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

// Arrange the archive as a visual color journey: neutral and pale tones,
// through pinks and greens, into blues, purples, and saturated neon work.
const paletteOrder = [
  'music-videos',
  'artist-videos',
  'devir-mulher',
  'sintography',
  'lemniscata',
  'lotus-bloom',
  'tea-in-alishan',
  'o-poder-da-floresta',
  'china-oddities',
  'alma-da-selva-amazonia-mapping',
  'bodies-of-water',
  'the-wedding-of-the-sun-and-the-moon',
  'premio-sim-tv-globo',
  'fanta-konate',
  'ancestresses',
  'nature-of-movement',
  'rainbow-road',
  'temple-of-reflections',
] as const;

const paletteRank = new Map<string, number>(
  paletteOrder.map((slug, index) => [slug, index]),
);

export const projects: Project[] = [...mergedProjects].sort(
  (a, b) =>
    (paletteRank.get(a.slug) ?? Number.MAX_SAFE_INTEGER) -
    (paletteRank.get(b.slug) ?? Number.MAX_SAFE_INTEGER),
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
