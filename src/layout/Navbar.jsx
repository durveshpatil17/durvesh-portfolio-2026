import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { S } from '../theme';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'Writing', to: '/writing' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 clamp(1.25rem, 5vw, 5rem)',
    height: '64px',
    transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
    background: scrolled ? 'rgba(6,6,6,0.92)' : 'transparent',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
  };

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <Link to="/" style={{ fontFamily: S.serif, fontSize: '1.4rem', color: S.gold, textDecoration: 'none', letterSpacing: '0.04em', flexShrink: 0 }}>
          DHP.
        </Link>

        {/* Desktop links — centered absolutely */}
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '2.5rem' }} className="hidden md:flex">
          {NAV_LINKS.map(({ label, to }) => {
            const active = location.pathname === to;
            return (
              <Link key={to} to={to} style={{
                color: active ? S.gold : S.muted,
                textDecoration: 'none', fontSize: '0.7rem',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                transition: 'color 0.2s', fontWeight: 500,
              }}
                onMouseEnter={e => { if (!active) e.target.style.color = S.text; }}
                onMouseLeave={e => { if (!active) e.target.style.color = S.muted; }}>
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          aria-label="Toggle menu">
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px', background: S.text,
              transition: 'all 0.3s',
              transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)' : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none') : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 49,
          background: 'rgba(6,6,6,0.98)', backdropFilter: 'blur(12px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
        }}>
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={to} to={to} onClick={() => setMenuOpen(false)} style={{
              fontFamily: S.serif, fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              color: location.pathname === to ? S.gold : S.text,
              textDecoration: 'none', letterSpacing: '0.02em',
              transition: 'color 0.2s',
            }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
