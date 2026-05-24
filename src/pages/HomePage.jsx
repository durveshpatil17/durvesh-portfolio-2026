import React from 'react';
import { S, CONTAINER_CLASSES } from '../theme';
import ContentCreation from '../components/ContentCreation';
import Research from '../components/Research';
import Gallery from '../components/Gallery';

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="min-h-[100svh] flex items-center w-full">
        <div className={`${CONTAINER_CLASSES} pt-32 lg:pt-40 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
          {/* Text Content */}
          <div className="reveal order-2 lg:order-1 w-full text-center lg:text-left">
            <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.5rem', fontWeight: 600 }}>
              MBA @ SCIT Pune · Digital Builder · Content Strategist
            </p>
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: 1.05, color: S.text, marginBottom: '2rem', fontWeight: 400 }}>
              Building Digital Presence, Strategic Influence, and{' '}
              <span style={{ fontStyle: 'italic', color: S.gold }}>Meaningful Impact.</span>
            </h1>
            <p className="mx-auto lg:mx-0" style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, marginBottom: '3rem', fontWeight: 300, maxWidth: '36rem' }}>
              Leadership-driven digital builder focused on communication, audience engagement, and strategic storytelling.
            </p>

            {/* Metrics */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-8 md:mb-12 text-center lg:text-left justify-center lg:justify-start">
              {[
                { value: '3.6M+', label: 'Organic Views' },
                { value: '★', label: 'Outstanding Creator' },
                { value: '4×', label: 'Social Media Lead' },
              ].map(m => (
                <div key={m.label} className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex-1 min-w-[120px]">
                  <div style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: S.gold, lineHeight: 1, marginBottom: '0.5rem' }}>{m.value}</div>
                  <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: S.muted }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#gallery" className="w-full sm:w-auto text-center px-6 py-4 bg-[#c9a84c] text-[#060606] rounded-full text-[0.85rem] font-semibold tracking-wide transition-opacity hover:opacity-85">
                Explore Journey
              </a>
              <a href="#contact" className="w-full sm:w-auto text-center px-6 py-4 border border-[rgba(255,255,255,0.06)] text-[#edebe6] rounded-full text-[0.85rem] font-medium tracking-wide transition-colors hover:border-[#c9a84c]">
                Connect
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="reveal order-1 lg:order-2 w-full mb-8 lg:mb-0 flex justify-center lg:justify-end">
            <div style={{ position: 'relative', width: '100%', maxWidth: '440px', aspectRatio: '4/5' }}>
              <div style={{ position: 'absolute', inset: '-2px', borderRadius: '2rem', background: `linear-gradient(145deg, ${S.gold}33, transparent 60%)`, zIndex: 0 }} />
              <img
                src="/assets/images/personal/Personal Photo 1.webp"
                alt="Durvesh H. Patil — Strategic Digital Builder and MBA Professional at SCIT Pune"
                className="w-full h-full object-cover rounded-[2rem] block relative z-10"
                style={{ objectPosition: 'center 15%', border: `1px solid ${S.border}` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. IDENTITY ── */}
      <section id="identity" className="w-full" style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div className={`${CONTAINER_CLASSES} grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-20 items-center`}>
          <div className="reveal text-center lg:text-left">
            <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Strategic Positioning</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.15, marginBottom: '1.5rem', fontWeight: 400 }}>
              A business-minded creator who builds systems, not just content.
            </h2>
          </div>
          <div className="reveal text-center lg:text-left">
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 300 }}>
              I am a strategic digital builder operating at the intersection of communication, leadership, and execution. My work spans digital branding, event promotion, audience engagement, and content strategy — coordinated across real institutional environments.
            </p>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300 }}>
              Currently pursuing my MBA at Symbiosis Centre for Information Technology (SCIT), Pune — a platform I treat as an opportunity ecosystem for strategic growth, leadership exposure, and industry-level business thinking.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              {['Leadership', 'Digital Branding', 'Content Strategy', 'Event Promotion', 'Audience Engagement', 'Strategic Communication'].map(tag => (
                <span key={tag} style={{ padding: '0.4rem 1rem', border: `1px solid ${S.border}`, borderRadius: '3rem', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: S.muted }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INFLUENCE ── */}
      <section id="influence" className="w-full" style={{ borderTop: `1px solid ${S.border}` }}>
        <div className={CONTAINER_CLASSES}>
          <div className="reveal text-center lg:text-left mx-auto lg:mx-0 max-w-[600px] mb-12">
            <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Digital Branding & Event Strategy</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 400 }}>Strategic Digital Influence.</h2>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300 }}>
              Led digital branding and social media initiatives focused on event visibility, audience engagement, and communication strategy.
            </p>
          </div>

          {/* 3-column impact blocks */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-3 gap-px mb-12 border border-[rgba(255,255,255,0.06)] rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.06)]">
            {[
              { num: '01', title: 'Content Strategy', body: 'Created promotional content, reel scripts, and branding-focused campaigns for cultural and technical events — Techfest 2024, 2025 and Fusion 2025, 2026.' },
              { num: '02', title: 'Team Coordination', body: 'Worked across multiple teams to align communication, branding, and audience outreach toward a consistent digital identity for each event.' },
              { num: '03', title: 'Digital Engagement', body: 'Contributed to stronger participation and visibility through audience-focused storytelling, campaign execution, and organic reach scaling to 3.6M+ views.' },
            ].map(b => (
              <div key={b.num} className="p-6 sm:p-8 lg:p-12 text-center lg:text-left" style={{ background: S.surface, borderRight: `1px solid ${S.border}`, transition: 'background 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#141414'}
                onMouseLeave={e => e.currentTarget.style.background = S.surface}>
                <div style={{ fontFamily: S.serif, fontSize: '2.5rem', color: S.gold, opacity: 0.4, marginBottom: '1.5rem' }}>{b.num}</div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 600, color: S.text, marginBottom: '1rem', letterSpacing: '0.01em' }}>{b.title}</h3>
                <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300 }}>{b.body}</p>
              </div>
            ))}
          </div>

          {/* Event photo strip */}
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src="/assets/images/achievements/Social Media Head Techfest 2k24.jpg" alt="Leading digital operations for Techfest 2024" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src="/assets/images/achievements/Techfest 2k25 Candid 2.jpg" alt="Behind the scenes at Techfest 2025 event coordination" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src="/assets/images/achievements/Crossed 1 Million Views on Social Media event promotion reel of Fusion 2k25.jpg" alt="Fusion 2025 reel crossing 1 million organic views" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUTSTANDING CREATOR ── */}
      <section className="w-full" style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div className={`${CONTAINER_CLASSES} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}>
          <div className="reveal w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] relative rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.06)] order-2 lg:order-1">
            <img src="/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg" alt="Outstanding Content Creator award from KBT College of Engineering" className="absolute inset-0 w-full h-full object-cover" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.8) 0%, transparent 50%)' }} />
          </div>
          <div className="reveal order-1 lg:order-2 text-center lg:text-left">
            <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.5rem', fontWeight: 600 }}>Recognition</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.15, marginBottom: '2rem', fontWeight: 400 }}>
              Outstanding Content Creator.
            </h2>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 300 }}>
              Recognized for consistency, execution, and measurable digital branding contribution. This recognition came through reel scripting, strategic audience engagement, and event promotion campaigns that generated real visibility.
            </p>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300 }}>
              The creator identity — expressed through <strong style={{ color: S.text, fontWeight: 500 }}>_thedurvesh</strong> and <strong style={{ color: S.text, fontWeight: 500 }}>cinesyncbydurvesh</strong> — is cinematic, strategic, and branding-oriented. Not entertainment. Communication.
            </p>
          </div>
        </div>
      </section>

      <ContentCreation />

      {/* ── 5. APPROACH ── */}
      <section className="w-full" style={{ borderTop: `1px solid ${S.border}` }}>
        <div className={CONTAINER_CLASSES}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }} className="reveal overflow-hidden text-center">
            <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: S.gold, marginBottom: '2rem', fontWeight: 600 }}>Approach</p>
            <p style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: S.text, lineHeight: 1.55, fontWeight: 400, fontStyle: 'italic' }}>
              "I believe meaningful digital presence is built through clarity, consistency, storytelling, and execution.
            </p>
            <p style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: S.muted, lineHeight: 1.55, fontWeight: 400, fontStyle: 'italic', marginTop: '1.5rem' }}>
              Whether contributing to branding campaigns, coordinating event communication, or creating audience-focused content — the goal remains the same: building systems that create impact."
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. EXECUTION ── */}
      <section id="execution" className="w-full" style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div className={CONTAINER_CLASSES}>
          <div className="reveal text-center lg:text-left mb-12">
            <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1rem', fontWeight: 600 }}>Execution</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>
              Real-world systems. Measurable outcomes.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              <div key={p.title} className="reveal p-6 sm:p-8 lg:p-12 bg-[#0a0a0a] rounded-3xl transition-colors border border-[rgba(255,255,255,0.06)] hover:border-[#c9a84c] hover:border-opacity-40 text-center lg:text-left">
                <span style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, fontWeight: 700, marginBottom: '1.25rem', display: 'block' }}>{p.tag}</span>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 600, color: S.text, marginBottom: '1rem' }}>{p.title}</h3>
                <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Research />

      <Gallery />

      {/* ── CONNECT ── */}
      <section id="contact" className="w-full text-center" style={{ borderTop: `1px solid ${S.border}` }}>
        <div className={CONTAINER_CLASSES}>
          <div className="reveal max-w-[640px] mx-auto">
            <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.5rem', fontWeight: 600 }}>Connect</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(2rem, 6vw, 4rem)', color: S.text, lineHeight: 1.05, marginBottom: '1.25rem', fontWeight: 400 }}>
              Let's build something with intent.
            </h2>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, marginBottom: '3rem', fontWeight: 300 }}>
              Open to strategic collaborations, leadership roles, and meaningful conversations.
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
