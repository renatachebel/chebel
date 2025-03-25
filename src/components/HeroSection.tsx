
import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Use the correct image paths (without /public prefix)
const heroImages = [
  {
    url: "/lovable-uploads/f80972c5-c4a4-496b-8171-e2730dd1b15b.png",
    alt: "Person with book"
  },
  {
    url: "/lovable-uploads/0fac703d-544a-4c73-89b3-c17395277326.png",
    alt: "Hands reaching towards the moon"
  },
  {
    url: "/lovable-uploads/9f887525-f0f5-4f1e-aaa2-cc0136937f34.png",
    alt: "Hands holding shell"
  },
  {
    url: "/lovable-uploads/0d8d6b1a-36c3-465c-9c91-54e5a6ed1d32.png",
    alt: "Person with mirror"
  },
  {
    url: "/lovable-uploads/db4eb682-0549-4794-9705-38f15b4324ec.png",
    alt: "Portrait of two people"
  },
  {
    url: "/lovable-uploads/74e50d6a-6c0b-44a1-a00c-c08924c76a11.png",
    alt: "Person with yellow fringe necklace"
  },
  {
    url: "/lovable-uploads/daa43558-4d77-43f4-9f6b-cfde79a2838b.png",
    alt: "Person with metallic material"
  }
];

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Get a random starting image index
  const startIndex = useRef<number>(Math.floor(Math.random() * heroImages.length));
  const [activeIndex, setActiveIndex] = React.useState(startIndex.current);
  const [prevIndex, setPrevIndex] = React.useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  
  useEffect(() => {
    // Auto-rotate images every 6 seconds
    const interval = setInterval(() => {
      const next = (activeIndex + 1) % heroImages.length;
      setPrevIndex(activeIndex);
      setActiveIndex(next);
      setIsTransitioning(true);
      
      // After transition completes, reset the transition state
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // 1 second transition time
    }, 6000); // 6 seconds display time per image
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
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
      
      {/* Hero Images with Crossfade Transition */}
      <div className="w-full h-screen absolute inset-0 z-0">
        {/* Container for both images to maintain consistent sizing */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Previous image */}
          {prevIndex !== null && (
            <div 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={heroImages[prevIndex].url} 
                alt={heroImages[prevIndex].alt} 
                className="w-full h-full object-cover opacity-70"
                style={{ 
                  transform: 'scale(1.05)',
                  transition: 'transform 6s ease-in-out'
                }}
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
            </div>
          )}
          
          {/* Current active image */}
          <div 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            <img 
              src={heroImages[activeIndex].url} 
              alt={heroImages[activeIndex].alt}
              className="w-full h-full object-cover opacity-70"
              style={{ 
                transform: 'scale(1.05)',
                transition: 'transform 6s ease-in-out'
              }}
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
          </div>
        </div>
      </div>
      
      {/* Hero content */}
      <div className="container-custom relative z-10 flex flex-col justify-center items-start h-full pt-20">
        <div className="perspective max-w-2xl mt-10">
          <div className="preserve-3d backface-hidden">
            {/* Smaller title positioned closer to the top */}
            <h1 className="font-display text-xl md:text-2xl lg:text-3xl tracking-wider leading-none mb-4 md:mb-6 animate-fade-in text-gradient parallax" data-speed="0.5">
              MULTIMEDIA ARTIST
            </h1>
            
            <div className="overflow-hidden mb-8 mt-4">
              <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl animate-slide-up parallax" data-speed="0.3">
                Photography - Video - Installations - Generative Art - Video Mapping - VJ
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
