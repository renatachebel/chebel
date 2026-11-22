import React, { useEffect, useState } from 'react';
import { Project } from '../data/types';
import MediaRenderer from './project/MediaRenderer';
import ProjectThumbnails from './project/ProjectThumbnails';
import ProjectGallery from './project/ProjectGallery';
import ProjectInfo from './project/ProjectInfo';
import GalleryModal from './project/GalleryModal';
import EditorialProjectDetail from './project/EditorialProjectDetail';

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

  if (project.editorialSections) {
    return <EditorialProjectDetail project={project} />;
  }

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
      <div className="mb-12 grid gap-8 pb-6 md:mb-16 md:pb-8 xl:grid-cols-12 xl:items-end xl:gap-16">
        <div className="xl:col-span-9">
          <p className="eyebrow mb-5 text-primary">{project.category.map(category => category.replace(/-/g, ' ')).join(' / ')}</p>
          <h1 className="display-heading text-[clamp(2.5rem,5.5vw,5.5rem)]">{project.title}</h1>
        </div>
        <p className="text-[1.08rem] leading-8 text-muted-foreground xl:col-span-3">{project.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-14 xl:grid-cols-12 xl:gap-16">
        <div className="xl:col-span-9">
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
