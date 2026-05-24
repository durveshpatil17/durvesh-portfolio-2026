import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const S = {
  bg: '#060606', surface: '#0e0e0e', border: 'rgba(255,255,255,0.06)',
  gold: '#c9a84c', text: '#edebe6', muted: '#7a7875',
  serif: 'Instrument Serif, Georgia, serif', sans: 'Inter, system-ui, sans-serif',
};

export default function Research() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.res-reveal').forEach(el => {
        gsap.fromTo(el, { y: 32, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="research" className="px-6 py-24 md:px-12 md:py-32" style={{ borderTop: `1px solid ${S.border}` }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div className="res-reveal" style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: S.gold, marginBottom: '1rem', fontWeight: 600 }}>Academic Contribution</p>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(2rem, 4vw, 3rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>
            Published Research.
          </h2>
        </div>

        {/* Main publication card */}
        <div className="res-reveal grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-start mb-16">
          <div style={{ padding: '3rem', background: S.surface, border: `1px solid ${S.border}`, borderRadius: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: S.gold, flexShrink: 0 }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: S.gold, fontWeight: 700 }}>Peer Reviewed · Published</span>
            </div>
            <h3 style={{ fontFamily: S.serif, fontSize: '1.5rem', color: S.text, lineHeight: 1.35, marginBottom: '1.5rem', fontWeight: 400 }}>
              A Scalable AI-Driven Natural Language Interface for Algorithmic Trading
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
              {[
                { label: 'Journal', value: 'IJSMT' },
                { label: 'Impact Factor', value: '3.8' },
                { label: 'Domain', value: 'AI & FinTech' },
                { label: 'Type', value: 'Conference Paper' },
              ].map(m => (
                <div key={m.label} style={{ paddingTop: '1rem', borderTop: `1px solid ${S.border}` }}>
                  <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: S.muted, marginBottom: '0.4rem' }}>{m.label}</div>
                  <div style={{ fontSize: '0.9rem', color: S.text, fontWeight: 500 }}>{m.value}</div>
                </div>
              ))}
            </div>
            <p style={{ color: S.muted, fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '2rem' }}>
              Explores AI-powered strategy generation, NLP-to-algorithm translation, and asynchronous trade execution architecture. Presented at an international conference on Artificial Intelligence for Innovation, Sustainability and Global Development.
            </p>
            <a href="/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf"
              target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.5rem', border: `1px solid ${S.border}`, borderRadius: '3rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: S.text, textDecoration: 'none', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = S.gold}
              onMouseLeave={e => e.currentTarget.style.borderColor = S.border}>
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
            <div style={{ padding: '1.75rem', background: S.surface, border: `1px solid ${S.border}`, borderRadius: '1.25rem' }}>
              <p style={{ fontFamily: S.serif, fontSize: '1.05rem', color: S.text, lineHeight: 1.6, fontStyle: 'italic', fontWeight: 400 }}>
                "The publication experience strengthened analytical thinking, structured problem solving, and research-oriented communication."
              </p>
            </div>
          </div>
        </div>

        {/* Second publication — Conference Certificate */}
        <div className="res-reveal" style={{ marginTop: '2rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center p-8 md:px-10" style={{
            background: S.surface, border: `1px solid ${S.border}`,
            borderRadius: '1.25rem', transition: 'border-color 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = `${S.gold}44`}
            onMouseLeave={e => e.currentTarget.style.borderColor = S.border}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: S.gold, flexShrink: 0 }} />
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: S.gold, fontWeight: 700 }}>
                  International Conference · Presentation & Publication
                </span>
              </div>
              <h3 style={{ fontFamily: S.serif, fontSize: '1.2rem', color: S.text, lineHeight: 1.35, marginBottom: '0.75rem', fontWeight: 400 }}>
                Certificate of Presentation & Publication
              </h3>
              <p style={{ color: S.muted, fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300, maxWidth: '600px' }}>
                Presented and published at an International Conference on Artificial Intelligence for Innovation, Sustainability and Global Development. Recognised for academic contribution in applied AI research.
              </p>
            </div>
            <a
              href="/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf"
              target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0,
                padding: '0.65rem 1.4rem', border: `1px solid ${S.border}`, borderRadius: '3rem',
                fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: S.text, textDecoration: 'none', whiteSpace: 'nowrap',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = S.gold; e.currentTarget.style.color = S.gold; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = S.border; e.currentTarget.style.color = S.text; }}
            >
              Open PDF →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
