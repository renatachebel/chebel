import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <Link
    to={`/projects/${project.slug}`}
    className="project-card group block focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring"
    data-layout={index % 6}
  >
    <div className="project-card__media">
      <img src={project.thumbnail} alt={project.title} loading="lazy" className="project-card__image" />
    </div>
    <div className="mt-3 border-t border-border pt-3">
      <div>
        <h3 className="display-heading text-[0.95rem] font-normal leading-tight transition-colors group-hover:text-primary md:text-[1.08rem]">{project.title}</h3>
        <p className="eyebrow mt-2 text-muted-foreground">
          {project.category.map(category => category.replace(/-/g, ' ')).join(' / ')}
          {project.date ? ` · ${project.date}` : ''}
        </p>
      </div>
    </div>
  </Link>
);

export default ProjectCard;
