import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <Link
    to={`/projects/${project.slug}`}
    className="project-card group block focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring"
    data-layout={index % 6}
  >
    <div className="project-card__media">
      <img src={project.thumbnail} alt={project.title} loading="lazy" className="project-card__image" />
      <span className="absolute left-3 top-3 z-10 bg-background/85 px-2 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-muted-foreground backdrop-blur md:left-4 md:top-4">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
    <div className="mt-5 grid grid-cols-[1fr_auto] items-start gap-4 border-t border-border pt-4">
      <div>
        <h3 className="display-heading text-2xl transition-colors group-hover:text-primary md:text-3xl">{project.title}</h3>
        <p className="eyebrow mt-3 text-muted-foreground">
          {project.category.map(category => category.replace(/-/g, ' ')).join(' / ')}
          {project.date ? ` · ${project.date}` : ''}
        </p>
      </div>
      <ArrowUpRight size={20} className="mt-1 text-muted-foreground transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
    </div>
  </Link>
);

export default ProjectCard;
