import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { S, PADDING } from '../App';

const CATEGORIES = [
  {
    id: 'highlights', label: 'Highlights',
    items: [
      { src: '/assets/images/achievements/Photo of me presenting Project in front of whole IT department students.jpg', title: 'Project Presentation', caption: 'Communicating technical architecture to the IT department.', size: 'large' },
      { src: '/assets/images/achievements/Felicitation By HOD.jpg', title: 'HOD Felicitation', caption: 'Recognised on Farewell Day for institutional contribution.', position: 'top center' },
      { src: '/assets/images/achievements/award receiving candid photo at nivesh mantrana 2k24.jpg', title: 'Award Moment — Nivesh Mantrana', caption: 'Recognition for strategic social media promotion.' },
      { src: '/assets/images/achievements/Social Media Head at Fusion 2k26.jpg', title: 'Campaign Director — Fusion 2026', caption: 'Leading audience engagement and event communication.', size: 'large' },
    ]
  },
  {
    id: 'leadership', label: 'Leadership',
    items: [
      { src: '/assets/images/achievements/Social Media Head Techfest 2k25.jpg', title: 'Social Media Lead — Techfest 2025', caption: 'Multi-platform campaign coordination and execution.', size: 'large' },
      { src: '/assets/images/achievements/ITSA.jpg', title: 'ITSA — Student Association', caption: 'Active institutional leadership contribution.' },
      { src: '/assets/images/achievements/Social Media Head Fusion 2k26.jpg', title: 'Fusion 2026 — Brand Direction', caption: 'Cohesive digital identity across event platforms.' },
      { src: '/assets/images/achievements/Social Media Head at Fusion 2k26.jpg', title: 'Campaign Director — Fusion 2026', caption: 'Leading audience engagement and event communication.', size: 'large' },
    ]
  },
  {
    id: 'recognition', label: 'Recognition',
    items: [
      { src: '/assets/images/achievements/Felicitated at Nivesh Mantrana event in indore for Social Media Promotion.jpg', title: 'Nivesh Mantrana Recognition', caption: 'Felicitated for social media promotion strategy.', size: 'large' },
      { src: '/assets/images/achievements/Most Enthusiastic Personality Felicitation.JPG', title: 'Most Enthusiastic Personality', caption: 'Acknowledged for energy and visible campus contribution.', position: 'top center' },
      { src: '/assets/images/achievements/Felicitation By HOD.jpg', title: 'HOD Felicitation', caption: 'Recognised on Farewell Day for institutional contribution.', position: 'top center' },
      { src: '/assets/images/achievements/Felicitation at Nivesh Mantrana 2k24 for Event Volunteering.jpg', title: 'Event Volunteering Recognition', caption: 'Execution and operations at Nivesh Mantrana.', size: 'large', position: 'top center' },
    ]
  },
  {
    id: 'events', label: 'Events',
    items: [
      { src: '/assets/images/achievements/Nivesh mantrana event attending photo.jpg', title: 'Nivesh Mantrana', caption: 'National finance event networking and participation.', size: 'large', position: 'top center' },
      { src: '/assets/images/achievements/Techfest 2k25 Candid.jpg', title: 'Techfest 2025', caption: 'Coordination and execution at scale.', position: 'top center' },
      { src: '/assets/images/achievements/Participation in Smart India Hackathon.jpg', title: 'Smart India Hackathon', caption: 'National-level execution under time pressure.', size: 'large' },
    ]
  },
  {
    id: 'professional', label: 'Professional',
    items: [
      { src: '/assets/images/achievements/Photo of me presenting Project in front of whole IT department students.jpg', title: 'Project Presentation', caption: 'Communicating technical architecture to the IT department.', size: 'large' },
      { src: '/assets/images/achievements/NSS Camp Best Kitchen award.jpg', title: 'NSS Camp — Best Kitchen', caption: 'Team discipline and operational coordination.', position: 'top center' },
      { src: '/assets/images/achievements/Photo with college principal on matching outfits in college cultural fest.jpg', title: 'Institutional Engagement', caption: 'Building meaningful relationships at the highest level.', position: 'top center' },
      { src: '/assets/images/achievements/Fusion 2k25 Cricket tournament winner.jpg', title: 'Cricket Tournament Winner', caption: 'Competitive discipline and composure under pressure.', size: 'large' },
    ]
  },
];

function ImageCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);
  const isLarge = item.size === 'large';

  return (
    <div
      className={`gcard col-span-1 md:${isLarge ? 'col-span-2' : 'col-span-1'} w-full h-[320px] sm:h-[400px]`}
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '1rem',
        overflow: 'hidden',
        cursor: 'pointer',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.4)' : S.border}`,
        background: S.bg,
        transition: 'border-color 0.3s ease',
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
          transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1), filter 0.4s',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
          filter: hovered ? 'brightness(1.05)' : 'brightness(0.85)',
        }}
        onError={e => { e.target.style.display = 'none'; }}
      />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(6,6,6,0.94) 0%, rgba(6,6,6,0.15) 55%, transparent 100%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s ease',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '1.75rem',
      }}>
        <div style={{ transform: hovered ? 'translateY(0)' : 'translateY(10px)', transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}>
          <h4 style={{ color: S.text, fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 600, marginBottom: '0.4rem', lineHeight: 1.3 }}>{item.title}</h4>
          <p style={{ color: S.gold, fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', lineHeight: 1.5, fontWeight: 500 }}>{item.caption}</p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeId, setActiveId] = useState('highlights');
  const [lightbox, setLightbox] = useState(null);
  const gridRef = useRef(null);

  const active = CATEGORIES.find(c => c.id === activeId);

  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll('.gcard');
      gsap.fromTo(cards,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.08 }
      );
    });
    mm.add("(max-width: 767px)", () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll('.gcard');
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
    <section id="gallery" className={`${PADDING}`} style={{ borderTop: `1px solid ${S.border}`, background: S.surface }}>
      <div className="w-full max-w-[1440px] mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div>
            <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, marginBottom: '1.25rem', fontWeight: 600 }}>Visual Archive</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: S.text, lineHeight: 1.15, fontWeight: 400 }}>
              Documented Journey.
            </h2>
          </div>
          <p style={{ color: S.muted, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', maxWidth: '280px', lineHeight: 1.6, fontWeight: 300, textAlign: 'left' }}>
            A curated visual record of leadership, execution, and professional growth.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setActiveId(cat.id)}
              className="px-5 py-3 border border-transparent rounded-full transition-all duration-300"
              style={{
                fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', cursor: 'pointer',
                fontFamily: S.sans,
                background: activeId === cat.id ? S.gold : 'transparent',
                color: activeId === cat.id ? '#060606' : S.muted,
                border: activeId === cat.id ? `1px solid ${S.gold}` : `1px solid ${S.border}`,
              }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Box Grid - Responsive */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
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
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem md:padding-2rem',
        }}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={() => setLightbox(null)} style={{
              background: 'none', border: `1px solid ${S.border}`, color: S.muted, cursor: 'pointer',
              fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.6rem 1.4rem', borderRadius: '3rem', transition: 'all 0.2s',
              fontFamily: S.sans, alignSelf: 'flex-end',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = S.text; e.currentTarget.style.borderColor = S.gold; }}
              onMouseLeave={e => { e.currentTarget.style.color = S.muted; e.currentTarget.style.borderColor = S.border; }}
            >
              ✕ Close
            </button>
            <img
              src={lightbox.src} alt={lightbox.title}
              style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain', borderRadius: '0.5rem', display: 'block', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
            />
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <h3 style={{ color: S.text, fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 600, marginBottom: '0.5rem' }}>{lightbox.title}</h3>
              <p style={{ color: S.gold, fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)' }}>{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
