import React from 'react';
import { ArrowUpRight, Instagram, Mail, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const education = [
  ['BA in Journalism', 'University of São Paulo · Brazil', '2003—2008'],
  ['Digital Photography', 'Central Saint Martins · London', '2008'],
  ['Fine Art Digital Printing', 'ICP · New York', '2015'],
  ['Production Design', 'School of Visual Arts · New York', '2013'],
  ['Spatial Poetry', 'Bauhaus-Universität Weimar', '2017'],
];

const About: React.FC = () => (
  <Layout>
    <div className="container-custom">
      <section className="border-x border-border/50 px-4 py-12 md:px-8 md:py-20">
        <div className="mb-20 flex items-center justify-between border-b border-border pb-5">
          <p className="eyebrow flex items-center gap-2 text-muted-foreground"><span className="signal-dot" /> About the artist</p>
          <p className="eyebrow text-muted-foreground">São Paulo · Brazil</p>
        </div>
        <h1 className="portfolio-title animate-fade-in">
          <span className="block">Hybrid</span>
          <span className="outline-text ml-[10vw] block">worlds.</span>
        </h1>
      </section>

      <section className="grid gap-12 border-t border-border py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <div className="sticky top-28">
            <img
              src="/lovable-uploads/3c95e198-3ec7-4fc8-a131-4fc720de16a3.png"
              alt="Renata Chebel"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="mt-4 flex justify-between border-t border-border pt-3">
              <p className="eyebrow text-muted-foreground">Renata Chebel</p>
              <p className="eyebrow text-muted-foreground">Multimedia artist</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="display-heading text-3xl leading-[1.02] md:text-5xl">
            I explore the porous boundaries between nature, technology, spirituality and memory.
          </p>
          <div className="mt-12 space-y-7 border-t border-border pt-8 text-base leading-8 text-muted-foreground md:text-lg">
            <p>
              I am Renata Chebel, a Brazilian multimedia artist working with generative art, video, photography, projection mapping and physical installations. With a background in journalism, storytelling remains at the heart of everything I create.
            </p>
            <p>
              My experimental practice also includes performance, soundscapes and embroidery, often dissolving the line between digital and handmade, ancestral and futuristic.
            </p>
            <p>
              My work has been presented at the Bombay Beach Biennale, Taiwan Technology and Culture Expo, MAPP in Canada and Amazonia Mapping in Brazil. I am especially drawn to collaborative, site-specific projects that bring ancient wisdom into dialogue with emerging technologies.
            </p>
          </div>

          <div className="mt-12 grid gap-5 border-t border-border pt-7 sm:grid-cols-2">
            <a href="https://instagram.com/infinitachebel" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-border pb-4">
              <span className="flex items-center gap-3"><Instagram size={17} className="text-primary" /> @infinitachebel</span>
              <ArrowUpRight size={17} className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <a href="https://instagram.com/iluminachebel" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-border pb-4">
              <span className="flex items-center gap-3"><Instagram size={17} className="text-primary" /> @iluminachebel</span>
              <ArrowUpRight size={17} className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-12 border-t border-border py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow mb-5 text-primary">Field notes / 01</p>
          <h2 className="display-heading text-4xl md:text-5xl">A practice in motion.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <img
            src="/lovable-uploads/6e9f6cab-d469-4093-b39b-ec290d5e5006.png"
            alt="Renata Chebel performing a live visual set"
            className="aspect-video w-full object-cover"
          />
          <div className="mt-5 grid gap-6 sm:grid-cols-3">
            <div><p className="eyebrow mb-2 text-muted-foreground">Based in</p><p>Brazil</p></div>
            <div><p className="eyebrow mb-2 text-muted-foreground">Experience</p><p>15+ years</p></div>
            <div><p className="eyebrow mb-2 text-muted-foreground">Mode</p><p>Collaborative</p></div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="mb-14 flex items-end justify-between">
          <h2 className="display-heading text-5xl md:text-7xl">Education</h2>
          <span className="eyebrow text-muted-foreground">Selected training</span>
        </div>
        <div>
          {education.map(([title, place, date], index) => (
            <div key={title} className="grid gap-3 border-t border-border py-5 md:grid-cols-12 md:items-center">
              <span className="eyebrow text-primary md:col-span-1">0{index + 1}</span>
              <h3 className="display-heading text-2xl md:col-span-5">{title}</h3>
              <p className="text-sm text-muted-foreground md:col-span-4">{place}</p>
              <p className="eyebrow text-muted-foreground md:col-span-2 md:text-right">{date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-y border-border py-10 md:grid-cols-2">
        <a href="mailto:chebel@gmail.com" className="group flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center bg-primary text-primary-foreground"><Mail size={18} /></span>
          <div><p className="eyebrow text-muted-foreground">Email</p><p className="mt-1 group-hover:text-primary">chebel@gmail.com</p></div>
        </a>
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center border border-border text-primary"><MapPin size={18} /></span>
          <div><p className="eyebrow text-muted-foreground">Location</p><p className="mt-1">Brazil · Available worldwide</p></div>
        </div>
      </section>
    </div>
  </Layout>
);

export default About;
