import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';
import { articles } from '../data/articles';
import { reels } from '../data/reels';

gsap.registerPlugin(ScrollTrigger);

const N = 6;

// objectPosition: face centred in the frame
const HERO_PHOTOS = [
  // objectPosition: x% from left, y% from top
  // Lower Y value = shows more of the top (face/head area)
  { src: '/assets/images/personal/Personal Photo 2.JPG',  pos: '50% 20%' }, // sitting, face upper-center
  { src: '/assets/images/personal/personal photo 3.jpeg', pos: '50% 30%' }, // standing with medal, upper-body focus
  { src: '/assets/images/personal/Personal photo 4.jpg',  pos: '50% 25%' }, // face centered
  { src: '/assets/images/personal/Personal photo 6.jpg',  pos: '50% 15%' }, // face near top
  { src: '/assets/images/personal/personal photo 7.webp', pos: '50% 20%' }, // face upper-center
  { src: '/assets/images/personal/personal photo 8.jpg',  pos: '50% 22%' }, // face upper-center
];

const HERO_STATS = [
  { value: '2',      label: 'Research Publications' },
  { value: '1',      label: 'Live Industry Project' },
  { value: 'PPO',    label: 'Offer Received' },
  { value: 'SCIT',   label: 'Symbiosis, Pune' },
];

// Light / Dark section palette
const L = { bg: '#FAFAF8', border: '#E5E4E0', text: '#111111', muted: '#666', sub: '#999' };
const D = { bg: '#111118', border: 'rgba(255,255,255,0.08)', text: '#FFFFFF', muted: 'rgba(255,255,255,0.55)', sub: 'rgba(255,255,255,0.32)' };

