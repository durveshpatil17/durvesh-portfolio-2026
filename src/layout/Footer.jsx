import React from 'react';
import { S } from '../theme';

export default function Footer() {
  return (
    <footer className="w-full" style={{ borderTop: `1px solid ${S.border}` }}>
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 md:py-10 pb-safe flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
        <span style={{ fontFamily: S.serif, fontSize: '1.2rem', color: S.gold }}>DHP.</span>
        <div className="flex gap-4 md:gap-8 items-center text-center">
          <span style={{ fontSize: '0.65rem', color: S.muted, letterSpacing: '0.1em' }}>© 2026 Durvesh H. Patil</span>
          <span className="hidden md:inline" style={{ color: S.border }}>|</span>
          <span style={{ fontSize: '0.65rem', color: S.muted, letterSpacing: '0.08em' }}>MBA @ SCIT Pune</span>
        </div>
      </div>
    </footer>
  );
}
