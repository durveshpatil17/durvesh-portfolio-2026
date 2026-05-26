import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';
import { reels } from '../data/reels';

gsap.registerPlugin(ScrollTrigger);

const SECTION_PAD = 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2rem)';
const CONTAINER = { maxWidth: '1320px', margin: '0 auto' };
const BORDER_TOP = { borderTop: '1px solid S.border' };
const LABEL_STYLE = {
  marginBottom: '1rem', display: 'block',
};

const TIMELINE = [
  {
    year: '2026–28',
    title: 'MBA at SCIT Pune, Symbiosis International University',
    desc: 'Chose MBA deliberately — for people, strategy, and building. Not by default. Specialising in IT strategy and information management.',
    tag: 'Education',
  },
  {
    year: '2026',
    title: 'Social Media Head — Fusion 2026',
    desc: 'Fourth consecutive event. The system built over three years now runs on its own momentum.',
    tag: 'Current',
  },
  {
    year: '26 April 2026',
    title: 'Special Achievers Award — Most Outstanding Content Creator',
    desc: 'Awarded on farewell day by Principal Dr. Satish R. Devane, Maratha Vidya Prasarak Samaj\'s Karmaveer Adv. Baburao Ganpatrao Thakare College of Engineering, Nashik. Recognised in front of the entire graduating batch for four years of consistent content creation and social media leadership.',
    tag: 'Recognition',
  },
  {
    year: 'January 2025',
    title: 'Fusion 2025 — 1 Million Views & Stage Felicitation',
    desc: 'The Fusion 2025 event promotion reel crossed 1M organic views. On the final award ceremony day of the event, felicitated on stage by Sarchitnis Adv. Nitin Baburao Thakare, Maratha Vidya Prasarak Samaj — in front of the entire college. The moment everything became real.',
    tag: 'Creator',
  },
  {
    year: '2024',
    title: 'Felicitated at Nivesh Mantrana 2024, Indore',
    desc: "Recognised for digital promotion at Nivesh Mantrana — Central India's first national knowledge summit for mutual fund distributors. 800 MFDs from 45 cities, 6 states. Keynote by MP Chief Minister Mohan Yadav. Felicitated for social media promotion of the event.",
    tag: 'Recognition',
  },
  {
    year: '2025–26',
    title: 'Algorithmic Strategy Builder — Live Industry Project',
    desc: 'Architected an NLP-to-strategy translation pipeline for Indian financial markets during final year of engineering (2025–26). Live industry project with Dematade Algo Technology Solutions — end-to-end: data ingestion, NLP analysis, signal output. Received PPO from the company.',
    tag: 'AI Engineering',
  },
  {
    year: '2024',
    title: 'Mutual Fund Distribution & Advisory',
    desc: 'Contributed to family MF distribution business — onboarded 36+ clients, ₹13L+ AUM via SIP & lumpsum. Managed KYC, onboarding, MF suitability, and portfolio tracking.',
    tag: 'MF Distribution',
  },
  {
    year: '2024',
    title: 'Social Media Head — Techfest 2024',
    desc: 'First event as Social Media Head at KBT College Nashik. The start of a three-year run across Techfest 2024, 2025 and Fusion 2025, 2026.',
    tag: 'Creator',
  },
  {
    year: '2023',
    title: '@cinesyncbydurvesh launched',
    desc: 'Cinema has always been how I think. Launched a dedicated account for visual storytelling and editing craft.',
    tag: 'Creator',
  },
  {
    year: '—',
    title: 'The spark — Photoshop & Filmora',
    desc: 'Childhood. Started editing photos and videos before anyone called it content creation. First post. First recognition. When the internet became accessible, started sharing — and people noticed.',
    tag: 'Origin',
  },
];

