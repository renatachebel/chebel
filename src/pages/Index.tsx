import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Button } from '../components/ui/button';

const categories = [
  { id: 'all', label: 'All work' },
  { id: 'video', label: 'Video' },
  { id: 'photography', label: 'Photography' },
  { id: 'installation', label: 'Installation' },
  { id: 'performance', label: 'Performance' },
  { id: 'generative-art', label: 'Generative Art' },
];

// Keep the homepage edit simple: change these slugs to swap the selected work.
const featuredSelections = [
  {
    slug: 'the-wedding-of-the-sun-and-the-moon',
    image: '/lovable-uploads/wedding-sun-moon-cover.jpg',
    label: 'Video / Generative Art',
  },
  {
    slug: 'sintography',
    image: '/lovable-uploads/Eden_creation_chebel65c32aa905ae24529751736f.jpg',
    label: 'Generative Art / Installation',
  },
  {
    slug: 'temple-of-reflections',
    image: '/lovable-uploads/temple-of-reflections-cover.jpg',
    label: 'Installation / Artificial Intelligence',
  },
  {
    slug: 'tea-in-alishan',
    image: '/lovable-uploads/849b9bdb-8012-47d4-95ea-68ed3a0ccf88.png',
    label: 'Photography / Taiwan',
  },
];

const Index: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const visible = projects.filter(project =>
    filter === 'all' ||
    project.category.some(category =>
      category === filter ||
      ((filter === 'installation' || filter === 'performance') && category === 'performance-installation')
    )
  );
  const featuredProjects = featuredSelections.flatMap(selection => {
    const project = projects.find(item => item.slug === selection.slug);
    return project ? [{ project, ...selection }] : [];
  });

  return (
    <Layout>
      <div className="container-custom">
        <h1 className="sr-only">Renata Chebel</h1>

        {featuredProjects.length > 0 && (
          <section id="selected-work" className="scroll-mt-28 pb-16 pt-10 md:pb-24 md:pt-12" aria-label="Selected work">
            <div className="mb-8 flex items-center justify-between md:mb-10">
              <p className="eyebrow text-muted-foreground">Selected work</p>
              <p className="eyebrow text-muted-foreground">01—{String(featuredProjects.length).padStart(2, '0')}</p>
            </div>
            <div className="grid gap-14 md:gap-20">
              {featuredProjects.map(({ project, image, label }, index) => (
                <Link to={`/projects/${project.slug}`} className="group block" key={project.slug}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-card md:aspect-[16/9]">
                    <img
                      src={image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60" />
                    <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center bg-primary text-primary-foreground transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 md:bottom-6 md:right-6 md:h-14 md:w-14">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                  <div className="mt-4 grid gap-2 pb-5 md:grid-cols-12 md:items-end md:pb-6">
                    <div className="flex items-baseline gap-4 md:col-span-8">
                      <span className="eyebrow text-muted-foreground">0{index + 1}</span>
                      <h2 className="display-heading text-xl font-normal md:text-[1.8rem]">{project.title}</h2>
                    </div>
                    <p className="eyebrow text-muted-foreground md:col-span-4 md:text-right">{label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section id="work" aria-label="All artwork" className="scroll-mt-28">
          <div className="mb-10 md:mb-14">
            <div className="mb-7 flex items-end justify-between">
              <div className="flex items-baseline gap-4">
                <h2 className="display-heading text-3xl font-normal md:text-4xl">Archive</h2>
                <span className="eyebrow text-primary">{String(visible.length).padStart(2, '0')}</span>
              </div>
            </div>
            <div className="scrollbar-hidden -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:px-0" role="group" aria-label="Filter work">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant="outline"
                  aria-pressed={filter === category.id}
                  onClick={() => setFilter(category.id)}
                  className={`h-10 shrink-0 rounded-none border px-4 text-[0.74rem] font-semibold uppercase tracking-[0.13em] transition-colors ${filter === category.id ? 'border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : 'border-border bg-transparent text-muted-foreground hover:border-foreground hover:bg-transparent hover:text-foreground'}`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {visible.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.slug} />
            ))}
          </div>
          {visible.length === 0 && <p className="py-12 text-muted-foreground">No works in this category.</p>}
        </section>
      </div>
    </Layout>
  );
};

export default Index;
