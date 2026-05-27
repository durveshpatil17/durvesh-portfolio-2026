import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';
import { reels } from '../data/reels';

gsap.registerPlugin(ScrollTrigger);

// ── Timeline data ────────────────────────────────────────────────────
const TIMELINE = [
  {
    year: '2024–26',
    title: 'MBA at SCIT Pune, Symbiosis International University',
    desc: 'Chose MBA deliberately — for people, strategy, and building. Specialising in IT strategy and information management at one of India\'s premier tech-management institutes.',
    tag: 'Education',
  },
  {
    year: '25 Apr 2026',
    title: '★ Special Achievers Award — Most Outstanding Content Creator',
    desc: 'Felicitated by Dr. Satish R. Devane, Director, Maratha Vidya Prasarak Samaj\'s KBT College of Engineering, Nashik — on farewell day, in front of the entire graduating batch. Four years of showing up, recognised in one moment.',
    tag: 'Recognition',
    featured: true,
  },
  {
    year: 'Jan 2025',
    title: 'Fusion 2025 — Felicitated on stage by Sarchitnis Adv. Nitin Baburao Thakare',
    desc: 'The Fusion 2025 event promotion reel crossed 1M organic views. On the final award ceremony day, felicitated on stage in front of the entire college by Sarchitnis Adv. Nitin Baburao Thakare, Maratha Vidya Prasarak Samaj. The moment everything became real.',
    tag: 'Recognition',
  },
  {
    year: '2024',
    title: 'Felicitated at Nivesh Mantrana 2024 — National MF Summit, Indore',
    desc: "Recognised for digital promotion at Nivesh Mantrana — Central India's first national knowledge summit for mutual fund distributors. 800 MFDs from 45 cities across 6 states. Keynote by MP Chief Minister Mohan Yadav.",
    tag: 'Recognition',
  },
  {
    year: '2025–26',
    title: 'Algorithmic Strategy Builder — Live Industry Project, Dematade Algo Technology Solutions',
    desc: 'Architected an NLP-to-strategy translation pipeline for Indian financial markets as a live industry project during final year of engineering. End-to-end: data ingestion, NLP analysis, signal output. Received PPO from the company.',
    tag: 'AI Engineering',
  },
  {
    year: '2024',
    title: 'Mutual Fund Distribution & Advisory',
    desc: 'Contributed to family MF distribution business. Onboarded 36+ clients contributing ₹13L+ AUM through SIP and lumpsum. Managed KYC, onboarding, and MF suitability. Currently building an AI-based SIP allocation platform.',
    tag: 'MF Distribution',
  },
  {
    year: '2024–26',
    title: 'Social Media Head — Techfest 2024 & 2025 · Fusion 2025 & 2026',
    desc: 'Led digital branding, reel strategy, and content campaigns for four consecutive major events at KBT College Nashik. Built the system from scratch in 2024 and scaled it each year.',
    tag: 'Creator',
  },
  {
    year: '2023',
    title: '@cinesyncbydurvesh launched',
    desc: 'Cinema has always been how I think. Launched a dedicated Instagram brand for visual storytelling and editing craft.',
    tag: 'Creator',
  },
  {
    year: '2019–24',
    title: 'B.E. Information Technology — KBT College of Engineering, Nashik',
    desc: 'Maratha Vidya Prasarak Samaj\'s KBT College of Engineering. Technical foundation in software, systems, and engineering thinking.',
    tag: 'Education',
  },
  {
    year: 'Childhood',
    title: 'The spark — Photoshop & Filmora',
    desc: 'Started editing photos and videos before anyone called it content creation. First post. First recognition. When the internet became accessible, started sharing — and people noticed.',
    tag: 'Origin',
  },
];

