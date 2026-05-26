import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { S } from '../theme';

const LINKS = [
  { to: '/',        label: 'Home'    },
  { to: '/work',    label: 'Work'    },
  { to: '/writing', label: 'Writing' },
  { to: '/about',   label: 'About'   },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [onDark,    setOnDark]    = useState(true);
  const [hovered,   setHovered]   = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 60);
      setOnDark(isHomePage && window.scrollY < window.innerHeight * 0.75);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [isHomePage]);

  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; }, [menuOpen]);

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  // Colour logic: on dark hero → white; scrolled / hovered / other pages → dark
  const isDark = (onDark && !scrolled) || (onDark && !hovered);
  const navBg      = scrolled || hovered || !isHomePage
    ? 'rgba(250,250,248,0.96)'
    : 'transparent';
  const navBorder  = scrolled || hovered || !isHomePage
    ? '0.5px solid #E5E4E0'
    : '0.5px solid transparent';
  const blurVal    = scrolled || hovered || !isHomePage ? 'blur(20px)' : 'none';

  // On dark hero: white text. Anywhere else: dark ink.
  const onHero     = isHomePage && !scrolled && !hovered;
  const textCol    = onHero ? 'rgba(255,255,255,0.72)' : '#111111';
  const activeCol  = onHero ? '#FFFFFF' : '#534AB7';
  const logoCol    = onHero ? '#FFFFFF' : '#111111';
  const ctaBg      = onHero ? 'rgba(255,255,255,0.1)'  : '#111111';
  const ctaBorder  = onHero ? 'rgba(255,255,255,0.28)' : '#111111';
  const ctaColor   = '#FFFFFF';
  const burgerCol  = onHero ? '#FFFFFF' : '#111111';

  return (
    <>
      <nav
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: '60px',
          display: 'flex', alignItems: 'center',
          padding: '0 clamp(1.25rem, 4vw, 3.5rem)',
          transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
          background: navBg,
          borderBottom: navBorder,
          backdropFilter: blurVal,
          WebkitBackdropFilter: blurVal,
        }}
      >
        {/* Logo — always left */}
        <Link to="/" style={{
          fontFamily: S.serif, fontSize: '1.3rem',
          color: logoCol, textDecoration: 'none',
          letterSpacing: '0.03em', fontStyle: 'italic',
          transition: 'color 0.3s', flexShrink: 0, marginRight: 'auto',
        }}>
          Durvesh Patil.
        </Link>

        {/* Desktop nav links — centred absolutely within the bar */}
        <div className="nav-links-desktop" style={{
          gap: '2rem',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          // Prevent links from ever touching the logo or CTA
          maxWidth: 'calc(100% - 420px)',
          overflow: 'hidden',
        }}>
          {LINKS.map(({ to, label }) => {
            const active = isActive(to);
            return (
              <Link key={to} to={to} style={{
                color: active ? activeCol : textCol,
                textDecoration: 'none',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: active ? 600 : 400,
                transition: 'color 0.2s',
                position: 'relative',
                whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => e.currentTarget.style.color = active ? activeCol : (onHero ? '#FFFFFF' : '#534AB7')}
                onMouseLeave={e => e.currentTarget.style.color = active ? activeCol : textCol}
              >
                {label}
                {active && (
                  <span style={{
                    position: 'absolute', bottom: '-5px', left: 0, right: 0,
                    height: '1.5px', borderRadius: '1px',
                    background: onHero ? 'rgba(255,255,255,0.55)' : '#534AB7',
                  }} />
                )}
              </Link>
            );
          })}
        </div>

        {/* Connect pill — always right, fixed width so it never overlaps links */}
        <a
          href="#contact"
          className="nav-cta-desktop"
          style={{
            marginLeft: 'auto',
            flexShrink: 0,
            padding: '0.45rem 1.2rem',
            background: ctaBg,
            border: `0.5px solid ${ctaBorder}`,
            color: ctaColor,
            borderRadius: '30px',
            fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
            textDecoration: 'none', fontWeight: 500,
            transition: 'background 0.25s, border-color 0.25s, opacity 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Connect
        </a>

        {/* Hamburger — mobile only */}
        <button
          className="nav-menu-btn"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '10px', marginLeft: 'auto',
            display: 'flex', flexDirection: 'column', gap: '5px',
            alignItems: 'center', justifyContent: 'center',
            minWidth: '44px', minHeight: '44px',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px',
              background: burgerCol,
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                  : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(12,12,15,0.97)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '2.5rem',
        }}>
          {LINKS.map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setMenuOpen(false)} style={{
              fontFamily: S.serif, fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              color: isActive(to) ? '#FFFFFF' : 'rgba(255,255,255,0.4)',
              textDecoration: 'none', fontStyle: 'italic',
              transition: 'color 0.2s',
            }}>
              {label}
            </Link>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            marginTop: '0.5rem', padding: '0.75rem 2rem',
            background: '#FFFFFF', color: '#111', borderRadius: '30px',
            fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
            textDecoration: 'none', fontWeight: 600,
          }}>
            Connect
          </a>
        </div>
      )}
    </>
  );
}
