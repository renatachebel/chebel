
import React from 'react';
import Layout from '../components/Layout';

const Sketchbook: React.FC = () => {
  return (
    <Layout>
      <div className="container-custom py-12 md:py-20">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider mb-12">
          Sketchbook
        </h1>
        
        <div className="glass-card p-4 sm:p-6 md:p-8 rounded-lg">
          <iframe 
            src="https://chebel.tumblr.com" 
            width="100%" 
            height="1000" 
            style={{ border: 'none' }}
            title="Chebel's Tumblr"
            className="w-full"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Sketchbook;
