
import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = containerRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '1');
        const rotateX = y * 10 * speed;
        const rotateY = x * 10 * speed;
        const translateX = x * 20 * speed;
        const translateY = y * 20 * speed;
        
        (el as HTMLElement).style.transform = `
          translate(${translateX}px, ${translateY}px)
          rotateX(${rotateX}deg) rotateY(${rotateY}deg)
        `;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden" ref={containerRef}>
      <div 
        className="absolute top-0 right-0 w-full h-full opacity-30 bg-gradient-to-b from-violet-900/20 via-transparent to-transparent"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(120, 40, 200, 0.15), transparent 40%)'
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 w-full h-full opacity-30 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(40, 80, 200, 0.15), transparent 40%)'
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="perspective">
          <div className="preserve-3d backface-hidden">
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-wider leading-none mb-4 md:mb-6 animate-fade-in text-gradient parallax" data-speed="0.5">
              MULTIMEDIA<br />ARTIST
            </h1>
            
            <div className="overflow-hidden mb-8">
              <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl animate-slide-up parallax" data-speed="0.3">
                Photography • Video • Immersive Installations • VJ Performance
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 mt-10 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Link 
                to="/projects" 
                className="parallax glass-card py-4 px-8 text-sm font-body tracking-wider transition-all duration-500 hover:scale-105 hover:bg-white/10"
                data-speed="0.8"
              >
                EXPLORE PROJECTS
              </Link>
              <Link 
                to="/about" 
                className="parallax py-4 px-8 text-sm font-body tracking-wider border border-white/30 transition-all duration-500 hover:border-white hover:bg-white/5"
                data-speed="0.9"
              >
                ABOUT ME
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float text-white/60 hover:text-white transition-colors duration-300"
      >
        <span className="font-body text-xs tracking-widest mb-2">SCROLL</span>
        <ArrowDownIcon size={20} />
      </button>
    </section>
  );
};

export default HeroSection;
