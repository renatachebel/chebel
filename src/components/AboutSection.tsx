
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elementsToAnimate = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elementsToAnimate?.forEach((el) => observer.observe(el));
    
    return () => {
      elementsToAnimate?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-gradient-to-bl from-blue-600/5 via-purple-600/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="overflow-hidden">
              <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-8 animate-on-scroll opacity-0">
                ABOUT <span className="text-gradient">CHEBEL</span>
              </h2>
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ transitionDelay: "100ms" }}>
              <p className="font-body text-white/80 mb-6">
                As a multimedia artist, I explore the intersection of digital and physical realms through photography, video, immersive installations, and live performances.
              </p>
              
              <p className="font-body text-white/80 mb-6">
                My work examines the relationship between technology, perception, and human experience, creating sensory environments that challenge conventional boundaries.
              </p>
              
              <p className="font-body text-white/80 mb-8">
                With a background in both visual arts and computer science, I blend technical expertise with artistic vision to create works that are both conceptually rich and visually captivating.
              </p>
              
              <Link 
                to="/about" 
                className="inline-flex items-center font-body text-sm tracking-wider group"
              >
                MORE ABOUT ME
                <ArrowRight 
                  size={16} 
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                />
              </Link>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0" style={{ transitionDelay: "200ms" }}>
            <div className="relative perspective">
              <div 
                className="relative rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out-expo shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80" 
                  alt="Chebel" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              
              <div 
                className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 rotate-12 w-2/3 h-2/3 rounded-lg overflow-hidden shadow-xl z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Chebel creative process" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
