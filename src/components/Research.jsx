import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S, PADDING, CONTAINER } from '../App';

export default function Research() {
  const ref = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.res-reveal', { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 85%' }
        });
      }, ref);
      return () => ctx.revert();
    });
    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.res-reveal', { opacity: 0 }, {
          opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.05,
          scrollTrigger: { trigger: ref.current, start: 'top 90%' }
        });
      }, ref);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} id="research" className={`${PADDING}`} style={{ background: S.surface }}>
      <div className={`${CONTAINER} flex flex-col lg:flex-row relative gap-8 lg:gap-16`}>
        
        {/* Editorial Vertical Label (Hidden on mobile) */}
        <div className="hidden lg:flex items-center justify-center border-r border-[#c9a84c]/20 pr-8">
           <p style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.3em', opacity: 0.3, color: S.text, textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600 }}>
              RESEARCH & PUBLICATIONS
           </p>
        </div>

        <div className="flex-1 w-full">
            <div className="res-reveal mb-12">
              <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Academic Contribution</p>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}
                  className="after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#c9a84c] after:mt-4 text-left">
                Published Research.
              </h2>
            </div>

            {/* Side-by-side Desktop Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Publication 1 */}
              <div className="res-reveal flex flex-col p-6 md:p-10 lg:p-12 bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/5 transition-all duration-300 hover:border-[#c9a84c]/40 relative">
                <div className="absolute top-0 left-0 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-br-lg px-3 py-1 text-xs uppercase tracking-widest text-[#c9a84c]/80 rounded-tl-xl">
                  Published
                </div>
                <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: S.gold, fontWeight: 600 }}>IJSMT Journal</span>
                </div>
                <h3 style={{ fontFamily: S.serif, fontSize: '1.6rem', color: S.text, lineHeight: 1.35, marginBottom: '1.5rem', fontWeight: 400 }}>
                  A Scalable AI-Driven Natural Language Interface for Algorithmic Trading
                </h3>
                <p className="text-white/60 text-[0.95rem] leading-relaxed font-light mb-8 flex-1">
                  Explores AI-powered strategy generation, NLP-to-algorithm translation, and asynchronous trade execution architecture. Presented at an international conference on Artificial Intelligence for Innovation, Sustainability and Global Development.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mb-8">
                   <div>
                     <div className="text-[0.6rem] uppercase tracking-widest text-[#7a7875] mb-1">Impact Factor</div>
                     <div className="text-sm font-medium text-white">3.8</div>
                   </div>
                   <div>
                     <div className="text-[0.6rem] uppercase tracking-widest text-[#7a7875] mb-1">Domain</div>
                     <div className="text-sm font-medium text-white">AI & FinTech</div>
                   </div>
                </div>
                <a href="/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf"
                  target="_blank" rel="noopener noreferrer"
                  className="rounded-full border border-[#c9a84c] text-[#c9a84c] px-6 py-3 text-xs tracking-widest uppercase text-center transition-colors hover:bg-[#c9a84c] hover:text-black self-start w-full sm:w-auto"
                >
                  View Publication ↗
                </a>
              </div>

              {/* Publication 2 */}
              <div className="res-reveal flex flex-col p-6 md:p-10 lg:p-12 bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/5 transition-all duration-300 hover:border-[#c9a84c]/40 relative">
                <div className="absolute top-0 left-0 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-br-lg px-3 py-1 text-xs uppercase tracking-widest text-[#c9a84c]/80 rounded-tl-xl">
                  Presented
                </div>
                <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: S.gold, fontWeight: 600 }}>International Conference</span>
                </div>
                <h3 style={{ fontFamily: S.serif, fontSize: '1.6rem', color: S.text, lineHeight: 1.35, marginBottom: '1.5rem', fontWeight: 400 }}>
                  Certificate of Presentation & Publication
                </h3>
                <p className="text-white/60 text-[0.95rem] leading-relaxed font-light mb-8 flex-1">
                  Presented and published at an International Conference on Artificial Intelligence for Innovation, Sustainability and Global Development. Recognised for academic contribution in applied AI research.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mb-8">
                   <div className="col-span-2">
                     <p style={{ fontFamily: S.serif, fontSize: '1.1rem', color: S.text, lineHeight: 1.5, fontStyle: 'italic', fontWeight: 400, opacity: 0.8 }}>
                        "Strengthened analytical thinking, structured problem solving, and research-oriented communication."
                     </p>
                   </div>
                </div>
                <a href="/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf"
                  target="_blank" rel="noopener noreferrer"
                  className="rounded-full border border-[#c9a84c] text-[#c9a84c] px-6 py-3 text-xs tracking-widest uppercase text-center transition-colors hover:bg-[#c9a84c] hover:text-black self-start w-full sm:w-auto mt-auto"
                >
                  Open PDF ↗
                </a>
              </div>

            </div>
        </div>
      </div>
    </section>
  );
}
