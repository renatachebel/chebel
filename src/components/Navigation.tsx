import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const links = [{ to: '/', label: 'Work' }, { to: '/about', label: 'About' }, { to: '/substack', label: 'Substack' }];
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
    <header className="bg-background border-b border-border relative z-50">
      <div className="container-custom flex items-center justify-between h-24 gap-4">
        <Link to="/" className="font-display text-2xl whitespace-nowrap">Renata Chebel<span className="text-muted-foreground">.</span></Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
          {links.map(link => <Button key={link.to} asChild variant="link" className={`px-0 font-normal ${pathname === link.to ? 'text-foreground underline underline-offset-8' : 'text-muted-foreground'}`}><Link to={link.to}>{link.label}</Link></Button>)}
          <Button asChild variant="link" className="px-0 text-muted-foreground font-normal"><a href="mailto:chebel@gmail.com">Contact ↗</a></Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden container-custom pb-8 flex flex-col items-start gap-3">
        {links.map(link => <Button asChild variant="link" key={link.to} className="px-0 text-lg"><Link to={link.to}>{link.label}</Link></Button>)}
        <Button asChild variant="link" className="px-0 text-lg"><a href="mailto:chebel@gmail.com">Contact ↗</a></Button>
      </nav>}
    </header>
  );
};
export default Navigation;
