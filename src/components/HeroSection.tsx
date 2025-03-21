
import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample images for the carousel
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    alt: "Multimedia art installation"
  },
  {
    url: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3566&q=80",
    alt: "Visual performance"
  },
  {
    url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    alt: "Audio visual setup"
  },
  {
    url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    alt: "Colorful light art"
  }
];

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
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden" ref={containerRef}>
      {/* Background gradient overlays */}
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
      
      {/* Hero Image Carousel */}
      <div className="w-full h-screen absolute inset-0 z-0">
        <Carousel 
          className="w-full h-full" 
          opts={{
            loop: true,
            duration: 50,
            watchDrag: false,
          }}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="h-full w-full relative">
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full h-full object-cover opacity-70"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-20 -left-2 lg:left-4 bg-black/30 hover:bg-black/60 border-white/20" />
          <CarouselNext className="z-20 -right-2 lg:right-4 bg-black/30 hover:bg-black/60 border-white/20" />
        </Carousel>
      </div>
      
      {/* Hero content */}
      <div className="container-custom relative z-10 flex flex-col justify-center items-start h-full pt-20">
        <div className="perspective max-w-2xl">
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float text-white/60 hover:text-white transition-colors duration-300 z-10"
      >
        <span className="font-body text-xs tracking-widest mb-2">SCROLL</span>
        <ArrowDownIcon size={20} />
      </button>
    </section>
  );
};

export default HeroSection;