const TAG_COLORS = {
  'Education':     { bg: 'rgba(168,85,247,0.08)',  border: 'rgba(168,85,247,0.2)',  text: '#9333EA' },
  'Recognition':   { bg: 'rgba(180,140,0,0.08)',   border: 'rgba(180,140,0,0.2)',   text: '#8B6914' },
  'AI Engineering':{ bg: 'rgba(83,74,183,0.08)',   border: 'rgba(83,74,183,0.2)',   text: '#534AB7' },
  'MF Distribution':{ bg: 'rgba(37,99,235,0.08)',  border: 'rgba(37,99,235,0.2)',   text: '#1D4ED8' },
  'Creator':       { bg: 'rgba(219,39,119,0.08)',  border: 'rgba(219,39,119,0.2)',  text: '#BE185D' },
  'Origin':        { bg: 'rgba(100,116,139,0.08)', border: 'rgba(100,116,139,0.2)', text: '#475569' },
};

// ── Gallery photos for horizontal pin scroll ─────────────────────────
const GALLERY_PHOTOS = [
  { src: '/assets/images/achievements/Social Media Head Fusion 2k26.jpg',                                                    caption: 'Social Media Head — Fusion 2026',           year: '2026', wide: true  },
  { src: '/assets/images/achievements/Social Media Head at Fusion 2k26.jpg',                                                 caption: 'Backstage — Fusion 2026',                   year: '2026', wide: false },
  { src: '/assets/images/achievements/Social Media Head Techfest 2k25.jpg',                                                  caption: 'Social Media Head — Techfest 2025',         year: '2025', wide: false },
  { src: '/assets/images/achievements/Techfest 2k25 Candid.jpg',                                                             caption: 'Techfest 2025 — candid',                    year: '2025', wide: true  },
  { src: '/assets/images/achievements/Techfest 2k25 Candid 2.jpg',                                                           caption: 'Backstage — Techfest 2025',                 year: '2025', wide: false },
  { src: '/assets/images/achievements/Crossed 1 Million Views on Social Media event promotion reel of Fusion 2k25.jpg',      caption: 'Fusion 2025 — the 1M felicitation moment',  year: '2025', wide: false },
  { src: '/assets/images/achievements/Fusion 2k25 Cricket tournament winner.jpg',                                            caption: 'Cricket tournament — Fusion 2025',           year: '2025', wide: true  },
  { src: '/assets/images/achievements/Photo with college principal on matching outfits in college cultural fest.jpg',        caption: 'Cultural fest — with the Principal',         year: '2024', wide: false },
  { src: '/assets/images/achievements/NSS Camp Best Kitchen award.jpg',                                                      caption: 'NSS Camp — Best Kitchen award',             year: '2024', wide: false },
  { src: '/assets/images/achievements/ITSA.jpg',                                                                             caption: 'ITSA',                                       year: '2024', wide: false },
  { src: '/assets/images/achievements/Social Media Head Techfest 2k24.jpg',                                                  caption: 'Social Media Head — Techfest 2024',         year: '2024', wide: true  },
  { src: '/assets/images/achievements/Most Enthusiastic Personality Felicitation.JPG',                                       caption: 'Most Enthusiastic Personality',             year: '2024', wide: false },
  { src: '/assets/images/achievements/award receiving candid photo at nivesh mantrana 2k24.jpg',                            caption: 'Nivesh Mantrana 2024 — award moment',       year: '2024', wide: false },
];

const CERTIFICATES = [
  { img: '/assets/images/certificates/Techfest 2k25 Social Media head Participation certificate.jpeg', label: 'Techfest 2025 — Social Media Head' },
  { img: '/assets/images/certificates/Internation Journal of science paper publication certificate.jpeg', label: 'International Journal Publication' },
  { img: '/assets/images/certificates/second-research-certificate.jpg', label: 'Research Certificate' },
  { img: '/assets/images/certificates/Cricket tournament winner certificate.jpeg', label: 'Cricket Tournament Winners' },
];

// ── Sub-components ───────────────────────────────────────────────────

