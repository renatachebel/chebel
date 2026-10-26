
import React from 'react';
import { Project } from '../../data/types';
import { Button } from '../ui/button';

interface ProjectGalleryProps {
  project: Project;
  onImageClick: (index: number) => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  project,
  onImageClick
}) => {
  const hasMultipleVideos = !!(project.youtubeIds && project.youtubeIds.length > 0);
  const hasVideo = hasMultipleVideos || !!project.youtubeId;
  const hasImages = !!(project.images && project.images.length > 0);

  if (!hasVideo || !hasImages) return null;

  return (
    <div className="mt-12">
      <h3 className="font-display text-xl tracking-wider mb-6">
        {hasMultipleVideos ? 'Installation Views' : 'Gallery'}
      </h3>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {project.images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden cursor-pointer mb-4 break-inside-avoid"
            onClick={() => onImageClick(index)}
          >
            <img
              src={image}
              alt={`${project.title} view ${index + 1}`}
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <Button
          variant="outline"
          onClick={() => onImageClick(0)}
          className="text-sm font-body tracking-wider border-white/30 hover:border-white hover:bg-white/5"
        >
          Gallery View
        </Button>
      </div>
    </div>
  );
};

export default ProjectGallery;
