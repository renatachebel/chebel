
import React from 'react';
import Layout from '../components/Layout';
import { Instagram, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container-custom py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-12 animate-fade-in">
            ABOUT <span className="text-gradient">ME</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <p className="font-body text-lg">
                A Brazilian multimedia artist whose work explores alterity, nature, the sacred, and the feminine. With a background in journalism, she channels storytelling through generative art, video, photography, and projection mapping.
              </p>
              
              <p className="font-body">
                Chebel has a natural ability to blend diverse traditions, philosophies, and artistic mediums into cohesive, immersive experiences. Her work weaves together ancient wisdom and futuristic technology, bridging seemingly opposing worlds.
              </p>
              
              <p className="font-body">
                She consistently explores themes of spirituality, ecology, the feminine and alterity, creating projects that are both deeply personal and universally resonant. This blend of art and storytelling highlights her desire to connect with others on profound levels, creating spaces for reflection, growth, and transformation—for both herself and those who experience her art.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <a 
                  href="https://instagram.com/infinitachebel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center font-body text-sm tracking-wider group hover:text-white/90"
                >
                  <Instagram size={18} className="mr-2" />
                  @infinitachebel
                </a>
                
                <a 
                  href="https://instagram.com/iluminachebel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center font-body text-sm tracking-wider group hover:text-white/90"
                >
                  <Instagram size={18} className="mr-2" />
                  @iluminachebel
                </a>
              </div>
            </div>
            
            <div className="mt-12 space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="font-display text-2xl tracking-wider">EDUCATION & TRAINING</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">BA in Journalism</h3>
                  <p className="font-body text-white/70 mb-1">University of São Paulo - Brazil</p>
                  <p className="font-body text-sm text-white/50">2003 - 2008</p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">Digital Photography</h3>
                  <p className="font-body text-white/70 mb-1">Central Saint Martins</p>
                  <p className="font-body text-sm text-white/50">2008</p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">Fine Art Digital Printing</h3>
                  <p className="font-body text-white/70 mb-1">ICP - NYC</p>
                  <p className="font-body text-sm text-white/50">2015</p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">Production Design</h3>
                  <p className="font-body text-white/70 mb-1">School of Visual Arts - NYC</p>
                  <p className="font-body text-sm text-white/50">2013</p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">Spatial Poetry</h3>
                  <p className="font-body text-white/70 mb-1">Bauhaus-Universität Weimar</p>
                  <p className="font-body text-sm text-white/50">2017</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="sticky top-24 space-y-8">
              <div className="relative perspective">
                <div className="relative rounded-lg overflow-hidden transform hover:rotate-0 transition-transform duration-700 ease-out-expo shadow-xl">
                  <img 
                    src="/lovable-uploads/3c95e198-3ec7-4fc8-a131-4fc720de16a3.png" 
                    alt="Chebel Portrait" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-xl mb-2">Chebel</h3>
                  <p className="font-body text-white/70">Multimedia Artist</p>
                </div>
              </div>
              
              <div className="relative perspective mt-8">
                <div className="relative rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out-expo shadow-xl">
                  <img 
                    src="/lovable-uploads/6e9f6cab-d469-4093-b39b-ec290d5e5006.png" 
                    alt="Chebel performing VJ set" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-body text-sm text-white/60 mb-1">Based in</h4>
                  <p className="font-body">Brazil</p>
                </div>
                <div>
                  <h4 className="font-body text-sm text-white/60 mb-1">Experience</h4>
                  <p className="font-body">15+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-24 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h2 className="font-display text-2xl tracking-wider mb-8">MY APPROACH & PHILOSOPHY</h2>
          
          <div className="space-y-6">
            <p className="font-body">
              I believe that art should create meaningful connections—between ideas, between mediums, and most importantly, between people. My work aims to create spaces where viewers can encounter new perspectives and experiences that resonate on both intellectual and emotional levels.
            </p>
            
            <p className="font-body">
              Technology is central to my practice, but always in service of human experience rather than as an end in itself. I'm interested in how digital tools can be used to create work that feels organic, intuitive, and deeply connected to our lived experiences.
            </p>
            
            <p className="font-body">
              My creative process typically begins with extensive research and experimentation, followed by iterative development that allows concepts to evolve organically. I value collaboration and often work with other artists, musicians, programmers, and engineers to realize complex projects that exceed the limitations of individual disciplines.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
