import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';
import { caseStudies } from '../data/caseStudies';

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  useEffect(() => {
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 36 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        }
      );
    });
  }, []);

  return (
    <>
      {/* ── 1. HEADER ── */}
      <section style={{ padding: 'clamp(8rem,15vw,12rem) clamp(1.25rem,5vw,5rem) clamp(3rem,6vw,5rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <p className="reveal" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: S.gold, fontWeight: 600, marginBottom: '2rem' }}>
            Experience & Systems
          </p>
          <h1 className="reveal" style={{
            fontFamily: S.serif,
            fontSize: 'clamp(3.5rem, 9vw, 6rem)',
            lineHeight: 1, fontWeight: 400,
            color: S.text, marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            Real-world impact.<br />
            <span style={{ fontStyle: 'italic', color: S.muted }}>Built with intent.</span>
          </h1>
          <p className="reveal" style={{ color: S.muted, fontWeight: 300, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.65, maxWidth: '520px' }}>
            A detailed look at my professional experience building AI architectures, optimizing financial operations, and leading technical teams.
          </p>
        </div>
      </section>

      {/* ── 2. EXPERIENCE LIST ── */}
      <section style={{ padding: '0 clamp(1.25rem,5vw,5rem) clamp(5rem,10vw,9rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          {caseStudies.map((study, index) => (
            <div key={study.id} className="reveal" style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              padding: 'clamp(3rem,6vw,5rem) 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 5vw, 5rem)',
            }}>
              
              {/* Left Column: Context */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: S.serif, fontSize: '1.5rem', color: S.gold }}>0{index + 1}</span>
                  <span style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: S.muted, border: '1px solid rgba(255,255,255,0.1)', padding: '0.3rem 0.8rem', borderRadius: '3rem' }}>
                    {study.tag.split(' · ')[0]}
                  </span>
                </div>
                <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(2rem,4vw,3.2rem)', color: S.text, lineHeight: 1.1, marginBottom: '0.5rem', fontWeight: 400 }}>
                  {study.title}
                </h2>
                <h3 style={{ fontSize: '0.9rem', color: S.gold, fontWeight: 500, marginBottom: '2rem', letterSpacing: '0.04em' }}>
                  {study.tag.split(' · ')[1] || study.tag}
                </h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.7rem', color: S.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Problem Statement</p>
                  <p style={{ color: S.text, fontSize: '1rem', lineHeight: 1.6, fontWeight: 300 }}>{study.problem}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: S.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Approach & Impact</p>
                  <p style={{ color: S.text, fontSize: '1rem', lineHeight: 1.6, fontWeight: 300 }}>{study.approach} {study.impact}</p>
                </div>
              </div>

              {/* Right Column: Details */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ background: '#0c0c0c', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '1rem', padding: 'clamp(1.5rem,3vw,2.5rem)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <p style={{ fontSize: '0.65rem', color: S.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Role</p>
                      <p style={{ color: S.text, fontSize: '0.95rem', fontWeight: 500 }}>{study.details.role}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: '0.65rem', color: S.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Timeline</p>
                      <p style={{ color: S.text, fontSize: '0.95rem', fontWeight: 500 }}>{study.details.period}</p>
                    </div>
                  </div>
                  
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {study.details.bullets.map((bullet, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{ color: S.gold, fontSize: '1.2rem', lineHeight: 1 }}>•</span>
                        <span style={{ color: S.muted, fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
}