const GALLERY_PHOTOS = [
  {
    src: '/assets/images/achievements/Social Media Head Fusion 2k26.jpg',
    caption: 'Social Media Head — Fusion 2026',
    year: '2026',
  },
  {
    src: '/assets/images/achievements/Social Media Head at Fusion 2k26.jpg',
    caption: 'Behind the scenes — Fusion 2026',
    year: '2026',
  },
  {
    src: '/assets/images/achievements/Social Media Head Techfest 2k25.jpg',
    caption: 'Social Media Head — Techfest 2025',
    year: '2025',
  },
  {
    src: '/assets/images/achievements/Techfest 2k25 Candid.jpg',
    caption: 'Techfest 2025 — candid',
    year: '2025',
  },
  {
    src: '/assets/images/achievements/Techfest 2k25 Candid 2.jpg',
    caption: 'Techfest 2025 — backstage',
    year: '2025',
  },
  {
    src: '/assets/images/achievements/Crossed 1 Million Views on Social Media event promotion reel of Fusion 2k25.jpg',
    caption: 'Fusion 2025 — the 1M reel moment',
    year: '2025',
  },
  {
    src: '/assets/images/achievements/Felicitation By HOD.jpg',
    caption: 'Felicitation by HOD',
    year: '2025',
  },
  {
    src: '/assets/images/achievements/Fusion 2k25 Cricket tournament winner.jpg',
    caption: 'Cricket tournament winners — Fusion 2025',
    year: '2025',
  },
  {
    src: '/assets/images/achievements/Photo with college principal on matching outfits in college cultural fest.jpg',
    caption: 'Cultural fest — with the principal',
    year: '2024',
  },
  {
    src: '/assets/images/achievements/NSS Camp Best Kitchen award.jpg',
    caption: 'NSS Camp — Best Kitchen award',
    year: '2024',
  },
  {
    src: '/assets/images/achievements/ITSA.jpg',
    caption: 'ITSA',
    year: '2024',
  },
  {
    src: '/assets/images/achievements/Social Media Head Techfest 2k24.jpg',
    caption: 'Social Media Head — Techfest 2024',
    year: '2024',
  },
];

import { reels as REEL_PREVIEWS } from '../data/reels';

