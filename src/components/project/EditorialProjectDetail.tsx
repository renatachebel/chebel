import React, { useMemo, useState } from 'react';
import { Project, EditorialSection } from '../../data/types';
import GalleryModal from './GalleryModal';

const formatCategory = (category: string) =>
  category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const splitParagraphs = (text: string) => text.split('\n\n').filter(Boolean);

const EditorialProjectDetail: React.FC<{ project: Project }> = ({ project }) => {
  const sections = useMemo(() => project.editorialSections ?? [], [project.editorialSections]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const galleryImages = useMemo(() => {
    const images = [project.thumbnail];
    sections.forEach(section => {
      if (section.type === 'gallery') images.push(...section.images);
      if (section.type === 'image') images.push(section.image);
      if (section.type === 'text' && section.image) images.push(section.image);
    });
    return Array.from(new Set(images));
  }, [project.thumbnail, sections]);

  const galleryProject = useMemo(
    () => ({ ...project, images: galleryImages }),
    [galleryImages, project],
  );

  const openImage = (image: string) => {
    setGalleryIndex(Math.max(0, galleryImages.indexOf(image)));
    setGalleryOpen(true);
  };

  const renderSection = (section: EditorialSection, sectionIndex: number) => {
    if (section.type === 'text') {
      const imageLeft = section.imagePosition === 'left';
      return (
        <section id={section.id} key={`${section.type}-${sectionIndex}`} className="scroll-mt-28 border-t border-border py-14 md:py-20">
          <div className="grid items-start gap-9 lg:grid-cols-12 lg:gap-12">
            {section.image && imageLeft && (
              <button type="button" onClick={() => openImage(section.image!)} className="group text-left lg:col-span-7">
                <img src={section.image} alt={section.imageAlt ?? section.title} loading="lazy" className="h-auto w-full transition-opacity group-hover:opacity-90" />
                {section.caption && <span className="eyebrow mt-3 block text-muted-foreground">{section.caption}</span>}
              </button>
            )}
            <div className={`${section.image ? 'lg:col-span-5' : 'lg:col-span-7 lg:col-start-5'} ${imageLeft ? '' : 'lg:order-first'}`}>
              {section.eyebrow && <p className="eyebrow mb-5 text-primary">{section.eyebrow}</p>}
              <h2 className="display-heading text-3xl font-normal leading-tight md:text-5xl">{section.title}</h2>
              <div className="mt-7 space-y-6 text-[1.08rem] leading-8 text-muted-foreground md:text-xl md:leading-9">
                {splitParagraphs(section.body).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
            </div>
            {section.image && !imageLeft && (
              <button type="button" onClick={() => openImage(section.image!)} className="group text-left lg:col-span-7">
                <img src={section.image} alt={section.imageAlt ?? section.title} loading="lazy" className="h-auto w-full transition-opacity group-hover:opacity-90" />
                {section.caption && <span className="eyebrow mt-3 block text-muted-foreground">{section.caption}</span>}
              </button>
            )}
          </div>
        </section>
      );
    }

    if (section.type === 'gallery') {
      return (
        <section id={section.id} key={`${section.type}-${sectionIndex}`} className="scroll-mt-28 border-t border-border py-14 md:py-20">
          <div className="mb-10 grid gap-7 lg:grid-cols-12 lg:gap-12 md:mb-14">
            <div className="lg:col-span-5">
              {section.eyebrow && <p className="eyebrow mb-5 text-primary">{section.eyebrow}</p>}
              <h2 className="display-heading text-3xl font-normal leading-tight md:text-5xl">{section.title}</h2>
            </div>
            {section.body && (
              <div className="space-y-6 text-[1.08rem] leading-8 text-muted-foreground md:text-xl md:leading-9 lg:col-span-6 lg:col-start-7">
                {splitParagraphs(section.body).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
            )}
          </div>
          <div className="grid items-start gap-5 md:grid-cols-12 md:gap-6">
            {section.images.map((image, index) => {
              const span = index % 6 === 0 || index % 6 === 5 ? 'md:col-span-12' : index % 6 === 1 || index % 6 === 4 ? 'md:col-span-7' : 'md:col-span-5';
              return (
                <button type="button" key={`${image}-${index}`} onClick={() => openImage(image)} className={`group overflow-hidden text-left ${span}`}>
                  <img src={image} alt={`${section.title} ${index + 1}`} loading="lazy" className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.012]" />
                </button>
              );
            })}
          </div>
          {section.caption && <p className="eyebrow mt-5 text-muted-foreground">{section.caption}</p>}
        </section>
      );
    }

    if (section.type === 'image') {
      return (
        <figure id={section.id} key={`${section.type}-${sectionIndex}`} className="scroll-mt-28 border-t border-border py-14 md:py-20">
          <button type="button" onClick={() => openImage(section.image)} className="group block w-full text-left">
            <img src={section.image} alt={section.imageAlt ?? project.title} loading="lazy" className="h-auto w-full transition-opacity group-hover:opacity-90" />
          </button>
          {section.caption && <figcaption className="eyebrow mt-4 text-muted-foreground">{section.caption}</figcaption>}
        </figure>
      );
    }

    if (section.type === 'video') {
      return (
        <section id={section.id} key={`${section.type}-${sectionIndex}`} className="scroll-mt-28 border-t border-border py-14 md:py-20">
          {(section.eyebrow || section.title || section.body) && (
            <div className="mb-10 grid gap-7 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                {section.eyebrow && <p className="eyebrow mb-5 text-primary">{section.eyebrow}</p>}
                {section.title && <h2 className="display-heading text-3xl font-normal leading-tight md:text-5xl">{section.title}</h2>}
              </div>
              {section.body && <p className="text-[1.08rem] leading-8 text-muted-foreground md:text-xl md:leading-9 lg:col-span-6 lg:col-start-7">{section.body}</p>}
            </div>
          )}
          <div className="aspect-video overflow-hidden">
            <iframe src={`https://www.youtube.com/embed/${section.youtubeId}`} title={section.title ?? project.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full border-0" />
          </div>
          {section.caption && <p className="eyebrow mt-4 text-muted-foreground">{section.caption}</p>}
        </section>
      );
    }

    return (
      <blockquote id={section.id} key={`${section.type}-${sectionIndex}`} className="scroll-mt-28 border-y border-border py-16 md:py-24">
        <p className="display-heading mx-auto max-w-5xl text-center text-3xl leading-tight md:text-6xl md:leading-tight">“{section.text}”</p>
        {section.attribution && <footer className="eyebrow mt-7 text-center text-muted-foreground">{section.attribution}</footer>}
      </blockquote>
    );
  };

  const facts = [
    ['Discipline', project.category.map(formatCategory).join(', ')],
    ['Year', project.date],
    ['Location', project.location],
  ].filter((fact): fact is [string, string] => Boolean(fact[1]));

  return (
    <div className="animate-fade-in">
      <header className="grid gap-8 border-y border-border py-8 md:py-12 xl:grid-cols-12 xl:items-end xl:gap-16">
        <div className="xl:col-span-8">
          <p className="eyebrow mb-5 text-primary">{project.category.map(category => category.replace(/-/g, ' ')).join(' / ')}</p>
          <h1 className="display-heading text-[clamp(2.5rem,5.5vw,5.5rem)]">{project.title}</h1>
        </div>
        <p className="text-[1.08rem] leading-8 text-muted-foreground md:text-xl md:leading-9 xl:col-span-4">{project.description}</p>
      </header>

      <button type="button" onClick={() => openImage(project.thumbnail)} className="group my-14 block w-full overflow-hidden text-left md:my-20">
        <img src={project.thumbnail} alt={project.title} className="h-auto w-full transition-transform duration-1000 ease-out group-hover:scale-[1.008]" />
      </button>

      {sections.map(renderSection)}

      <section className="border-t border-border py-10 md:py-14" aria-label="Project information">
        <div className="grid md:grid-cols-3">
          {facts.map(([label, value]) => (
            <div key={label} className="border-b border-border py-5 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
              <p className="eyebrow text-muted-foreground">{label}</p>
              <p className="mt-3 text-base md:text-lg">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <GalleryModal
        project={galleryProject}
        galleryOpen={galleryOpen}
        galleryIndex={galleryIndex}
        onOpenChange={setGalleryOpen}
        onPrevImage={() => setGalleryIndex(index => index === 0 ? galleryImages.length - 1 : index - 1)}
        onNextImage={() => setGalleryIndex(index => index === galleryImages.length - 1 ? 0 : index + 1)}
        onImageSelect={setGalleryIndex}
      />
    </div>
  );
};

export default EditorialProjectDetail;
