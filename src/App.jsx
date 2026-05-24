import React, { useEffect, useState, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gallery from './components/Gallery';
import Research from './components/Research';
import ContentCreation from './components/ContentCreation';
import Recognition from './components/Recognition';

gsap.registerPlugin(ScrollTrigger);

export const S = {
  bg: '#060606', surface: '#0e0e0e', border: 'rgba(255,255,255,0.06)',
  gold: '#c9a84c', goldLight: '#e8c97a', text: '#edebe6', muted: '#7a7875',
  serif: 'Instrument Serif, Georgia, serif', sans: 'Inter, system-ui, sans-serif',
};

export const PADDING = "px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-24";
export const CONTAINER = "w-full max-w-[1320px] mx-auto";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Custom Cursor logic
    const cursor = cursorRef.current;
    if (cursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      gsap.set(cursor, { opacity: 1 });
      let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
      
      const onMouseMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
      window.addEventListener('mousemove', onMouseMove);
      
      gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        gsap.set(cursor, { x: cursorX - 6, y: cursorY - 6 });
      });
      return () => window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);

  useEffect(() => {
    // Lenis smooth scroll
    let lenis;
    if (window.innerWidth >= 768) {
      lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    }

    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(6,6,6,0.85)';
        nav.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
        nav.style.backdropFilter = 'blur(16px)';
      } else {
        nav.style.background = 'transparent';
        nav.style.borderBottom = 'none';
        nav.style.backdropFilter = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);

    // GSAP Entrance Animations
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' }
        });
      });
    });
    mm.add("(max-width: 767px)", () => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 0 }, {
          opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
        });
      });
    });

    return () => { 
      window.removeEventListener('scroll', handleScroll); 
      if (lenis) lenis.destroy(); 
      mm.revert(); 
    };
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [menuOpen]);

  return (
    <div style={{ background: S.bg, color: S.text, fontFamily: S.sans, overflowX: 'hidden' }}>
      
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor hidden md:block"></div>

      {/* NAV */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 h-[56px] lg:h-[64px] transition-all duration-300">
        {/* Logo Monogram */}
        <a href="#" style={{ fontFamily: S.serif, fontSize: '1.4rem', color: S.gold, textDecoration: 'none', letterSpacing: '0.04em' }}>
          DHP.
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {['Identity', 'Recognition', 'Execution', 'Research', 'Gallery'].map(label => (
            <a key={label} href={`#${label.toLowerCase()}`} className="nav-link shrink-0" style={{ color: S.text, textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = S.gold}
              onMouseLeave={e => e.target.style.color = S.text}>
              {label}
            </a>
          ))}
          <a href="#contact" className="border border-[#c9a84c] text-[#c9a84c] px-5 py-2 rounded-full text-[0.72rem] tracking-widest uppercase transition-colors hover:bg-[#c9a84c] hover:text-[#060606] ml-4">
            Let's Connect
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="lg:hidden flex items-center justify-center w-[44px] h-[44px] z-[60]" onClick={() => setMenuOpen(!menuOpen)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: menuOpen ? S.gold : S.text, transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ display: 'block', width: '20px', height: '2px', background: menuOpen ? 'transparent' : S.text, transition: '0.3s' }}></span>
            <span style={{ display: 'block', width: '20px', height: '2px', background: menuOpen ? S.gold : S.text, transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[55] flex flex-col items-center justify-center" style={{ background: 'rgba(6,6,6,0.98)', backdropFilter: 'blur(10px)' }}>
          {['Identity', 'Recognition', 'Execution', 'Research', 'Gallery', 'Contact'].map(label => (
            <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ color: S.text, textDecoration: 'none', fontSize: '1.5rem', fontFamily: S.serif, letterSpacing: '0.05em', margin: '1rem 0' }}>
              {label}
            </a>
          ))}
        </div>
      )}

      {/* ── 1. HERO ── */}
      <section className={`min-h-[100svh] lg:min-h-[100vh] flex items-center pt-[56px] lg:pt-[64px] ${PADDING} relative`}
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)' }}>
        <div className={`grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-0 items-center ${CONTAINER}`}>
          {/* Text Content */}
          <div className="reveal order-2 lg:order-1 lg:pr-12 text-left flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, fontWeight: 600 }}>
                Durvesh H. Patil
              </p>
              <div className="hidden lg:block w-px h-16 bg-[#c9a84c] opacity-50 mx-2"></div>
              <p className="hidden lg:block" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.muted, fontWeight: 600 }}>
                MBA @ SCIT Pune
              </p>
            </div>

            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: 1.05, color: S.text, marginBottom: '2.5rem', fontWeight: 400 }}>
              Building Digital Presence, Strategic Influence, and <span style={{ fontStyle: 'italic', color: S.gold }}>Impact.</span>
            </h1>

            {/* Horizontal Stats Row */}
            <div className="flex items-center gap-4 lg:gap-6 mb-8 text-[0.8rem] lg:text-[0.9rem] uppercase tracking-widest text-[#7a7875]">
              <span>3.6M+ Views</span>
              <div className="w-[4px] h-[4px] rounded-full bg-[#c9a84c]"></div>
              <span>Content Strategist</span>
              <div className="w-[4px] h-[4px] rounded-full bg-[#c9a84c]"></div>
              <span>Digital Builder</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="#gallery" className="w-full sm:w-auto text-center px-8 py-4 bg-[#c9a84c] text-[#060606] rounded-full text-[0.85rem] font-semibold tracking-wide transition-opacity hover:opacity-85">
                Explore Journey
              </a>
              <a href="#contact" className="w-full sm:w-auto text-center px-8 py-4 border border-[rgba(255,255,255,0.06)] text-[#edebe6] rounded-full text-[0.85rem] font-medium tracking-wide transition-colors hover:border-[#c9a84c]">
                Connect
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="reveal order-1 lg:order-2 w-full lg:h-[80vh] flex items-center justify-center">
            <div className="w-full max-w-[440px] lg:max-w-none lg:h-full relative lg:pl-12">
              <img
                src="/assets/images/personal/Personal Photo 1.webp"
                alt="Durvesh H. Patil"
                className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
                style={{ objectPosition: 'center 15%', border: `1px solid ${S.gold}33`, boxShadow: '0 0 40px rgba(201,168,76,0.15)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#c9a84c] opacity-20"></div>

      {/* ── 2. IDENTITY ── */}
      <section id="identity" className={`${PADDING}`} style={{ background: S.surface }}>
        <div className={`grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 lg:gap-24 items-start ${CONTAINER}`}>
          <div className="reveal">
            <p style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', color: S.gold, lineHeight: 1.3, fontStyle: 'italic', borderLeft: `2px solid ${S.gold}`, paddingLeft: '1.5rem', fontWeight: 400 }}>
              "A business-minded creator who builds systems, not just content."
            </p>
          </div>
          <div className="reveal relative text-left">
            <div className="hidden lg:block absolute top-0 right-0 w-[40px] h-[40px] border border-[rgba(201,168,76,0.3)] rounded-full flex items-center justify-center text-[#c9a84c] font-serif opacity-50">D</div>
            <p style={{ color: S.text, fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.6, marginBottom: '2rem', fontWeight: 300, maxWidth: '800px' }}>
              I am a strategic digital builder operating at the intersection of communication, leadership, and execution. My work spans digital branding, event promotion, audience engagement, and content strategy — coordinated across real institutional environments.
            </p>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300, maxWidth: '800px' }}>
              Currently pursuing my MBA at Symbiosis Centre for Information Technology (SCIT), Pune — a platform I treat as an opportunity ecosystem for strategic growth, leadership exposure, and industry-level business thinking.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '3rem' }}>
              {['Leadership', 'Digital Branding', 'Content Strategy', 'Event Promotion', 'Audience Engagement', 'Strategic Communication'].map(tag => (
                <span key={tag} style={{ padding: '0.4rem 1.2rem', border: `1px solid ${S.border}`, borderRadius: '3rem', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: S.muted }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#c9a84c] opacity-20"></div>

      <Recognition />

      <div className="w-full h-px bg-[#c9a84c] opacity-20"></div>

      {/* ── 5. EXECUTION ── */}
      <section id="execution" className={`${PADDING}`} style={{ background: S.surface }}>
        <div className={`${CONTAINER}`}>
          <div className="reveal flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6">
            <div>
              <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Execution</p>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, fontWeight: 400, position: 'relative', display: 'inline-block' }}
                  className="after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#c9a84c] after:mt-4">
                Real-world systems.
              </h2>
            </div>
            <p className="text-[#7a7875] text-[1.1rem] max-w-[320px] font-light">
              Measurable outcomes built through engineering, strategy, and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                tag: 'AI Engineering', title: 'Algorithmic Strategy', img: '/assets/images/achievements/Techfest 2k25 Candid.jpg',
                body: 'Architected an NLP-to-strategy translation system for Indian financial markets. Business impact over academic theory.',
              },
              {
                tag: 'FinTech', title: 'Advisory Automation', img: '/assets/images/achievements/award receiving candid photo at nivesh mantrana 2k24.jpg',
                body: 'Led client onboarding, KYC coordination, and SIP automation. 36+ clients, ₹13L+ AUM growth.',
              },
              {
                tag: 'Communication', title: 'WebRTC Platform', img: '/assets/images/achievements/Participation in Smart India Hackathon.jpg',
                body: 'Designed and implemented a scalable WebRTC-based communication platform with real-time video.',
              },
            ].map(p => (
              <div key={p.title} className="reveal group relative bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/40 overflow-hidden flex flex-col">
                <div className="w-full aspect-[4/3] overflow-hidden">
                   <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, fontWeight: 700, marginBottom: '0.75rem', display: 'block' }}>{p.tag}</span>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 600, color: S.text, marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#c9a84c] opacity-20"></div>

      <Research />
      
      <div className="w-full h-px bg-[#c9a84c] opacity-20"></div>

      <ContentCreation />

      <div className="w-full h-px bg-[#c9a84c] opacity-20"></div>

      <Gallery />

      <div className="w-full h-px bg-[#c9a84c] opacity-20"></div>

      {/* ── FOOTER ── */}
      <footer id="contact" className={`${PADDING} bg-white/[0.02]`}>
        <div className={`${CONTAINER}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-center lg:text-left mb-16">
            
            <div className="flex flex-col gap-2">
               <span style={{ fontFamily: S.serif, fontSize: '2.5rem', color: S.gold }}>DHP.</span>
               <p className="text-[#edebe6] text-opacity-70 text-sm tracking-wide">Building meaningful impact.</p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              {['Identity', 'Recognition', 'Execution', 'Research', 'Gallery'].map(link => (
                 <a key={link} href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-[#c9a84c] uppercase text-[0.65rem] tracking-[0.2em] transition-colors">
                   {link}
                 </a>
              ))}
            </div>

            <div className="flex flex-col items-center lg:items-end gap-6">
              <div className="flex gap-4">
                 {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/durvesh-patil-628069214/' },
                  { label: 'Instagram', href: 'https://www.instagram.com/_thedurvesh/' },
                ].map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all">
                    ↗
                  </a>
                ))}
              </div>
              <a href="mailto:durveshpatilit@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-[#c9a84c] text-black font-semibold uppercase tracking-widest text-[0.75rem] rounded-full hover:bg-white transition-colors text-center">
                 Email Me
              </a>
            </div>

          </div>

          <div className="w-full border-t border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <span style={{ fontSize: '0.65rem', color: S.muted, letterSpacing: '0.1em' }}>© 2026 Durvesh H. Patil. All rights reserved.</span>
            <span style={{ fontSize: '0.65rem', color: S.muted, letterSpacing: '0.08em' }}>MBA @ SCIT Pune</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
