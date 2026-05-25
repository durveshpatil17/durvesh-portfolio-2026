import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';
import { reels } from '../data/reels';

gsap.registerPlugin(ScrollTrigger);

const SECTION_PAD = 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 5rem)';
const CONTAINER = { maxWidth: '1320px', margin: '0 auto' };
const BORDER_TOP = { borderTop: '1px solid rgba(255,255,255,0.06)' };
const LABEL_STYLE = {
  fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase',
  color: S.gold, fontWeight: 600, marginBottom: '1rem', display: 'block',
};

function TimelineRow({ item }) {
  const [hovered, setHovered] = React.useState(false);

  const TAG_COLORS = {
    'Current':      { bg: 'rgba(74,222,128,0.1)',  border: 'rgba(74,222,128,0.25)',  text: '#4ade80' },
    'Recognition':  { bg: 'rgba(201,168,76,0.1)',  border: 'rgba(201,168,76,0.25)',  text: '#c9a84c' },
    'FinTech':      { bg: 'rgba(55,138,221,0.1)',   border: 'rgba(55,138,221,0.25)',  text: '#60a5fa' },
    'Education':    { bg: 'rgba(168,85,247,0.1)',   border: 'rgba(168,85,247,0.25)',  text: '#c084fc' },
    'AI Engineering':{ bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.25)', text: '#fb923c' },
    'Creator':      { bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.25)', text: '#f472b6' },
  };

  const tagStyle = TAG_COLORS[item.tag] || TAG_COLORS['Creator'];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: hovered
          ? 'clamp(1.25rem,2vw,1.75rem) clamp(0.75rem,1.5vw,1.25rem)'
          : 'clamp(1.25rem,2vw,1.75rem) 0',
        display: 'grid',
        gridTemplateColumns: 'auto auto 1fr auto',
        gap: 'clamp(1rem, 2.5vw, 2rem)',
        alignItems: 'center',
        background: hovered ? '#141414' : 'transparent',
        borderRadius: hovered ? '0.75rem' : 0,
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
      className="hidden sm:grid"
    >
      {/* Fallback layout for mobile */}
      <div style={{ display: 'none' }}></div>
    </div>
  );
}

