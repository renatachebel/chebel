import React from 'react';
import { Project } from '../../data/types';

const formatCategory = (category: string) =>
  category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const ProjectInfo: React.FC<{ project: Project }> = ({ project }) => {
  const facts = [
    ['Discipline', project.category.map(formatCategory).join(', ')],
    ['Year', project.date],
    ['Client', project.client],
    ['Location', project.location],
  ].filter((fact): fact is [string, string] => Boolean(fact[1]));

  return (
    <aside className="self-start border-t border-border lg:sticky lg:top-28 lg:col-span-4">
      <div className="py-6">
        <p className="eyebrow mb-5 text-primary">Project notes</p>
        <p className="whitespace-pre-line text-sm leading-7 text-muted-foreground md:text-base">{project.details}</p>
      </div>
      <div>
        {facts.map(([label, value]) => (
          <div key={label} className="grid grid-cols-2 gap-4 border-t border-border py-4">
            <p className="eyebrow text-muted-foreground">{label}</p>
            <p className="text-sm">{value}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ProjectInfo;
