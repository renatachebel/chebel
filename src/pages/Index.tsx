import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Button } from '../components/ui/button';

const categories = [
  { id: 'all', label: 'All work' },
  { id: 'video', label: 'Film & Video' },
  { id: 'photography', label: 'Photography' },
  { id: 'installation', label: 'Installation' },
  { id: 'performance', label: 'Performance' },
  { id: 'generative-art', label: 'Generative Art' },
];

// Keep the homepage edit simple: change these slugs to swap the selected work.
const featuredSelections = [
  {
    slug: 'the-wedding-of-the-sun-and-the-moon',
    image: '/lovable-uploads/sunmoon-ensemble.jpg',
    label: 'Film / Myth / Performance',
  },
  {
    slug: 'sintography',
    image: '/lovable-uploads/b7f0775c-9f85-42e9-b7b5-a631b5cad119.png',
    label: 'Generative Art / Photography',
  },
  {
    slug: 'temple-of-reflections',
    image: '/lovable-uploads/c7e6acc7-c0e5-41f9-8825-7cdc3a0f5ec1.png',
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
        <section className="relative border-x border-border/50 px-4 pb-10 pt-9 md:px-8 md:pb-12 md:pt-14">
          <div className="mb-9 md:mb-12">
            <p className="eyebrow flex items-center gap-2 text-muted-foreground">
              <span className="signal-dot" /> Multimedia artist · Brazil
            </p>
          </div>

          <h1 className="portfolio-title relative z-10 animate-fade-in" aria-label="Renata Chebel">
            Renata Chebel
          </h1>

          <div className="mt-7 flex items-end justify-between border-t border-border pt-4 md:mt-9">
            <p className="text-xs text-muted-foreground">18 works · 2019—2026</p>
            <a href="#selected-work" aria-label="Explore selected projects" className="flex h-9 w-9 items-center justify-center border border-border text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <ArrowDown size={15} />
            </a>
          </div>
        </section>

        {featuredProjects.length > 0 && (
          <section id="selected-work" className="scroll-mt-28 pb-16 pt-8 md:pb-24 md:pt-10" aria-label="Selected work">
            <div className="mb-8 flex items-center justify-between border-t border-border pt-4 md:mb-10">
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
                  <div className="mt-4 grid gap-2 border-b border-border pb-5 md:grid-cols-12 md:items-end md:pb-6">
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
          <div className="mb-10 border-t border-border pt-6 md:mb-14">
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
                  className={`h-10 shrink-0 rounded-none border px-4 text-[0.68rem] font-semibold uppercase tracking-[0.13em] transition-colors ${filter === category.id ? 'border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : 'border-border bg-transparent text-muted-foreground hover:border-foreground hover:bg-transparent hover:text-foreground'}`}
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
