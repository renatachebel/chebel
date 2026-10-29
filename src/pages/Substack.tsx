import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import Layout from '../components/Layout';

const Substack: React.FC = () => (
  <Layout>
    <div className="container-custom">
      <section className="min-h-[70vh] border-x border-border/50 px-4 py-14 md:px-8 md:py-20">
        <div className="mb-20 flex justify-between border-b border-border pb-5">
          <p className="eyebrow flex items-center gap-2 text-muted-foreground"><span className="signal-dot" /> Stories & photographs</p>
          <p className="eyebrow text-muted-foreground">Field journal</p>
        </div>
        <h1 className="portfolio-title">
          <span className="block">Else</span>
          <span className="outline-text ml-[10vw] block">where.</span>
        </h1>
        <div className="mt-20 grid gap-10 border-t border-border pt-8 md:grid-cols-12">
          <p className="display-heading text-2xl md:col-span-6 md:text-4xl">Travel stories, visual notes and observations from the road.</p>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:col-start-8">
            <a href="https://chebel.substack.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-primary-foreground">Read the journal <ArrowUpRight size={16} /></a>
            <a href="https://chebel.substack.com/subscribe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] hover:border-primary hover:text-primary">Subscribe <Mail size={16} /></a>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Substack;
