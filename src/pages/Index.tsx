import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Button } from '../components/ui/button';

const categories = [
  { id: 'all', label: 'All work' }, { id: 'video', label: 'Film & Video' },
  { id: 'photography', label: 'Photography' }, { id: 'installation', label: 'Installation' },
  { id: 'performance', label: 'Performance' }, { id: 'generative-art', label: 'Generative Art' },
];
const Index: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const visible = projects.filter(project => filter === 'all' || project.category.some(category => category === filter || (filter === 'installation' || filter === 'performance') && category === 'performance-installation'));
  const featured = projects.find(project => project.slug === 'the-wedding-of-the-sun-and-the-moon');
  return <Layout>
    <div className="container-custom">
      <section className="py-12 md:py-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div><p className="text-muted-foreground text-xs uppercase tracking-widest mb-5">Multimedia artist · Brazil</p><h1 className="font-display portfolio-title">Renata Chebel</h1></div>
        <p className="text-muted-foreground text-base max-w-xs leading-relaxed md:pb-2">Nature, memory, and the space<br className="hidden md:block" /> between the ancestral and the future.</p>
      </section>
      {featured && <section className="mb-16 md:mb-24" aria-label="Featured work">
        <Link to={`/projects/${featured.slug}`} className="group block">
          <img src="/lovable-uploads/sunmoon-ensemble.jpg" alt="A scene from The Wedding of the Sun and the Moon" className="w-full max-h-[62vh] object-contain object-left" />
          <div className="mt-5 flex items-start justify-between gap-4">
            <div><p className="text-xs text-muted-foreground mb-2">Selected film</p><h2 className="font-display text-2xl md:text-3xl">{featured.title}</h2></div>
            <ArrowUpRight className="shrink-0 mt-5 text-muted-foreground group-hover:text-foreground" size={20} />
          </div>
        </Link>
      </section>}
      <section id="work" aria-label="All artwork">
        <div className="border-t border-border pt-7 mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="flex gap-3 items-baseline"><h2 className="font-display text-3xl">Works</h2><span className="text-xs text-muted-foreground">{String(visible.length).padStart(2, '0')}</span></div>
          <div className="flex flex-wrap gap-x-5 gap-y-1" role="group" aria-label="Filter work">
            {categories.map(category => <Button key={category.id} variant="link" aria-pressed={filter === category.id} onClick={() => setFilter(category.id)} className={`p-0 h-9 font-normal rounded-none ${filter === category.id ? 'text-foreground underline underline-offset-8' : 'text-muted-foreground'}`}>{category.label}</Button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 md:gap-y-20">
          {visible.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
        </div>
        {visible.length === 0 && <p className="text-muted-foreground py-12">No works in this category.</p>}
      </section>
      <section className="border-t border-border mt-20 md:mt-28 pt-12 pb-8 flex flex-col md:flex-row justify-between gap-6">
        <h2 className="font-display text-3xl md:text-4xl">Let’s create something together.</h2>
        <Button variant="link" asChild className="px-0 self-start text-base"><a href="mailto:chebel@gmail.com">Get in touch <ArrowUpRight size={18} /></a></Button>
      </section>
    </div>
  </Layout>;
};
export default Index;
