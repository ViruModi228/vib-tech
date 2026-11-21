'use client';
import Link, { PREVIEW } from '@/components/A';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';
import ScrollProgress from './ScrollProgress';
import { company, nav } from '@/lib/data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nextPath = usePathname();
  const [previewPath, setPreviewPath] = useState('/');
  useEffect(() => {
    if (!PREVIEW) return;
    const f = window.location.pathname.split('/').pop() || 'index.html';
    setPreviewPath(f === 'index.html' ? '/' : `/${f.replace(/\.html$/, '')}/`);
  }, []);
  const path = PREVIEW ? previewPath : nextPath;

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const isActive = (href: string) => (href === '/' ? path === '/' : path.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <span><Clock size={14} /> {company.hours}</span>
          <span className="topbar__right">
            <a href={`mailto:${company.email}`}><Mail size={14} /> {company.email}</a>
            <a href={company.phoneHref}><Phone size={14} /> {company.phone}</a>
          </span>
        </div>
      </div>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Link href="/" aria-label="VIB Tech home"><Logo /></Link>
          <nav className="nav" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={`nav__link ${isActive(n.href) ? 'is-active' : ''}`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="header__cta">
            <a className="header__phone" href={company.phoneHref}><Phone size={16} /> {company.phone}</a>
            <Link href="/contact/?topic=quote#enquiry" className="btn btn--primary btn--sm">Request a quote</Link>
          </div>
          <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <nav aria-label="Mobile">
                {nav.map((n) => (
                  <Link key={n.href} href={n.href} className={`mobile-nav__link ${isActive(n.href) ? 'is-active' : ''}`}>
                    {n.label}
                  </Link>
                ))}
              </nav>
              <Link href="/contact/?topic=quote#enquiry" className="btn btn--primary btn--block">Request a quote</Link>
              <a href={company.phoneHref} className="btn btn--ghost btn--block"><Phone size={16} /> Call {company.phone}</a>
            </motion.div>
          )}
        </AnimatePresence>
        <ScrollProgress />
      </header>
    </>
  );
}
