
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={`transition-all duration-300 ${
        scrolled ? 'py-3 glass-card shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="font-display text-xl tracking-widest transition-all duration-300 hover:opacity-80"
          >
            CHEBEL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm tracking-wider transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white hover-link after:w-full'
                    : 'text-white/70 hover-link hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1 rounded-md text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 glass-card transform transition-transform duration-500 ease-out-expo ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container-custom h-full flex flex-col">
          <div className="flex justify-between items-center py-6">
            <div className="font-display text-xl tracking-widest">CHEBEL</div>
            <button 
              className="p-1 rounded-md text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-8 items-center justify-center flex-grow pb-20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-2xl tracking-wider transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
