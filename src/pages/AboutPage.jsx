import React from 'react';
import { S, CONTAINER_CLASSES } from '../theme';

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '6rem' }}>
      <div className={CONTAINER_CLASSES}>
        <p style={{ color: S.gold, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>Coming Soon</p>
        <h1 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: S.text, fontWeight: 400 }}>About</h1>
      </div>
    </main>
  );
}
