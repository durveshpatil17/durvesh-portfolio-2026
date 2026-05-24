import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
        <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Academic Contribution</p>
        <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>
          Published Research.
        </h2>
      </div>

      {/* Main publication 1 - Full Width Card */}
      <div className="res-reveal mb-12 md:mb-16">
        <div className="p-6 md:p-12" style={{ background: '#0c0c0c', border: `1px solid ${S.border}`, borderRadius: '1.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: S.gold, flexShrink: 0 }} />
            <span style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', letterSpacing: '0.16em', textTransform: 'uppercase', color: S.gold, fontWeight: 700 }}>Peer Reviewed · Published</span>
          </div>
          
          <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: S.text, lineHeight: 1.35, marginBottom: '2rem', fontWeight: 400 }}>
            A Scalable AI-Driven Natural Language Interface for Algorithmic Trading with Strategy Validation and Asynchronous Execution
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {[
              { label: 'Journal', value: 'IJSMT' },
              { label: 'Impact Factor', value: '3.8' },
              { label: 'Domain', value: 'AI & FinTech' },
              { label: 'Type', value: 'Journal Article' },
              { label: 'Volume/Issue', value: 'Vol 03, Issue 04' },
              { label: 'Published', value: 'April 2026' },
            ].map(m => (
              <div key={m.label} style={{ paddingTop: '1rem', borderTop: `1px solid ${S.border}` }}>
                <div style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', textTransform: 'uppercase', letterSpacing: '0.15em', color: S.muted, marginBottom: '0.5rem' }}>{m.label}</div>
                <div style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)', color: S.text, fontWeight: 500 }}>{m.value}</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300, marginBottom: '1rem' }}>
              <strong style={{ color: S.text, fontWeight: 500 }}>Abstract:</strong> Explores AI-powered strategy generation, NLP-to-algorithm translation, and asynchronous trade execution architecture.
            </p>
            <p style={{ color: S.gold, fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)', letterSpacing: '0.04em' }}>
              DOI: 10.55041/ijsmt.v14.156
            </p>
          </div>

          {/* Pull quote inside the card */}
          <div style={{ padding: '1.5rem', background: '#141414', border: `1px solid ${S.border}`, borderRadius: '1rem', marginBottom: '2.5rem' }}>
            <p style={{ fontFamily: S.serif, fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', color: S.text, lineHeight: 1.5, fontStyle: 'italic', fontWeight: 400 }}>
              "The publication experience strengthened analytical thinking, structured problem solving, and research-oriented communication."
            </p>
          </div>

          {/* Certificate image inside card bottom */}
          <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', border: `1px solid ${S.border}` }}>
            <img src="/assets/images/certificates/Internation Journal of science paper publication certificate.jpeg"
              alt="International Journal of Science research publication certificate"
              style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

        </div>
      </div>

      {/* Main publication 2 - Full Width Card */}
      <div className="res-reveal mt-12 md:mt-16">
        <div className="p-6 md:p-12" style={{ background: '#0c0c0c', border: `1px solid ${S.border}`, borderRadius: '1.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: S.gold, flexShrink: 0 }} />
            <span style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', letterSpacing: '0.16em', textTransform: 'uppercase', color: S.gold, fontWeight: 700 }}>Conference · Presentation</span>
          </div>
          
          <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: S.text, lineHeight: 1.35, marginBottom: '1rem', fontWeight: 400 }}>
            Algorithmic Trading: Evolution from Rule-Based Models to AI-Driven and Real-Time Architectures — A Comprehensive Review
          </h3>
          
          <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.5, fontWeight: 300, marginBottom: '2rem' }}>
            International Conference on Artificial Intelligence for Innovation, Sustainability and Global Development
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {[
              { label: 'Organiser', value: 'ASN Publication' },
              { label: 'Date', value: '15 February 2026' },
              { label: 'Mode', value: 'Online / Hybrid' },
              { label: 'ISBN', value: '15368' },
              { label: 'Certificate No.', value: 'CF26003' },
            ].map(m => (
              <div key={m.label} style={{ paddingTop: '1rem', borderTop: `1px solid ${S.border}` }}>
                <div style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', textTransform: 'uppercase', letterSpacing: '0.15em', color: S.muted, marginBottom: '0.5rem' }}>{m.label}</div>
                <div style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)', color: S.text, fontWeight: 500 }}>{m.value}</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300 }}>
              <strong style={{ color: S.text, fontWeight: 500 }}>Description:</strong> Selected to present applied AI research on the evolution from rule-based to AI-driven real-time trading architectures. Recognised for academic contribution in applied AI and quantitative FinTech modeling.
            </p>
          </div>

          {/* Certificate image inside card bottom */}
          <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', border: `1px solid ${S.border}` }}>
            <img src="/assets/images/certificates/second-research-certificate.jpg"
              alt="International Conference Presentation Certificate"
              style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

        </div>
      </div>

    </div>
  );
}