// Mobile-friendly TimelineRow wrapper that falls back properly
function TimelineRowWrapper({ item }) {
  const [hovered, setHovered] = React.useState(false);

  const TAG_COLORS = {
    'Current':      { bg: 'rgba(74,222,128,0.1)',  border: 'rgba(74,222,128,0.25)',  text: '#4ade80' },
    'Recognition':  { bg: 'rgba(201,168,76,0.1)',  border: 'rgba(201,168,76,0.25)',  text: '#c9a84c' },
    'FinTech':      { bg: 'rgba(55,138,221,0.1)',   border: 'rgba(55,138,221,0.25)',  text: '#60a5fa' },
    'Education':    { bg: 'rgba(168,85,247,0.1)',   border: 'rgba(168,85,247,0.25)',  text: '#c084fc' },
    'AI Engineering':{ bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.25)', text: '#fb923c' },
    'Creator':      { bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.25)', text: '#f472b6' },
  };

  const tagStyle = TAG_COLORS[item.tag] || TAG_COLORS['Creator'];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: hovered
          ? 'clamp(1.25rem,2vw,1.75rem) clamp(0.75rem,1.5vw,1.25rem)'
          : 'clamp(1.25rem,2vw,1.75rem) 0',
        display: 'grid',
        gap: 'clamp(1rem, 2.5vw, 2rem)',
        alignItems: 'center',
        background: hovered ? '#141414' : 'transparent',
        borderRadius: hovered ? '0.75rem' : 0,
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
      className="grid-cols-[1fr_auto] sm:grid-cols-[auto_auto_1fr_auto]"
    >
      {/* Year (Hidden on mobile) */}
      <span className="hidden sm:block" style={{
        fontFamily: S.serif, fontSize: '0.85rem',
        color: S.muted, opacity: 0.5, flexShrink: 0,
        minWidth: '2.5rem',
      }}>
        {item.year}
      </span>

      {/* Timeline dot (Hidden on mobile) */}
      <div className="hidden sm:flex" style={{ flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: '7px', height: '7px', borderRadius: '50%',
          background: hovered ? S.gold : 'rgba(255,255,255,0.15)',
          transition: 'background 0.3s',
          border: hovered ? `1px solid ${S.gold}` : '1px solid rgba(255,255,255,0.2)',
        }} />
      </div>

      {/* Title + desc */}
      <div>
        <span className="block sm:hidden" style={{
          fontFamily: S.serif, fontSize: '0.85rem',
          color: S.muted, opacity: 0.5, marginBottom: '0.25rem'
        }}>
          {item.year}
        </span>
        <div style={{
          fontFamily: S.serif,
          fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
          color: S.text, lineHeight: 1.2,
          marginBottom: hovered ? '0.45rem' : 0,
          transition: 'margin 0.3s',
        }}>
          {item.title}
        </div>
        <div style={{
          fontSize: '0.88rem', color: S.muted, fontWeight: 300, lineHeight: 1.6,
          maxHeight: hovered ? '60px' : 0,
          opacity: hovered ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease, opacity 0.3s ease',
        }}>
          {item.desc}
        </div>
      </div>

      {/* Tag pill */}
      <span style={{
        fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase',
        padding: '0.3rem 0.85rem', borderRadius: '3rem', flexShrink: 0,
        background: tagStyle.bg, border: `1px solid ${tagStyle.border}`, color: tagStyle.text,
        whiteSpace: 'nowrap',
        alignSelf: 'start',
        marginTop: '0.25rem'
      }}>
        {item.tag}
      </span>
    </div>
  );
}


