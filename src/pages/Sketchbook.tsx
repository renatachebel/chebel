import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Sketchbook: React.FC = () => (
  <Layout>
    <div className="container-custom py-10 md:py-16">
      <Link to="/" className="eyebrow mb-12 inline-flex items-center gap-2 text-muted-foreground hover:text-primary"><ArrowLeft size={15} /> Back to archive</Link>
      <div className="mb-12 border-y border-border py-8">
        <p className="eyebrow mb-5 text-primary">Ongoing visual research</p>
        <h1 className="display-heading text-6xl md:text-8xl">Photo diary</h1>
      </div>
      <div className="w-full overflow-hidden border border-border bg-card">
        <div className="relative h-0 w-full pb-[150%] md:pb-[100%]">
          <iframe
            src="https://chebel.tumblr.com"
            className="absolute inset-0 h-full w-full border-0"
            title="Renata Chebel photo diary"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default Sketchbook;
