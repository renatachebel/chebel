import React, { useEffect, useState } from 'react';
import { Project } from '../data/types';
import MediaRenderer from './project/MediaRenderer';
import ProjectThumbnails from './project/ProjectThumbnails';
import ProjectGallery from './project/ProjectGallery';
import ProjectInfo from './project/ProjectInfo';
import GalleryModal from './project/GalleryModal';

const ProjectDetail: React.FC<{ project: Project }> = ({ project }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [imageOrientation, setImageOrientation] = useState<'landscape' | 'portrait'>('landscape');

  useEffect(() => {
    setSelectedImageIndex(0);
    setIsLoading(true);
    setGalleryOpen(false);
  }, [project.id]);

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    setImageOrientation(image.naturalWidth >= image.naturalHeight ? 'landscape' : 'portrait');
    setIsLoading(false);
  };

  const navigateToPrevImage = () => {
    if (project.images?.length) {
      setSelectedImageIndex(index => index === 0 ? project.images!.length - 1 : index - 1);
      setIsLoading(true);
    }
  };

  const navigateToNextImage = () => {
    if (project.images?.length) {
      setSelectedImageIndex(index => index === project.images!.length - 1 ? 0 : index + 1);
      setIsLoading(true);
    }
  };

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-14 grid gap-8 border-y border-border py-8 md:mb-20 md:grid-cols-12 md:items-end md:py-12">
        <div className="md:col-span-8">
          <p className="eyebrow mb-5 text-primary">{project.category.map(category => category.replace(/-/g, ' ')).join(' / ')}</p>
          <h1 className="display-heading text-[clamp(3rem,7vw,7.5rem)]">{project.title}</h1>
        </div>
        <p className="text-base leading-7 text-muted-foreground md:col-span-4 md:text-lg">{project.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <MediaRenderer
            project={project}
            selectedImageIndex={selectedImageIndex}
            isLoading={isLoading}
            imageOrientation={imageOrientation}
            onImageLoad={handleImageLoad}
            onVideoLoad={() => setIsLoading(false)}
            onPrevImage={navigateToPrevImage}
            onNextImage={navigateToNextImage}
            onImageClick={() => openGallery(selectedImageIndex)}
          />
          {!project.youtubeIds && !project.youtubeId && (
            <ProjectThumbnails
              project={project}
              selectedImageIndex={selectedImageIndex}
              onThumbnailClick={setSelectedImageIndex}
              onGalleryOpen={openGallery}
            />
          )}
          <ProjectGallery project={project} onImageClick={openGallery} />
        </div>
        <ProjectInfo project={project} />
      </div>

      <GalleryModal
        project={project}
        galleryOpen={galleryOpen}
        galleryIndex={galleryIndex}
        onOpenChange={setGalleryOpen}
        onPrevImage={() => project.images?.length && setGalleryIndex(index => index === 0 ? project.images!.length - 1 : index - 1)}
        onNextImage={() => project.images?.length && setGalleryIndex(index => index === project.images!.length - 1 ? 0 : index + 1)}
        onImageSelect={setGalleryIndex}
      />
    </div>
  );
};

export default ProjectDetail;
