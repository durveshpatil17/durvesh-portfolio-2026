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

const TIMELINE = [
  {
    year: '2026',
    title: 'Social Media Head — Fusion 2026',
    desc: 'Led digital branding, reel strategy, and content campaigns for Fusion 2026 at Symbiosis International University. Fourth consecutive year heading social media for major college events.',
    tag: 'Current',
  },
  {
    year: '2025',
    title: 'Outstanding Content Creator Award',
    desc: 'Recognized by KBT College of Engineering for consistent digital execution, reel strategy, and measurable audience impact. Content creation scaled dramatically after this recognition.',
    tag: 'Recognition',
  },
  {
    year: '2025',
    title: 'Fusion 2025 — Reel Crosses 1 Million Views',
    desc: 'Event promotion reel for Fusion 2025 organically crossed 1M views. This was the inflection point — content creation accelerated dramatically, total reach now 4M+ across both brands.',
    tag: 'Creator',
  },
  {
    year: '2024',
    title: 'MBA at Symbiosis International University',
    desc: 'Joined Symbiosis Centre for Information Technology (SCIT), Pune — part of Symbiosis International University. Specialising in IT strategy, information management, and business systems.',
    tag: 'Education',
  },
  {
    year: '2024',
    title: 'Algorithmic Strategy Builder — Live Industry Project',
    desc: 'Architected an NLP-to-strategy translation pipeline for Indian financial markets as a live industry project. End-to-end: data ingestion, NLP analysis, signal output. Business impact over academic theory.',
    tag: 'AI Engineering',
  },
  {
    year: '2024',
    title: 'Mutual Fund Distribution & Advisory',
    desc: 'Built and operated an AMFI-registered mutual fund distribution business — client acquisition, KYC coordination, SIP structuring, and portfolio guidance for 36+ clients. ₹13L+ AUM under management.',
    tag: 'MF Distribution',
  },
  {
    year: '2024',
    title: 'Social Media Head — Techfest 2024',
    desc: 'Started a three-year run heading social media for major college events. Techfest 2024 was the first — building the content and branding system that would later drive 1M+ view reels.',
    tag: 'Creator',
  },
  {
    year: '2023',
    title: '@cinesyncbydurvesh launched',
    desc: 'Started a cinema-focused Instagram brand — visual storytelling, editing craft, and cinematic content strategy.',
    tag: 'Creator',
  },
];

const GALLERY_PHOTOS = [
  { src: '/assets/images/achievements/Social Media Head Techfest 2k24.jpg', caption: 'Social Media Head — Techfest 2024', year: '2024' },
  { src: '/assets/images/achievements/Techfest 2k25 Candid 2.jpg', caption: 'Behind the scenes — Techfest 2025', year: '2025' },
  { src: '/assets/images/achievements/Crossed 1 Million Views on Social Media event promotion reel of Fusion 2k25.jpg', caption: 'Fusion 2025 — 1M views reel', year: '2025' },
  { src: '/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg', caption: 'Outstanding Content Creator Award', year: '2025' },
];

const REEL_PREVIEWS = [
  {
    id: 1,
    url: 'https://www.instagram.com/p/DU8kUGtiDTd/',
    type: 'POST',
    index: '01',
    thumbnail: '/assets/images/reels/reel1.jpeg'
  },
  {
    id: 2,
    url: 'https://www.instagram.com/p/DWv9flGCNTL/',
    type: 'POST',
    index: '02',
    thumbnail: '/assets/images/reels/reel2.jpeg'
  },
  {
    id: 3,
    url: 'https://www.instagram.com/p/DW6VSjaiHMJ/',
    type: 'POST',
    index: '03',
    thumbnail: '/assets/images/reels/reel3.jpeg'
  },
  {
    id: 4,
    url: 'https://www.instagram.com/reel/DXHB_7cCCE2/',
    type: 'REEL',
    index: '04',
    thumbnail: '/assets/images/reels/reel4.jpeg'
  },
];