export default function HomePage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach(el => {
        gsap.fromTo(el, { y: 18, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>

      {/* ════════════════════════════════════════ HERO
          One section, one carousel.
          Desktop: photos on right 52% | text on left.
          Mobile:  photos fill full screen | text pinned bottom over gradient.
      ═══════════════════════════════════════════════════ */}
      <section className="hero-section" style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        background: '#0C0C0F',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}>

        {/* ── Photo carousel: full-bleed mobile, right-strip desktop ── */}
        <div className="hero-photo-wrap">
          {/* Sliding strip: 600% wide, each slot = 1/6 */}
          <div style={{
            display: 'flex',
            width: `${N * 100}%`,
            height: '100%',
            animation: `carousel-slide ${N * 3.5}s ease-in-out infinite`,
          }}>
            {HERO_PHOTOS.map((p, i) => (
              <div key={i} style={{
                width: `${100 / N}%`,
                height: '100%',
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <img
                  src={p.src}
                  alt=""
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: p.pos,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Mobile gradient — rises from bottom, face stays clear */}
          <div className="hero-mobile-grad" />

          {/* Desktop gradients — right edge + bottom edge only */}
          <div className="hero-desktop-grads" style={{
            position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          }}>
            {/* Right: dark text area bleeds into photo */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to left, #0C0C0F 0%, rgba(12,12,15,0.6) 35%, transparent 70%)',
            }} />
            {/* Bottom */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, #0C0C0F 0%, transparent 40%)',
            }} />
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="hero-dots" style={{
          position: 'absolute', bottom: '2rem',
          left: 'clamp(1.25rem, 5vw, 4rem)',
          zIndex: 5, display: 'flex', gap: '5px', alignItems: 'center',
        }}>
          {HERO_PHOTOS.map((_, i) => (
            <div key={i} style={{
              height: '5px', borderRadius: '3px',
              animationName: `dot-${i + 1}`,
              animationDuration: `${N * 3.5}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
            }} />
          ))}
        </div>

        {/* ── Text block — bottom of screen, full-width on mobile, max 540px on desktop ── */}
        <div className="hero-text-container" style={{
          position: 'relative', zIndex: 2,
          width: '100%', maxWidth: '1160px',
          margin: '0 auto',
          padding: 'clamp(1.25rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: '540px' }}
          >
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ width: '22px', height: '1px', background: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>
                MBA-ITBM Candidate | Technology, Risk &amp; Business Strategy
              </span>
            </div>

            {/* Pinned Article Banner */}
            <Link to="/writing/the-5-skills-nobody-teaches-you" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '10px', 
              padding: '6px 14px 6px 6px', background: 'rgba(255,255,255,0.06)', 
              borderRadius: '30px', border: '0.5px solid rgba(255,255,255,0.12)', 
              textDecoration: 'none', marginBottom: '1.5rem', transition: 'all 0.2s',
              backdropFilter: 'blur(10px)'
            }} 
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }} 
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
              <span style={{ background: '#FFFFFF', color: '#0C0C0F', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>New</span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>Read: The 5 Skills Nobody Teaches You</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>→</span>
            </Link>

            {/* Headline */}
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.0, color: '#FFFFFF', marginBottom: '0.05em', letterSpacing: '-0.02em' }}>
              Technology. Risk.
            </h1>
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.0, color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              Business Strategy.
            </h1>

            {/* Subheading */}
            <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: '400px', marginBottom: '1.75rem', fontWeight: 300 }}>
              I'm Durvesh Patil, an MBA-ITBM student at SCIT with a background in Information Technology. I'm interested in how organizations use, govern, secure, and scale technology — across IT risk, enterprise systems, information security, AI use cases, product thinking, and business strategy. Through projects, writing, and practical exploration, I'm building at the intersection of technology, business, risk, and consulting.
            </p>

            {/* Stats — desktop only via inline media logic */}
            <HeroStats />

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/writing" style={{
                padding: '0.75rem 1.5rem', background: '#FFFFFF', color: '#0C0C0F',
                borderRadius: '30px', fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', minHeight: '44px',
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                Read the Writing
              </Link>
              <Link to="/work" style={{
                padding: '0.75rem 1.5rem', background: 'transparent',
                border: '0.5px solid rgba(255,255,255,0.28)', color: 'rgba(255,255,255,0.75)',
                borderRadius: '30px', fontSize: '11px', fontWeight: 400,
                letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', minHeight: '44px',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}>
                See the Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DOMAIN TAGS ── */}
      <section style={{
        padding: 'clamp(2rem,4vw,3rem) clamp(1.25rem,5vw,4rem)',
        background: '#F5F4F0',
        borderTop: '0.5px solid #E5E4E0',
        borderBottom: '0.5px solid #E5E4E0',
      }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.625rem',
            alignItems: 'center',
          }}>
            <span style={{
              fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#999999', marginRight: '0.5rem',
              flexShrink: 0,
            }}>
              Focus areas
            </span>
            {[
              'IT Risk & IT Audit',
              'Information Security & IAM',
              'Enterprise Technology',
              'AI in Business',
              'Product & User Adoption',
              'Technology Consulting',
            ].map(tag => (
              <span key={tag} style={{
                fontSize: '12px',
                padding: '0.4rem 1rem',
                borderRadius: '30px',
                background: '#FFFFFF',
                border: '0.5px solid #E5E4E0',
                color: '#555555',
                fontWeight: 400,
                letterSpacing: '0.02em',
                transition: 'border-color 0.2s, color 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.target.style.borderColor = '#534AB7';
                  e.target.style.color = '#534AB7';
                }}
                onMouseLeave={e => {
                  e.target.style.borderColor = '#E5E4E0';
                  e.target.style.color = '#555555';
                }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ IDENTITY (Light) */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: L.bg, borderTop: `0.5px solid ${L.border}` }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <div style={{ width: '2px', flexShrink: 0, alignSelf: 'stretch', background: '#534AB7', opacity: 0.35, minHeight: '60px', borderRadius: '1px' }} />
            <p style={{ fontFamily: S.serif, fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.5vw, 1.9rem)', color: L.text, lineHeight: 1.4, fontWeight: 400, maxWidth: '780px' }}>
              "Technology creates value when it is understood, governed, and adopted well — not just when it is built."
            </p>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              {
                tag: 'Technology & Risk',
                title: 'Where systems meet business reality',
                body: 'I am interested in how technology is governed, secured, and controlled inside real organizations — IT risk, IT audit, information security, IAM, enterprise systems, and the business decisions that sit around them.',
              },
              {
                tag: 'Writing',
                title: 'Technology through a business lens',
                body: 'I write about enterprise technology, IT risk, information security, AI use cases, and the broader shifts shaping how organizations operate — for people who want to understand these topics seriously.',
              },
              {
                tag: 'Execution',
                title: 'Projects with real-world framing',
                body: 'Live industry project with PPO. Published research. Digital strategy execution across four major events. Each project framed not just by what was built — but by what problem it solved and how it was made useful.',
              },
            ].map(item => (
              <div key={item.tag} className="l-card" style={{ padding: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
                <span className="tag-pill" style={{ marginBottom: '1rem', display: 'inline-block' }}>{item.tag}</span>
                <h3 style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.3rem)', color: L.text, marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: L.muted, lineHeight: 1.65, fontWeight: 300 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ WORK PREVIEW (Dark) */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: D.bg }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2rem,4vw,3rem)', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: D.sub, display: 'block', marginBottom: '0.6rem' }}>Selected Work</span>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', color: D.text }}>
                Real problems.<br /><em>Real outcomes.</em>
              </h2>
            </div>
            <Link to="/work" style={{ fontSize: '11px', color: D.sub, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#AFA9EC'}
              onMouseLeave={e => e.currentTarget.style.color = D.sub}>
              All Work →
            </Link>
          </div>
          <div className="reveal" style={{ borderTop: `0.5px solid ${D.border}` }}>
            {[
              { num: '01', tag: 'Public Speaking',  title: 'Live Industry Project — IT Dept Presentation', outcome: 'PPO received · Dematade Algo Technology Solutions' },
              { num: '02', tag: 'MF Distribution',  title: 'Mutual Fund Distribution & Advisory',           outcome: '36+ clients · ₹13L+ AUM · AMFI registered'      },
              { num: '03', tag: 'Content Strategy',  title: 'Social Media Head — 4 Major Events',            outcome: 'Fusion 2025 · Techfest 2024 & 2025 · Fusion 2026'},
              { num: '04', tag: 'Digital Promotion', title: 'Nivesh Mantrana 2024 — National MF Summit',     outcome: 'Felicitated · 800 MFDs · 6 states · Indore'      },
            ].map(p => (
              <Link to="/work" key={p.num} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '2rem 1fr auto',
                  gap: 'clamp(0.75rem, 2vw, 1.5rem)', alignItems: 'center',
                  padding: 'clamp(1rem, 2vw, 1.4rem) clamp(0.75rem, 1.5vw, 1rem)',
                  borderBottom: `0.5px solid ${D.border}`,
                  background: 'transparent', transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <span style={{ fontFamily: S.serif, fontSize: '12px', color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>{p.num}</span>
                  <div>
                    <p style={{ fontSize: '14px', color: D.text, fontWeight: 500, marginBottom: '2px', lineHeight: 1.3 }}>{p.title}</p>
                    <p style={{ fontSize: '12px', color: D.muted, fontWeight: 300 }}>{p.outcome}</p>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '1rem' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRENT FOCUS ── */}
      <section style={{
        padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)',
        background: '#0C0C0F',
        borderTop: '0.5px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>

          <div className="reveal" style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <span style={{
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
              display: 'block', marginBottom: '0.875rem',
            }}>
              Current Focus
            </span>
            <h2 style={{
              fontFamily: S.serif,
              fontSize: 'clamp(1.5rem,3vw,2.5rem)',
              color: '#FFFFFF', fontWeight: 400,
              lineHeight: 1.15, maxWidth: '640px',
            }}>
              Building at the intersection of technology,
              business, risk, and consulting.
            </h2>
          </div>

          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
            gap: 'clamp(2rem,4vw,4rem)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{
                fontSize: '15px', color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.8, fontWeight: 300,
              }}>
                I'm currently building depth in areas that sit at the intersection of technology and business decision-making — especially IT risk, information security governance, enterprise systems, AI use cases in business, and technology-led problem solving.
              </p>
              <p style={{
                fontSize: '15px', color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.8, fontWeight: 300,
              }}>
                My goal is to understand not just how technology is built, but how it is adopted, controlled, secured, and made valuable inside organizations.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{
                fontSize: '15px', color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.8, fontWeight: 300,
              }}>
                I'm interested in how organizations adopt, govern, secure, and scale technology — whether through enterprise systems, IT risk controls, AI use cases, or business process change. That theme connects everything on this site.
              </p>
              <Link to="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '12px', color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none', letterSpacing: '0.08em',
                textTransform: 'uppercase', transition: 'color 0.2s',
                marginTop: '0.5rem',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ WRITING PREVIEW (Light) */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: L.bg, borderTop: `0.5px solid ${L.border}` }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2rem,4vw,3rem)', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: L.sub, display: 'block', marginBottom: '0.6rem' }}>Latest Thinking</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#111111', fontWeight: 400 }}>
                Technology inside<br />
                <em>business environments.</em>
              </h2>
            </div>
            <Link to="/writing" style={{ fontSize: '11px', color: L.sub, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#534AB7'}
              onMouseLeave={e => e.currentTarget.style.color = L.sub}>
              All Writing →
            </Link>
          </div>
          <div className="reveal" style={{ borderTop: `0.5px solid ${L.border}` }}>
            {articles.slice(0, 3).map((a, i) => (
              <Link to="/writing" key={a.id} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 3.5rem',
                  gap: '1.5rem', alignItems: 'center',
                  padding: 'clamp(1.25rem, 2.5vw, 1.75rem) clamp(0.75rem, 1.5vw, 1.25rem)',
                  borderBottom: `0.5px solid ${L.border}`,
                  background: 'transparent', transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#F5F4F0'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div>
                    <span className="tag-pill" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>{a.category}</span>
                    <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: L.text, fontWeight: 400, lineHeight: 1.25, marginBottom: '0.35rem' }}>{a.title}</h3>
                    <p style={{ fontSize: '13px', color: L.muted, fontWeight: 300, lineHeight: 1.55, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{a.excerpt}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#534AB7', opacity: 0.1, lineHeight: 1, fontStyle: 'italic' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span style={{ fontSize: '10px', color: '#CCC' }}>{a.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ MEDIA (Dark) */}
      <section style={{ padding: 'clamp(2.5rem,5vw,4rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 'clamp(2rem,4vw,3rem)' }}>
            <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999999', display: 'block', marginBottom: '0.875rem' }}>On the internet</span>
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: '#111111', fontWeight: 400 }}>
              Where else to find me.
            </h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            <div>
              <div style={{ borderRadius: '14px', overflow: 'hidden', border: `0.5px solid ${D.border}`, aspectRatio: '16/9', background: '#1A1A22' }}>
                <iframe src="https://www.youtube.com/embed/eIYjcYqhaOE" title="Durvesh Patil"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} />
              </div>
              <a href="https://youtube.com/watch?v=eIYjcYqhaOE" target="_blank" rel="noreferrer"
                style={{ display: 'block', marginTop: '0.6rem', fontSize: '11px', color: D.sub, textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.04em' }}
                onMouseEnter={e => e.currentTarget.style.color = '#AFA9EC'}
                onMouseLeave={e => e.currentTarget.style.color = D.sub}>
                Watch on YouTube →
              </a>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
                {reels.map(reel => (
                  <a key={reel.id} href={reel.url} target="_blank" rel="noreferrer"
                    style={{ display: 'block', aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden', border: `0.5px solid ${D.border}`, position: 'relative', textDecoration: 'none', transition: 'border-color 0.2s, transform 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#534AB7'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = D.border; e.currentTarget.style.transform = 'scale(1)'; }}>
                    <img src={reel.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
                    {reel.type === 'reel' && (
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="8" height="10" viewBox="0 0 9 11" fill="white"><path d="M0 0l9 5.5-9 5.5V0z" /></svg>
                      </div>
                    )}
                    <span style={{ position: 'absolute', bottom: '6px', left: '8px', fontSize: '8px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{reel.type}</span>
                  </a>
                ))}
              </div>
              <a href="https://www.instagram.com/_thedurvesh/" target="_blank" rel="noreferrer"
                style={{ display: 'block', marginTop: '0.6rem', fontSize: '11px', color: D.sub, textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.04em' }}
                onMouseEnter={e => e.currentTarget.style.color = '#AFA9EC'}
                onMouseLeave={e => e.currentTarget.style.color = D.sub}>
                @_thedurvesh →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ CONTACT (Darkest) */}
      <section id="contact" style={{ padding: 'clamp(5rem,10vw,8rem) clamp(1.25rem,5vw,4rem)', background: '#0C0C0F', textAlign: 'center', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <div className="reveal">
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', fontWeight: 500, display: 'block', marginBottom: '1.25rem' }}>Connect</span>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFFFFF', marginBottom: '1rem', fontStyle: 'italic', fontWeight: 400 }}>
              Let's talk.
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: '2.5rem', fontWeight: 300 }}>
              Whether you're a recruiter hiring for technology risk or consulting roles, a collaborator, or someone navigating decisions without a roadmap — I read everything.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1rem, 3vw, 2.25rem)', flexWrap: 'wrap' }}>
              {[
                { label: 'Email',              href: 'mailto:durveshpatilit@gmail.com' },
                { label: 'LinkedIn',           href: 'https://www.linkedin.com/in/durvesh-patil-628069214/' },
                { label: '@_thedurvesh',       href: 'https://www.instagram.com/_thedurvesh/' },
                { label: '@cinesyncbydurvesh', href: 'https://www.instagram.com/cinesyncbydurvesh/' },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontWeight: 300, letterSpacing: '0.04em', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* Stats bar — hidden on mobile via CSS trick (too cramped) */
function HeroStats() {
  return (
    <div style={{
      display: 'flex',
      marginBottom: '1.75rem',
      borderTop: '0.5px solid rgba(255,255,255,0.1)',
    }}>
      {HERO_STATS.map((s, i) => (
        <div key={s.label} style={{
          flex: 1, paddingTop: '0.9rem',
          paddingRight: i < 3 ? 'clamp(0.4rem, 1.2vw, 1rem)' : 0,
          paddingLeft: i > 0 ? 'clamp(0.4rem, 1.2vw, 1rem)' : 0,
          borderRight: i < 3 ? '0.5px solid rgba(255,255,255,0.08)' : 'none',
        }}>
          <div style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(0.9rem, 1.8vw, 1.3rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '3px' }}>{s.value}</div>
          <div style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.28)', lineHeight: 1.3 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
