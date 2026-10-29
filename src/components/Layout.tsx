import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <footer className="mt-24 border-t border-border">
        <div className="container-custom py-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow mb-5 flex items-center gap-2 text-muted-foreground">
                <span className="signal-dot" /> Available for commissions & collaborations
              </p>
              <a href="mailto:chebel@gmail.com" className="group inline-flex items-end gap-3">
                <span className="display-heading text-[clamp(2.7rem,7vw,7rem)]">Let’s make<br />something alive.</span>
                <ArrowUpRight className="mb-2 text-primary transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 md:mb-4" size={38} />
              </a>
            </div>
            <div className="grid gap-7 text-sm lg:col-span-4 lg:grid-cols-2">
              <div>
                <p className="eyebrow mb-3 text-muted-foreground">Connect</p>
                <div className="flex flex-col items-start gap-2">
                  <a href="mailto:chebel@gmail.com" className="hover-link">Email</a>
                  <a href="https://instagram.com/infinitachebel" target="_blank" rel="noopener noreferrer" className="hover-link">Instagram</a>
                  <a href="https://chebel.substack.com" target="_blank" rel="noopener noreferrer" className="hover-link">Substack</a>
                </div>
              </div>
              <div>
                <p className="eyebrow mb-3 text-muted-foreground">Based</p>
                <p>Brazil<br />Working worldwide</p>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col justify-between gap-2 border-t border-border pt-5 text-[0.67rem] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row">
            <span>© {new Date().getFullYear()} Renata Chebel</span>
            <span>Art · Film · Technology · Nature</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
