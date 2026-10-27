import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return <div className="min-h-screen bg-background text-foreground flex flex-col">
    <Navigation />
    <main className="flex-grow">{children}</main>
    <footer className="border-t border-border mt-16 py-8">
      <div className="container-custom flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Renata Chebel</span>
        <a href="mailto:chebel@gmail.com" className="hover:text-foreground">chebel@gmail.com ↗</a>
      </div>
    </footer>
  </div>;
};
export default Layout;
