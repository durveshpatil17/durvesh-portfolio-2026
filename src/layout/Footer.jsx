import { Link } from 'react-router-dom';
import { S } from '../theme';

export default function Footer() {
  return (
    <footer style={{ background: '#0C0C0F', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '2rem clamp(1.25rem,5vw,4rem)' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
        <div>
          <Link to="/" style={{ fontFamily: S.serif, fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', textDecoration: 'none' }}>
            Durvesh Patil.
          </Link>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '4px', letterSpacing: '0.04em' }}>
            <span style={{ color: '#FFFFFF', fontWeight: 500 }}>Technology Consultant</span> — Technology strategy, systems, product thinking, and venture building.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          {[
            ['/work',     'Work'],
            ['/services', 'Services'],
            ['/ventures', 'Ventures'],
            ['/writing',  'Writing'],
            ['/about',    'About'],
            ['/contact',  'Contact'],
          ].map(([to, label]) => (
            <Link key={to} to={to} style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}>
              {label}
            </Link>
          ))}
        </div>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>© 2026 Durvesh H. Patil</p>
      </div>
    </footer>
  );
}