function TimelineRow({ item }) {
  const [hovered, setHovered] = useState(false);
  const tagStyle = TAG_COLORS[item.tag] || TAG_COLORS['Origin'];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: `0.5px solid ${item.featured ? 'rgba(180,140,0,0.3)' : '#E5E4E0'}`,
        display: 'grid',
        gridTemplateColumns: 'clamp(80px,12vw,120px) 1fr auto',
        gap: 'clamp(1rem,2.5vw,2rem)',
        alignItems: 'center',
        padding: hovered
          ? 'clamp(1.1rem,2vw,1.6rem) clamp(0.75rem,1.5vw,1.25rem)'
          : 'clamp(1.1rem,2vw,1.6rem) 0',
        background: hovered
          ? item.featured ? 'rgba(180,140,0,0.04)' : '#F5F4F0'
          : item.featured ? 'rgba(180,140,0,0.02)' : 'transparent',
        borderRadius: hovered ? '12px' : '0',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}>
      {/* Year */}
      <span style={{
        fontFamily: S.serif,
        fontSize: 'clamp(0.75rem,1.2vw,0.875rem)',
        color: item.featured ? '#8B6914' : '#999',
        fontStyle: 'italic',
        lineHeight: 1.3,
      }}>
        {item.year}
      </span>

      {/* Title + description */}
      <div>
        <p style={{
          fontSize: 'clamp(0.95rem,1.8vw,1.15rem)',
          color: item.featured ? '#8B6914' : '#111',
          fontWeight: 500,
          lineHeight: 1.25,
          marginBottom: hovered ? '0.5rem' : 0,
          transition: 'margin 0.3s',
          fontFamily: item.featured ? S.serif : 'inherit',
        }}>
          {item.title}
        </p>
        <p style={{
          fontSize: '13px',
          color: '#666',
          fontWeight: 300,
          lineHeight: 1.65,
          maxHeight: hovered ? '80px' : 0,
          opacity: hovered ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
        }}>
          {item.desc}
        </p>
      </div>

      {/* Tag */}
      <span style={{
        fontSize: '10px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '3px 10px',
        borderRadius: '20px',
        flexShrink: 0,
        background: tagStyle.bg,
        border: `0.5px solid ${tagStyle.border}`,
        color: tagStyle.text,
        whiteSpace: 'nowrap',
        display: 'none',
      }} className="hidden sm:inline-block">
        {item.tag}
      </span>
    </div>
  );
}

