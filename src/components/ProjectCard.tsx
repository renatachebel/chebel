import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project }) => (
  <Link to={`/projects/${project.slug}`} className="group block focus-visible:outline focus-visible:outline-1 focus-visible:outline-ring focus-visible:outline-offset-4">
    <div className="aspect-[4/3] bg-background flex items-center justify-center">
      <img src={project.thumbnail} alt={project.title} loading="lazy" className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-80" />
    </div>
    <div className="flex items-start justify-between gap-4 mt-5">
      <div><h2 className="font-display text-2xl leading-tight">{project.title}</h2><p className="text-muted-foreground text-xs mt-2 capitalize">{project.category.map(category => category.replaceAll('-', ' ')).join(' / ')}{project.date ? ` · ${project.date}` : ''}</p></div>
      <ArrowUpRight size={18} className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground" aria-hidden="true" />
    </div>
  </Link>
);
export default ProjectCard;
