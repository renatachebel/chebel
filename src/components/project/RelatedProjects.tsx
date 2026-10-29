import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/types';

const RelatedProjects: React.FC<{ currentProject: Project; allProjects: Project[] }> = ({ currentProject, allProjects }) => {
  const related = allProjects.filter(project => project.slug !== currentProject.slug).slice(0, 4);
  if (!related.length) return null;

  return (
    <section className="mt-24 border-t border-border pt-8 md:mt-36" aria-label="More work">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="display-heading text-4xl md:text-6xl">Continue exploring</h2>
        <Link to="/" className="eyebrow hidden items-center gap-2 text-muted-foreground hover:text-primary sm:flex">All work <ArrowUpRight size={15} /></Link>
      </div>
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((project, index) => (
          <Link key={project.slug} to={`/projects/${project.slug}`} className="group block">
            <div className="aspect-[4/3] overflow-hidden bg-card">
              <img src={project.thumbnail} alt={project.title} loading="lazy" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="mt-4 border-t border-border pt-3">
              <p className="eyebrow mb-2 text-muted-foreground">0{index + 1}</p>
              <h3 className="display-heading text-xl group-hover:text-primary">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedProjects;
