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

      {/* Main publication 1 */}
      <div className="res-reveal grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-16 items-start mb-12 md:mb-16">
        <div className="p-6 md:p-12" style={{ background: '#0c0c0c', border: `1px solid ${S.border}`, borderRadius: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: S.gold, flexShrink: 0 }} />
            <span style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', letterSpacing: '0.16em', textTransform: 'uppercase', color: S.gold, fontWeight: 700 }}>Peer Reviewed · Published</span>
          </div>
          <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: S.text, lineHeight: 1.35, marginBottom: '1.5rem', fontWeight: 400 }}>
            A Scalable AI-Driven Natural Language Interface for Algorithmic Trading
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
            {[
              { label: 'Journal', value: 'IJSMT' },
              { label: 'Impact Factor', value: '3.8' },
              { label: 'Domain', value: 'AI & FinTech' },
              { label: 'Type', value: 'Conference Paper' },
            ].map(m => (
              <div key={m.label} style={{ paddingTop: '1rem', borderTop: `1px solid ${S.border}` }}>
                <div style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', textTransform: 'uppercase', letterSpacing: '0.15em', color: S.muted, marginBottom: '0.5rem' }}>{m.label}</div>
                <div style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)', color: S.text, fontWeight: 500 }}>{m.value}</div>
              </div>
            ))}
          </div>
          <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300, marginBottom: '2.5rem' }}>
            Explores AI-powered strategy generation, NLP-to-algorithm translation, and asynchronous trade execution architecture. Presented at an international conference on Artificial Intelligence for Innovation, Sustainability and Global Development.
          </p>
          <a href="/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 min-h-[44px] border border-[rgba(255,255,255,0.06)] rounded-full text-[0.72rem] tracking-widest uppercase text-[#edebe6] transition-colors hover:border-[#c9a84c] text-center justify-center w-full sm:w-auto"
          >
            View Certificate →
          </a>
        </div>

        {/* Certificate image */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ position: 'relative', borderRadius: '1.25rem', overflow: 'hidden', border: `1px solid ${S.border}` }}>
            <img src="/assets/images/certificates/Internation Journal of science paper publication certificate.jpeg"
              alt="International Journal of Science research publication certificate"
              style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div className="p-6 md:p-8" style={{ background: '#0c0c0c', border: `1px solid ${S.border}`, borderRadius: '1.25rem' }}>
            <p style={{ fontFamily: S.serif, fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', color: S.text, lineHeight: 1.5, fontStyle: 'italic', fontWeight: 400 }}>
              "The publication experience strengthened analytical thinking, structured problem solving, and research-oriented communication."
            </p>
          </div>
        </div>
      </div>

      {/* Main publication 2 */}
      <div className="res-reveal grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 md:gap-16 items-start mt-12 md:mt-16">
        
        {/* Certificate image */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', order: 2, md: { order: 1 } }}>
          <div style={{ position: 'relative', borderRadius: '1.25rem', overflow: 'hidden', border: `1px solid ${S.border}` }}>
            <img src="/assets/images/certificates/second-research-certificate.jpg"
              alt="International Conference Presentation Certificate"
              style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div className="p-6 md:p-8" style={{ background: '#0c0c0c', border: `1px solid ${S.border}`, borderRadius: '1.25rem' }}>
            <p style={{ fontFamily: S.serif, fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', color: S.text, lineHeight: 1.5, fontStyle: 'italic', fontWeight: 400 }}>
              "Presented research to international experts, emphasizing real-world implications of AI in algorithmic trading systems."
            </p>
          </div>
        </div>

        {/* Text Details */}
        <div className="p-6 md:p-12" style={{ background: '#0c0c0c', border: `1px solid ${S.border}`, borderRadius: '1.5rem', order: 1, md: { order: 2 } }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: S.gold, flexShrink: 0 }} />
            <span style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', letterSpacing: '0.16em', textTransform: 'uppercase', color: S.gold, fontWeight: 700 }}>Conference · Presentation</span>
          </div>
          <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: S.text, lineHeight: 1.35, marginBottom: '1.5rem', fontWeight: 400 }}>
            International Conference on Artificial Intelligence for Innovation, Sustainability and Global Development
          </h3>
          <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300, marginBottom: '2.5rem' }}>
            Selected to present applied AI research. Recognised for academic contribution in applied AI and quantitative FinTech modeling.
          </p>
          <a href="/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 min-h-[44px] border border-[rgba(255,255,255,0.06)] rounded-full text-[0.72rem] tracking-widest uppercase text-[#edebe6] transition-colors hover:border-[#c9a84c] text-center justify-center w-full sm:w-auto"
          >
            View Original PDF →
          </a>
        </div>
      </div>

    </div>
  );
}
