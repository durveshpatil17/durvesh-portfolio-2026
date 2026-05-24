import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Research from '../components/Research';
import Recognition from '../components/Recognition';
import { S } from '../theme';
import { articles } from '../data/articles';
import { reels } from '../data/reels';

gsap.registerPlugin(ScrollTrigger);

function WorkRow({ project }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: hovered ? 'clamp(1.25rem,2vw,1.75rem) clamp(0.75rem,1.5vw,1.25rem)' : 'clamp(1.25rem,2vw,1.75rem) 0',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: 'clamp(1rem,3vw,2.5rem)',
        alignItems: 'center',
        cursor: 'pointer',
        background: hovered ? '#0c0c0c' : 'transparent',
        borderRadius: hovered ? '0.75rem' : '0',
        transition: 'all 0.3s ease',
      }}>
      <span style={{ fontFamily: S.serif, fontSize: '0.85rem', color: S.muted, opacity: 0.6, flexShrink: 0 }}>{project.num}</span>
      <div>
        <div style={{ fontFamily: S.serif, fontSize: 'clamp(1.3rem,2.5vw,2rem)', color: S.text, lineHeight: 1.2, marginBottom: hovered ? '0.5rem' : 0, transition: 'margin 0.3s' }}>{project.title}</div>
        <div style={{
          fontSize: '0.85rem', color: S.muted, fontWeight: 300,
          maxHeight: hovered ? '40px' : 0,
          opacity: hovered ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease, opacity 0.3s ease',
        }}>{project.impact}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
        <span style={{
          fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase',
          color: S.gold, border: '1px solid rgba(201,168,76,0.25)',
          padding: '0.25rem 0.75rem', borderRadius: '3rem',
          display: 'none',
        }} className="hidden sm:inline-block">{project.tag}</span>
        <span style={{ color: hovered ? S.gold : S.muted, fontSize: '1.1rem', transition: 'color 0.2s, transform 0.2s', transform: hovered ? 'translateX(4px)' : 'translateX(0)', display: 'inline-block' }}>→</span>
      </div>
    </div>
  );
}

