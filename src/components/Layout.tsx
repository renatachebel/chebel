import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <footer className="mt-20 border-t border-border">
        <div className="container-custom py-10 md:py-12">
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="eyebrow mb-3 flex items-center gap-2 text-muted-foreground">
                <span className="signal-dot" /> Available for commissions & collaborations
              </p>
              <a href="mailto:chebel@gmail.com" className="text-sm hover-link">chebel@gmail.com</a>
            </div>
            <div className="text-sm">
              <p className="eyebrow mb-3 text-muted-foreground">Connect</p>
              <div className="flex items-center gap-5">
                <a href="https://instagram.com/infinitachebel" target="_blank" rel="noopener noreferrer" className="hover-link">Instagram</a>
                <a href="https://chebel.substack.com" target="_blank" rel="noopener noreferrer" className="hover-link">Substack</a>
              </div>
            </div>
            <div className="text-sm lg:text-right">
              <p className="eyebrow mb-3 text-muted-foreground">Based</p>
              <p>Brazil · Working worldwide</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-2 border-t border-border pt-4 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row">
            <span>© {new Date().getFullYear()} Renata Chebel</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
