import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { S } from '../theme';
import AvailabilityBadge from '../components/AvailabilityBadge';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [menuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
    { label: 'Writing', path: '/writing' },
    { label: 'About', path: '/about' },
  ];

  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 md:py-5 transition-all duration-300">
        <div className="flex items-center gap-6">
          <Link to="/" style={{ fontFamily: S.serif, fontSize: '1.3rem', color: S.gold, textDecoration: 'none', letterSpacing: '0.04em' }}>DHP.</Link>
          <AvailabilityBadge />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map(link => (
            <Link key={link.label} to={link.path} className="shrink-0" style={{ color: S.muted, textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = S.gold}
              onMouseLeave={e => e.target.style.color = S.muted}>
              {link.label}
            </Link>
          ))}
          {location.pathname === '/' ? (
            <a href="#contact" className="shrink-0" style={{ color: S.muted, textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = S.gold}
              onMouseLeave={e => e.target.style.color = S.muted}>
              Contact
            </a>
          ) : (
            <Link to="/#contact" className="shrink-0" style={{ color: S.muted, textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = S.gold}
              onMouseLeave={e => e.target.style.color = S.muted}>
              Contact
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden flex items-center justify-center w-[44px] h-[44px] z-[60]" onClick={() => setMenuOpen(!menuOpen)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: menuOpen ? S.gold : S.text, transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ display: 'block', width: '20px', height: '2px', background: menuOpen ? 'transparent' : S.text, transition: '0.3s' }}></span>
            <span style={{ display: 'block', width: '20px', height: '2px', background: menuOpen ? S.gold : S.text, transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[55] flex flex-col items-center justify-center" style={{ background: 'rgba(6,6,6,0.98)', backdropFilter: 'blur(10px)' }}>
          {navLinks.map(link => (
            <Link key={link.label} to={link.path} onClick={() => setMenuOpen(false)} style={{ color: S.text, textDecoration: 'none', fontSize: '1.5rem', fontFamily: S.serif, letterSpacing: '0.05em', margin: '1rem 0' }}>
              {link.label}
            </Link>
          ))}
          {location.pathname === '/' ? (
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{ color: S.text, textDecoration: 'none', fontSize: '1.5rem', fontFamily: S.serif, letterSpacing: '0.05em', margin: '1rem 0' }}>
              Contact
            </a>
          ) : (
            <Link to="/#contact" onClick={() => setMenuOpen(false)} style={{ color: S.text, textDecoration: 'none', fontSize: '1.5rem', fontFamily: S.serif, letterSpacing: '0.05em', margin: '1rem 0' }}>
              Contact
            </Link>
          )}
        </div>
      )}
    </>
  );
}
