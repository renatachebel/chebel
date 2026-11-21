import React from 'react';
import Layout from '../components/Layout';

const Sketchbook: React.FC = () => (
  <Layout>
    <div className="container-custom py-10 md:py-16">
      <div className="mb-12 border-y border-border py-8">
        <p className="eyebrow mb-5 text-primary">Ongoing visual research</p>
        <h1 className="display-heading text-4xl md:text-6xl">Photo diary</h1>
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
