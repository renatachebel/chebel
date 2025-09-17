import React from 'react';
import Layout from '../components/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Substack: React.FC = () => {
  return (
    <Layout>
      <div className="pt-12 pb-24">
        <div className="container-custom">
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="mb-16 max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-12 animate-fade-in">SUBSTACK</h1>
          </div>
          
          <div className="w-full overflow-hidden glass-card rounded-lg">
            <div className="relative pb-[150%] md:pb-[100%] w-full h-0">
              <iframe 
                src="https://chebel.substack.com" 
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Chebel Substack"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Substack;