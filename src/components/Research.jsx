import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Presentation, Link as LinkIcon, Award } from 'lucide-react';
import { S } from '../theme';

export default function Research() {
  const ref = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray('.res-reveal').forEach(el => {
          gsap.fromTo(el, { y: 32, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
          });
        });
      }, ref);
      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray('.res-reveal').forEach(el => {
          gsap.fromTo(el, { opacity: 0 }, {
            opacity: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
          });
        });
      }, ref);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} id="research" style={{ marginBottom: 'clamp(5rem, 10vw, 8rem)' }}>
      {/* Header */}
      <div className="res-reveal text-center lg:text-left" style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 500 }}>Academic Contribution</p>
        <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>
          Published Research.
        </h2>
      </div>

      {/* ── CARD 1: JOURNAL PUBLICATION ── */}
      <div className="res-reveal mb-12">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <FileText size={16} color="#7a7875" />
          <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#7a7875', fontWeight: 500 }}>Journal Publication</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
        </div>

        <div style={{
          background: '#ffffff', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem',
          gap: '1.25rem'
        }} className="flex flex-col md:flex-row">
          
          {/* Left Column (Text) */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '999px' }}>Peer Reviewed</span>
              <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '999px' }}>Published</span>
              <span style={{ border: '1px solid #d4d4d8', color: '#52525b', fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '999px' }}>Journal Article</span>
            </div>
            
            <h3 style={{ fontSize: '1.1rem', color: '#18181b', lineHeight: 1.4, marginBottom: '1.5rem', fontWeight: 500 }}>
              A Scalable AI-Driven Natural Language Interface for Algorithmic Trading with Strategy Validation and Asynchronous Execution
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>Journal</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#18181b' }}>IJSMT</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>Impact Factor</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#2563eb' }}>3.8</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>Domain</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#18181b' }}>AI & FinTech</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>Published</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#18181b' }}>April 2026</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>Volume / Issue</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#18181b' }}>03 / 04</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>Type</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#18181b' }}>Conference Paper</div>
              </div>
            </div>

            <div style={{ height: '1px', background: '#e4e4e7', marginBottom: '1.25rem' }} />

            <p style={{ fontSize: '13px', color: '#52525b', lineHeight: 1.65, fontWeight: 400, marginBottom: '1rem' }}>
              "Explores AI-powered strategy generation, NLP-to-algorithm translation, and asynchronous trade execution architecture. Presented at an international conference on Artificial Intelligence for Innovation, Sustainability and Global Development."
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <LinkIcon size={14} color="#71717a" />
              <span style={{ fontSize: '12px', color: '#71717a', fontWeight: 400 }}>DOI link → </span>
              <a href="https://doi.org/10.55041/ijsmt.v14.156" target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#2563eb', fontWeight: 500, textDecoration: 'none' }}>
                10.55041/ijsmt.v14.156
              </a>
            </div>
          </div>

          {/* Right Column (Certificate Image) */}
          <a href="/assets/images/certificates/Internation Journal of science paper publication certificate.jpeg" target="_blank" rel="noreferrer"
            style={{ 
              width: '100%', flexShrink: 0,
              borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e5e5',
              display: 'block', position: 'relative', cursor: 'zoom-in',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }} 
            className="md:w-[240px] hover:-translate-y-1 hover:shadow-lg">
            <img src="/assets/images/certificates/Internation Journal of science paper publication certificate.jpeg"
              alt="Certificate of Publication"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </a>
        </div>
      </div>

      {/* ── CARD 2: CONFERENCE PRESENTATION ── */}
      <div className="res-reveal mb-10">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Presentation size={16} color="#7a7875" />
          <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#7a7875', fontWeight: 500 }}>Conference Presentation</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
        </div>

        <div style={{
          background: '#ffffff', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem',
          gap: '1.25rem'
        }} className="flex flex-col md:flex-row">
          
          {/* Left Column (Text) */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span style={{ background: '#eff6ff', color: '#2563eb', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '999px' }}>Presented</span>
              <span style={{ border: '1px solid #d4d4d8', color: '#52525b', fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '999px' }}>Conference Paper</span>
            </div>
            
            <h3 style={{ fontSize: '1.1rem', color: '#18181b', lineHeight: 1.4, marginBottom: '1.5rem', fontWeight: 500 }}>
              Algorithmic Trading: Evolution from Rule-Based Models to AI-Driven and Real-Time Architectures — A Comprehensive Review
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>Conference</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#18181b' }}>ICAISGD 2026</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>Date</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#18181b' }}>15 Feb 2026</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>Organiser</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#18181b' }}>ASN Publication</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>Mode</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#18181b' }}>Online / Hybrid</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>ISBN</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#18181b' }}>15368</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#71717a', marginBottom: '2px' }}>Certificate No.</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#18181b' }}>CF26003</div>
              </div>
            </div>

            <div style={{ height: '1px', background: '#e4e4e7', marginBottom: '1.25rem' }} />

            <p style={{ fontSize: '13px', color: '#52525b', lineHeight: 1.65, fontWeight: 400 }}>
              "Selected to present applied AI research on the evolution from rule-based to AI-driven real-time trading architectures. Recognised for academic contribution in applied AI and quantitative FinTech modeling."
            </p>
          </div>

          {/* Right Column (Certificate Image) */}
          <a href="/assets/images/certificates/second-research-certificate.jpg" target="_blank" rel="noreferrer"
            style={{ 
              width: '100%', flexShrink: 0,
              borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e5e5',
              display: 'block', position: 'relative', cursor: 'zoom-in',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }} 
            className="md:w-[240px] hover:-translate-y-1 hover:shadow-lg">
            <img src="/assets/images/certificates/second-research-certificate.jpg"
              alt="Certificate of Presentation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </a>
        </div>
      </div>

      {/* ── BLOCKQUOTE ── */}
      <div className="res-reveal" style={{
        borderLeft: `2px solid ${S.gold}`, paddingLeft: '1.5rem', marginTop: '3rem'
      }}>
        <p style={{ fontFamily: S.serif, fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: S.text, lineHeight: 1.5, fontStyle: 'italic', fontWeight: 400, marginBottom: '0.75rem' }}>
          "The publication experience strengthened analytical thinking, structured problem solving, and research-oriented communication."
        </p>
        <span style={{ fontSize: '13px', color: S.muted, fontWeight: 500 }}>— Durvesh H. Patil</span>
      </div>

    </div>
  );
}
