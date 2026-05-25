import React from 'react';
import { S } from '../theme';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.75rem clamp(1.25rem,5vw,5rem)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontFamily: S.serif, fontSize: '1.2rem', color: S.gold, letterSpacing: '0.04em' }}>DHP.</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.65rem', color: S.muted, letterSpacing: '0.1em' }}>© 2026 Durvesh H. Patil</span>
            <span style={{ fontSize: '0.65rem', color: S.muted, letterSpacing: '0.08em' }}>MBA @ SCIT Pune</span>
          </div>
          <p style={{ fontSize: '0.65rem', color: S.muted, letterSpacing: '0.1em', marginTop: '0.4rem' }}>
            Figure out the way. Keep going.
          </p>
        </div>
      </div>
    </footer>
  );
}
