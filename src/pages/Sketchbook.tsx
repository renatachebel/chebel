
import React from 'react';
import Layout from '../components/Layout';
import { ArrowLeft } from 'lucide-react';

const Sketchbook: React.FC = () => {
  return (
    <Layout>
      <div className="pt-12 pb-24">
        <div className="container-custom">
          <div className="mb-12">
            <a 
              href="/" 
              className="inline-flex items-center font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </a>
          </div>
          
          <div className="mb-16 max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-12 animate-fade-in">SKETCHBOOK</h1>
          </div>
          
          <div className="w-full overflow-hidden glass-card rounded-lg">
            <iframe 
              src="https://chebel.tumblr.com" 
              width="100%" 
              height="1000" 
              className="border-0 w-full"
              title="Chebel Tumblr"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sketchbook;
