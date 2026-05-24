import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gallery from './components/Gallery';
import Research from './components/Research';
import ContentCreation from './components/ContentCreation';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(6,6,6,0.92)';
        nav.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
        nav.style.backdropFilter = 'blur(20px)';
      } else {
        nav.style.background = 'transparent';
        nav.style.borderBottom = 'none';
        nav.style.backdropFilter = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);

    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.fromTo(el, { y: 36, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' }
      });
    });

    return () => { window.removeEventListener('scroll', handleScroll); lenis.destroy(); };
  }, []);

  const S = {
    bg: '#060606', surface: '#0e0e0e', border: 'rgba(255,255,255,0.06)',
    gold: '#c9a84c', goldLight: '#e8c97a', text: '#edebe6', muted: '#7a7875',
    serif: 'Instrument Serif, Georgia, serif', sans: 'Inter, system-ui, sans-serif',
  };

  return (
    <div style={{ background: S.bg, color: S.text, fontFamily: S.sans, overflowX: 'hidden' }}>

      {/* NAV */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 transition-all duration-300">
        <a href="#" style={{ fontFamily: S.serif, fontSize: '1.3rem', color: S.gold, textDecoration: 'none', letterSpacing: '0.04em' }}>DHP.</a>
        <div className="flex gap-5 md:gap-10 overflow-x-auto snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {['Identity', 'Influence', 'Execution', 'Gallery', 'Contact'].map(label => (
            <a key={label} href={`#${label.toLowerCase()}`} className="shrink-0" style={{ color: S.muted, textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = S.text}
              onMouseLeave={e => e.target.style.color = S.muted}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── 1. HERO ── */}
      <section className="min-h-[100svh] flex items-center px-6 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-[1200px] mx-auto mt-12 md:mt-0">
          {/* Text Content */}
          <div className="reveal" style={{ maxWidth: '600px' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.5rem', fontWeight: 600 }}>
              MBA @ SCIT Pune · Digital Builder · Content Strategist
            </p>
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2rem, 7vw, 3.8rem)', lineHeight: 1.05, color: S.text, marginBottom: '1.5rem', fontWeight: 400 }}>
              Building Digital Presence, Strategic Influence, and{' '}
              <span style={{ fontStyle: 'italic', color: S.gold }}>Meaningful Impact.</span>
            </h1>
            <p style={{ color: S.muted, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.6, marginBottom: '2.5rem', fontWeight: 300, maxWidth: '32rem' }}>
              Leadership-driven digital builder focused on communication, audience engagement, and strategic storytelling.
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-6 md:gap-8 mb-8 md:mb-12">
              {[
                { value: '3.6M+', label: 'Organic Views' },
                { value: '★', label: 'Outstanding Creator' },
                { value: '4×', label: 'Social Media Lead' },
              ].map(m => (
                <div key={m.label} style={{ borderTop: `1px solid ${S.border}`, paddingTop: '1rem', flex: '1 1 auto' }}>
                  <div style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', color: S.gold, lineHeight: 1, marginBottom: '0.35rem' }}>{m.value}</div>
                  <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: S.muted }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#gallery" className="px-6 py-3 md:px-8 md:py-3.5 bg-[#c9a84c] text-[#060606] rounded-full text-[0.8rem] md:text-[0.82rem] font-semibold tracking-wide transition-opacity hover:opacity-85">
                Explore Journey
              </a>
              <a href="#contact" className="px-6 py-3 md:px-8 md:py-3.5 border border-[rgba(255,255,255,0.06)] text-[#edebe6] rounded-full text-[0.8rem] md:text-[0.82rem] font-medium tracking-wide transition-colors hover:border-[#c9a84c]">
                Connect
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="reveal" style={{ transitionDelay: '0.15s', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '380px', maxWidth: '100%' }}>
              <div style={{ position: 'absolute', inset: '-2px', borderRadius: '2rem', background: `linear-gradient(145deg, ${S.gold}33, transparent 60%)`, zIndex: 0 }} />
              <img
                src="/assets/images/personal/Personal Photo 1.webp"
                alt="Durvesh H. Patil — Strategic Digital Builder and MBA Professional at SCIT Pune"
                className="w-full h-[400px] md:h-[520px] object-cover object-[center_15%] rounded-[2rem] block relative z-10"
                style={{ border: `1px solid ${S.border}` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. IDENTITY ── */}
      <section id="identity" className="px-6 py-16 md:px-12 md:py-28" style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 lg:gap-20 items-center max-w-[1100px] mx-auto">
          <div className="reveal">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Strategic Positioning</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.75rem, 5vw, 2.8rem)', color: S.text, lineHeight: 1.15, marginBottom: '1.5rem', fontWeight: 400 }}>
              A business-minded creator who builds systems, not just content.
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.7, marginBottom: '1.25rem', fontWeight: 300 }}>
              I am a strategic digital builder operating at the intersection of communication, leadership, and execution. My work spans digital branding, event promotion, audience engagement, and content strategy — coordinated across real institutional environments.
            </p>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.7, fontWeight: 300 }}>
              Currently pursuing my MBA at Symbiosis Centre for Information Technology (SCIT), Pune — a platform I treat as an opportunity ecosystem for strategic growth, leadership exposure, and industry-level business thinking.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
              {['Leadership', 'Digital Branding', 'Content Strategy', 'Event Promotion', 'Audience Engagement', 'Strategic Communication'].map(tag => (
                <span key={tag} style={{ padding: '0.35rem 0.9rem', border: `1px solid ${S.border}`, borderRadius: '3rem', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: S.muted }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INFLUENCE ── */}
      <section id="influence" className="px-6 py-16 md:px-12 md:py-28" style={{ borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Digital Branding & Event Strategy</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.75rem, 5vw, 3rem)', color: S.text, lineHeight: 1.1, marginBottom: '1.25rem', fontWeight: 400 }}>Strategic Digital Influence.</h2>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.7, fontWeight: 300 }}>
              Led digital branding and social media initiatives focused on event visibility, audience engagement, and communication strategy.
            </p>
          </div>

          {/* 3-column impact blocks */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-3 gap-px mb-12 md:mb-20 border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.06)]">
            {[
              { num: '01', title: 'Content Strategy', body: 'Created promotional content, reel scripts, and branding-focused campaigns for cultural and technical events — Techfest 2024, 2025 and Fusion 2025, 2026.' },
              { num: '02', title: 'Team Coordination', body: 'Worked across multiple teams to align communication, branding, and audience outreach toward a consistent digital identity for each event.' },
              { num: '03', title: 'Digital Engagement', body: 'Contributed to stronger participation and visibility through audience-focused storytelling, campaign execution, and organic reach scaling to 3.6M+ views.' },
            ].map(b => (
              <div key={b.num} className="p-6 md:p-8 lg:p-10" style={{ background: S.surface, borderRight: `1px solid ${S.border}`, transition: 'background 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#141414'}
                onMouseLeave={e => e.currentTarget.style.background = S.surface}>
                <div style={{ fontFamily: S.serif, fontSize: '2rem', color: S.gold, opacity: 0.4, marginBottom: '1rem' }}>{b.num}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: S.text, marginBottom: '0.75rem', letterSpacing: '0.01em' }}>{b.title}</h3>
                <p style={{ color: S.muted, fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>{b.body}</p>
              </div>
            ))}
          </div>

          {/* Event photo strip */}
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/assets/images/achievements/Social Media Head Techfest 2k24.jpg" alt="Leading digital operations for Techfest 2024" className="w-full h-[260px] md:h-[320px] object-cover rounded-2xl" style={{ border: `1px solid ${S.border}` }} />
            <img src="/assets/images/achievements/Techfest 2k25 Candid 2.jpg" alt="Behind the scenes at Techfest 2025 event coordination" className="w-full h-[260px] md:h-[320px] object-cover rounded-2xl" style={{ border: `1px solid ${S.border}` }} />
            <img src="/assets/images/achievements/Crossed 1 Million Views on Social Media event promotion reel of Fusion 2k25.jpg" alt="Fusion 2025 reel crossing 1 million organic views" className="w-full h-[260px] md:h-[320px] object-cover rounded-2xl" style={{ border: `1px solid ${S.border}` }} />
          </div>
        </div>
      </section>

      {/* ── 4. OUTSTANDING CREATOR ── */}
      <section className="px-6 py-16 md:px-12 md:py-28" style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center max-w-[1100px] mx-auto">
          <div className="reveal w-full relative rounded-3xl overflow-hidden h-[360px] md:h-[500px]" style={{ border: `1px solid ${S.border}` }}>
            <img src="/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg" alt="Outstanding Content Creator award from KBT College of Engineering" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.8) 0%, transparent 50%)' }} />
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Recognition</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.75rem, 5vw, 2.8rem)', color: S.text, lineHeight: 1.15, marginBottom: '1.5rem', fontWeight: 400 }}>
              Outstanding Content Creator.
            </h2>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.7, marginBottom: '1.25rem', fontWeight: 300 }}>
              Recognized for consistency, execution, and measurable digital branding contribution. This recognition came through reel scripting, strategic audience engagement, and event promotion campaigns that generated real visibility.
            </p>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.7, fontWeight: 300 }}>
              The creator identity — expressed through <strong style={{ color: S.text, fontWeight: 500 }}>_thedurvesh</strong> and <strong style={{ color: S.text, fontWeight: 500 }}>cinesyncbydurvesh</strong> — is cinematic, strategic, and branding-oriented. Not entertainment. Communication.
            </p>
          </div>
        </div>
      </section>

      <ContentCreation />

      {/* ── 5. APPROACH ── */}
      <section style={{ padding: '7rem 3rem', borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} className="reveal">
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: S.gold, marginBottom: '2rem', fontWeight: 600 }}>Approach</p>
          <p style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: S.text, lineHeight: 1.55, fontWeight: 400, fontStyle: 'italic' }}>
            "I believe meaningful digital presence is built through clarity, consistency, storytelling, and execution.
          </p>
          <p style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: S.muted, lineHeight: 1.55, fontWeight: 400, fontStyle: 'italic', marginTop: '1.5rem' }}>
            Whether contributing to branding campaigns, coordinating event communication, or creating audience-focused content — the goal remains the same: building systems that create impact."
          </p>
        </div>
      </section>

      {/* ── 5. EXECUTION ── */}
      <section id="execution" className="px-6 py-16 md:px-12 md:py-28" style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1rem', fontWeight: 600 }}>Execution</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.75rem, 5vw, 3rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>
              Real-world systems. Measurable outcomes.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                tag: 'AI Engineering', title: 'Algorithmic Strategy Builder',
                body: 'Architected an NLP-to-strategy translation system for Indian financial markets. Coordinated technical execution, integration architecture, and deployment strategy. Business impact over academic theory.',
              },
              {
                tag: 'FinTech', title: 'FinTech Advisory Automation',
                body: 'Led client onboarding, KYC coordination, and SIP recommendation automation for an AMFI-registered MFD business. 36+ clients, ₹13L+ AUM growth through execution and communication.',
              },
              {
                tag: 'Communication System', title: 'Real-Time Communication Platform',
                body: 'Designed and implemented a scalable WebRTC-based communication platform with real-time video and messaging infrastructure. Engineered for performance under concurrent user load.',
              },
            ].map(p => (
              <div key={p.title} className="reveal p-6 md:p-8 lg:p-10 bg-[#0a0a0a] rounded-2xl md:rounded-[1.5rem] transition-colors border border-[rgba(255,255,255,0.06)] hover:border-[#c9a84c] hover:border-opacity-40">
                <span style={{ fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: S.gold, fontWeight: 700, marginBottom: '0.75rem', display: 'block' }}>{p.tag}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: S.text, marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: S.muted, fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Research />

      <Gallery />

      {/* ── CONNECT ── */}
      <section id="contact" className="px-6 py-16 md:px-12 md:py-28 text-center" style={{ borderTop: `1px solid ${S.border}` }}>
        <div className="reveal" style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.5rem', fontWeight: 600 }}>Connect</p>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(2rem, 6vw, 4rem)', color: S.text, lineHeight: 1.05, marginBottom: '1.25rem', fontWeight: 400 }}>
            Let's build something with intent.
          </h2>
          <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.7, marginBottom: '3rem', fontWeight: 300 }}>
            Open to strategic collaborations, leadership roles, and meaningful conversations.
          </p>
          <div className="flex justify-center flex-wrap gap-6 md:gap-10">
            {[
              { label: 'Email', href: 'mailto:durveshpatilit@gmail.com' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/durvesh-patil-628069214/' },
              { label: 'Instagram (Personal)', href: 'https://www.instagram.com/_thedurvesh/' },
              { label: 'Instagram (Cinema)', href: 'https://www.instagram.com/cinesyncbydurvesh/' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                style={{ color: S.muted, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: `1px solid transparent`, paddingBottom: '2px', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.target.style.color = S.gold; e.target.style.borderBottomColor = S.gold; }}
                onMouseLeave={e => { e.target.style.color = S.muted; e.target.style.borderBottomColor = 'transparent'; }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 px-6 py-8 md:px-12 md:py-10" style={{ borderTop: `1px solid ${S.border}` }}>
        <span style={{ fontFamily: S.serif, fontSize: '1.2rem', color: S.gold }}>DHP.</span>
        <div className="flex gap-4 md:gap-8 items-center text-center">
          <span style={{ fontSize: '0.65rem', color: S.muted, letterSpacing: '0.1em' }}>© 2026 Durvesh H. Patil</span>
          <span className="hidden md:inline" style={{ color: S.border }}>|</span>
          <span style={{ fontSize: '0.65rem', color: S.muted, letterSpacing: '0.08em' }}>MBA @ SCIT Pune</span>
        </div>
      </footer>
    </div>
  );
}
