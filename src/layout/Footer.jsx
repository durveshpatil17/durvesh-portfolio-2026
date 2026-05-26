import React from 'react';
import { Link } from 'react-router-dom';
import { S } from '../theme';

export default function Footer() {
  return (
    <footer style={{ background: '#0C0C0F', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '1.75rem clamp(1.25rem,5vw,4rem)' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontFamily: S.serif, fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', fontStyle: 'italic' }}>Durvesh Patil.</span>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', marginTop: '3px', letterSpacing: '0.06em' }}>Think bigger than you think is allowed.</p>
        </div>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {[['/', 'Home'], ['/work', 'Work'], ['/writing', 'Writing'], ['/about', 'About']].map(([to, label]) => (
            <Link key={to} to={to} style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.25)'}>
              {label}
            </Link>
          ))}
        </div>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>© 2026 Durvesh H. Patil</p>
      </div>
    </footer>
  );
}
