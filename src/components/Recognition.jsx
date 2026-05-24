import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const S = {
  bg: '#060606', surface: '#0e0e0e', border: 'rgba(255,255,255,0.06)',
  gold: '#c9a84c', text: '#edebe6', muted: '#7a7875',
  serif: 'Instrument Serif, Georgia, serif', sans: 'Inter, system-ui, sans-serif',
};

export default function Recognition() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.rec-reveal').forEach(el => {
        gsap.fromTo(el, { y: 32, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* ── SPECIAL ACHIEVERS AWARD ── */}
      <section style={{ padding: '7rem 3rem', borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="rec-reveal" style={{ marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: S.gold, marginBottom: '1rem', fontWeight: 600 }}>Recognition</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(2rem, 4vw, 3rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>Special Achievers Award.</h2>
          </div>
          <div className="rec-reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', height: '520px', border: `1px solid ${S.border}` }}>
              <img src="/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg"
                alt="Special Achievers Award — Outstanding Content Creator felicitation at KBT College"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.7) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 700 }}>Special Achievers Award</span>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: S.serif, fontSize: '1.45rem', color: S.text, lineHeight: 1.55, marginBottom: '2rem', fontStyle: 'italic', fontWeight: 400 }}>
                "Recognised for consistent contribution across leadership, digital branding, communication, and institutional activities."
              </p>
              <p style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
                The recognition reflected initiative, execution, creativity, and meaningful involvement across multiple institutional domains — from event branding and social media strategy to cross-functional team coordination.
              </p>
              <p style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                Felicitated for the <strong style={{ color: S.text, fontWeight: 500 }}>Outstanding Content Creator</strong> category — acknowledging the role of consistent digital storytelling, reel scripting, and campaign execution in driving real audience engagement.
              </p>
              <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: `1px solid ${S.border}` }}>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: S.muted }}>KBT College of Engineering · Special Achievers Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOD FELICITATION ── */}
      <section style={{ padding: '7rem 3rem', borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="rec-reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.5rem', fontWeight: 600 }}>Felicitation</p>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: S.text, lineHeight: 1.15, marginBottom: '2rem', fontWeight: 400 }}>
                Recognised by Department Leadership.
              </h2>
              <p style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
                Felicitated during the Farewell Ceremony by the Head of Department for sustained contribution, leadership involvement, and consistent participation across institutional initiatives.
              </p>
              <p style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                This recognition reflected long-term commitment toward communication, branding, coordination, and campus engagement — across four years of academic and extracurricular presence.
              </p>
              <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: `1px solid ${S.border}` }}>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: S.muted }}>HOD Felicitation · Farewell Ceremony · Department of Information Technology</span>
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', height: '460px', border: `1px solid ${S.border}` }}>
              <img src="/assets/images/achievements/Felicitation By HOD.jpg"
                alt="HOD felicitation on farewell day for leadership and institutional contribution"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.6) 0%, transparent 60%)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
