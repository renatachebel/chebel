
import React from 'react';
import Layout from '../components/Layout';

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
                I am a multimedia artist working at the intersection of photography, video, installation art, and live performance. My practice explores the relationship between technology, perception, and human experience.
              </p>
              
              <p className="font-body">
                With a background in both visual arts and computer science, I blend technical expertise with artistic vision to create works that are both conceptually rich and visually captivating. My approach is characterized by a meticulous attention to detail and a commitment to pushing the boundaries of what's possible within my chosen mediums.
              </p>
              
              <p className="font-body">
                My photography examines the interplay between light, space, and form, often focusing on urban landscapes, architectural elements, and intimate portraits that reveal hidden narratives. In my video work, I experiment with temporal structures and visual storytelling to create immersive experiences that challenge conventional perceptions of time and space.
              </p>
              
              <p className="font-body">
                My installations merge physical and digital elements to create responsive environments that invite participants to become active agents in the work. Through sensors, projection mapping, and custom software, these pieces transform spaces into dynamic, interactive experiences that evolve with audience engagement.
              </p>
              
              <p className="font-body">
                As a VJ performer, I create real-time visual compositions that respond to and enhance musical experiences, using a combination of pre-rendered content and generative visuals that evolve in response to sound frequencies and audience energy.
              </p>
            </div>
            
            <div className="mt-12 space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="font-display text-2xl tracking-wider">EDUCATION & TRAINING</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">MFA in New Media</h3>
                  <p className="font-body text-white/70 mb-1">University of Digital Arts</p>
                  <p className="font-body text-sm text-white/50">2018 - 2020</p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">BA in Visual Communications</h3>
                  <p className="font-body text-white/70 mb-1">Arts Institute</p>
                  <p className="font-body text-sm text-white/50">2014 - 2018</p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">Certificate in Creative Coding</h3>
                  <p className="font-body text-white/70 mb-1">Tech & Art Workshop</p>
                  <p className="font-body text-sm text-white/50">2019</p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">Photography Masterclass</h3>
                  <p className="font-body text-white/70 mb-1">Visual Arts Academy</p>
                  <p className="font-body text-sm text-white/50">2017</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="sticky top-24">
              <div className="relative perspective">
                <div className="relative rounded-lg overflow-hidden transform hover:rotate-0 transition-transform duration-700 ease-out-expo shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
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
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-body text-sm text-white/60 mb-1">Based in</h4>
                  <p className="font-body">New York, USA</p>
                </div>
                <div>
                  <h4 className="font-body text-sm text-white/60 mb-1">Experience</h4>
                  <p className="font-body">7+ Years</p>
                </div>
                <div>
                  <h4 className="font-body text-sm text-white/60 mb-1">Exhibitions</h4>
                  <p className="font-body">15+ Shows</p>
                </div>
                <div>
                  <h4 className="font-body text-sm text-white/60 mb-1">Collaborations</h4>
                  <p className="font-body">20+ Projects</p>
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