function TimelineRow({ item }) {
  const [hovered, setHovered] = React.useState(false);

  const TAG_COLORS = {
    'Current':        { bg: 'rgba(74,222,128,0.1)',   border: 'rgba(74,222,128,0.25)',  text: '#4ade80' },
    'Recognition':    { bg: 'rgba(201,168,76,0.1)',   border: 'rgba(201,168,76,0.25)', text: '#c9a84c' },
    'MF Distribution':{ bg: 'rgba(55,138,221,0.1)',   border: 'rgba(55,138,221,0.25)', text: '#60a5fa' },
    'Education':      { bg: 'rgba(168,85,247,0.1)',   border: 'rgba(168,85,247,0.25)', text: '#c084fc' },
    'AI Engineering': { bg: 'rgba(251,146,60,0.1)',   border: 'rgba(251,146,60,0.25)', text: '#fb923c' },
    'Creator':        { bg: 'rgba(244,114,182,0.1)',  border: 'rgba(244,114,182,0.25)', text: '#f472b6' },
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
        gridTemplateColumns: '1fr auto',
        gap: 'clamp(1rem, 2.5vw, 2rem)',
        alignItems: 'center',
        background: hovered ? '#141414' : 'transparent',
        borderRadius: hovered ? '0.75rem' : 0,
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
      className="sm:grid-cols-[auto_auto_1fr_auto]"
    >
      {/* Year (desktop) */}
      <span className="hidden sm:block" style={{
        fontFamily: S.serif, fontSize: '0.85rem',
        color: S.muted, opacity: 0.5, flexShrink: 0,
        minWidth: '2.5rem',
      }}>
        {item.year}
      </span>

      {/* Timeline dot (desktop) */}
      <div className="hidden sm:flex flex-col items-center flex-shrink-0">
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

function ReelCard({ item, tall = false }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        aspectRatio: tall ? '4/5' : '1/1',
        background: item.thumbnail ? `#141212 url(${item.thumbnail}) center/cover no-repeat` : (hov ? '#1a1818' : '#141212'),
        border: `1px solid ${hov ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '1rem',
        overflow: 'hidden',
        textDecoration: 'none',
        padding: '1.25rem',
        transition: 'border-color 0.25s, transform 0.25s',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* Dark overlay to ensure text legibility */}
      {item.thumbnail && (
        <div style={{
          position: 'absolute', inset: 0,
          background: hov ? 'rgba(6,6,6,0.6)' : 'rgba(6,6,6,0.75)',
          transition: 'background 0.25s',
          zIndex: 0
        }} />
      )}

      {/* Top row: IG icon + index */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ opacity: hov ? 0.9 : 0.6, transition: 'opacity 0.25s' }}>
          <rect x="2" y="2" width="20" height="20" rx="6" stroke="#edebe6" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="4" stroke="#edebe6" strokeWidth="1.5"/>
          <circle cx="17.5" cy="6.5" r="1" fill="#edebe6"/>
        </svg>
        <span style={{
          fontFamily: 'Instrument Serif, Georgia, serif',
          fontSize: '0.75rem', color: hov ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)',
          letterSpacing: '0.05em', transition: 'color 0.25s'
        }}>{item.index}</span>
      </div>

      {/* Center: large faint type tag */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {item.type === 'REEL' ? (
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%',
            border: `1px solid ${hov ? 'rgba(201,168,76,0.7)' : 'rgba(255,255,255,0.3)'}`,
            background: hov ? 'rgba(6,6,6,0.4)' : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'border-color 0.25s, background 0.25s, transform 0.25s',
            transform: hov ? 'scale(1.05)' : 'scale(1)',
          }}>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path d="M1 1L13 8L1 15V1Z" fill={hov ? '#c9a84c' : 'rgba(255,255,255,0.6)'} style={{ transition: 'fill 0.25s' }}/>
            </svg>
          </div>
        ) : (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ opacity: hov ? 0.7 : 0.3, transition: 'opacity 0.25s, transform 0.25s', transform: hov ? 'scale(1.05)' : 'scale(1)' }}>
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="#edebe6" strokeWidth="1.2"/>
            <circle cx="8.5" cy="8.5" r="1.5" fill="#edebe6"/>
            <path d="M3 15l5-5 4 4 3-3 6 6" stroke="#edebe6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>

      {/* Bottom: type label + external arrow */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <span style={{
          fontSize: '0.6rem', letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: hov ? '#c9a84c' : 'rgba(255,255,255,0.6)',
          fontWeight: 600, transition: 'color 0.25s',
        }}>{item.type}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ opacity: hov ? 0.9 : 0.5, transition: 'opacity 0.25s' }}>
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#edebe6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
}

function HorizontalGallery({ photos }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      const tween = gsap.to(track, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      
      // Sync Lenis with ScrollTrigger
      if (window.__lenis) {
        window.__lenis.on('scroll', ScrollTrigger.update);
      }

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        background: '#0c0c0c',
        overflow: 'hidden',
        paddingBottom: 'clamp(5rem, 10vw, 9rem)',
      }}
    >
      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="hidden md:flex"
        style={{
          gap: 'clamp(1rem, 2vw, 1.5rem)',
          paddingLeft: 'clamp(1.25rem, 5vw, 5rem)',
          paddingRight: 'clamp(1.25rem, 5vw, 5rem)',
          paddingTop: '2rem',
          width: 'max-content',
          alignItems: 'flex-start',
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: i % 2 === 0 ? 'clamp(300px, 32vw, 520px)' : 'clamp(240px, 25vw, 400px)',
              position: 'relative',
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.07)',
              marginTop: i % 2 === 1 ? 'clamp(2rem, 4vw, 4rem)' : '0',
            }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              style={{
                width: '100%',
                aspectRatio: i % 2 === 0 ? '3/4' : '4/3',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Caption overlay */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(6,6,6,0.88) 0%, transparent 100%)',
              padding: '2rem 1.25rem 1.25rem',
            }}>
              <p style={{ fontSize: '0.62rem', color: 'rgba(201,168,76,0.8)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{photo.year}</p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(237,235,230,0.75)', lineHeight: 1.4, fontWeight: 300 }}>{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile fallback — normal scroll grid, hidden on md+ */}
      <div className="md:hidden" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.75rem',
        padding: '1.5rem clamp(1.25rem, 5vw, 2rem)',
      }}>
        {photos.map((photo, i) => (
          <div key={i} style={{ borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
            <img src={photo.src} alt={photo.caption} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.85), transparent)', padding: '1.25rem 0.75rem 0.75rem' }}>
              <p style={{ fontSize: '0.6rem', color: 'rgba(237,235,230,0.6)', lineHeight: 1.4 }}>{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
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
            src="/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg"
            alt="Durvesh H. Patil"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }}
          />
          {/* Dark overlay — heavier at bottom for text legibility */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,6,0.35) 0%, rgba(6,6,6,0.55) 45%, rgba(6,6,6,0.94) 80%, #060606 100%)' }} />
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
          {TIMELINE.map((item, i) => (
            <TimelineRow key={i} item={item} />
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

          {/* Asymmetric grid: first card tall (4/5), rest square */}
          <div className="about-reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'clamp(0.75rem, 1.5vw, 1rem)',
            alignItems: 'start',
          }}>
            <ReelCard item={REEL_PREVIEWS[0]} tall={true} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
              <ReelCard item={REEL_PREVIEWS[1]} tall={false} />
              <ReelCard item={REEL_PREVIEWS[2]} tall={false} />
            </div>
            <ReelCard item={REEL_PREVIEWS[3]} tall={true} />
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

      {/* ── 05. GALLERY — Horizontal pin scroll ── */}
      <section style={{ ...BORDER_TOP, background: '#0c0c0c', paddingTop: 'clamp(5rem, 10vw, 9rem)', paddingBottom: 0 }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 5rem)', marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
          <div className="about-reveal">
            <span style={LABEL_STYLE}>Moments</span>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, fontWeight: 400, lineHeight: 1.1 }}>
              In the room.
            </h2>
          </div>
        </div>
      </section>

      {/* Pinned horizontal scroll */}
      <HorizontalGallery photos={GALLERY_PHOTOS} />

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
                  '4× Social Media Lead — Techfest 2k24, Fusion 2k25, Techfest 2k25, Fusion 2k26',
                  'Fusion 2k25 reel crossed 1M views organically — the inflection point',
                  '4M+ total organic reach across @_thedurvesh and @cinesyncbydurvesh',
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