function HorizontalGallery({ photos }) {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const section = sectionRef.current;
      const track   = trackRef.current;
      if (!section || !track) return;

      const getScrollDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => { tween.scrollTrigger?.kill(); tween.kill(); };
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* Desktop — pinned horizontal scroll */}
      <div ref={sectionRef} className="hidden md:block" style={{ background: '#F5F4F0', overflow: 'hidden' }}>
        <div ref={trackRef} style={{
          display: 'flex',
          gap: '1.25rem',
          padding: '3rem clamp(1.25rem,5vw,4rem)',
          width: 'max-content',
          alignItems: 'flex-start',
        }}>
          {photos.map((photo, i) => (
            <div key={i} style={{
              flexShrink: 0,
              width: photo.wide ? 'clamp(320px,30vw,480px)' : 'clamp(220px,22vw,340px)',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '0.5px solid #E5E4E0',
              position: 'relative',
              marginTop: i % 3 === 1 ? '2.5rem' : i % 3 === 2 ? '1.25rem' : '0',
            }}>
              <img
                src={photo.src}
                alt={photo.caption}
                style={{
                  width: '100%',
                  aspectRatio: photo.wide ? '3/2' : '2/3',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
                padding: '2rem 1.25rem 1rem',
              }}>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '3px' }}>{photo.year}</p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, fontWeight: 300 }}>{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile — 2 column grid */}
      <div className="md:hidden" style={{ background: '#F5F4F0', padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,4rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {photos.map((photo, i) => (
            <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', border: '0.5px solid #E5E4E0', position: 'relative' }}>
              <img src={photo.src} alt={photo.caption} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)', padding: '1rem 0.75rem 0.625rem' }}>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ReelCard({ item, tall = false }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'block',
        aspectRatio: tall ? '4/5' : '1/1',
        borderRadius: '12px',
        overflow: 'hidden',
        border: `0.5px solid ${hov ? '#AFA9EC' : '#E5E4E0'}`,
        textDecoration: 'none',
        position: 'relative',
        transition: 'border-color 0.2s, transform 0.25s',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        cursor: 'pointer',
      }}>
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
      <div style={{
        position: 'absolute', inset: 0,
        background: hov
          ? 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.05) 60%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)',
        transition: 'background 0.3s',
      }} />
      {/* IG icon */}
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.75 }}>
          <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
          <circle cx="17.5" cy="6.5" r="1" fill="white"/>
        </svg>
      </div>
      {/* Play icon for reels */}
      {item.type === 'reel' && (
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hov ? 1 : 0.7, transition: 'opacity 0.2s',
        }}>
          <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0l10 6-10 6V0z"/></svg>
        </div>
      )}
      {/* Bottom label */}
      <div style={{ position: 'absolute', bottom: '10px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>{item.type}</span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{ opacity: hov ? 0.9 : 0.45, transition: 'opacity 0.2s' }}>
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
}

// ── Main component ───────────────────────────────────────────────────
export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        gsap.utils.toArray('.reveal').forEach(el => {
          gsap.fromTo(el,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } }
          );
        });
      });
      mm.add('(max-width: 767px)', () => {
        gsap.utils.toArray('.reveal').forEach(el => {
          gsap.fromTo(el, { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' } });
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>

      {/* ── 01. HERO ── */}
      <section style={{
        minHeight: '100svh',
        position: 'relative',
        background: '#0C0C0F',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: 'clamp(4rem,8vw,7rem)',
      }}>
        {/* Photo — right side desktop */}
        <div className="hidden lg:block" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '48%', zIndex: 0 }}>
          <img
            src="/assets/images/personal/Profile photo.jpg"
            alt="Durvesh H. Patil"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0C0C0F 0%, rgba(12,12,15,0.5) 40%, transparent 80%)', zIndex: 1 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0C0C0F 0%, transparent 35%)', zIndex: 1 }} />
        </div>

        {/* Mobile photo */}
        <div className="lg:hidden" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '60vh', overflow: 'hidden' }}>
          <img
            src="/assets/images/personal/Profile photo.jpg"
            alt="Durvesh H. Patil"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(12,12,15,0.1) 0%, rgba(12,12,15,0.6) 60%, #0C0C0F 100%)' }} />
        </div>

        {/* Text */}
        <div style={{
          position: 'relative', zIndex: 2,
          width: '100%', maxWidth: '1160px', margin: '0 auto',
          padding: '0 clamp(1.25rem,5vw,4rem)',
        }}>
          <div className="reveal" style={{ maxWidth: '560px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>About</span>
            </div>
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(3.5rem,10vw,8rem)', lineHeight: 0.92, fontWeight: 400, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '0.08em' }}>
              Durvesh
            </h1>
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(3.5rem,10vw,8rem)', lineHeight: 0.92, fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.02em', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
              Patil<span style={{ color: '#534AB7' }}>.</span>
            </h1>
            <p style={{ fontSize: 'clamp(14px,1.6vw,17px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '400px', fontWeight: 300 }}>
              From engineering at KBT College Nashik to MBA at Symbiosis. From Filmora edits to a stage felicitation. Still early. Still building.
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: 'absolute', bottom: '2rem', right: 'clamp(1.25rem,5vw,4rem)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
          <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Scroll</span>
        </div>
      </section>

      {/* ── 02. OPENING STATEMENT ── */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8', borderTop: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>

          {/* Pull quote */}
          <div className="reveal" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: 'clamp(3rem,6vw,5rem)' }}>
            <div style={{ width: '2px', flexShrink: 0, alignSelf: 'stretch', background: '#534AB7', opacity: 0.4, borderRadius: '1px', minHeight: '70px' }} />
            <p style={{
              fontFamily: S.serif, fontStyle: 'italic',
              fontSize: 'clamp(1.3rem,2.8vw,2.2rem)',
              color: '#111', lineHeight: 1.4, fontWeight: 400, maxWidth: '820px',
            }}>
              "I don't think most people are operating anywhere near their actual capacity. Not because they can't — but because nobody showed them it was possible, and they stopped before finding out."
            </p>
          </div>

          {/* Two-column story */}
          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
            gap: 'clamp(2rem,5vw,5rem)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                It started with Photoshop and Filmora. As a kid, before anyone called it content creation, I was editing photos and cutting videos — just because I loved making things. When the internet became easily accessible and people started posting content, I did too. Not for followers. Because I couldn't not.
              </p>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                Engineering at Maratha Vidya Prasarak Samaj's KBT College of Engineering, Nashik gave me the technical foundation. But somewhere between writing code and watching how a well-made reel makes a crowd go silent — I realised what I actually wanted: to be in the room where problems get solved face to face.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                That realisation led me to MBA at SCIT Pune, Symbiosis International University. Not as a fallback — but deliberately. I love people, strategy, and building solutions that actually fit the human using them.
              </p>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                The content kept growing alongside everything else. Four events. Social media head. Felicitated by Sarchitnis Adv. Nitin Baburao Thakare in January 2025. And on farewell day — Dr. Satish R. Devane handed me the Special Achievers Award in front of the whole graduating batch. I didn't plan any of it. I just kept showing up.
              </p>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                I also sing. I listen to podcasts. And I believe deeply: there is no limit to how big you can think — only the limits you accept.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. TIMELINE ── */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: '#F5F4F0', borderTop: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>
            <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '0.75rem' }}>Journey</span>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', color: '#111', fontWeight: 400 }}>
              How we got here.
            </h2>
          </div>

          <div className="reveal">
            {TIMELINE.map((item, i) => (
              <TimelineRow key={i} item={item} />
            ))}
            <div style={{ borderTop: '0.5px solid #E5E4E0' }} />
          </div>
        </div>
      </section>

      {/* ── 04. SPECIAL ACHIEVERS AWARD ── */}
      <section style={{ background: '#0C0C0F', padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>

          <div className="reveal" style={{ marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>
            <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '0.75rem' }}>Recognition</span>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', color: '#FFFFFF', fontWeight: 400 }}>
              The proof points.
            </h2>
          </div>

          {/* Award feature — asymmetric 60/40 */}
          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
            gap: 'clamp(2rem,4vw,4rem)',
            alignItems: 'center',
            marginBottom: 'clamp(3rem,5vw,5rem)',
          }}>
            {/* Photos — left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '0.5px solid rgba(180,140,0,0.2)', position: 'relative' }}>
                <img
                  src="/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg"
                  alt="Special Achievers Award — Most Outstanding Content Creator"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', padding: '1.5rem 1.25rem 1rem' }}>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>Farewell Day · 25 April 2026 · KBT College Nashik</p>
                </div>
              </div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.08)' }}>
                <img
                  src="/assets/images/achievements/Felicitation By HOD.jpg"
                  alt="Felicitation ceremony"
                  style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            {/* Text — right */}
            <div>
              {/* Gold badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                marginBottom: '1.5rem',
                padding: '0.5rem 1.25rem',
                background: 'rgba(180,140,0,0.1)',
                border: '0.5px solid rgba(180,140,0,0.3)',
                borderRadius: '30px',
              }}>
                <span style={{ fontSize: '13px' }}>★</span>
                <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600 }}>Special Achievers Award · 2026</span>
              </div>

              <h3 style={{
                fontFamily: S.serif,
                fontSize: 'clamp(1.5rem,3vw,2.5rem)',
                color: '#FFFFFF',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}>
                Most Outstanding<br /><em>Content Creator.</em>
              </h3>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontWeight: 300, marginBottom: '2rem' }}>
                Awarded on farewell day by <strong style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Dr. Satish R. Devane, Director</strong>, Maratha Vidya Prasarak Samaj's KBT College of Engineering — in front of the entire graduating batch of 2026. Four years of consistent content creation, social media leadership, and event execution — recognised in one moment.
              </p>

              {/* Bullet points */}
              <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  'Social Media Head — Techfest 2024 & 2025, Fusion 2025 & 2026',
                  'Felicitated by Sarchitnis Adv. Nitin Baburao Thakare, Jan 2025',
                  'Felicitated at Nivesh Mantrana 2024, Indore — national MF summit',
                  'Most Enthusiastic Personality award — KBT College',
                ].map(point => (
                  <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A84C', flexShrink: 0, marginTop: '0.55rem' }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', fontWeight: 300, lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. INSTAGRAM CREATOR ── */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8', borderTop: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2rem,4vw,3rem)', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '0.75rem' }}>On Instagram</span>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', color: '#111', fontWeight: 400 }}>
                Two active brands.<br /><em>Every post intentional.</em>
              </h2>
            </div>
            <a href="https://www.instagram.com/_thedurvesh/" target="_blank" rel="noreferrer"
              style={{ fontSize: '12px', color: '#999', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#534AB7'}
              onMouseLeave={e => e.target.style.color = '#999'}>
              @_thedurvesh →
            </a>
          </div>

          {/* Asymmetric reel grid */}
          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))',
            gap: '0.875rem',
            alignItems: 'start',
            marginBottom: '1.25rem',
          }}>
            <ReelCard item={reels[0]} tall={true} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <ReelCard item={reels[1]} tall={false} />
              <ReelCard item={reels[2]} tall={false} />
            </div>
            <ReelCard item={reels[3]} tall={true} />
          </div>

          {/* Account cards */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '0.875rem' }}>
            {[
              { handle: '@_thedurvesh',       sub: 'Personal Brand · Tech · MBA Life',    img: '/assets/images/personal/Personal Photo 1.webp', href: 'https://instagram.com/_thedurvesh' },
              { handle: '@cinesyncbydurvesh', sub: 'Cinema · Visual Storytelling',         img: '/assets/images/personal/CineSync.jpg',          href: 'https://instagram.com/cinesyncbydurvesh' },
            ].map(acc => (
              <a key={acc.handle} href={acc.href} target="_blank" rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  background: '#FFFFFF',
                  border: '0.5px solid #E5E4E0',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#AFA9EC'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E4E0'}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '0.5px solid #E5E4E0' }}>
                  <img src={acc.img} alt={acc.handle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: '14px', color: '#111', fontWeight: 500, marginBottom: '2px' }}>{acc.handle}</p>
                  <p style={{ fontSize: '12px', color: '#999', fontWeight: 300 }}>{acc.sub}</p>
                </div>
                <span style={{ color: '#CCC', marginLeft: 'auto', flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. PHOTO JOURNEY ── */}
      <section style={{ borderTop: '0.5px solid #E5E4E0' }}>
        <div style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem) clamp(2rem,4vw,3rem)', background: '#F5F4F0' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <div className="reveal">
              <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '0.75rem' }}>Moments</span>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', color: '#111', fontWeight: 400 }}>
                In the room.
              </h2>
            </div>
          </div>
        </div>
        <HorizontalGallery photos={GALLERY_PHOTOS} />
      </section>

      {/* ── 07. RESEARCH & CREDENTIALS ── */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8', borderTop: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>
            <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '0.75rem' }}>Credentials</span>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', color: '#111', fontWeight: 400 }}>
              Published & certified.
            </h2>
          </div>

          {/* Research papers */}
          <div className="reveal" style={{ marginBottom: 'clamp(2.5rem,4vw,4rem)' }}>
            {[
              {
                num: '01',
                type: 'Conference Paper',
                title: 'AI for Innovation, Sustainability & Global Development',
                venue: 'International Conference on Artificial Intelligence for Innovation, Sustainability and Global Development',
                desc: 'Research paper presented and published at an international conference on AI applications in sustainability and global development contexts.',
                certImg: '/assets/images/certificates/Internation Journal of science paper publication certificate.jpeg',
                doc: '/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf',
              },
              {
                num: '02',
                type: 'Journal Publication',
                title: 'Research Publication — International Journal of Science',
                venue: 'International Journal of Science',
                desc: 'Published research in an international science journal, contributing to ongoing academic and technical writing alongside engineering and MBA work.',
                certImg: '/assets/images/certificates/second-research-certificate.jpg',
                doc: '/assets/documents/Durvesh Patil_Participation_Certificate.pdf',
              },
            ].map((paper, i) => (
              <div key={paper.num} style={{
                borderTop: '0.5px solid #E5E4E0',
                padding: 'clamp(1.5rem,2.5vw,2.5rem) 0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))',
                gap: 'clamp(2rem,4vw,4rem)',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: S.serif, fontSize: '0.9rem', color: '#CCC', fontStyle: 'italic' }}>{paper.num}</span>
                    <span style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '20px', background: 'rgba(83,74,183,0.08)', color: '#534AB7', border: '0.5px solid rgba(83,74,183,0.2)' }}>{paper.type}</span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.05rem,2vw,1.35rem)', color: '#111', fontWeight: 400, lineHeight: 1.25, marginBottom: '0.5rem' }}>{paper.title}</h3>
                  <p style={{ fontSize: '13px', color: '#999', fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.5 }}>{paper.venue}</p>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.25rem' }}>{paper.desc}</p>
                  <a href={paper.doc} target="_blank" rel="noreferrer"
                    style={{ fontSize: '12px', color: '#999', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#534AB7'}
                    onMouseLeave={e => e.currentTarget.style.color = '#999'}>
                    View Certificate ↗
                  </a>
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '0.5px solid #E5E4E0' }}>
                  <img src={paper.certImg} alt={paper.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            ))}
            <div style={{ borderTop: '0.5px solid #E5E4E0' }} />
          </div>

          {/* Certificates grid */}
          <div className="reveal">
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', marginBottom: '1.5rem' }}>Certificates</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '0.875rem' }}>
              {CERTIFICATES.map(cert => (
                <div key={cert.label} style={{ borderRadius: '12px', overflow: 'hidden', border: '0.5px solid #E5E4E0', background: '#FFFFFF' }}>
                  <img src={cert.img} alt={cert.label} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                  <p style={{ padding: '0.875rem 1rem', fontSize: '12px', color: '#666', fontWeight: 300, lineHeight: 1.4 }}>{cert.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 08. CLOSING ── */}
      <section style={{ background: '#0C0C0F', padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', borderTop: '0.5px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="reveal">
            <p style={{ fontFamily: S.serif, fontStyle: 'italic', fontSize: 'clamp(1.3rem,3vw,2rem)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, marginBottom: '1rem' }}>
              "Think bigger than you think is allowed."
            </p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, fontWeight: 300, marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              Everything you think is possible — is. The only question is whether you're willing to keep going long enough to find out.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/writing" style={{
                padding: '0.875rem 2rem', background: '#FFFFFF', color: '#0C0C0F',
                borderRadius: '30px', fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'opacity 0.2s',
                display: 'inline-flex', alignItems: 'center', minHeight: '44px',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                Read the Writing
              </Link>
              <Link to="/work" style={{
                padding: '0.875rem 2rem', background: 'transparent',
                border: '0.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.65)',
                borderRadius: '30px', fontSize: '12px', fontWeight: 400,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'border-color 0.2s',
                display: 'inline-flex', alignItems: 'center', minHeight: '44px',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}>
                See the Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
