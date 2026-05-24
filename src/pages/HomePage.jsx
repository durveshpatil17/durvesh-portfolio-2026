import React from 'react';
import { Link } from 'react-router-dom';
import { S, CONTAINER_CLASSES } from '../theme';
import Research from '../components/Research';
import Recognition from '../components/Recognition';
import { articles } from '../data/articles';
import { caseStudies } from '../data/caseStudies';
import { reels } from '../data/reels';

export default function HomePage() {
  const latestArticles = articles.slice(0, 2);

  return (
    <div className="w-full">
      {/* ── 1. HERO ── */}
      <section className="min-h-[100svh] flex items-center w-full relative">
        <div className={`${CONTAINER_CLASSES} pt-32 lg:pt-40 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center`}>
          
          {/* Text Content */}
          <div className="reveal order-2 lg:order-1 w-full text-center lg:text-left">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.5rem', fontWeight: 600 }}>
              MBA @ SCIT Pune · AI & FinTech Builder · Open to Internships 2026
            </p>
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1.05, color: S.text, marginBottom: '2rem', fontWeight: 400 }}>
              I turn technology into strategy —<br />
              <span style={{ fontStyle: 'italic', color: S.gold }}>and strategy into reach.</span>
            </h1>
            <p className="mx-auto lg:mx-0" style={{ fontFamily: S.sans, color: S.muted, fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)', lineHeight: 1.6, marginBottom: '3rem', fontWeight: 300, maxWidth: '36rem' }}>
              Building AI systems, advising on FinTech, and documenting the intersection of engineering and business for 4M+ people. Seeking consulting & strategy internships for 2026.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12 text-center lg:text-left justify-center lg:justify-start">
              {[
                { value: "4M+", label: "Organic Views" },
                { value: "36+", label: "Advisory Clients" },
                { value: "₹13L+", label: "AUM Managed" },
                { value: "3×", label: "1M+ View Reels" }
              ].map(m => (
                <div key={m.label} style={{ paddingTop: '1rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                  <div style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: S.gold, lineHeight: 1, marginBottom: '0.5rem' }}>{m.value}</div>
                  <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: S.muted }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/work" className="w-full sm:w-auto text-center px-6 py-4 rounded-full font-semibold tracking-wide transition-opacity hover:opacity-85 min-h-[44px] flex items-center justify-center" style={{ background: S.gold, color: '#060606', fontSize: '0.85rem' }}>
                View My Work
              </Link>
              <a href="#contact" className="w-full sm:w-auto text-center px-6 py-4 rounded-full font-medium tracking-wide transition-colors min-h-[44px] flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.1)', color: S.text, fontSize: '0.85rem' }} onMouseEnter={e => e.currentTarget.style.borderColor = S.gold} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="reveal order-1 lg:order-2 w-full flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div style={{ position: 'relative', width: '100%', maxWidth: '420px', aspectRatio: '4/5', borderRadius: '2rem', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(201,168,76,0.15), transparent 40%)', zIndex: 1, pointerEvents: 'none' }} />
              <img
                src="/assets/images/personal/Personal Photo 1.webp"
                alt="Durvesh H. Patil — Strategic Digital Builder and MBA Professional at SCIT Pune"
                className="w-full h-full object-cover block relative z-0"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. AVAILABILITY STRIP ── */}
      <section className="w-full py-8 reveal" style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* LEFT */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', flexShrink: 0,
              animation: 'pulse-green 2s ease-in-out infinite'
            }} />
            <div>
              <p style={{ color: S.text, fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.25rem' }}>
                Open to Internship / Placement — Summer & Winter 2026
              </p>
              <p style={{ color: S.muted, fontSize: '0.7rem', letterSpacing: '0.08em' }}>
                Consulting · FinTech · AI Strategy · Product
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="flex flex-wrap gap-2 lg:justify-center">
            {['Deloitte', 'McKinsey & Co.', 'EY', 'Razorpay', 'Zerodha', 'KPMG'].map(firm => (
              <span key={firm} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2rem', padding: '0.3rem 0.9rem', fontSize: '0.68rem', color: '#7a7875', transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.color = S.gold; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#7a7875'; }}>
                {firm}
              </span>
            ))}
          </div>

          {/* RIGHT */}
          <div className="mt-2 lg:mt-0 lg:block">
            <a href="/assets/Durvesh_Patil_Resume.pdf" download
              style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.35)', color: '#c9a84c', borderRadius: '3rem',
                padding: '0.5rem 1.25rem', fontSize: '0.75rem', textDecoration: 'none',
                letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.2s',
                whiteSpace: 'nowrap', minHeight: '44px', lineHeight: '28px'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
              ↓ Resume
            </a>
          </div>

        </div>
      </section>

      {/* ── 3. DUAL AUDIENCE POSITIONING ── */}
      <section className="w-full" style={{ borderTop: `1px solid ${S.border}` }}>
        <div className={CONTAINER_CLASSES}>
          <div className="reveal text-center lg:text-left mx-auto lg:mx-0 max-w-[800px] mb-12">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Strategic Positioning</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', color: S.text, lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 400 }}>Built for two worlds.</h2>
            <p style={{ color: S.muted, fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.6, fontWeight: 300 }}>
              The same systems thinking that drives 4M+ views drives ₹13L+ in managed assets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* CARD A */}
            <div className="reveal" style={{ background: '#0e0e0e', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2.5rem)', transition: 'border-color 0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
              <span style={{ display: 'inline-block', background: 'rgba(201,168,76,0.15)', color: S.gold, border: '1px solid rgba(201,168,76,0.25)', borderRadius: '2rem', padding: '0.25rem 0.8rem', fontSize: '0.6rem', uppercase: 'true', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 600 }}>For Recruiters</span>
              <h3 style={{ fontFamily: S.serif, fontSize: '1.6rem', color: S.text, marginBottom: '1rem', fontWeight: 400 }}>Engineer who thinks like a consultant</h3>
              <p style={{ color: S.muted, fontSize: '1rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '2rem' }}>
                NLP systems. FinTech advisory at scale. Real AUM. Real clients. MBA training at SCIT Pune with a technical foundation that most MBAs don't have.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {["AI/NLP systems builder", "36+ advisory clients, ₹13L+ AUM", "SCIT Pune MBA, 2024–2026"].map(pt => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: S.gold, flexShrink: 0 }} />
                    <span style={{ color: S.muted, fontSize: '0.95rem', fontWeight: 300 }}>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link to="/work" style={{ color: S.gold, fontSize: '0.85rem', textDecoration: 'none', fontWeight: 500, minHeight: '44px', display: 'inline-flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
                View Work →
              </Link>
            </div>

            {/* CARD B */}
            <div className="reveal" style={{ background: '#0e0e0e', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2.5rem)', transition: 'border-color 0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
              <span style={{ display: 'inline-block', background: 'rgba(55,138,221,0.12)', color: '#378ADD', border: '1px solid rgba(55,138,221,0.25)', borderRadius: '2rem', padding: '0.25rem 0.8rem', fontSize: '0.6rem', uppercase: 'true', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 600 }}>For Followers</span>
              <h3 style={{ fontFamily: S.serif, fontSize: '1.6rem', color: S.text, marginBottom: '1rem', fontWeight: 400 }}>Creator who thinks like a strategist</h3>
              <p style={{ color: S.muted, fontSize: '1rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '2rem' }}>
                4M+ organic views. Two active creator brands. Content at the intersection of AI, FinTech, MBA life, and the creator economy. Not entertainment — communication.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {["@_thedurvesh — Personal brand, tech, MBA life", "@cinesyncbydurvesh — Cinema & visual storytelling", "Outstanding Content Creator Award — KBTCOE 2025"].map(pt => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#378ADD', flexShrink: 0, marginTop: '0.55rem' }} />
                    <span style={{ color: S.muted, fontSize: '0.95rem', fontWeight: 300 }}>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link to="/writing" style={{ color: '#378ADD', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 500, minHeight: '44px', display: 'inline-flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
                Read Writing →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. EXECUTION ── */}
      <section id="execution" className="w-full" style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div className={CONTAINER_CLASSES}>
          <div className="reveal text-center lg:text-left mb-12">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1rem', fontWeight: 600 }}>Selected Work</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>
              Real systems. Measurable outcomes.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map(p => (
              <div key={p.id} className="reveal flex flex-col" style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.5rem', padding: 'clamp(1.5rem, 2.5vw, 2.5rem)', transition: 'border-color 0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, fontWeight: 600, border: '1px solid rgba(201,168,76,0.25)', borderRadius: '3rem', padding: '0.25rem 0.75rem', display: 'inline-block', marginBottom: '1rem', alignSelf: 'flex-start' }}>{p.tag}</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: S.text, marginBottom: '0.5rem' }}>{p.title}</h3>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '1rem 0' }} />
                <p style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '0.5rem', fontWeight: 300 }}>Problem: {p.problem}</p>
                <p style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '0.5rem', fontWeight: 300 }}>Approach: {p.approach}</p>
                <p style={{ color: S.text, fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.5rem', fontWeight: 500, flexGrow: 1 }}>Impact: {p.impact}</p>
                <Link to="/work" style={{ color: S.gold, fontSize: '0.8rem', textDecoration: 'none', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
                  → Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CREATOR IDENTITY ── */}
      <section id="creator" className="w-full" style={{ borderTop: `1px solid ${S.border}` }}>
        <div className={CONTAINER_CLASSES}>
          <p className="reveal text-center lg:text-left" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '2rem', fontWeight: 600 }}>
            Content Creation
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* LEFT */}
            <div className="text-center lg:text-left">
              <h2 className="reveal" style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.15, marginBottom: '1.5rem', fontWeight: 400 }}>
                Digital <span style={{ fontStyle: 'italic', color: S.gold }}>Influence.</span>
              </h2>

              <p className="reveal" style={{ color: S.muted, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.7, marginBottom: '2.5rem', fontWeight: 300 }}>
                Two active Instagram brands reaching millions — built on the same systems thinking I bring to AI projects and financial advisory. Every post is a deliberate act of audience engagement.
              </p>

              {/* Account Cards */}
              <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 text-left">
                {[
                  { handle: '@cinesyncbydurvesh', sub: 'Cinema · Visual Storytelling · Editing', image: '/assets/images/personal/CineSync.jpg' },
                  { handle: '@_thedurvesh', sub: 'Personal Brand · Tech · Lifestyle', image: '/assets/images/personal/Personal Photo 1.webp' },
                ].map(acc => (
                  <div key={acc.handle} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: '#141414', border: `1px solid ${S.border}`, borderRadius: '0.875rem', transition: 'border-color 0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'} onMouseLeave={e => e.currentTarget.style.borderColor = S.border}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0, overflow: 'hidden', border: `1px solid ${S.border}` }}>
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
              <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(201,168,76,0.12)', border: `1px solid rgba(201,168,76,0.25)`, borderRadius: '3rem' }}>
                <span style={{ fontSize: '0.75rem' }}>🏆</span>
                <span style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', letterSpacing: '0.12em', textTransform: 'uppercase', color: S.gold, fontWeight: 700 }}>
                  Outstanding Content Creator Award · KBTCOE 2025
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="reveal grid grid-cols-2 gap-px mb-8" style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', overflow: 'hidden', background: 'rgba(255,255,255,0.06)' }}>
                {[
                  { value: '4M+', label: 'Total Views' },
                  { value: '1M+', label: 'Single Reel' },
                  { value: '2', label: 'Creator Accounts' },
                  { value: '100%', label: 'Organic Growth' }
                ].map(s => (
                  <div key={s.label} style={{ background: '#0e0e0e', padding: '1.5rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: S.serif, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: S.gold, lineHeight: 1, marginBottom: '0.75rem' }}>{s.value}</div>
                    <div style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', textTransform: 'uppercase', letterSpacing: '0.15em', color: S.muted, fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="reveal p-6 md:p-8 lg:p-10 text-left" style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '1.25rem' }}>
                <p style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 700, marginBottom: '1.5rem' }}>
                  Why This Matters for MBA
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Real-world digital marketing execution',
                    'Consumer psychology & audience behaviour',
                    'Brand strategy & positioning',
                    'Data-driven content optimisation',
                  ].map(point => (
                    <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: S.gold, flexShrink: 0, marginTop: '0.55rem' }} />
                      <span style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300 }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. MEDIA STRIP ── */}
      <section className="w-full" style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div className={CONTAINER_CLASSES}>
          <div className="reveal text-center lg:text-left mb-12">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1rem', fontWeight: 600 }}>On the Internet</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>
              Watch. Follow. Read.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* COLUMN 1 — YouTube */}
            <div className="reveal">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                <iframe
                  src="https://www.youtube.com/embed/eIYjcYqhaOE"
                  title="Durvesh Patil — YouTube"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </div>
              <a href="https://youtube.com/watch?v=eIYjcYqhaOE" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', marginTop: '0.75rem', color: '#c9a84c', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em', minHeight: '44px' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
                Watch on YouTube →
              </a>
            </div>

            {/* COLUMN 2 — Instagram Posts & Reel */}
            <div className="reveal">
              <div className="grid grid-cols-2 gap-3">
                {reels.map(r => (
                  <div key={r.id} onClick={() => window.open(r.url, '_blank')} style={{ position: 'relative', aspectRatio: '1/1', background: '#141414', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.background = '#1a1a1a'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = '#141414'; }}>
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={S.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      <span style={{ fontSize: '0.65rem', color: S.muted, textTransform: 'capitalize', fontWeight: 500 }}>{r.type}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://www.instagram.com/_thedurvesh/" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', marginTop: '0.75rem', color: '#c9a84c', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em', minHeight: '44px' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
                @_thedurvesh →
              </a>
            </div>

            {/* COLUMN 3 — Latest Writing */}
            <div className="reveal flex flex-col">
              {latestArticles.map(a => (
                <div key={a.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.6rem', uppercase: 'true', color: S.gold, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>{a.category}</span>
                  <h4 style={{ fontFamily: S.serif, fontSize: '1.1rem', color: S.text, margin: '0.4rem 0', fontWeight: 400 }}>{a.title}</h4>
                  <p style={{ color: S.muted, fontSize: '0.85rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '0.5rem', fontWeight: 300 }}>{a.excerpt}</p>
                  <Link to="/writing" style={{ color: S.gold, fontSize: '0.75rem', textDecoration: 'none', fontWeight: 500 }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>Read →</Link>
                </div>
              ))}
              <Link to="/writing" style={{ display: 'flex', alignItems: 'center', color: '#c9a84c', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em', minHeight: '44px', marginTop: 'auto' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
                All writing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CREDENTIALS ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Research />
        <Recognition />
      </section>

      {/* ── 8. SKILLS BAR ── */}
      <section className="skills-section w-full" style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div className={CONTAINER_CLASSES}>
          <div className="reveal text-center lg:text-left mb-10">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1rem', fontWeight: 600 }}>Technical Toolkit</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>Skills & tools.</h2>
          </div>

          <div className="reveal">
            <p style={{ color: S.muted, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 600 }}>Technical</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'Node.js', 'Python', 'NLP / ML', 'GSAP', 'WebRTC', 'SQL', 'REST APIs', 'Vite', 'Tailwind CSS'].map(skill => (
                <span key={skill} className="skill-pill" style={{ border: '1px solid rgba(255,255,255,0.1)', color: S.muted, borderRadius: '2rem', padding: '0.4rem 1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
                  {skill}
                </span>
              ))}
            </div>

            <p style={{ color: S.muted, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', marginTop: '1.5rem', fontWeight: 600 }}>Business & Creator</p>
            <div className="flex flex-wrap gap-2">
              {['FinTech Advisory', 'Brand Strategy', 'Content Strategy', 'Digital Marketing', 'MBA', 'Event Management', 'AMFI Registered', 'Audience Growth'].map(skill => (
                <span key={skill} className="skill-pill" style={{ border: '1px solid rgba(201,168,76,0.25)', color: 'rgba(201,168,76,0.7)', borderRadius: '2rem', padding: '0.4rem 1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FEATURED WRITING ── */}
      <section className="w-full" style={{ borderTop: `1px solid ${S.border}` }}>
        <div className={CONTAINER_CLASSES}>
          <div className="reveal text-center lg:text-left mb-10">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1rem', fontWeight: 600 }}>Latest Thinking</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>From the blog.</h2>
          </div>

          <div className="reveal flex flex-col">
            {latestArticles.map((a, i) => (
              <Link to="/writing" key={a.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(1.25rem, 2vw, 2rem)', borderRadius: '1rem', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#0e0e0e'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <div>
                  <span style={{ fontSize: '0.6rem', color: S.gold, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>{a.category}</span>
                  <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: S.text, fontWeight: 400, marginBottom: '0.5rem' }}>{a.title}</h3>
                  <p style={{ color: S.muted, fontSize: '0.95rem', fontWeight: 300, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '0.75rem', maxWidth: '600px' }}>{a.excerpt}</p>
                  <span style={{ color: S.gold, fontSize: '0.8rem', fontWeight: 500 }}>Read →</span>
                </div>
                <div style={{ fontFamily: S.serif, fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'rgba(201,168,76,0.15)', fontWeight: 400, marginLeft: '2rem', flexShrink: 0 }}>
                  0{i + 1}
                </div>
              </Link>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/writing" className="w-full sm:w-auto text-center px-8 py-4 border border-[rgba(255,255,255,0.1)] text-[#edebe6] rounded-full text-[0.8rem] font-medium tracking-wide uppercase transition-colors hover:border-[#c9a84c] inline-flex items-center justify-center min-h-[44px]">
              View All Writing
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. CONTACT ── */}
      <section id="contact" className="w-full text-center" style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div className={CONTAINER_CLASSES}>
          <div className="reveal max-w-[640px] mx-auto">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.5rem', fontWeight: 600 }}>Connect</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(2rem, 6vw, 4rem)', color: S.text, lineHeight: 1.05, marginBottom: '1.25rem', fontWeight: 400 }}>
              Let's build something with intent.
            </h2>
            <p style={{ color: S.muted, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '3rem', fontWeight: 300 }}>
              Open to: Consulting internships · FinTech roles · Content collaborations · Strategy conversations
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Email', href: 'mailto:durveshpatilit@gmail.com' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/durvesh-patil-628069214/' },
                { label: 'Insta (Personal)', href: 'https://www.instagram.com/_thedurvesh/' },
                { label: 'Insta (Cinema)', href: 'https://www.instagram.com/cinesyncbydurvesh/' },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                  className="w-full px-6 py-4 border border-[rgba(255,255,255,0.06)] rounded-full text-[0.8rem] font-medium tracking-wide uppercase transition-colors hover:border-[#c9a84c] text-[#edebe6] flex items-center justify-center min-h-[44px]"
                >
                  {link.label}
                </a>
              ))}
              
              <a href="/assets/Durvesh_Patil_Resume.pdf" download
                className="col-span-full w-full text-center px-6 py-4 border border-[rgba(201,168,76,0.3)] text-[#c9a84c] rounded-full text-[0.8rem] font-medium tracking-wide uppercase transition-colors hover:bg-[rgba(201,168,76,0.08)] flex items-center justify-center gap-2 min-h-[44px] mt-2">
                ↓ Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
