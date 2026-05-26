import React from 'react';
import { Link } from 'react-router-dom';
import { S } from '../theme';

export default function Footer() {
  return (
    <footer style={{ borderTop: `0.5px solid ${S.border}`, padding: '2rem clamp(1rem, 4vw, 2rem)', background: S.surface }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontFamily: S.serif, fontSize: '1.2rem', color: S.accent }}>DHP.</span>
          <p style={{ fontSize: '11px', color: S.muted, marginTop: '4px', letterSpacing: '0.08em' }}>Figure out the way. Keep going.</p>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['/', '/writing', '/work', '/about'].map((to, i) => (
            <Link key={to} to={to} style={{ fontSize: '11px', color: S.muted, textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.15s' }}
              onMouseEnter={e => e.target.style.color = S.accentLight}
              onMouseLeave={e => e.target.style.color = S.muted}>
              {['Home', 'Writing', 'Work', 'About'][i]}
            </Link>
          ))}
        </div>
        <p style={{ fontSize: '10px', color: S.subtle }}>© 2026 Durvesh H. Patil</p>
      </div>
    </footer>
  );
}
