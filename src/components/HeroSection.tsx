
import React from 'react';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video 
          src="/bg-video.mp4" 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-black/60 via-black/10 to-transparent" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mt-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <button
            onClick={onExploreClick}
            className="glass-card px-8 py-4 font-body text-sm tracking-wider text-white hover:text-white/80 transition-all duration-300 hover:scale-105"
          >
            EXPLORE PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
