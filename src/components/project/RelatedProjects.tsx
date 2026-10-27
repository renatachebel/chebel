import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/types';

const RelatedProjects: React.FC<{ currentProject: Project; allProjects: Project[] }> = ({ currentProject, allProjects }) => {
  const related = allProjects.filter(project => project.slug !== currentProject.slug);
  if (!related.length) return null;
  return <section className="mt-16 pt-8 border-t border-border" aria-label="More work">
    <h3 className="font-display text-3xl mb-8">More work</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-8">
      {related.map(project => <Link key={project.slug} to={`/projects/${project.slug}`} className="group block">
        <div className="aspect-[4/3]"><img src={project.thumbnail} alt={project.title} loading="lazy" className="w-full h-full object-contain transition-opacity group-hover:opacity-80" /></div>
        <h4 className="text-sm mt-3 text-muted-foreground group-hover:text-foreground">{project.title}</h4>
      </Link>)}
    </div>
  </section>;
};
export default RelatedProjects;
