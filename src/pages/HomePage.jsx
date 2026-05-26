import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';
import { articles } from '../data/articles';
import { reels } from '../data/reels';

gsap.registerPlugin(ScrollTrigger);

// 6 photos – each occupies 1 full 52%-column-width slot
// The strip is 600% wide, each photo is 1/6 = 16.666%
// objectPosition centres the person's face
const HERO_PHOTOS = [
  { src: '/assets/images/personal/Personal Photo 2.JPG',  pos: '50% 30%', mPos: '50% 35%' },
  { src: '/assets/images/personal/personal photo 3.jpeg', pos: '50% 25%', mPos: '50% 30%' },
  { src: '/assets/images/personal/Personal photo 4.jpg',  pos: '50% 35%', mPos: '50% 40%' },
  { src: '/assets/images/personal/Personal photo 6.jpg',  pos: '50% 20%', mPos: '50% 25%' },
  { src: '/assets/images/personal/personal photo 7.webp', pos: '50% 25%', mPos: '50% 30%' },
  { src: '/assets/images/personal/personal photo 8.jpg',  pos: '50% 30%', mPos: '50% 35%' },
];

const N = HERO_PHOTOS.length; // 6

const HERO_STATS = [
  { value: '2',    label: 'Research Publications' },
  { value: '1',    label: 'Live Industry Project'  },
  { value: 'PPO',  label: 'Offer Received'         },
  { value: '2026', label: 'MBA · SCIT Pune'        },
];

