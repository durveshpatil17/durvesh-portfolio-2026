import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { S } from '../theme';

const TABS = [
  { to: '/',        label: 'Home',    icon: 'M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z' },
  { to: '/writing', label: 'Writing', icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z' },
  { to: '/work',    label: 'Work',    icon: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 3H8L6 7h12l-2-4z' },
  { to: '/about',   label: 'About',   icon: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z' },
];

function NavIcon({ path, active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke={active ? '#F0EFF8' : '#6B6A7A'}
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

export default function AppNav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  // ── Sidebar (desktop 1024px+) ──────────────────────────────────────
  const Sidebar = () => (
    <aside style={{
      position: 'fixed', top: 0, left: 0, bottom: 0,
      width: S.sidebarW, zIndex: 40,
      background: S.surface,
      borderRight: `0.5px solid ${S.border}`,
      display: 'flex', flexDirection: 'column',
      padding: '2rem 0',
    }} className="hidden lg:flex">
      {/* Logo */}
      <div style={{ padding: '0 1.5rem', marginBottom: '2.5rem' }}>
        <Link to="/" style={{ fontFamily: S.serif, fontSize: '1.5rem', color: S.accent, textDecoration: 'none', letterSpacing: '0.04em' }}>
          DHP.
        </Link>
        <p style={{ fontSize: '11px', color: S.muted, marginTop: '4px', letterSpacing: '0.06em' }}>Durvesh H. Patil</p>
      </div>

      {/* Nav links */}
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', padding: '0 0.75rem' }}>
        {TABS.map(tab => {
          const active = isActive(tab.to);
          return (
            <Link key={tab.to} to={tab.to} style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.625rem 0.875rem',
              borderRadius: '10px',
              background: active ? 'rgba(124,110,250,0.12)' : 'transparent',
              border: active ? `0.5px solid rgba(124,110,250,0.2)` : '0.5px solid transparent',
              textDecoration: 'none',
              transition: 'all 0.15s',
            }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(124,110,250,0.06)'; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
              <NavIcon path={tab.icon} active={active} />
              <span style={{ fontSize: '13px', color: active ? S.text : S.muted, fontWeight: active ? 500 : 400, transition: 'color 0.15s' }}>
                {tab.label}
              </span>
              {active && <div style={{ marginLeft: 'auto', width: '5px', height: '5px', borderRadius: '50%', background: S.accent }} />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: '0 1.5rem', borderTop: `0.5px solid ${S.border}`, paddingTop: '1.25rem', marginTop: '1rem' }}>
        <p style={{ fontSize: '10px', color: S.muted, letterSpacing: '0.08em', lineHeight: 1.6 }}>
          Figure out the way.<br />Keep going.
        </p>
        <p style={{ fontSize: '10px', color: S.subtle, marginTop: '0.5rem' }}>© 2026</p>
      </div>
    </aside>
  );

  // ── Bottom nav (mobile, <1024px) ───────────────────────────────────
  const BottomNav = () => (
    <div className="bottom-nav-wrap lg:hidden" style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40,
      background: 'rgba(10,10,15,0.92)',
      borderTop: `0.5px solid ${S.border}`,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      height: S.navH,
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
    }}>
      {TABS.map(tab => {
        const active = isActive(tab.to);
        return (
          <Link key={tab.to} to={tab.to} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '3px', flex: 1, padding: '8px 0',
            textDecoration: 'none', minHeight: '44px', justifyContent: 'center',
            position: 'relative',
          }}>
            <NavIcon path={tab.icon} active={active} />
            <span style={{ fontSize: '9px', color: active ? S.accentLight : S.muted, letterSpacing: '0.06em', fontWeight: active ? 500 : 400, transition: 'color 0.2s' }}>
              {tab.label}
            </span>
            {active && (
              <motion.div
                layoutId="nav-dot"
                style={{ position: 'absolute', top: '4px', width: '3px', height: '3px', borderRadius: '50%', background: S.accent }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      <Sidebar />
      <BottomNav />
    </>
  );
}
