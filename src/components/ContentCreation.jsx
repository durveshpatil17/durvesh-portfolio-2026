import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const S = {
  bg: '#060606', surface: '#0e0e0e', surface2: '#141414', border: 'rgba(255,255,255,0.06)',
  gold: '#c9a84c', goldDim: 'rgba(201,168,76,0.12)', text: '#edebe6', muted: '#7a7875',
  serif: 'Instrument Serif, Georgia, serif', sans: 'Inter, system-ui, sans-serif',
};

const STATS = [
  { value: '4M+',   label: 'Total Views' },
  { value: '1M+',   label: 'Single Reel' },
  { value: '2',     label: 'Creator Accounts' },
  { value: '100%',  label: 'Organic Growth' },
];

const ACCOUNTS = [
  {
    handle: '@cinesyncbydurvesh',
    sub: 'Cinema · Visual Storytelling · Editing',
    image: '/assets/images/personal/CineSync.jpg',
  },
  {
    handle: '@_thedurvesh',
    sub: 'Personal Brand · Tech · Lifestyle',
    image: '/assets/images/personal/Personal Photo 1.webp',
  },
];

const WHY = [
  'Real-world digital marketing execution',
  'Consumer psychology & audience behaviour',
  'Brand strategy & positioning',
  'Data-driven content optimisation',
];

export default function ContentCreation() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cc-reveal').forEach((el, i) => {
        gsap.fromTo(el, { y: 28, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          delay: i * 0.05,
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="creator" style={{ padding: '7rem 3rem', borderTop: `1px solid ${S.border}` }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Label */}
        <p className="cc-reveal" style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: S.gold, marginBottom: '2.5rem', fontWeight: 600 }}>
          Content Creation
        </p>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* LEFT: Narrative + Accounts */}
          <div>
            <h2 className="cc-reveal" style={{ fontFamily: S.serif, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: S.text, lineHeight: 1.1, marginBottom: '2rem', fontWeight: 400 }}>
              Digital <span style={{ fontStyle: 'italic', color: S.gold }}>Influence.</span>
            </h2>

            <p className="cc-reveal" style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.25rem', fontWeight: 300 }}>
              I run two active Instagram channels reaching millions — applying the same systems thinking I bring to branding campaigns and event strategy. From cinema storytelling to personal brand communication, every post is a deliberate act of audience engagement.
            </p>
            <p className="cc-reveal" style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
              This creative dimension directly strengthens my MBA profile — demonstrating hands-on digital marketing execution, consumer psychology, brand positioning, and content strategy at scale.
            </p>

            {/* Account Cards */}
            <div className="cc-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {ACCOUNTS.map(acc => (
                <div key={acc.handle} style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: S.surface2, border: `1px solid ${S.border}`,
                  borderRadius: '0.875rem', transition: 'border-color 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${S.gold}55`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = S.border}
                >
                  {/* Avatar */}
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                    overflow: 'hidden', border: `1px solid ${S.border}`
                  }}>
                    <img src={acc.image} alt={acc.handle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ color: S.text, fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.15rem' }}>{acc.handle}</div>
                    <div style={{ color: S.muted, fontSize: '0.72rem', fontWeight: 300 }}>{acc.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Award badge */}
            <div className="cc-reveal" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: S.goldDim, border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: '3rem',
            }}>
              <span style={{ fontSize: '0.75rem' }}>🏆</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: S.gold, fontWeight: 700 }}>
                Outstanding Content Creator Award · KBTCOE 2025
              </span>
            </div>
          </div>

          {/* RIGHT: Stats + Why it matters */}
          <div>
            {/* Stats grid */}
            <div className="cc-reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', marginBottom: '1.5rem', border: `1px solid ${S.border}`, borderRadius: '1rem', overflow: 'hidden' }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{
                  padding: '1.75rem',
                  background: S.surface,
                  borderRight: i % 2 === 0 ? `1px solid ${S.border}` : 'none',
                  borderBottom: i < 2 ? `1px solid ${S.border}` : 'none',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: S.gold, lineHeight: 1, marginBottom: '0.5rem' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: S.muted, fontWeight: 600 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Why this matters block */}
            <div className="cc-reveal" style={{ padding: '2rem', background: S.surface, border: `1px solid ${S.border}`, borderRadius: '1rem' }}>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 700, marginBottom: '1.25rem' }}>
                Why This Matters for MBA
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {WHY.map(point => (
                  <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: S.gold, flexShrink: 0, marginTop: '0.45rem' }} />
                    <span style={{ color: S.muted, fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 300 }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
