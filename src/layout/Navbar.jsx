import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { S } from '../theme';

const LINKS = [
  { to: '/',        label: 'Home' },
  { to: '/work',    label: 'Work' },
  { to: '/writing', label: 'Writing' },
  { to: '/about',   label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [onDark,   setOnDark]     = useState(true);
  const location = useLocation();

  // Detect if we're in the dark hero zone
  useEffect(() => {
    const handler = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > 60);
      setOnDark(window.scrollY < heroHeight * 0.8);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; }, [menuOpen]);

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  const textColor = scrolled
    ? '#111111'
    : onDark ? 'rgba(255,255,255,0.75)' : '#111111';
  const activeColor = scrolled ? '#534AB7' : onDark ? '#FFFFFF' : '#534AB7';
  const logoColor   = scrolled ? '#111111' : onDark ? '#FFFFFF' : '#111111';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: '60px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1.25rem, 5vw, 4rem)',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        background: scrolled ? 'rgba(250,250,248,0.94)' : 'transparent',
        borderBottom: scrolled ? '0.5px solid #E5E4E0' : '0.5px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: S.serif, fontSize: '1.35rem',
          color: logoColor, textDecoration: 'none',
          letterSpacing: '0.03em', fontStyle: 'italic',
          transition: 'color 0.3s', flexShrink: 0,
        }}>
          Durvesh Patil.
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '2.5rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          {LINKS.map(({ to, label }) => {
            const active = isActive(to);
            return (
              <Link key={to} to={to} style={{
                color: active ? activeColor : textColor,
                textDecoration: 'none',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: active ? 500 : 400,
                transition: 'color 0.2s',
                position: 'relative',
              }}>
                {label}
                {active && (
                  <span style={{
                    position: 'absolute', bottom: '-4px', left: 0, right: 0,
                    height: '1px',
                    background: scrolled ? '#534AB7' : onDark ? 'rgba(255,255,255,0.6)' : '#534AB7',
                  }} />
                )}
              </Link>
            );
          })}
        </div>

        {/* Connect CTA — desktop */}
        <a href="#contact" className="hidden md:block" style={{
          padding: '0.5rem 1.25rem',
          background: scrolled ? '#111111' : onDark ? 'rgba(255,255,255,0.12)' : '#111111',
          border: scrolled ? '0.5px solid #111111' : onDark ? '0.5px solid rgba(255,255,255,0.3)' : '0.5px solid #111111',
          color: scrolled ? '#FFFFFF' : onDark ? '#FFFFFF' : '#FFFFFF',
          borderRadius: '30px',
          fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
          textDecoration: 'none', fontWeight: 500,
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
          Connect
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px', minWidth: '44px', minHeight: '44px', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Toggle menu">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px',
              background: onDark && !scrolled ? '#FFFFFF' : '#111111',
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(4.5px,4.5px)'
                : i === 2 ? 'rotate(-45deg) translate(4.5px,-4.5px)' : 'none'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 49,
          background: 'rgba(12,12,15,0.97)',
          backdropFilter: 'blur(12px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '2.5rem',
        }}>
          {LINKS.map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setMenuOpen(false)} style={{
              fontFamily: S.serif, fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              color: isActive(to) ? '#FFFFFF' : 'rgba(255,255,255,0.45)',
              textDecoration: 'none', fontStyle: 'italic',
              transition: 'color 0.2s',
            }}>
              {label}
            </Link>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            marginTop: '1rem', padding: '0.75rem 2rem',
            background: 'white', color: '#111', borderRadius: '30px',
            fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
            textDecoration: 'none', fontWeight: 500,
          }}>
            Connect
          </a>
        </div>
      )}
    </>
  );
}
