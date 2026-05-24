import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S, CONTAINER_CLASSES } from '../App';

export default function Recognition() {
  const ref = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray('.rec-reveal').forEach(el => {
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
        gsap.utils.toArray('.rec-reveal').forEach(el => {
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
    <div ref={ref}>
      {/* ── SPECIAL ACHIEVERS AWARD ── */}
      <section className="w-full" style={{ borderTop: `1px solid ${S.border}` }}>
        <div className={CONTAINER_CLASSES}>
          <div className="rec-reveal text-center lg:text-left" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1rem', fontWeight: 600 }}>Recognition</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>Special Achievers Award.</h2>
          </div>
          {/* --- Block 2: National Recognition --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 rec-reveal relative rounded-[1.5rem] overflow-hidden w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3]" style={{ border: `1px solid ${S.border}` }}>
              <img src="/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg"
                alt="Special Achievers Award — Outstanding Content Creator felicitation at KBT College"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.7) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
                <span style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 700 }}>Special Achievers Award</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p style={{ fontFamily: S.serif, fontSize: 'clamp(1.35rem, 4vw, 1.8rem)', color: S.text, lineHeight: 1.5, marginBottom: '2rem', fontStyle: 'italic', fontWeight: 400 }}>
                "Recognised for consistent contribution across leadership, digital branding, communication, and institutional activities."
              </p>
              <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 300 }}>
                The recognition reflected initiative, execution, creativity, and meaningful involvement across multiple institutional domains — from event branding and social media strategy to cross-functional team coordination.
              </p>
              <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300 }}>
                Felicitated for the <strong style={{ color: S.text, fontWeight: 500 }}>Outstanding Content Creator</strong> category — acknowledging the role of consistent digital storytelling, reel scripting, and campaign execution in driving real audience engagement.
              </p>
              <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: `1px solid ${S.border}` }}>
                <span style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', letterSpacing: '0.14em', textTransform: 'uppercase', color: S.muted }}>KBT College of Engineering · Special Achievers Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOD FELICITATION ── */}
      <section id="recognition" className="w-full" style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
        <div className={CONTAINER_CLASSES}>
          <div className="rec-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1 text-center lg:text-left">
              <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Felicitation</p>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.15, marginBottom: '2rem', fontWeight: 400 }}>
                Recognised by Department Leadership.
              </h2>
              <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 300 }}>
                Felicitated during the Farewell Ceremony by the Head of Department for sustained contribution, leadership involvement, and consistent participation across institutional initiatives.
              </p>
              <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300 }}>
                This recognition reflected long-term commitment toward communication, branding, coordination, and campus engagement — across four years of academic and extracurricular presence.
              </p>
              <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: `1px solid ${S.border}` }}>
                <span style={{ fontSize: 'clamp(0.55rem, 1vw, 0.65rem)', letterSpacing: '0.12em', textTransform: 'uppercase', color: S.muted }}>HOD Felicitation · Farewell Ceremony · Department of Information Technology</span>
              </div>
            </div>
            <div className="order-2 w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] relative rounded-[1.5rem] overflow-hidden" style={{ border: `1px solid ${S.border}` }}>
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
