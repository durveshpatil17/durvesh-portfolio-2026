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
          background: '#ffffff', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.5rem',
        }} className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">
          
          {/* Left Column (Text) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '999px' }}>Peer Reviewed</span>
              <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '999px' }}>Published</span>
              <span style={{ border: '1px solid #d4d4d8', color: '#52525b', fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '999px' }}>Journal Article</span>
            </div>
            
            <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: '#111827', lineHeight: 1.3, marginBottom: '1.5rem', fontWeight: 400 }}>
              A Scalable AI-Driven Natural Language Interface for Algorithmic Trading with Strategy Validation and Asynchronous Execution
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem', padding: '1.25rem', background: '#f9fafb', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>Journal</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>IJSMT</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>Impact Factor</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#2563eb' }}>3.8</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>Domain</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>AI & FinTech</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>Published</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>April 2026</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>Volume / Issue</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>03 / 04</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>Type</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>Conference Paper</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: '2px', background: '#e5e7eb', flexShrink: 0 }} />
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: '#4b5563', lineHeight: 1.7, fontWeight: 400, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                "Explores AI-powered strategy generation, NLP-to-algorithm translation, and asynchronous trade execution architecture. Presented at an international conference on Artificial Intelligence for Innovation, Sustainability and Global Development."
              </p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: 'auto' }}>
              <LinkIcon size={14} color="#6b7280" />
              <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: 400 }}>DOI: </span>
              <a href="https://doi.org/10.55041/ijsmt.v14.156" target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#2563eb', fontWeight: 500, textDecoration: 'none' }}>
                10.55041/ijsmt.v14.156
              </a>
            </div>
          </div>

          {/* Right Column (Certificate Image) */}
          <a href="/assets/images/certificates/Internation Journal of science paper publication certificate.jpeg" target="_blank" rel="noreferrer"
            style={{ 
              width: '100%', height: '100%',
              borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e5e5',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-in',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', background: '#f9fafb'
            }} 
            className="hover:-translate-y-1 hover:shadow-lg">
            <img src="/assets/images/certificates/Internation Journal of science paper publication certificate.jpeg"
              alt="Certificate of Publication"
              style={{ width: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
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
          background: '#ffffff', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.5rem',
        }} className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">
          
          {/* Left Column (Text) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span style={{ background: '#eff6ff', color: '#2563eb', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '999px' }}>Presented</span>
              <span style={{ border: '1px solid #d4d4d8', color: '#52525b', fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '999px' }}>Conference Paper</span>
            </div>
            
            <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: '#111827', lineHeight: 1.3, marginBottom: '1.5rem', fontWeight: 400 }}>
              Algorithmic Trading: Evolution from Rule-Based Models to AI-Driven and Real-Time Architectures — A Comprehensive Review
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem', padding: '1.25rem', background: '#f9fafb', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>Conference</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>ICAISGD 2026</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>Date</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>15 Feb 2026</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>Organiser</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>ASN Publication</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>Mode</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>Online / Hybrid</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>ISBN</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>15368</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '4px' }}>Certificate No.</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>CF26003</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
              <div style={{ width: '2px', background: '#e5e7eb', flexShrink: 0 }} />
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: '#4b5563', lineHeight: 1.7, fontWeight: 400, fontStyle: 'italic' }}>
                "Selected to present applied AI research on the evolution from rule-based to AI-driven real-time trading architectures. Recognised for academic contribution in applied AI and quantitative FinTech modeling."
              </p>
            </div>
          </div>

          {/* Right Column (Certificate Image) */}
          <a href="/assets/images/certificates/second-research-certificate.jpg" target="_blank" rel="noreferrer"
            style={{ 
              width: '100%', height: '100%',
              borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e5e5',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-in',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', background: '#f9fafb'
            }} 
            className="hover:-translate-y-1 hover:shadow-lg">
            <img src="/assets/images/certificates/second-research-certificate.jpg"
              alt="Certificate of Presentation"
              style={{ width: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
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
