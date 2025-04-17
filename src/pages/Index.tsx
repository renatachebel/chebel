
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import { getFeaturedProjects } from '../data/projects';

const Index: React.FC = () => {
  const featuredProjects = getFeaturedProjects();
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-blur-in');
            entry.target.classList.remove('opacity-0');
            // Once the animation is triggered, unobserve the element
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);
  
  return (
    <Layout>
      <HeroSection />
      
      <div id="featured-projects" className="py-24 relative opacity-0" ref={projectsRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0 opacity-50" />
        
        <div className="container-custom relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl tracking-wider mb-2">FEATURED PROJECTS</h2>
              <p className="font-body text-white/70">Selected works across different mediums</p>
            </div>
            
            <Link 
              to="/projects" 
              className="font-body text-sm tracking-wider hover-link"
            >
              VIEW ALL
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10" />
        
        <div className="container-custom relative z-10">
          <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-8 animate-fade-in">
              LET'S CREATE SOMETHING <span className="text-gradient">TOGETHER</span>
            </h2>
            
            <p className="font-body text-lg text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              I'm always open to collaborations and new projects. 
              Reach out at <a href="mailto:chebel@gmail.com" className="text-white hover:text-white/80 transition-colors">chebel@gmail.com</a> to discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