export default function HomePage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        gsap.utils.toArray('.reveal').forEach(el => {
          gsap.fromTo(el, { y: 20, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          });
        });
      });
      mm.add('(max-width: 767px)', () => {
        gsap.utils.toArray('.reveal').forEach(el => {
          gsap.fromTo(el, { opacity: 0 }, {
            opacity: 1, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          });
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>

      {/* ══════════════════════════════════════════ HERO */}
      <section style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        background: S.heroBg,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}>

        {/* ── Desktop photo strip (right 52%) ── */}
        <div className="hero-desktop" style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0,
          width: '52%',
          overflow: 'hidden',
          zIndex: 0,
        }}>
          {/* Strip: 600% wide so each photo = 100% of its slot */}
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
          {/* Left gradient — blends photo into dark text area */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #0C0C0F 0%, rgba(12,12,15,0.55) 35%, transparent 70%)',
            zIndex: 1,
            pointerEvents: 'none',
          }} />
          {/* Bottom gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, #0C0C0F 0%, transparent 40%)',
            zIndex: 1,
            pointerEvents: 'none',
          }} />
        </div>

        {/* ── Mobile photo (full-width, top 50vh) ── */}
        <div className="hero-mobile" style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '50vh',
          overflow: 'hidden',
          zIndex: 0,
        }}>
          <div style={{
            display: 'flex',
            width: `${N * 100}%`,
            height: '100%',
            animation: `carousel-slide ${N * 3.5}s ease-in-out infinite`,
          }}>
            {HERO_PHOTOS.map((p, i) => (
              <div key={i} style={{ width: `${100 / N}%`, height: '100%', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
                <img src={p.src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.mPos }} />
              </div>
            ))}
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(12,12,15,0.1) 40%, #0C0C0F 100%)' }} />
        </div>

        {/* ── Dot indicators ── */}
        <div style={{
          position: 'absolute', bottom: '2rem',
          right: 'clamp(1.25rem, 5vw, 4rem)',
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

        {/* ── Text block ── */}
        <div style={{
          position: 'relative', zIndex: 2,
          width: '100%', maxWidth: '1160px',
          margin: '0 auto',
          padding: 'clamp(1.25rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: '560px' }}
          >
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                Builder · Writer · MBA @ SCIT Pune
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.6rem, 6.5vw, 5rem)', lineHeight: 1.0, color: '#FFFFFF', marginBottom: '0.08em', letterSpacing: '-0.02em' }}>
              Think bigger than
            </h1>
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.6rem, 6.5vw, 5rem)', lineHeight: 1.0, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
              you think is allowed.
            </h1>

            {/* Subheading */}
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.7, maxWidth: '400px', marginBottom: '2.25rem', fontWeight: 300 }}>
              MBA student at SCIT Pune. I've done real things, learned hard lessons, and I write about what nobody tells you — so you can make better decisions than I did.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', marginBottom: '2.25rem', borderTop: '0.5px solid rgba(255,255,255,0.1)' }}>
              {HERO_STATS.map((s, i) => (
                <div key={s.label} style={{
                  flex: 1,
                  paddingTop: '1.1rem',
                  paddingRight: i < 3 ? 'clamp(0.5rem, 1.5vw, 1.25rem)' : 0,
                  paddingLeft: i > 0 ? 'clamp(0.5rem, 1.5vw, 1.25rem)' : 0,
                  borderRight: i < 3 ? '0.5px solid rgba(255,255,255,0.08)' : 'none',
                }}>
                  <div style={{ fontFamily: S.serif, fontSize: 'clamp(1rem, 2.2vw, 1.4rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '4px' }}>{s.value}</div>
                  <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/writing" style={{
                padding: '0.8rem 1.75rem', background: '#FFFFFF', color: '#0C0C0F',
                borderRadius: '30px', fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', minHeight: '44px',
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                Read the Writing
              </Link>
              <Link to="/work" style={{
                padding: '0.8rem 1.75rem', background: 'transparent',
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

      {/* ══════════════════════════════════════════ IDENTITY */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8', borderTop: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <div style={{ width: '2px', flexShrink: 0, alignSelf: 'stretch', background: '#534AB7', opacity: 0.35, minHeight: '60px', borderRadius: '1px' }} />
            <p style={{ fontFamily: S.serif, fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.6vw, 1.9rem)', color: '#111111', lineHeight: 1.4, fontWeight: 400, maxWidth: '780px' }}>
              "I don't think most people are operating anywhere near their actual capacity. Not because they can't — but because nobody showed them it was possible, and they stopped before finding out."
            </p>
          </div>

          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              { tag: 'Builder', title: 'Engineering → MBA', body: 'B.E. IT from KBT College Nashik. Now MBA at SCIT Pune, Symbiosis International University. Building the technical + strategic foundation.' },
              { tag: 'Writer', title: 'Perspective, not advice', body: "I write about things people don't talk about honestly. Career, self-doubt, ambition. The kind of thing I wish I'd read at 18." },
              { tag: 'In public', title: 'Documenting the journey', body: "Live industry project. Research publications. Real clients. Real outcomes. Shared in real time so others can see what's possible." },
            ].map(item => (
              <div key={item.tag} className="l-card" style={{ padding: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
                <span className="tag-pill" style={{ marginBottom: '1rem', display: 'inline-block' }}>{item.tag}</span>
                <h3 style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.3rem)', color: '#111', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.65, fontWeight: 300 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ WORK PREVIEW */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: '#F5F4F0', borderTop: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2rem,4vw,3rem)', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="sec-label">Selected Work</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', color: '#111' }}>
                Real problems.<br /><em>Real outcomes.</em>
              </h2>
            </div>
            <Link to="/work" style={{ fontSize: '12px', color: '#999', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#534AB7'}
              onMouseLeave={e => e.currentTarget.style.color = '#999'}>
              All Work →
            </Link>
          </div>

          <div className="reveal" style={{ borderTop: '0.5px solid #E5E4E0' }}>
            {[
              { num: '01', tag: 'Public Speaking', title: 'Live Industry Project — IT Dept Presentation', outcome: 'PPO received · Dematade Algo Technology Solutions' },
              { num: '02', tag: 'MF Distribution', title: 'Mutual Fund Distribution & Advisory', outcome: '36+ clients · ₹13L+ AUM · AMFI registered' },
              { num: '03', tag: 'Content Strategy', title: 'Social Media Head — 4 Major Events', outcome: 'Fusion 2025 · Techfest 2024 & 2025 · Fusion 2026' },
              { num: '04', tag: 'Digital Promotion', title: 'Nivesh Mantrana 2024 — National MF Summit', outcome: 'Felicitated · 800 MFDs · 6 states · Indore' },
            ].map((p, i) => (
              <Link to="/work" key={p.num} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2rem 1fr auto',
                  gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                  alignItems: 'center',
                  padding: 'clamp(1.1rem, 2vw, 1.5rem) clamp(0.75rem, 1.5vw, 1.25rem)',
                  borderBottom: '0.5px solid #E5E4E0',
                  background: '#FAFAF8',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#FFFFFF'}
                  onMouseLeave={e => e.currentTarget.style.background = '#FAFAF8'}>
                  <span style={{ fontFamily: S.serif, fontSize: '12px', color: '#CCC', fontStyle: 'italic' }}>{p.num}</span>
                  <div>
                    <p style={{ fontSize: '14px', color: '#111', fontWeight: 500, marginBottom: '2px', lineHeight: 1.3 }}>{p.title}</p>
                    <p style={{ fontSize: '12px', color: '#999', fontWeight: 300 }}>{p.outcome}</p>
                  </div>
                  <span style={{ color: '#CCC', fontSize: '1rem' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ WRITING PREVIEW */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8', borderTop: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2rem,4vw,3rem)', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="sec-label">Latest Thinking</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', color: '#111' }}>
                Things people don't<br /><em>talk about honestly.</em>
              </h2>
            </div>
            <Link to="/writing" style={{ fontSize: '12px', color: '#999', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#534AB7'}
              onMouseLeave={e => e.currentTarget.style.color = '#999'}>
              All Writing →
            </Link>
          </div>

          <div className="reveal" style={{ borderTop: '0.5px solid #E5E4E0' }}>
            {articles.slice(0, 3).map((a, i) => (
              <Link to="/writing" key={a.id} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 3.5rem',
                  gap: '1.5rem',
                  alignItems: 'center',
                  padding: 'clamp(1.25rem, 2.5vw, 1.75rem) clamp(0.75rem, 1.5vw, 1.25rem)',
                  borderBottom: '0.5px solid #E5E4E0',
                  background: 'transparent',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#F5F4F0'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div>
                    <span className="tag-pill" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>{a.category}</span>
                    <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: '#111', fontWeight: 400, lineHeight: 1.25, marginBottom: '0.35rem' }}>{a.title}</h3>
                    <p style={{ fontSize: '13px', color: '#999', fontWeight: 300, lineHeight: 1.55, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{a.excerpt}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: S.serif, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111', opacity: 0.06, lineHeight: 1, fontStyle: 'italic' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span style={{ fontSize: '10px', color: '#CCC', letterSpacing: '0.04em' }}>{a.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ MEDIA */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: '#F5F4F0', borderTop: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 'clamp(2rem,4vw,3rem)' }}>
            <span className="sec-label">On the Internet</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', color: '#111' }}>Watch. Follow.</h2>
          </div>

          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {/* YouTube */}
            <div>
              <div style={{ borderRadius: '14px', overflow: 'hidden', border: '0.5px solid #E5E4E0', aspectRatio: '16/9', background: '#EAE9E6' }}>
                <iframe
                  src="https://www.youtube.com/embed/eIYjcYqhaOE"
                  title="Durvesh Patil"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                />
              </div>
              <a href="https://youtube.com/watch?v=eIYjcYqhaOE" target="_blank" rel="noreferrer"
                style={{ display: 'block', marginTop: '0.6rem', fontSize: '12px', color: '#999', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.04em' }}
                onMouseEnter={e => e.currentTarget.style.color = '#534AB7'}
                onMouseLeave={e => e.currentTarget.style.color = '#999'}>
                Watch on YouTube →
              </a>
            </div>

            {/* Instagram reels */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
                {reels.map(reel => (
                  <a key={reel.id} href={reel.url} target="_blank" rel="noreferrer"
                    style={{
                      display: 'block', aspectRatio: '1/1',
                      borderRadius: '12px', overflow: 'hidden',
                      border: '0.5px solid #E5E4E0',
                      position: 'relative', textDecoration: 'none',
                      transition: 'border-color 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#AFA9EC'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E4E0'; e.currentTarget.style.transform = 'scale(1)'; }}>
                    <img src={reel.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)' }} />
                    {reel.type === 'reel' && (
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="8" height="10" viewBox="0 0 9 11" fill="white"><path d="M0 0l9 5.5-9 5.5V0z" /></svg>
                      </div>
                    )}
                    <span style={{ position: 'absolute', bottom: '6px', left: '8px', fontSize: '9px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{reel.type}</span>
                  </a>
                ))}
              </div>
              <a href="https://www.instagram.com/_thedurvesh/" target="_blank" rel="noreferrer"
                style={{ display: 'block', marginTop: '0.6rem', fontSize: '12px', color: '#999', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.04em' }}
                onMouseEnter={e => e.currentTarget.style.color = '#534AB7'}
                onMouseLeave={e => e.currentTarget.style.color = '#999'}>
                @_thedurvesh →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ CONTACT */}
      <section id="contact" style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)', background: '#0C0C0F', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="reveal">
            <span style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 500, display: 'block', marginBottom: '1.25rem' }}>Connect</span>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFFFFF', marginBottom: '1rem', fontStyle: 'italic', fontWeight: 400 }}>
              Let's make something happen.
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, marginBottom: '2.5rem', fontWeight: 300 }}>
              Whether you want to collaborate on content, discuss ideas, or just say hi — I read every message.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1.25rem, 3vw, 2.5rem)', flexWrap: 'wrap' }}>
              {[
                { label: 'Email',              href: 'mailto:durveshpatilit@gmail.com' },
                { label: 'LinkedIn',           href: 'https://www.linkedin.com/in/durvesh-patil-628069214/' },
                { label: '@_thedurvesh',       href: 'https://www.instagram.com/_thedurvesh/' },
                { label: '@cinesyncbydurvesh', href: 'https://www.instagram.com/cinesyncbydurvesh/' },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', fontWeight: 300, letterSpacing: '0.04em', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}>
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
