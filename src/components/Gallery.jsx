import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { S, PADDING, CONTAINER } from '../App';

const CATEGORIES = [
  {
    id: 'highlights', label: 'Highlights',
    items: [
      { src: '/assets/images/achievements/Photo of me presenting Project in front of whole IT department students.jpg', title: 'Project Presentation', caption: 'Communicating technical architecture to the IT department.', cls: 'bento-large' },
      { src: '/assets/images/achievements/Felicitation By HOD.jpg', title: 'HOD Felicitation', caption: 'Recognised on Farewell Day for institutional contribution.', cls: 'bento-small', position: 'top center' },
      { src: '/assets/images/achievements/award receiving candid photo at nivesh mantrana 2k24.jpg', title: 'Award Moment — Nivesh Mantrana', caption: 'Recognition for strategic social media promotion.', cls: 'bento-small' },
      { src: '/assets/images/achievements/Social Media Head at Fusion 2k26.jpg', title: 'Campaign Director — Fusion 2026', caption: 'Leading audience engagement and event communication.', cls: 'bento-wide' },
      { src: '/assets/images/achievements/Nivesh mantrana event attending photo.jpg', title: 'Nivesh Mantrana', caption: 'National finance event networking and participation.', cls: 'bento-tall', position: 'top center' },
      { src: '/assets/images/achievements/Participation in Smart India Hackathon.jpg', title: 'Smart India Hackathon', caption: 'National-level execution under time pressure.', cls: 'bento-small' },
    ]
  },
  {
    id: 'leadership', label: 'Leadership',
    items: [
      { src: '/assets/images/achievements/Social Media Head Techfest 2k25.jpg', title: 'Social Media Lead — Techfest 2025', caption: 'Multi-platform campaign coordination.', cls: 'bento-large' },
      { src: '/assets/images/achievements/ITSA.jpg', title: 'ITSA — Student Association', caption: 'Active institutional leadership contribution.', cls: 'bento-small' },
      { src: '/assets/images/achievements/Social Media Head Fusion 2k26.jpg', title: 'Fusion 2026 — Brand Direction', caption: 'Cohesive digital identity across event platforms.', cls: 'bento-small' },
      { src: '/assets/images/achievements/Social Media Head at Fusion 2k26.jpg', title: 'Campaign Director — Fusion 2026', caption: 'Leading audience engagement.', cls: 'bento-wide' },
    ]
  },
  {
    id: 'recognition', label: 'Recognition',
    items: [
      { src: '/assets/images/achievements/Felicitated at Nivesh Mantrana event in indore for Social Media Promotion.jpg', title: 'Nivesh Mantrana Recognition', caption: 'Felicitated for social media promotion strategy.', cls: 'bento-large' },
      { src: '/assets/images/achievements/Most Enthusiastic Personality Felicitation.JPG', title: 'Most Enthusiastic Personality', caption: 'Acknowledged for energy and visible campus contribution.', cls: 'bento-small', position: 'top center' },
      { src: '/assets/images/achievements/Felicitation By HOD.jpg', title: 'HOD Felicitation', caption: 'Recognised on Farewell Day.', cls: 'bento-small', position: 'top center' },
      { src: '/assets/images/achievements/Felicitation at Nivesh Mantrana 2k24 for Event Volunteering.jpg', title: 'Event Volunteering Recognition', caption: 'Execution and operations at Nivesh Mantrana.', cls: 'bento-wide', position: 'top center' },
    ]
  },
];

function ImageCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`grid-reveal ${item.cls || 'bento-small'} h-[300px] md:h-auto md:min-h-[300px]`}
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: S.bg,
      }}
    >
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: item.position || 'center',
          display: 'block',
          transition: 'transform 0.5s ease',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
        }}
        onError={e => { e.target.style.display = 'none'; }}
      />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(6,6,6,0.95) 0%, rgba(6,6,6,0.2) 60%, transparent 100%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '1.5rem',
      }}>
        <div style={{ transform: hovered ? 'translateY(0)' : 'translateY(10px)', transition: 'transform 0.4s ease' }}>
          <h4 style={{ color: S.text, fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</h4>
          <p style={{ color: S.gold, fontSize: '0.8rem', fontWeight: 500 }}>{item.caption}</p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeId, setActiveId] = useState('highlights');
  const [lightbox, setLightbox] = useState(null);
  const gridRef = useRef(null);

  const active = CATEGORIES.find(c => c.id === activeId) || CATEGORIES[0];

  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll('.grid-reveal');
      gsap.fromTo(cards,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.05 }
      );
    });
    mm.add("(max-width: 767px)", () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll('.grid-reveal');
      gsap.fromTo(cards,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.05 }
      );
    });
    return () => mm.revert();
  }, [activeId]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="gallery" className={`${PADDING}`}>
      <div className={`${CONTAINER}`}>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-6 grid-reveal">
          <div>
            <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Visual Archive</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.15, fontWeight: 400 }}
                className="after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#c9a84c] after:mt-4 text-left">
              Documented Journey.
            </h2>
          </div>
          <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', maxWidth: '320px', lineHeight: 1.6, fontWeight: 300, textAlign: 'left' }}>
            A curated visual record of leadership, execution, and professional growth.
          </p>
        </div>

        <div className="flex gap-2 lg:gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide grid-reveal">
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setActiveId(cat.id)}
              className="px-5 py-2.5 rounded-full transition-all duration-300 shrink-0"
              style={{
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', cursor: 'pointer', fontFamily: S.sans,
                background: activeId === cat.id ? S.gold : 'transparent',
                color: activeId === cat.id ? '#060606' : S.muted,
                border: activeId === cat.id ? `1px solid ${S.gold}` : `1px solid rgba(255,255,255,0.1)`,
              }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* True Editorial Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 auto-rows-[300px]">
          {active.items.map((item, i) => (
            <ImageCard key={`${activeId}-${i}`} item={item} onClick={setLightbox} />
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(4,4,4,0.96)', backdropFilter: 'blur(24px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem',
        }}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '1000px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={() => setLightbox(null)} style={{
              background: 'none', border: `1px solid ${S.border}`, color: S.muted, cursor: 'pointer',
              fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.6rem 1.4rem', borderRadius: '3rem', transition: 'all 0.2s', alignSelf: 'flex-end',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = S.text; e.currentTarget.style.borderColor = S.gold; }}
              onMouseLeave={e => { e.currentTarget.style.color = S.muted; e.currentTarget.style.borderColor = S.border; }}
            >
              ✕ Close
            </button>
            <img
              src={lightbox.src} alt={lightbox.title}
              style={{ width: '100%', height: 'auto', maxHeight: '75vh', objectFit: 'contain', borderRadius: '8px', display: 'block' }}
            />
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <h3 style={{ color: S.text, fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.4rem' }}>{lightbox.title}</h3>
              <p style={{ color: S.gold, fontSize: '0.9rem' }}>{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