function TimelineRow({ item }) {
  const [hovered, setHovered] = React.useState(false);

  const TAG_COLORS = {
    'Current':        { bg: 'rgba(74,222,128,0.1)',   border: 'rgba(74,222,128,0.25)',  text: '#4ade80' },
    'Recognition':    { bg: 'rgba(201,168,76,0.1)',   border: 'S.accentBorder', text: 'S.accent' },
    'Origin':         { bg: 'rgba(156,163,175,0.1)',  border: 'rgba(156,163,175,0.25)', text: '#9ca3af' },
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
        borderTop: '1px solid S.border',
        padding: hovered
          ? 'clamp(1.25rem,2vw,1.75rem) clamp(0.75rem,1.5vw,1.25rem)'
          : 'clamp(1.25rem,2vw,1.75rem) 0',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 'clamp(1rem, 2.5vw, 2rem)',
        alignItems: 'center',
        background: hovered ? '#1C1C26' : 'transparent',
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
          background: hovered ? S.accent : 'rgba(255,255,255,0.15)',
          transition: 'background 0.3s',
          border: hovered ? `1px solid ${S.accent}` : '1px solid rgba(255,255,255,0.2)',
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
      <span className="app-pill" style={{
        flexShrink: 0,
        background: tagStyle.bg, border: `1px solid ${tagStyle.border}`, color: tagStyle.text,
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
      className="app-card"
      style={{
        display: 'block',
        aspectRatio: tall ? '4/5' : '1/1',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        padding: 0,
      }}
    >
      {/* Actual thumbnail */}
      <img
        src={item.thumbnail}
        alt={item.caption}
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover', display: 'block',
          transition: 'transform 0.5s ease',
          transform: hov ? 'scale(1.04)' : 'scale(1)',
        }}
      />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hov
          ? 'linear-gradient(to top, rgba(6,6,6,0.75) 0%, rgba(6,6,6,0.1) 60%)'
          : 'linear-gradient(to top, rgba(6,6,6,0.55) 0%, rgba(6,6,6,0.05) 60%)',
        transition: 'background 0.3s',
      }} />
      {/* Top-left: IG icon */}
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.7 }}>
          <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
          <circle cx="17.5" cy="6.5" r="1" fill="white"/>
        </svg>
      </div>
      {/* Center play icon for reels */}
      {item.type === 'reel' && (
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '44px', height: '44px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hov ? 1 : 0.6, transition: 'opacity 0.25s',
        }}>
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M1 1L13 8L1 15V1Z" fill="white"/>
          </svg>
        </div>
      )}
      {/* Bottom: type label */}
      <div style={{ position: 'absolute', bottom: '10px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{item.type}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ opacity: hov ? 0.9 : 0.4, transition: 'opacity 0.25s' }}>
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
        background: '#13131A',
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
              border: '1px solid S.border',
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
          <div key={i} style={{ borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid S.border', position: 'relative' }}>
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

        {/* Desktop: photo RIGHT side only — no crop, no zoom */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '48%', zIndex: 0 }} className="hidden lg:block">
          <img
            src="/assets/images/personal/Profile photo.jpg"
            alt="Durvesh H. Patil"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
              display: 'block',
            }}
          />
          {/* Left fade — photo fades into dark background */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0A0A0F 0%, transparent 40%)', zIndex: 1 }} />
          {/* Bottom fade */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0A0A0F 0%, transparent 35%)', zIndex: 1 }} />
        </div>

        {/* Mobile: full bleed portrait — keeps the great mobile look */}
        <div className="lg:hidden w-full" style={{ height: '65vh', position: 'relative', overflow: 'hidden' }}>
          <img
            src="/assets/images/personal/Profile photo.jpg"
            alt="Durvesh H. Patil"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,6,0.2) 0%, rgba(6,6,6,0.5) 50%, #0A0A0F 100%)' }} />
        </div>

        {/* Text — LEFT side on desktop (photo is right), below photo on mobile */}
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 5rem)' }}>
          <div className="about-reveal" style={{ maxWidth: '560px' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'S.accent', fontWeight: 600, marginBottom: '2rem', display: 'block' }}>About</p>
            <h1 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(3.5rem, 10vw, 9rem)', lineHeight: 0.92, fontWeight: 400, color: 'S.text', letterSpacing: '-0.02em', marginBottom: '0.1em' }}>
              Durvesh
            </h1>
            <h1 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(3.5rem, 10vw, 9rem)', lineHeight: 0.92, fontWeight: 400, fontStyle: 'italic', color: 'S.text', letterSpacing: '-0.02em', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              Patil<span style={{ color: 'S.accent' }}>.</span>
            </h1>
            <p style={{ color: 'S.muted', fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.6, maxWidth: '420px' }}>
              From Filmora edits as a kid to 1 million views and a stage felicitation. Still figuring it out.
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: 'absolute', bottom: '2.5rem', right: 'clamp(1.25rem, 5vw, 5rem)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, S.muted, transparent)' }} />
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'S.muted' }}>Scroll</span>
        </div>
      </section>

      {/* ── 02. STORY ── */}
      <section style={{ ...BORDER_TOP, padding: SECTION_PAD }}>
        <div style={CONTAINER}>

          <div className="about-reveal" style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
            <span className="app-label" style={{ marginBottom: '1rem', display: 'block' }}>The Story</span>
            {/* Pull quote */}
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '3px', flexShrink: 0, alignSelf: 'stretch', background: S.accent, borderRadius: '2px', minHeight: '80px' }} />
              <p style={{
                fontFamily: S.serif, fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
                color: S.text, lineHeight: 1.35, fontWeight: 400, maxWidth: '800px',
              }}>
                "I started editing videos on Filmora as a kid. I didn't know it was building a career. I just knew I loved making things."
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
                It started with Photoshop and Filmora. As a kid, before anyone called it content creation, I was editing photos and cutting videos — just because I loved making things. When the internet became easily accessible and people started posting content, I did too. Not for followers. Because I couldn't not.
              </p>
              <p style={{ color: S.muted, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.8, fontWeight: 300 }}>
                Engineering at Maratha Vidya Prasarak Samaj's KBT College of Engineering, Nashik gave me the technical foundation. But somewhere between writing code and watching how a well-made reel makes a crowd go silent — I realised what I actually wanted: to be in the room where problems get solved face to face.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <p style={{ color: S.muted, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.8, fontWeight: 300 }}>
                That realisation led me to MBA at SCIT Pune, Symbiosis International University. Not as a fallback — but deliberately. I love people, strategy, and building things that actually fit the human using them. MBA is where that becomes a career.
              </p>
              <p style={{ color: S.muted, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.8, fontWeight: 300 }}>
                The content kept growing alongside everything else. Four events. Social media head. Fusion 2025 hit 1 million views. I got felicitated on stage by Sarchitnis Adv. Nitin Baburao Thakare. Then on farewell day — Principal Dr. Satish R. Devane handed me the Special Achievers Award in front of the whole graduating batch. I didn't plan any of it. I just kept showing up.
              </p>
              <p style={{ color: S.muted, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.8, fontWeight: 300 }}>
                I also sing. I listen to podcasts. And I believe in two things deeply — Virat Kohli's "even a 1% chance is good enough to go all in" and Sunil Chhetri's "never set small goals for yourself."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. TIMELINE ── */}
      <section style={{ ...BORDER_TOP, background: '#13131A', padding: SECTION_PAD }}>
        <div style={CONTAINER}>
          <div className="about-reveal" style={{ marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
            <span className="app-label" style={{ marginBottom: '1rem', display: 'block' }}>Journey</span>
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
              <span className="app-label" style={{ marginBottom: '1rem', display: 'block' }}>On Instagram</span>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, fontWeight: 400, lineHeight: 1.1 }}>
                The creator side.
              </h2>
            </div>
            <a href="https://www.instagram.com/_thedurvesh/" target="_blank" rel="noreferrer"
              style={{ color: S.muted, fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s', marginBottom: '0.5rem' }}
              onMouseEnter={e => e.target.style.color = S.accent}
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
              <a key={acc.handle} href={acc.href} target="_blank" rel="noreferrer" className="app-card"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
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
      <section style={{ ...BORDER_TOP, background: '#13131A', paddingTop: 'clamp(5rem, 10vw, 9rem)', paddingBottom: 0 }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 5rem)', marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
          <div className="about-reveal">
            <span className="app-label" style={{ marginBottom: '1rem', display: 'block' }}>Moments</span>
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
            <span className="app-label" style={{ marginBottom: '1rem', display: 'block' }}>Recognition</span>
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
            <div style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden', borderRadius: '1.25rem', border: '1px solid S.border' }}>
              <img
                src="/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg"
                alt="Outstanding Content Creator Award"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.7) 0%, transparent 50%)' }} />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', padding: '0.5rem 1.25rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '3rem' }}>
                <span style={{ fontSize: '0.75rem', color: S.accent }}>★</span>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: S.accent, fontWeight: 600 }}>KBTCOE 2025</span>
              </div>
              <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: S.text, fontWeight: 400, lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Most Outstanding Content Creator.
              </h3>
              <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.5rem' }}>
                Recognized for consistency, execution, and measurable digital impact. This award came through reel scripting, strategic audience engagement, and event promotion campaigns that generated real visibility — not manufactured reach.
              </p>
              <div style={{ borderTop: '1px solid S.border', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  '4× Social Media Lead — Techfest 2k24, Fusion 2k25, Techfest 2k25, Fusion 2k26',
                  'Fusion 2k25 reel crossed 1M views organically — the inflection point',
                  '4M+ total organic reach across @_thedurvesh and @cinesyncbydurvesh',
                ].map(point => (
                  <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: S.accent, flexShrink: 0, marginTop: '0.5rem' }} />
                    <span style={{ color: S.muted, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07. CLOSING NOTE ── */}
      <section style={{ ...BORDER_TOP, background: '#13131A', padding: SECTION_PAD, textAlign: 'center' }}>
        <div style={{ ...CONTAINER, maxWidth: '720px' }}>
          <div className="about-reveal">
            <span className="app-label" style={{ marginBottom: '1rem', display: 'block', textAlign: 'center' }}>A note</span>
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
                padding: '0.875rem 2rem', background: S.accent, color: '#0A0A0F',
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
                onMouseEnter={e => e.currentTarget.style.borderColor = S.accent}
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
