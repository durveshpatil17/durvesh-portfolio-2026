import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';
import { articles } from '../data/articles';
import { reels } from '../data/reels';

gsap.registerPlugin(ScrollTrigger);

// ── Hero photo carousel data ────────────────────────────────────────
const HERO_PHOTOS = [
  { src: '/assets/images/personal/Personal photo 3.jpg',  pos: 'center 15%' },
  { src: '/assets/images/personal/Personal photo 4.jpg',  pos: 'center 20%' },
  { src: '/assets/images/personal/Personal Photo 5.jpg',  pos: 'center 10%' },
];

// ── App card wrapper ─────────────────────────────────────────────────
function AppCard({ children, style = {}, onClick }) {
  return (
    <div className="app-card" style={{ padding: 'clamp(1rem, 2vw, 1.5rem)', cursor: onClick ? 'pointer' : 'default', ...style }} onClick={onClick}>
      {children}
    </div>
  );
}

// ── Section label ────────────────────────────────────────────────────
function Label({ children }) {
  return <p className="app-label" style={{ marginBottom: '0.5rem' }}>{children}</p>;
}

export default function HomePage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        gsap.utils.toArray('.reveal').forEach(el => {
          gsap.fromTo(el,
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } }
          );
        });
      });
      mm.add('(max-width: 767px)', () => {
        gsap.utils.toArray('.reveal').forEach(el => {
          gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' } });
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>

        {/* Photo carousel track — CSS animation, right to left */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          display: 'flex',
          width: `${HERO_PHOTOS.length * 100}%`,
          animation: `carousel-slide ${HERO_PHOTOS.length * 3.5}s ease-in-out infinite`,
        }}>
          {HERO_PHOTOS.map((photo, i) => (
            <div key={i} style={{ width: `${100 / HERO_PHOTOS.length}%`, height: '100%', position: 'relative', flexShrink: 0 }}>
              <img
                src={photo.src}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: photo.pos, display: 'block' }}
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays — bottom fade + right fade on desktop */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(10,10,15,0.15) 0%, rgba(10,10,15,0.4) 45%, rgba(10,10,15,0.88) 75%, #0A0A0F 100%)' }} />
        <div className="hidden lg:block" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to right, #0A0A0F 0%, transparent 55%)' }} />

        {/* Dot indicators */}
        <div style={{ position: 'absolute', bottom: 'calc(72px + 1.5rem)', right: '1.5rem', zIndex: 3, display: 'flex', gap: '5px', alignItems: 'center' }}>
          {HERO_PHOTOS.map((_, i) => (
            <div key={i} style={{
              height: '5px', borderRadius: '3px',
              animationDuration: `${HERO_PHOTOS.length * 3.5}s`,
              animationIterationCount: 'infinite',
              animationName: `dot${i + 1}`,
              animationTimingFunction: 'ease-in-out',
            }} />
          ))}
        </div>

        {/* Text content */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: 'clamp(1.25rem, 5vw, 3rem)', paddingBottom: 'calc(72px + 2.5rem)', maxWidth: '620px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>

            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{ width: '24px', height: '1px', background: S.accent }} />
              <p className="app-label" style={{ marginBottom: 0 }}>MBA · Creator · Builder</p>
            </div>

            {/* Name */}
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 0.9, fontWeight: 400, color: S.text, letterSpacing: '-0.02em', marginBottom: '0.08em' }}>
              Durvesh
            </h1>
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 0.9, fontWeight: 400, color: S.accentLight, letterSpacing: '-0.02em', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              Patil<span style={{ color: S.accent }}>.</span>
            </h1>

            {/* Sub */}
            <p style={{ fontSize: '14px', color: S.muted, lineHeight: 1.65, maxWidth: '380px', marginBottom: '2rem', fontWeight: 300 }}>
              From Filmora edits as a kid to 1 million views and a stage felicitation. Still figuring it out.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 0, marginBottom: '2rem', borderTop: `0.5px solid ${S.border}` }}>
              {[
                { v: '4M+',  l: 'Views' },
                { v: '1M+',  l: 'One reel' },
                { v: '4',    l: 'Events led' },
                { v: '2026', l: 'MBA batch' },
              ].map((s, i) => (
                <div key={s.l} style={{ flex: 1, paddingTop: '1rem', paddingRight: i < 3 ? '1rem' : 0, paddingLeft: i > 0 ? '1rem' : 0, borderRight: i < 3 ? `0.5px solid ${S.border}` : 'none' }}>
                  <div style={{ fontFamily: S.serif, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: S.accent, lineHeight: 1, marginBottom: '3px' }}>{s.v}</div>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: S.muted }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/about" style={{ padding: '0.75rem 1.5rem', background: S.accent, color: '#0A0A0F', borderRadius: '10px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.2s', display: 'inline-block' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                Read My Story
              </Link>
              <Link to="/writing" style={{ padding: '0.75rem 1.5rem', background: 'transparent', border: `0.5px solid ${S.accentBorder}`, color: S.accentLight, borderRadius: '10px', fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s', display: 'inline-block' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = S.accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = S.accentBorder}>
                See Writing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── IDENTITY ─────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)', borderTop: `0.5px solid ${S.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
            <div style={{ width: '2px', flexShrink: 0, alignSelf: 'stretch', background: S.accent, borderRadius: '2px', minHeight: '60px', opacity: 0.6 }} />
            <p style={{ fontFamily: S.serif, fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: S.text, lineHeight: 1.4, fontWeight: 400 }}>
              "I started editing videos as a kid with no plan. Now I have 4 million views, a stage felicitation, and an MBA. The plan is still being written."
            </p>
          </div>

          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
            {[
              { area: 'Content & Creator',  desc: '4M+ organic views. Social media head for 4 major college events.' },
              { area: 'MBA & Strategy',     desc: 'SCIT Pune, Symbiosis International University. People, strategy, building.' },
              { area: 'Writing & Ideas',    desc: 'Articles on mindset, careers, ambition, and the world changing around us.' },
            ].map(item => (
              <AppCard key={item.area}>
                <p className="app-label" style={{ marginBottom: '0.5rem' }}>{item.area}</p>
                <p style={{ fontSize: '13px', color: S.muted, lineHeight: 1.6, fontWeight: 300 }}>{item.desc}</p>
              </AppCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK PREVIEW ─────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)', borderTop: `0.5px solid ${S.border}`, background: S.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
            <div><Label>Selected Work</Label><h2 style={{ color: S.text, fontSize: 'clamp(1.4rem,3vw,2rem)' }}>Real systems.<br /><em>Measurable outcomes.</em></h2></div>
            <Link to="/work" style={{ fontSize: '12px', color: S.muted, textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.15s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => e.target.style.color = S.accentLight}
              onMouseLeave={e => e.target.style.color = S.muted}>All Work →</Link>
          </div>

          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { tag: 'Public Speaking',  title: 'Live Industry Project — IT Dept Presentation', outcome: 'PPO from Dematade Algo Technology Solutions' },
              { tag: 'MF Distribution', title: 'Mutual Fund Advisory', outcome: '36+ clients · ₹13L+ AUM' },
              { tag: 'Content Strategy',title: 'Social Media Head — 4 Events', outcome: '1M+ views on Fusion 2025 reel' },
            ].map((p, i) => (
              <Link to="/work" key={p.title} style={{ textDecoration: 'none' }}>
                <AppCard style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontFamily: S.serif, fontSize: '1rem', color: S.muted, opacity: 0.5, flexShrink: 0, minWidth: '1.5rem' }}>0{i + 1}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span className="app-pill" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>{p.tag}</span>
                    <p style={{ fontSize: '14px', color: S.text, fontWeight: 500, lineHeight: 1.3, marginBottom: '0.2rem' }}>{p.title}</p>
                    <p style={{ fontSize: '12px', color: S.muted, fontWeight: 300 }}>{p.outcome}</p>
                  </div>
                  <span style={{ color: S.accent, fontSize: '1.1rem', flexShrink: 0, transition: 'transform 0.15s' }}>→</span>
                </AppCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREATOR ──────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)', borderTop: `0.5px solid ${S.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '1.5rem' }}>
            <Label>Content Creation</Label>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ fontFamily: S.serif, fontSize: 'clamp(4rem,12vw,7rem)', color: S.accent, lineHeight: 0.85, letterSpacing: '-0.03em', flexShrink: 0 }}>4M+</div>
              <div style={{ paddingBottom: '0.5rem' }}>
                <h2 style={{ color: S.text, fontSize: 'clamp(1.1rem,2vw,1.5rem)', fontWeight: 400, marginBottom: '0.5rem' }}>Organic views across<br />two creator brands.</h2>
                <p style={{ fontSize: '13px', color: S.muted, fontWeight: 300, lineHeight: 1.6, maxWidth: '340px' }}>Two active Instagram brands. Every post intentional. Every campaign a brief.</p>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '0.75rem' }}>
            {[
              { handle: '@_thedurvesh',        sub: 'Personal Brand · Tech · MBA Life', img: '/assets/images/personal/Personal Photo 2.JPG',   href: 'https://instagram.com/_thedurvesh' },
              { handle: '@cinesyncbydurvesh',  sub: 'Cinema · Visual Storytelling',      img: '/assets/images/personal/CineSync.jpg',            href: 'https://instagram.com/cinesyncbydurvesh' },
            ].map(acc => (
              <a key={acc.handle} href={acc.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <AppCard style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: `1px solid ${S.accentBorder}` }}>
                    <img src={acc.img} alt={acc.handle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: '13px', color: S.text, fontWeight: 500, marginBottom: '2px' }}>{acc.handle}</p>
                    <p style={{ fontSize: '11px', color: S.muted, fontWeight: 300, lineHeight: 1.4 }}>{acc.sub}</p>
                  </div>
                  <span style={{ color: S.accent, marginLeft: 'auto', flexShrink: 0 }}>→</span>
                </AppCard>
              </a>
            ))}
          </div>

          {/* Stats grid */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: `0.5px solid ${S.border}` }}>
            {[{ v:'4M+',l:'Total Views'},{v:'1M+',l:'Single Reel'},{v:'2',l:'Brands'},{v:'100%',l:'Organic'}].map((s,i) => (
              <div key={s.l} style={{ padding: 'clamp(1rem,2vw,1.5rem)', textAlign: 'center', borderRight: i < 3 ? `0.5px solid ${S.border}` : 'none' }}>
                <div style={{ fontFamily: S.serif, fontSize: 'clamp(1.25rem,3vw,1.75rem)', color: S.accent, lineHeight: 1, marginBottom: '4px' }}>{s.v}</div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: S.muted }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDIA ────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)', borderTop: `0.5px solid ${S.border}`, background: S.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '1.5rem' }}>
            <Label>On the Internet</Label>
            <h2 style={{ color: S.text }}>Watch. Follow.</h2>
          </div>

          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', alignItems: 'start' }}>
            {/* YouTube */}
            <div>
              <div style={{ borderRadius: '14px', overflow: 'hidden', border: `0.5px solid ${S.border}`, aspectRatio: '16/9' }}>
                <iframe src="https://www.youtube.com/embed/eIYjcYqhaOE" title="Durvesh Patil YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} />
              </div>
              <a href="https://youtube.com/watch?v=eIYjcYqhaOE" target="_blank" rel="noreferrer" style={{ display: 'block', marginTop: '0.625rem', fontSize: '12px', color: S.muted, textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = S.accentLight}
                onMouseLeave={e => e.target.style.color = S.muted}>Watch on YouTube →</a>
            </div>

            {/* Instagram grid */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {reels.map(reel => (
                  <a key={reel.id} href={reel.url} target="_blank" rel="noreferrer"
                    style={{ display: 'block', aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden', border: `0.5px solid ${S.border}`, textDecoration: 'none', position: 'relative', transition: 'border-color 0.2s, transform 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = S.accentBorder; e.currentTarget.style.transform = 'scale(1.02)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = S.border; e.currentTarget.style.transform = 'scale(1)'; }}>
                    <img src={reel.thumbnail} alt={reel.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,15,0.7) 0%, transparent 60%)' }} />
                    {reel.type === 'reel' && (
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0l10 6-10 6V0z"/></svg>
                      </div>
                    )}
                    <span style={{ position: 'absolute', bottom: '8px', left: '8px', fontSize: '9px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{reel.type}</span>
                  </a>
                ))}
              </div>
              <a href="https://www.instagram.com/_thedurvesh/" target="_blank" rel="noreferrer" style={{ display: 'block', marginTop: '0.625rem', fontSize: '12px', color: S.muted, textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = S.accentLight}
                onMouseLeave={e => e.target.style.color = S.muted}>@_thedurvesh →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WRITING PREVIEW ──────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)', borderTop: `0.5px solid ${S.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
            <div><Label>Latest Thinking</Label><h2 style={{ color: S.text }}>From the blog.</h2></div>
            <Link to="/writing" style={{ fontSize: '12px', color: S.muted, textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.15s' }}
              onMouseEnter={e => e.target.style.color = S.accentLight}
              onMouseLeave={e => e.target.style.color = S.muted}>All Writing →</Link>
          </div>

          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {articles.slice(0, 3).map((a, i) => (
              <Link to="/writing" key={a.id} style={{ textDecoration: 'none' }}>
                <AppCard style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'center' }}>
                  <div>
                    <span className="app-pill" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>{a.category}</span>
                    <p style={{ fontSize: '14px', color: S.text, fontWeight: 500, lineHeight: 1.3, marginBottom: '0.25rem' }}>{a.title}</p>
                    <p style={{ fontSize: '12px', color: S.muted, fontWeight: 300, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{a.excerpt}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: S.serif, fontSize: 'clamp(2rem,4vw,3rem)', color: S.accent, opacity: 0.15, lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</div>
                    <span style={{ fontSize: '10px', color: S.muted }}>{a.readTime}</span>
                  </div>
                </AppCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section id="contact" style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)', borderTop: `0.5px solid ${S.border}`, background: S.surface, textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div className="reveal">
            <Label>Connect</Label>
            <h2 style={{ color: S.text, marginBottom: '0.75rem' }}>Let's make something<br /><em>happen.</em></h2>
            <p style={{ fontSize: '14px', color: S.muted, lineHeight: 1.65, marginBottom: '2rem', fontWeight: 300 }}>Whether you want to collaborate on content, discuss ideas, or just say hi — I read every message.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { label: 'Email',           href: 'mailto:durveshpatilit@gmail.com' },
                { label: 'LinkedIn',        href: 'https://www.linkedin.com/in/durvesh-patil-628069214/' },
                { label: '@_thedurvesh',    href: 'https://www.instagram.com/_thedurvesh/' },
                { label: '@cinesyncbydurvesh', href: 'https://www.instagram.com/cinesyncbydurvesh/' },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                  style={{ fontSize: '13px', color: S.muted, textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.15s', fontWeight: 300 }}
                  onMouseEnter={e => e.target.style.color = S.accentLight}
                  onMouseLeave={e => e.target.style.color = S.muted}>
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
