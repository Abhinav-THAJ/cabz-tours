"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path ? 'active' : '';

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-container">
          <Link href="/" className="logo">
            <img src="/images/ai-logo.png" alt="Cabz Tours Logo" />
          </Link>
          <nav className="nav-links">
            <Link href="/" className={isActive('/')}>Home</Link>
            <Link href="/about" className={isActive('/about')}>About</Link>
            <Link href="/service" className={isActive('/service')}>Service</Link>
            <Link href="/tour-packages" className={isActive('/tour-packages')}>Packages</Link>
            <Link href="/contact" className={isActive('/contact')}>Contact</Link>
            <a href="tel:+919744312600" className="btn btn-primary">Get in touch</a>
          </nav>
          <button 
            className={`hamburger ${menuOpen ? 'open' : ''}`} 
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <Link href="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className={isActive('/about')} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/service" className={isActive('/service')} onClick={() => setMenuOpen(false)}>Service</Link>
          <Link href="/tour-packages" className={isActive('/tour-packages')} onClick={() => setMenuOpen(false)}>Packages</Link>
          <Link href="/contact" className={isActive('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href="tel:+919744312600" className="btn btn-primary">Get in touch</a>
        </div>
      </header>
    </>
  );
}
