import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S, PADDING, CONTAINER } from '../App';

export default function Recognition() {
  const ref = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.rec-reveal', { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 85%' }
        });
      }, ref);
      return () => ctx.revert();
    });
    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.rec-reveal', { opacity: 0 }, {
          opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.05,
          scrollTrigger: { trigger: ref.current, start: 'top 90%' }
        });
      }, ref);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} id="recognition" className={`${PADDING}`}>
      <div className={`${CONTAINER}`}>
        
        <div className="rec-reveal mb-12">
          <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Leadership & Honours</p>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}
              className="after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#c9a84c] after:mt-4 text-left">
            Recognition.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="rec-reveal group relative bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/40 overflow-hidden flex flex-col">
            <div className="w-full aspect-[4/3] overflow-hidden">
               <img src="/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg" alt="Award" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 style={{ fontFamily: S.serif, fontSize: '1.5rem', color: S.text, marginBottom: '0.5rem', lineHeight: 1.3 }}>Special Achievers Award</h3>
              <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-4">Outstanding Content Creator</p>
              <p style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300 }}>
                Recognised for consistent contribution across leadership, digital branding, communication, and institutional activities.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rec-reveal group relative bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/40 overflow-hidden flex flex-col">
            <div className="w-full aspect-[4/3] overflow-hidden">
               <img src="/assets/images/achievements/Felicitation By HOD.jpg" alt="Felicitation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 style={{ fontFamily: S.serif, fontSize: '1.5rem', color: S.text, marginBottom: '0.5rem', lineHeight: 1.3 }}>HOD Felicitation</h3>
              <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-4">Farewell Ceremony</p>
              <p style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300 }}>
                Felicitated by the Head of Department for sustained contribution, leadership involvement, and consistent campus engagement.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rec-reveal group relative bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/40 overflow-hidden flex flex-col">
            <div className="w-full aspect-[4/3] overflow-hidden">
               <img src="/assets/images/achievements/award receiving candid photo at nivesh mantrana 2k24.jpg" alt="Nivesh Mantrana" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 style={{ fontFamily: S.serif, fontSize: '1.5rem', color: S.text, marginBottom: '0.5rem', lineHeight: 1.3 }}>Event Volunteering</h3>
              <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-4">Nivesh Mantrana 2024</p>
              <p style={{ color: S.muted, fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300 }}>
                Felicitated for execution, operations, and social media promotion strategy at a national-level finance event.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
