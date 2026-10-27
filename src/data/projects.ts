
import { Project } from './types';
import { photographyProjects } from './photography-projects';
import { videoProjects } from './video-projects';
import { installationProjects } from './installation-projects';
import { performanceProjects } from './performance-projects';
import { performanceInstallationProjects } from './performance-installation-projects';
import { generativeArtProjects } from './generative-art-projects';
import { iluminaVideoProjects } from './ilumina-video-projects';

// One collection powers every portfolio view; deduplicate by slug.
export const projects: Project[] = Array.from(new Map([
  ...videoProjects,
  ...photographyProjects,
  ...installationProjects,
  ...performanceProjects,
  ...performanceInstallationProjects,
  ...generativeArtProjects,
  ...iluminaVideoProjects,
].map(project => [project.slug, project])).values());

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
