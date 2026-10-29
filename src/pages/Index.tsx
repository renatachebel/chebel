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

const Index: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const visible = projects.filter(project =>
    filter === 'all' ||
    project.category.some(category =>
      category === filter ||
      ((filter === 'installation' || filter === 'performance') && category === 'performance-installation')
    )
  );
  const featured = projects.find(project => project.slug === 'the-wedding-of-the-sun-and-the-moon');

  return (
    <Layout>
      <div className="container-custom">
        <section className="relative min-h-[calc(100svh-76px)] border-x border-border/50 px-4 pb-10 pt-10 md:px-8 md:pb-14 md:pt-14">
          <div className="mb-16 flex items-start justify-between gap-8 md:mb-20">
            <p className="eyebrow flex items-center gap-2 text-muted-foreground">
              <span className="signal-dot" /> Multimedia artist · Brazil
            </p>
            <p className="hidden max-w-[15rem] text-right text-xs leading-relaxed text-muted-foreground md:block">
              Moving image, installation, photography, performance and generative systems.
            </p>
          </div>

          <h1 className="portfolio-title relative z-10 animate-fade-in" aria-label="Renata Chebel">
            <span className="block">Renata</span>
            <span className="outline-text ml-[7vw] block">Chebel</span>
          </h1>

          <div className="mt-16 grid gap-8 border-t border-border pt-7 md:mt-20 md:grid-cols-12 md:items-end">
            <p className="text-lg leading-relaxed text-foreground md:col-span-5 md:text-2xl">
              Nature, memory, and the charged space between the ancestral and the future.
            </p>
            <div className="flex items-end justify-between md:col-span-5 md:col-start-8">
              <div>
                <p className="eyebrow mb-2 text-muted-foreground">Selected archive</p>
                <p className="text-sm">2019—2026 · 18 works</p>
              </div>
              <a href="#work" aria-label="Explore projects" className="flex h-12 w-12 items-center justify-center border border-border text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
        </section>

        {featured && (
          <section className="py-20 md:py-32" aria-label="Featured work">
            <div className="mb-6 flex items-center justify-between border-t border-border pt-5">
              <p className="eyebrow text-muted-foreground">01 / Featured film</p>
              <p className="eyebrow text-muted-foreground">Selected work</p>
            </div>
            <Link to={`/projects/${featured.slug}`} className="group block">
              <div className="relative overflow-hidden bg-card">
                <img
                  src="/lovable-uploads/sunmoon-ensemble.jpg"
                  alt="A scene from The Wedding of the Sun and the Moon"
                  className="max-h-[76vh] w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                <span className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 md:bottom-8 md:right-8 md:h-20 md:w-20">
                  <ArrowUpRight size={26} />
                </span>
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-12 md:items-end">
                <h2 className="display-heading text-3xl md:col-span-8 md:text-5xl">{featured.title}</h2>
                <p className="eyebrow text-muted-foreground md:col-span-4 md:text-right">Film / Myth / Performance</p>
              </div>
            </Link>
          </section>
        )}

        <section id="work" aria-label="All artwork" className="scroll-mt-28">
          <div className="mb-16 border-t border-border pt-7 md:mb-24">
            <div className="mb-10 flex items-end justify-between">
              <div className="flex items-baseline gap-4">
                <h2 className="display-heading text-5xl md:text-7xl">Archive</h2>
                <span className="eyebrow text-primary">{String(visible.length).padStart(2, '0')}</span>
              </div>
              <p className="eyebrow hidden text-muted-foreground md:block">Filter by discipline</p>
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
