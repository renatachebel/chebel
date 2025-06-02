
import { Project } from './types';
import { photographyProjects } from './photography-projects';
import { videoProjects } from './video-projects';
import { installationProjects } from './installation-projects';
import { performanceProjects } from './performance-projects';
import { performanceInstallationProjects } from './performance-installation-projects';
import { generativeArtProjects } from './generative-art-projects';

// Combine all projects in the specified order
export const projects: Project[] = [
  // Temple of Reflections (installation)
  ...installationProjects.filter(p => p.slug === 'temple-of-reflections'),
  // Lemniscata (performance-installation)
  ...performanceInstallationProjects.filter(p => p.slug === 'lemniscata'),
  // Sintography (generative-art)
  ...generativeArtProjects.filter(p => p.slug === 'sintography'),
  // Rainbow Road (performance)
  ...performanceProjects.filter(p => p.slug === 'rainbow-road'),
  // Premio SIM - TV Globo (video)
  ...videoProjects.filter(p => p.slug === 'premio-sim-tv-globo'),
  // Lotus Bloom (video)
  ...videoProjects.filter(p => p.slug === 'lotus-bloom'),
  // Music Videos (video)
  ...videoProjects.filter(p => p.slug === 'music-videos'),
  // Nature of Movement (video)
  ...videoProjects.filter(p => p.slug === 'nature-of-movement'),
  // Bodies of Water (photography)
  ...photographyProjects.filter(p => p.slug === 'bodies-of-water'),
  // China Oddities (photography)
  ...photographyProjects.filter(p => p.slug === 'china-oddities'),
  // Tea in Alishan (photography)
  ...photographyProjects.filter(p => p.slug === 'tea-in-alishan'),
];

// Helper functions
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.isFeatured).slice(0, 6);
};

// Re-export the Project type for convenience
export type { Project };