export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        gsap.utils.toArray('.about-reveal').forEach(el => {
          gsap.fromTo(el,
            { y: 36, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
            }
          );
        });
      });

      mm.add('(max-width: 767px)', () => {
        gsap.utils.toArray('.about-reveal').forEach(el => {
          gsap.fromTo(el,
            { opacity: 0 },
            {
              opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
            }
          );
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>

      {/* ── 01. HERO ── */}
      <section style={{ minHeight: '100svh', position: 'relative', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>

        {/* Full-bleed background portrait */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/assets/images/personal/Personal Photo 1.webp"
            alt="Durvesh H. Patil"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }}
          />
          {/* Dark overlay — heavier at bottom for text legibility */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,6,0.2) 0%, rgba(6,6,6,0.5) 40%, rgba(6,6,6,0.92) 80%, #060606 100%)' }} />
          {/* Left fade for vignette */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,6,6,0.4) 0%, transparent 60%)' }} />
        </div>

        {/* Text — anchored to bottom left */}
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 5rem)' }}>
          <div className="about-reveal">
            <p style={LABEL_STYLE}>About</p>
            <h1 style={{
              fontFamily: S.serif,
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              lineHeight: 0.92, fontWeight: 400,
              color: S.text, letterSpacing: '-0.02em',
              marginBottom: '0.1em',
            }}>
              Durvesh
            </h1>
            <h1 style={{
              fontFamily: S.serif,
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              lineHeight: 0.92, fontWeight: 400,
              fontStyle: 'italic',
              color: S.text, letterSpacing: '-0.02em',
              marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}>
              Patil<span style={{ color: S.gold }}>.</span>
            </h1>
            <p style={{
              color: S.muted, fontWeight: 300,
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.6, maxWidth: '520px',
            }}>
              Engineer-turned-MBA. Builder of systems. Creator of content. Documenting the journey in public.
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: 'absolute', bottom: '2.5rem', right: 'clamp(1.25rem, 5vw, 5rem)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
          <div style={{ width: '1px', height: '40px', background: `linear-gradient(to bottom, ${S.muted}, transparent)` }} />
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: S.muted }}>Scroll</span>
        </div>
      </section>

      {/* ── 02. STORY ── */}
      <section style={{ ...BORDER_TOP, padding: SECTION_PAD }}>
        <div style={CONTAINER}>

          <div className="about-reveal" style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
            <span style={LABEL_STYLE}>The Story</span>
            {/* Pull quote */}
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '3px', flexShrink: 0, alignSelf: 'stretch', background: S.gold, borderRadius: '2px', minHeight: '80px' }} />
              <p style={{
                fontFamily: S.serif, fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
                color: S.text, lineHeight: 1.35, fontWeight: 400, maxWidth: '800px',
              }}>
                "I started as an engineer. Then I discovered that the most interesting problems aren't technical — they're strategic. So I became both."
              </p>
            </div>
          </div>

          {/* Narrative — asymmetric 60/40 */}
          <div className="about-reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 6rem)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <p style={{ color: S.muted, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.8, fontWeight: 300 }}>
                I grew up thinking in systems — engineering, logic, code. Built projects, shipped products, learned NLP. But somewhere along the way I realised I was more interested in <em style={{ color: S.text, fontStyle: 'italic' }}>why</em> something was built than <em style={{ color: S.text, fontStyle: 'italic' }}>how</em>.
              </p>
              <p style={{ color: S.muted, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.8, fontWeight: 300 }}>
                That led me to SCIT Pune for my MBA — where I'm studying strategy, FinTech, and information management. And simultaneously building advisory systems, running creator brands, and writing about all of it.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <p style={{ color: S.muted, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.8, fontWeight: 300 }}>
                The Instagram accounts started as experiments. <span style={{ color: S.text, fontWeight: 500 }}>@cinesyncbydurvesh</span> for cinema and visual storytelling. <span style={{ color: S.text, fontWeight: 500 }}>@_thedurvesh</span> for personal brand, tech, and the MBA journey. Now they reach millions — organically.
              </p>
              <p style={{ color: S.muted, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.8, fontWeight: 300 }}>
                This website is the home base. Articles live here. Work lives here. And the story keeps getting written.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. TIMELINE ── */}
      <section style={{ ...BORDER_TOP, background: '#0c0c0c', padding: SECTION_PAD }}>
        <div style={CONTAINER}>
          <div className="about-reveal" style={{ marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
            <span style={LABEL_STYLE}>Journey</span>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, fontWeight: 400, lineHeight: 1.1 }}>
              How we got here.
            </h2>
          </div>

          {/* Timeline rows — editorial list */}
          {[
            {
              year: '2026',
              title: 'Social Media Lead — Fusion 2026',
              desc: 'Led digital branding and content strategy for Fusion 2026 at SCIT Pune. Reel campaigns, audience coordination, event visibility.',
              tag: 'Current',
            },
            {
              year: '2025',
              title: 'Outstanding Content Creator Award',
              desc: 'Recognized by KBT College of Engineering for consistent digital execution, reel strategy, and measurable audience impact.',
              tag: 'Recognition',
            },
            {
              year: '2025',
              title: 'FinTech Advisory — 36+ Clients',
              desc: 'Led client onboarding, KYC coordination, and SIP automation for an AMFI-registered advisory operation. ₹13L+ AUM managed.',
              tag: 'FinTech',
            },
            {
              year: '2024',
              title: 'MBA at SCIT Pune begins',
              desc: 'Joined Symbiosis Centre for Information Technology for MBA — specialising in IT strategy, information management, and business systems.',
              tag: 'Education',
            },
            {
              year: '2024',
              title: 'Algorithmic Strategy Builder',
              desc: 'Architected an NLP-to-strategy pipeline for Indian financial markets. End-to-end system — ingestion, analysis, signal output.',
              tag: 'AI Engineering',
            },
            {
              year: '2024',
              title: '1M+ Views on a Single Reel',
              desc: 'Fusion 2025 event promotion reel crossed 1M organic views. Total reach across both creator accounts: 4M+.',
              tag: 'Creator',
            },
            {
              year: '2023',
              title: '@cinesyncbydurvesh launched',
              desc: 'Started a cinema-focused Instagram brand — visual storytelling, editing craft, and cinematic content strategy.',
              tag: 'Creator',
            },
          ].map((item, i) => (
            <TimelineRowWrapper key={i} item={item} />
          ))}
        </div>
      </section>

      {/* ── 04. CREATOR — Instagram showcase ── */}
      <section style={{ ...BORDER_TOP, padding: SECTION_PAD }}>
        <div style={CONTAINER}>
          <div className="about-reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={LABEL_STYLE}>On Instagram</span>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, fontWeight: 400, lineHeight: 1.1 }}>
                The creator side.
              </h2>
            </div>
            <a href="https://www.instagram.com/_thedurvesh/" target="_blank" rel="noreferrer"
              style={{ color: S.muted, fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s', marginBottom: '0.5rem' }}
              onMouseEnter={e => e.target.style.color = S.gold}
              onMouseLeave={e => e.target.style.color = S.muted}>
              @_thedurvesh →
            </a>
          </div>

          {/* 4-post grid: 2 wide + 2 portrait */}
          <div className="about-reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
          }}>
            {reels.map((reel, i) => (
              <a key={reel.id} href={reel.url} target="_blank" rel="noreferrer"
                style={{
                  aspectRatio: i % 3 === 0 ? '4/5' : '1/1',
                  background: '#141414',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '0.875rem',
                  overflow: 'hidden',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '0.75rem',
                  textDecoration: 'none', position: 'relative',
                  transition: 'border-color 0.25s, transform 0.25s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                {/* Instagram icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.3 }}>
                  <rect x="2" y="2" width="20" height="20" rx="6" stroke="#edebe6" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" stroke="#edebe6" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#edebe6"/>
                </svg>
                {/* Type badge */}
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: S.muted }}>{reel.type}</span>
                {/* External link icon bottom-right */}
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', opacity: 0.3 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#edebe6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Account cards */}
          <div className="about-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: 'clamp(2rem, 3vw, 3rem)' }}>
            {[
              { handle: '@_thedurvesh', sub: 'Personal Brand · Tech · MBA Life · FinTech', img: '/assets/images/personal/Personal Photo 1.webp', href: 'https://instagram.com/_thedurvesh' },
              { handle: '@cinesyncbydurvesh', sub: 'Cinema · Visual Storytelling · Editing', img: '/assets/images/personal/CineSync.jpg', href: 'https://instagram.com/cinesyncbydurvesh' },
            ].map(acc => (
              <a key={acc.handle} href={acc.href} target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', background: '#141414', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1rem', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={acc.img} alt={acc.handle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ color: S.text, fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.2rem' }}>{acc.handle}</div>
                  <div style={{ color: S.muted, fontSize: '0.72rem', fontWeight: 300, lineHeight: 1.4 }}>{acc.sub}</div>
                </div>
                <div style={{ marginLeft: 'auto', color: S.muted, fontSize: '0.8rem' }}>→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05. GALLERY ── */}
      <section style={{ ...BORDER_TOP, background: '#0c0c0c', padding: SECTION_PAD }}>
        <div style={CONTAINER}>
          <div className="about-reveal" style={{ marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
            <span style={LABEL_STYLE}>Moments</span>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, fontWeight: 400, lineHeight: 1.1 }}>
              In the room.
            </h2>
          </div>

          {/* Masonry-style uneven grid */}
          <div className="about-reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gridTemplateRows: 'auto',
            gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
          }}>
            {[
              { src: '/assets/images/achievements/Social Media Head Techfest 2k24.jpg', alt: 'Social Media Head — Techfest 2024', span: 2 },
              { src: '/assets/images/achievements/Techfest 2k25 Candid 2.jpg', alt: 'Techfest 2025', span: 1 },
              { src: '/assets/images/achievements/Crossed 1 Million Views on Social Media event promotion reel of Fusion 2k25.jpg', alt: 'Fusion 2025 — 1M views', span: 1 },
              { src: '/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg', alt: 'Outstanding Content Creator Award', span: 1 },
            ].map((photo, i) => (
              <div key={i} className={photo.span === 2 ? 'gallery-wide' : undefined} style={{
                aspectRatio: photo.span === 2 ? '16/9' : '4/5',
                position: 'relative', overflow: 'hidden',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                {/* Caption overlay on hover — pure CSS trick */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(6,6,6,0.85) 0%, transparent 100%)',
                  padding: '1.5rem 1.25rem 1rem',
                }}>
                  <p style={{ fontSize: '0.72rem', color: S.muted, letterSpacing: '0.06em', lineHeight: 1.4 }}>{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. RECOGNITION ── */}
      <section style={{ ...BORDER_TOP, padding: SECTION_PAD }}>
        <div style={CONTAINER}>
          <div className="about-reveal" style={{ marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
            <span style={LABEL_STYLE}>Recognition</span>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, fontWeight: 400, lineHeight: 1.1 }}>
              The proof points.
            </h2>
          </div>

          {/* Award feature */}
          <div className="about-reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
            marginBottom: 'clamp(3rem, 5vw, 5rem)',
          }}>
            <div style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden', borderRadius: '1.25rem', border: '1px solid rgba(255,255,255,0.06)' }}>
              <img
                src="/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg"
                alt="Outstanding Content Creator Award"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.7) 0%, transparent 50%)' }} />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', padding: '0.5rem 1.25rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '3rem' }}>
                <span style={{ fontSize: '0.75rem', color: S.gold }}>★</span>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: S.gold, fontWeight: 600 }}>KBTCOE 2025</span>
              </div>
              <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: S.text, fontWeight: 400, lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Most Outstanding Content Creator.
              </h3>
              <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.5rem' }}>
                Recognized for consistency, execution, and measurable digital impact. This award came through reel scripting, strategic audience engagement, and event promotion campaigns that generated real visibility — not manufactured reach.
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  '4× Social Media Lead for major events',
                  'Techfest 2024 & 2025, Fusion 2025 & 2026',
                  '3.6M+ organic views from event content alone',
                ].map(point => (
                  <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: S.gold, flexShrink: 0, marginTop: '0.5rem' }} />
                    <span style={{ color: S.muted, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07. CLOSING NOTE ── */}
      <section style={{ ...BORDER_TOP, background: '#0c0c0c', padding: SECTION_PAD, textAlign: 'center' }}>
        <div style={{ ...CONTAINER, maxWidth: '720px' }}>
          <div className="about-reveal">
            <span style={{ ...LABEL_STYLE, display: 'block', textAlign: 'center' }}>A note</span>
            <p style={{
              fontFamily: S.serif, fontStyle: 'italic',
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              color: S.text, lineHeight: 1.5, fontWeight: 400,
              marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            }}>
              "If you're here from Instagram — this is where the longer thinking lives. Articles, work, and whatever comes next."
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1rem, 3vw, 2.5rem)', flexWrap: 'wrap', flexDirection: 'row' }} className="flex-col sm:flex-row items-center">
              <Link to="/writing" style={{
                padding: '0.875rem 2rem', background: S.gold, color: '#060606',
                borderRadius: '3rem', fontSize: '0.78rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
                transition: 'opacity 0.2s', width: 'fit-content'
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                Read the Writing
              </Link>
              <Link to="/work" style={{
                padding: '0.875rem 2rem', background: 'transparent',
                border: '1px solid rgba(255,255,255,0.12)', color: S.text,
                borderRadius: '3rem', fontSize: '0.78rem', fontWeight: 400,
                letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
                transition: 'border-color 0.2s', width: 'fit-content'
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = S.gold}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
                See the Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
