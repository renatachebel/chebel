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
      <section className="border-b border-border py-10 md:py-14">
        <h1 className="display-heading text-5xl md:text-7xl">About</h1>
      </section>

      <section className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
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
          <p className="display-heading text-3xl leading-[1.05] md:text-4xl">
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

      <section className="grid border-t border-border py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-8 md:col-start-3">
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

      <section className="border-t border-border py-16 md:py-20">
        <div className="mb-10">
          <h2 className="display-heading text-4xl md:text-5xl">Education</h2>
        </div>
        <div>
          {education.map(([title, place, date]) => (
            <div key={title} className="grid gap-3 border-t border-border py-5 md:grid-cols-12 md:items-center">
              <h3 className="display-heading text-xl md:col-span-6 md:text-2xl">{title}</h3>
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
