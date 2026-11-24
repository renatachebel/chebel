import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import ContactCard from './ContactCard';

const links = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/substack', label: 'Journal' },
];

const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape' && !event.defaultPrevented) setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl">
      <div className="container-custom flex h-[82px] items-center justify-between gap-6">
        <Link to="/" className="group" aria-label="Renata Chebel, home">
          <span className="brand-name">Renata Chebel</span>
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

        <ContactCard className="hidden items-center border border-primary bg-primary px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.13em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary md:inline-flex" />

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
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="container-custom bg-background py-8 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link, index) => (
              <Link key={link.to} to={link.to} className="group flex items-center justify-between py-4">
                <span className="display-heading text-3xl">{link.label}</span>
                <span className="text-sm text-muted-foreground">0{index + 1}</span>
              </Link>
            ))}
            <ContactCard align="start" className="mt-7 self-start text-primary" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
