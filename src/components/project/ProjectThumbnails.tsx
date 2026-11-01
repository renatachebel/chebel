
import React from 'react';
import { Project } from '../../data/types';
import { Button } from '../ui/button';

interface ProjectThumbnailsProps {
  project: Project;
  selectedImageIndex: number;
  onThumbnailClick: (index: number) => void;
  onGalleryOpen: (index: number) => void;
}

const ProjectThumbnails: React.FC<ProjectThumbnailsProps> = ({
  project,
  selectedImageIndex,
  onThumbnailClick,
  onGalleryOpen
}) => {
  if (!project.images || project.images.length <= 1) return null;
  
  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-2">
        {project.images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              onThumbnailClick(index);
              onGalleryOpen(index);
            }}
            className={`relative h-14 w-20 shrink-0 cursor-pointer overflow-hidden transition-all duration-300 hover:opacity-80 sm:h-16 sm:w-24 ${
              index === selectedImageIndex ? 'ring-2 ring-white/80' : 'opacity-70'
            }`}
          >
            <img 
              src={image} 
              alt={`${project.title} thumbnail ${index + 1}`} 
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Button 
          variant="outline" 
          onClick={() => onGalleryOpen(selectedImageIndex)}
          className="text-sm font-body tracking-wider border-white/30 hover:border-white hover:bg-white/5"
        >
          Gallery View
        </Button>
      </div>
    </div>
  );
};

export default ProjectThumbnails;
