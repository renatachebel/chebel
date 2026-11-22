import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const categoryLabels: Record<string, string> = {
  photography: 'Photography',
  video: 'Film / Video',
  installation: 'Installation',
  performance: 'Performance',
  'performance-installation': 'Performance / Installation',
  'generative-art': 'Generative Art',
};

const projectRows = projects.map(project => ({
  ...project,
  tags: project.category.map(category => categoryLabels[category] ?? category).join(', '),
  year: project.date || '—',
}));

const HomepageTest: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileIsControlling, setMobileIsControlling] = useState(false);
  const projectLinks = useRef<Array<HTMLAnchorElement | null>>([]);
  const activeIndex = hoveredIndex ?? carouselIndex;
  const activeProject = projects[activeIndex] ?? projects[0];

  useEffect(() => {
    if (hoveredIndex !== null || mobileIsControlling || projects.length < 2) return;
    const timer = window.setInterval(() => {
      setCarouselIndex(current => (current + 1) % projects.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [hoveredIndex, mobileIsControlling]);

  useEffect(() => {
    if (!mobileIsControlling) return;
    const mobileViewport = window.matchMedia('(max-width: 767px)');
    if (!mobileViewport.matches) return;

    const observer = new IntersectionObserver(
      entries => {
        const centeredProject = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!centeredProject) return;
        const index = Number((centeredProject.target as HTMLElement).dataset.projectIndex);
        if (Number.isFinite(index)) setCarouselIndex(index);
      },
      {
        root: null,
        rootMargin: '-44% 0px -44% 0px',
        threshold: [0, 0.5, 1],
      },
    );

    projectLinks.current.forEach(link => { if (link) observer.observe(link); });
    return () => observer.disconnect();
  }, [mobileIsControlling]);

  useEffect(() => {
    const nextProject = projects[(activeIndex + 1) % projects.length];
    if (!nextProject) return;
    const nextImage = new Image();
    nextImage.src = nextProject.thumbnail;
  }, [activeIndex]);

  if (!activeProject) return null;

  return (
    <main className="relative min-h-svh overflow-x-hidden bg-black text-white">
      <div className="fixed inset-0" aria-hidden="true">
        {projects.map((project, index) => (
          <img
            key={project.slug}
            src={project.thumbnail}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
        <div className="absolute inset-0 bg-black/38" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/55" />
      </div>

      <div className="relative z-10 flex min-h-svh flex-col">
        <header className="flex items-center justify-between px-5 py-5 text-[0.78rem] uppercase tracking-[0.16em] md:px-8">
          <Link to="/" className="font-display text-base normal-case tracking-[-0.04em] md:text-lg">
            Renata Chebel
          </Link>
          <nav aria-label="Main navigation" className="flex items-center gap-5 md:gap-8">
            <span className="text-white">Work</span>
            <Link to="/about" className="text-white/70 transition-colors hover:text-white">About</Link>
            <Link to="/substack" className="hidden text-white/70 transition-colors hover:text-white sm:inline">Journal</Link>
            <a href="mailto:chebel@gmail.com" className="text-white/70 transition-colors hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="flex flex-1 items-center px-5 py-14 md:px-8 md:py-24" aria-label="Project index">
          <div className="w-full">
            <div className="mb-3 hidden grid-cols-12 gap-4 border-b border-white/30 pb-3 text-[0.66rem] uppercase tracking-[0.16em] text-white/55 md:grid">
              <span className="col-span-5">Project</span>
              <span className="col-span-5">Discipline</span>
              <span className="col-span-2 text-right">Year</span>
            </div>

            <div>
              {projectRows.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <Link
                    key={project.slug}
                    to={`/projects/${project.slug}`}
                    ref={element => { projectLinks.current[index] = element; }}
                    data-project-index={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(index)}
                    onBlur={() => setHoveredIndex(null)}
                    onTouchStart={() => {
                      setMobileIsControlling(true);
                      setCarouselIndex(index);
                    }}
                    className={`group grid grid-cols-[1fr_auto] items-baseline gap-5 border-b border-white/25 py-2.5 transition-all duration-300 md:grid-cols-12 md:gap-4 md:py-2 ${isActive ? 'text-white' : 'text-white/65 hover:text-white focus-visible:text-white'}`}
                    aria-label={`${project.title}, ${project.tags}, ${project.year}`}
                  >
                    <span className="md:col-span-5">
                      <span className="block font-display text-[clamp(1.15rem,2vw,1.7rem)] leading-none tracking-[-0.045em]">
                        {project.title}
                      </span>
                      <span className="mt-1.5 block text-[0.66rem] uppercase tracking-[0.12em] opacity-75 md:hidden">
                        {project.tags}
                      </span>
                    </span>
                    <span className="hidden text-[0.72rem] uppercase tracking-[0.12em] md:col-span-5 md:block">
                      {project.tags}
                    </span>
                    <span className="text-right text-[0.68rem] uppercase tracking-[0.12em] md:col-span-2 md:text-[0.72rem]">
                      {project.year}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <div className="flex items-end justify-between border-t border-white/30 px-5 py-4 text-[0.66rem] uppercase tracking-[0.16em] text-white/70 md:px-8">
          <span>{String(projectRows.length).padStart(2, '0')} works · Brazil / Worldwide</span>
          <span className="max-w-[45%] truncate text-right">{activeProject.title}</span>
        </div>
      </div>
    </main>
  );
};

export default HomepageTest;
