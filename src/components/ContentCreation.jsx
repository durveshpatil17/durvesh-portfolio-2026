import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S, PADDING, CONTAINER } from '../App';

const STATS = [
  { value: '4M+',   label: 'Total Views' },
  { value: '1M+',   label: 'Single Reel' },
  { value: '2',     label: 'Creator Accounts' },
  { value: '100%',  label: 'Organic Growth' },
];

const ACCOUNTS = [
  {
    handle: '@cinesyncbydurvesh',
    sub: 'Cinema · Visual Storytelling · Editing',
    image: '/assets/images/personal/CineSync.jpg',
  },
  {
    handle: '@_thedurvesh',
    sub: 'Personal Brand · Tech · Lifestyle',
    image: '/assets/images/personal/Personal Photo 1.webp',
  },
];

export default function ContentCreation() {
  const ref = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.cc-reveal', { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 85%' }
        });
      }, ref);
      return () => ctx.revert();
    });
    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.cc-reveal', { opacity: 0 }, {
          opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.05,
          scrollTrigger: { trigger: ref.current, start: 'top 90%' }
        });
      }, ref);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} id="creator" className={`${PADDING}`}>
      <div className={`${CONTAINER}`}>
        
        {/* Horizontal Metrics Section */}
        <div className="mb-20 border-t border-[#c9a84c]/20 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-0 items-center">
            <div className="cc-reveal pr-8 lg:pr-16 text-left">
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.15, marginBottom: '1.5rem', fontWeight: 400 }}>
                Digital Influence.
              </h2>
              <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 300 }}>
                Consumer psychology, brand positioning, and content strategy executed at scale. Two active channels reaching millions with consistent organic growth.
              </p>
            </div>
            
            <div className="cc-reveal grid grid-cols-2 md:grid-cols-4 relative">
               {STATS.map((s, i) => (
                  <div key={s.label} className="flex flex-col items-center justify-center p-6 text-center relative">
                    <div style={{ fontFamily: S.serif, fontSize: 'clamp(2.5rem, 4vw, 4rem)', color: S.gold, lineHeight: 1, marginBottom: '0.5rem' }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: S.text, opacity: 0.6, fontWeight: 600 }}>
                      {s.label}
                    </div>
                    {/* Vertical dividers on Desktop */}
                    {i !== STATS.length - 1 && (
                       <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#c9a84c] opacity-30"></div>
                    )}
                  </div>
               ))}
            </div>
          </div>
        </div>

        {/* Social Channels 2-Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-12">
           {ACCOUNTS.map(acc => (
              <div key={acc.handle} className="cc-reveal flex flex-col p-8 md:p-10 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-[#c9a84c]/30 transition-colors">
                <div className="w-[64px] h-[64px] rounded-full overflow-hidden border border-white/20 mb-6">
                   <img src={acc.image} alt={acc.handle} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-[#c9a84c] text-xl font-medium mb-2">{acc.handle}</h3>
                <p className="text-white/60 text-sm mb-8 flex-1">{acc.sub}</p>
                <a href={`https://instagram.com/${acc.handle.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="animated-underline text-white text-sm tracking-wide self-start uppercase">
                  View Profile ↗
                </a>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
}
