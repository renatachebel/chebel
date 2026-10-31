import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import Layout from '../components/Layout';

const Substack: React.FC = () => (
  <Layout>
    <div className="container-custom">
      <section className="min-h-[60vh] px-0 py-10 md:py-14">
        <h1 className="display-heading text-5xl md:text-7xl">Journal</h1>
        <div className="mt-12 grid gap-10 border-t border-border pt-8 md:grid-cols-12">
          <p className="display-heading text-2xl md:col-span-6 md:text-3xl">Travel stories, visual notes and observations from the road.</p>
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
