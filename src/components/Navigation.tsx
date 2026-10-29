import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const links = [
  { to: '/', label: 'Selected work' },
  { to: '/about', label: 'About' },
  { to: '/substack', label: 'Journal' },
];

const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="container-custom flex h-[76px] items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3" aria-label="Renata Chebel, home">
          <span className="flex h-8 w-8 items-center justify-center bg-primary font-display text-[0.68rem] font-bold text-primary-foreground transition-transform duration-500 group-hover:rotate-12">
            RC
          </span>
          <span className="font-display text-base font-semibold tracking-[-0.035em]">Renata Chebel</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.map(link => {
            const active = pathname === link.to || (link.to === '/' && pathname.startsWith('/projects/'));
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`eyebrow hover-link transition-colors ${active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="mailto:chebel@gmail.com"
          className="hidden items-center gap-2 border border-primary bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.13em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary md:inline-flex"
        >
          Contact <ArrowUpRight size={15} />
        </a>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-none border border-border md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="container-custom border-t border-border bg-background py-8 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link, index) => (
              <Link key={link.to} to={link.to} className="group flex items-center justify-between border-b border-border py-4">
                <span className="display-heading text-3xl">{link.label}</span>
                <span className="text-xs text-muted-foreground">0{index + 1}</span>
              </Link>
            ))}
            <a href="mailto:chebel@gmail.com" className="mt-7 inline-flex items-center gap-2 text-primary">
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
