import React from 'react';
import Layout from '../components/Layout';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

const Substack: React.FC = () => <Layout>
  <section className="container-custom py-16 md:py-24">
    <p className="text-muted-foreground text-xs uppercase tracking-widest mb-5">Stories & photographs</p>
    <h1 className="font-display portfolio-title mb-10">Substack</h1>
    <div className="border-t border-border pt-10 max-w-3xl">
      <p className="text-xl text-muted-foreground leading-relaxed mb-10">Visit my substack to read my travel stories and see my travel photos.</p>
      <div className="flex flex-wrap gap-4">
        <Button asChild variant="outline" size="lg"><a href="https://chebel.substack.com" target="_blank" rel="noopener noreferrer">Visit Substack <ArrowUpRight /></a></Button>
        <Button asChild size="lg"><a href="https://chebel.substack.com/subscribe" target="_blank" rel="noopener noreferrer">Subscribe <Mail /></a></Button>
      </div>
    </div>
  </section>
</Layout>;
export default Substack;
