
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlignRight, X } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div>
          <Link to="/" className="font-display text-xl tracking-wider">
            RENATA CHEBEL
          </Link>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Link 
                to="/" 
                className={`font-body text-sm transition-colors ${
                  isActive('/') ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`font-body text-sm transition-colors ${
                  isActive('/projects') || location.pathname.includes('/projects/') 
                    ? 'text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link 
                to="/photodiary" 
                className={`font-body text-sm transition-colors ${
                  isActive('/photodiary') ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                PHOTO DIARY
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`font-body text-sm transition-colors ${
                  isActive('/about') ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            className="text-white"
          >
            <AlignRight />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
      
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
          <div className="container-custom py-6 flex justify-between items-center">
            <div>
              <Link to="/" className="font-display text-xl tracking-wider">
                RENATA CHEBEL
              </Link>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              <X />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          
          <nav className="container-custom py-16">
            <ul className="flex flex-col gap-8">
              <li>
                <Link 
                  to="/" 
                  className={`font-body text-2xl transition-colors ${
                    isActive('/') ? 'text-white' : 'text-white/60'
                  }`}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className={`font-body text-2xl transition-colors ${
                    isActive('/projects') || location.pathname.includes('/projects/') 
                      ? 'text-white' 
                      : 'text-white/60'
                  }`}
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link 
                  to="/photodiary" 
                  className={`font-body text-2xl transition-colors ${
                    isActive('/photodiary') ? 'text-white' : 'text-white/60'
                  }`}
                >
                  PHOTO DIARY
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`font-body text-2xl transition-colors ${
                    isActive('/about') ? 'text-white' : 'text-white/60'
                  }`}
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
