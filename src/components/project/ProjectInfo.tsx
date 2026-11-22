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
    <aside className="self-start xl:sticky xl:top-28 xl:col-span-3">
      <div className="pb-7">
        <p className="eyebrow mb-5 text-primary">Project notes</p>
        <p className="whitespace-pre-line text-base leading-8 text-muted-foreground md:text-[1.08rem]">{project.details}</p>
      </div>
      <div className="space-y-4">
        {facts.map(([label, value]) => (
          <div key={label} className="grid grid-cols-2 gap-4 py-1">
            <p className="eyebrow text-muted-foreground">{label}</p>
            <p className="text-base">{value}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ProjectInfo;
