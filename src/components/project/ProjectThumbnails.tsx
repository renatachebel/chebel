
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
              index === selectedImageIndex ? 'ring-2 ring-foreground/70' : 'opacity-70'
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
          className="border-border font-body text-sm tracking-wider hover:border-foreground hover:bg-muted"
        >
          Gallery View
        </Button>
      </div>
    </div>
  );
};

export default ProjectThumbnails;
