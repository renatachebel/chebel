
import React, { useState, useEffect } from 'react';
import { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Reset state when project changes
    setSelectedImageIndex(0);
    setIsLoading(true);
  }, [project.id]);
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  
  const renderThumbnails = () => {
    if (!project.images || project.images.length <= 1) return null;
    
    return (
      <div className="flex overflow-x-auto space-x-4 scrollbar-hidden py-4 mt-8">
        {project.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`relative flex-shrink-0 w-20 h-20 overflow-hidden rounded-md transition-all duration-300 ${
              index === selectedImageIndex ? 'ring-2 ring-white/80' : 'opacity-50 hover:opacity-80'
            }`}
          >
            <img 
              src={image} 
              alt={`${project.title} thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    );
  };
  
  const renderMedia = () => {
    if (project.images && project.images.length > 0) {
      return (
        <div className="relative overflow-hidden rounded-lg">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <img 
            src={project.images[selectedImageIndex]} 
            alt={project.title} 
            className="w-full h-auto transition-opacity duration-500"
            style={{ opacity: isLoading ? 0.5 : 1 }}
            onLoad={handleImageLoad}
          />
        </div>
      );
    } else if (project.videos && project.videos.length > 0) {
      return (
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <video 
            src={project.videos[0]} 
            controls
            poster={project.thumbnail}
            className="w-full h-full object-cover"
            onLoadedData={handleImageLoad}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      return (
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-auto"
            onLoad={handleImageLoad}
          />
        </div>
      );
    }
  };
  
  return (
    <div className="animate-fade-in">
      <div className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider mb-4">
          {project.title}
        </h1>
        <p className="font-body text-lg text-white/80 max-w-3xl">
          {project.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          {renderMedia()}
          {renderThumbnails()}
        </div>
        
        <div className="glass-card p-8 self-start">
          <div className="mb-8">
            <h3 className="font-display text-lg tracking-wider mb-4">PROJECT DETAILS</h3>
            <p className="font-body text-white/80 whitespace-pre-line">{project.details}</p>
          </div>
          
          <div className="border-t border-white/10 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-body text-sm text-white/60 mb-1">Category</h4>
                <p className="font-body">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
              </div>
              <div>
                <h4 className="font-body text-sm text-white/60 mb-1">Date</h4>
                <p className="font-body">{project.date}</p>
              </div>
              {project.client && (
                <div>
                  <h4 className="font-body text-sm text-white/60 mb-1">Client</h4>
                  <p className="font-body">{project.client}</p>
                </div>
              )}
              {project.location && (
                <div>
                  <h4 className="font-body text-sm text-white/60 mb-1">Location</h4>
                  <p className="font-body">{project.location}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