function ArticleRow({ article, index }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '2rem',
        alignItems: 'center',
        padding: hovered ? 'clamp(1.5rem,2.5vw,2.25rem) clamp(0.75rem,1.5vw,1.25rem)' : 'clamp(1.5rem,2.5vw,2.25rem) 0',
        background: hovered ? '#141414' : 'transparent',
        borderRadius: hovered ? '0.75rem' : 0,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}>
      <div>
        <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#c9a84c', marginBottom: '0.6rem', fontWeight: 600 }}>{article.category}</p>
        <h3 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(1.2rem,2.5vw,1.9rem)', color: '#edebe6', fontWeight: 400, lineHeight: 1.25, marginBottom: '0.6rem' }}>{article.title}</h3>
        <p style={{ color: '#7a7875', fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.excerpt}</p>
      </div>
      <div style={{ flexShrink: 0, textAlign: 'right' }}>
        <div style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(3rem,6vw,5rem)', color: '#c9a84c', opacity: 0.15, lineHeight: 1, marginBottom: '0.5rem', fontWeight: 400 }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <span style={{ color: hovered ? '#c9a84c' : '#7a7875', fontSize: '0.8rem', transition: 'color 0.2s', display: 'block' }}>Read →</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    // Fade out scroll indicator on scroll
    ScrollTrigger.create({
      trigger: 'body', start: '200px top',
      onEnter: () => gsap.to('#scroll-indicator', { autoAlpha: 0, duration: 0.4 }),
      onLeaveBack: () => gsap.to('#scroll-indicator', { autoAlpha: 1, duration: 0.4 }),
    });
  }, []);

  return (
    <>
      {/* ── 1. HERO ── */}
      <section style={{ minHeight: '100svh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

        {/* Photo — background on mobile, left side on desktop */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          zIndex: 0,
        }} className="w-full lg:w-[52%]">
          <img
            src="/assets/images/personal/Personal Photo 1.webp"
            alt="Durvesh H. Patil"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
          />
          {/* Desktop right fade */}
          <div className="hidden lg:block" style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, transparent 40%, #060606 100%)',
          }} />
          {/* Mobile heavy bottom fade for text readability */}
          <div className="lg:hidden" style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 0%, #060606 80%)',
          }} />
          {/* Global bottom fade */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, #060606 0%, transparent 30%)',
          }} />
        </div>

        {/* Text content — right side on desktop, below photo on mobile */}
        <div style={{
          position: 'relative', zIndex: 1,
          width: '100%', maxWidth: '1320px',
          margin: '0 auto',
          padding: 'clamp(80px, 12vh, 120px) clamp(1.25rem, 5vw, 5rem) 2rem',
          display: 'flex', justifyContent: 'flex-end',
        }}>
          <div style={{ width: '100%', maxWidth: '600px' }}>
            
            <div className="reveal">
              {/* Eyebrow */}
            <p style={{
              fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: S.gold, fontWeight: 600, marginBottom: '2rem',
            }}>
              MBA · Builder · Creator
            </p>

            {/* Giant name — display type */}
            <h1 style={{
              fontFamily: S.serif,
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              lineHeight: 0.95, fontWeight: 400,
              color: S.text, marginBottom: '0.15em',
              letterSpacing: '-0.02em',
            }}>
              Durvesh
            </h1>
            <h1 style={{
              fontFamily: S.serif,
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              lineHeight: 0.95, fontWeight: 400,
              color: S.text, marginBottom: '2.5rem',
              letterSpacing: '-0.02em',
              fontStyle: 'italic',
            }}>
              Patil<span style={{ color: S.gold }}>.</span>
            </h1>
            </div>

            {/* Bio line */}
            <p className="reveal" style={{
              color: S.muted, fontWeight: 300,
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              lineHeight: 1.65, maxWidth: '420px', marginBottom: '3rem',
            }}>
              Building AI systems, writing about FinTech, and documenting the MBA journey — for the internet.
            </p>

            {/* Metrics row */}
            <div className="reveal" style={{ display: 'flex', gap: 0, marginBottom: '3rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                { value: '4M+', label: 'Total Views' },
                { value: '2000+', label: 'Followers' },
                { value: '2', label: 'AI Systems Built' },
                { value: '₹13L+', label: 'AUM Handled' },
              ].map((m, i) => (
                <div key={m.label} style={{
                  flex: 1, paddingTop: '1.25rem',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  paddingRight: '1rem', paddingLeft: i > 0 ? '1rem' : 0,
                }}>
                  <div style={{ fontFamily: S.serif, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: S.gold, lineHeight: 1, marginBottom: '0.3rem' }}>{m.value}</div>
                  <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: S.muted }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/work" style={{
                padding: '0.875rem 2rem', background: S.gold, color: '#060606',
                borderRadius: '3rem', fontSize: '0.78rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                View Work
              </Link>
              <Link to="/writing" style={{
                padding: '0.875rem 2rem', background: 'transparent',
                border: '1px solid rgba(255,255,255,0.12)', color: S.text,
                borderRadius: '3rem', fontSize: '0.78rem', fontWeight: 400,
                letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = S.gold}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
                Read Writing
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div id="scroll-indicator" style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 2,
        }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: S.muted }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: `linear-gradient(to bottom, ${S.muted}, transparent)` }} />
        </div>
      </section>

      {/* ── 2. IDENTITY STATEMENT ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* Pull quote */}
          <div className="reveal" style={{
            display: 'flex', gap: '2rem', alignItems: 'flex-start',
            marginBottom: 'clamp(3rem,6vw,5rem)',
          }}>
            <div style={{ width: '3px', flexShrink: 0, alignSelf: 'stretch', background: S.gold, borderRadius: '2px', minHeight: '80px' }} />
            <p style={{
              fontFamily: S.serif, fontStyle: 'italic',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
              color: S.text, lineHeight: 1.35, fontWeight: 400,
              maxWidth: '860px',
            }}>
              "I build systems, tell stories, and create at the intersection of technology, strategy, and the creator economy."
            </p>
          </div>

          {/* Two-column: 60/40 */}
          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
          }}>
            {/* Left: skill areas */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { area: 'AI & NLP Engineering', desc: 'Building systems that translate data into strategy.' },
                { area: 'FinTech Advisory', desc: '36+ clients. ₹13L+ AUM. AMFI registered.' },
                { area: 'Content & Creator', desc: '4M+ organic views across two active brands.' },
              ].map(item => (
                <div key={item.area} style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
                  <div style={{ fontFamily: S.serif, fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: S.text, marginBottom: '0.4rem' }}>{item.area}</div>
                  <div style={{ color: S.muted, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Right: bio paragraph */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
              <p style={{ color: S.muted, fontSize: 'clamp(0.95rem,1.5vw,1.1rem)', lineHeight: 1.75, fontWeight: 300 }}>
                Currently pursuing my MBA at Symbiosis Centre for Information Technology (SCIT), Pune. Before that — engineering, machine learning, and building products from scratch.
              </p>
              <p style={{ color: S.muted, fontSize: 'clamp(0.95rem,1.5vw,1.1rem)', lineHeight: 1.75, fontWeight: 300 }}>
                I run <span style={{ color: S.text, fontWeight: 500 }}>@_thedurvesh</span> and <span style={{ color: S.text, fontWeight: 500 }}>@cinesyncbydurvesh</span> on Instagram — personal brand and cinema, respectively. Writing, building, and creating in public.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FEATURED WORK (editorial list format) ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* Section header */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(3rem,5vw,4rem)' }}>
            <div>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 600, marginBottom: '0.75rem' }}>Selected Work</p>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem,4vw,3.5rem)', color: S.text, fontWeight: 400, lineHeight: 1.1 }}>Real systems.<br />Measurable outcomes.</h2>
            </div>
            <Link to="/work" style={{ color: S.muted, fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s', whiteSpace: 'nowrap', marginBottom: '0.5rem' }}
              onMouseEnter={e => e.target.style.color = S.gold}
              onMouseLeave={e => e.target.style.color = S.muted}>
              All Work →
            </Link>
          </div>

          {/* Work rows — editorial list */}
          {[
            { num: '01', tag: 'AI Engineering', title: 'AI Strategy Generator Module', impact: 'Built backend APIs using Python, Redis, MySQL, and OpenAI for F&O markets' },
            { num: '02', tag: 'FinTech', title: 'Family MFD Business Ops', impact: 'Onboarded 36+ clients (₹13L+ AUM), building AI SIP allocation mini-platform' },
          ].map((project) => (
            <WorkRow key={project.num} project={project} />
          ))}
        </div>
      </section>

      {/* ── 4. CREATOR IDENTITY ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0c0c0c', padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          <p className="reveal" style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 600, marginBottom: 'clamp(2rem,4vw,3.5rem)' }}>Content Creation</p>

          {/* Giant number as design element */}
          <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(1.5rem,4vw,4rem)', marginBottom: 'clamp(3rem,5vw,4rem)', flexWrap: 'wrap' }}>
            <div style={{ fontFamily: S.serif, fontSize: 'clamp(5rem,15vw,10rem)', color: S.gold, lineHeight: 0.85, fontWeight: 400, letterSpacing: '-0.03em', flexShrink: 0 }}>4M+</div>
            <div style={{ paddingBottom: '0.5rem', maxWidth: '480px' }}>
              <p style={{ fontFamily: S.serif, fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: S.text, lineHeight: 1.2, marginBottom: '1rem', fontWeight: 400 }}>
                Organic views from cinema. Growing tech & MBA brand.
              </p>
              <p style={{ color: S.muted, fontWeight: 300, fontSize: 'clamp(0.9rem,1.5vw,1.05rem)', lineHeight: 1.7 }}>
                Two active Instagram brands — one for cinema (where a hobby turned into 4M+ views), and @_thedurvesh, my main account for personal brand, tech, and MBA life.
              </p>
            </div>
          </div>

          {/* Account cards + stats grid */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { handle: '@cinesyncbydurvesh', sub: 'Cinema · Visual Storytelling · Editing', img: '/assets/images/personal/CineSync.jpg' },
              { handle: '@_thedurvesh', sub: 'Personal Brand · Tech · MBA Life', img: '/assets/images/personal/Personal Photo 1.webp' },
            ].map(acc => (
              <a key={acc.handle} href={`https://instagram.com/${acc.handle.replace('@','')}`} target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', background: '#141414', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1rem', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={acc.img} alt={acc.handle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ color: S.text, fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.15rem' }}>{acc.handle}</div>
                  <div style={{ color: S.muted, fontSize: '0.72rem', fontWeight: 300 }}>{acc.sub}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Stats row */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { value: '4M+', label: 'Total Views' },
              { value: '1M+', label: 'Single Reel' },
              { value: '2', label: 'Active Brands' },
              { value: '100%', label: 'Organic' },
            ].map((s, i) => (
              <div key={s.label} style={{
                padding: 'clamp(1.25rem,2vw,2rem)', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: S.gold, lineHeight: 1, marginBottom: '0.5rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: S.muted }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Award badge */}
          <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginTop: '1.5rem', padding: '0.5rem 1.25rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '3rem' }}>
            <span style={{ fontSize: '0.7rem', color: S.gold }}>★</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: S.gold, fontWeight: 600 }}>Outstanding Content Creator Award · KBTCOE 2025</span>
          </div>
        </div>
      </section>

      {/* ── 5. MEDIA (YouTube + Instagram) ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>
            <div>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 600, marginBottom: '0.75rem' }}>On the Internet</p>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem,4vw,3rem)', color: S.text, fontWeight: 400 }}>Watch. Follow.</h2>
            </div>
          </div>

          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1rem,2.5vw,2rem)', alignItems: 'start' }}>

            {/* YouTube */}
            <div style={{ gridColumn: 'span 2' }} className="lg:col-span-2">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                <iframe
                  src="https://www.youtube.com/embed/eIYjcYqhaOE"
                  title="Durvesh Patil YouTube"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </div>
              <a href="https://youtube.com/watch?v=eIYjcYqhaOE" target="_blank" rel="noreferrer"
                style={{ display: 'inline-block', marginTop: '0.75rem', color: S.muted, fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.06em' }}
                onMouseEnter={e => e.target.style.color = S.gold}
                onMouseLeave={e => e.target.style.color = S.muted}>
                Watch on YouTube →
              </a>
            </div>

            {/* Instagram grid — 2×2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {reels.map(reel => (
                <a key={reel.id} href={reel.url} target="_blank" rel="noreferrer"
                  style={{
                    aspectRatio: '1/1', background: '#141414',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '0.75rem', overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', position: 'relative',
                    transition: 'border-color 0.2s, background 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.background = '#1a1a1a'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = '#141414'; }}>
                  {/* Instagram icon SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.35 }}>
                    <rect x="2" y="2" width="20" height="20" rx="6" stroke="#edebe6" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="4" stroke="#edebe6" strokeWidth="1.5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="#edebe6"/>
                  </svg>
                  <span style={{ position: 'absolute', bottom: '8px', left: '8px', fontSize: '0.6rem', color: S.muted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {reel.type}
                  </span>
                </a>
              ))}
              <a href="https://www.instagram.com/_thedurvesh/" target="_blank" rel="noreferrer"
                style={{ gridColumn: 'span 2', display: 'block', color: S.muted, fontSize: '0.78rem', textDecoration: 'none', letterSpacing: '0.06em', marginTop: '0.25rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = S.gold}
                onMouseLeave={e => e.target.style.color = S.muted}>
                @_thedurvesh →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WRITING PREVIEW (editorial table of contents style) ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0c0c0c', padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>
            <div>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 600, marginBottom: '0.75rem' }}>Latest Thinking</p>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem,4vw,3rem)', color: S.text, fontWeight: 400 }}>From the blog.</h2>
            </div>
            <Link to="/writing" style={{ color: S.muted, fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s', marginBottom: '0.4rem' }}
              onMouseEnter={e => e.target.style.color = S.gold}
              onMouseLeave={e => e.target.style.color = S.muted}>
              All Writing →
            </Link>
          </div>

          {articles.slice(0, 2).map((article, i) => (
            <ArticleRow key={article.id} article={article} index={i} />
          ))}
        </div>
      </section>

      {/* ── 7. CREDENTIALS ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <p className="reveal" style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 600, marginBottom: 'clamp(2.5rem,4vw,4rem)' }}>Credentials</p>
          <Research />
          <Recognition />
        </div>
      </section>

      {/* ── 8. CONTACT ── */}
      <section id="contact" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem)', textAlign: 'center' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <p className="reveal" style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 600, marginBottom: '1.5rem' }}>Connect</p>
          <h2 className="reveal" style={{ fontFamily: S.serif, fontSize: 'clamp(2.5rem,6vw,5rem)', color: S.text, fontWeight: 400, lineHeight: 1.05, marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Let's build something with intent.
          </h2>

          {/* Text links — no border buttons */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem,4vw,3rem)', flexWrap: 'wrap', marginBottom: '4rem' }}>
            {[
              { label: 'Email', href: 'mailto:durveshpatilit@gmail.com' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/durvesh-patil-628069214/' },
              { label: '@_thedurvesh', href: 'https://www.instagram.com/_thedurvesh/' },
              { label: '@cinesyncbydurvesh', href: 'https://www.instagram.com/cinesyncbydurvesh/' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                style={{ color: S.muted, fontSize: 'clamp(0.85rem,1.5vw,1rem)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s', fontWeight: 300 }}
                onMouseEnter={e => e.target.style.color = S.text}
                onMouseLeave={e => e.target.style.color = S.muted}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
