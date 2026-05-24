import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const S = {
  bg: '#060606', surface: '#0e0e0e', border: 'rgba(255,255,255,0.06)',
  gold: '#c9a84c', text: '#edebe6', muted: '#7a7875',
  serif: 'Instrument Serif, Georgia, serif', sans: 'Inter, system-ui, sans-serif',
};

// Carefully assigning 'size: large' (span 2 / Landscape 16:9) and 'normal' (span 1 / Portrait 4:5)
// so the layout perfectly matches the actual orientation of the photos, preventing cutoff.
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
      className="gcard"
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
        gridColumn: isLarge ? 'span 2' : 'span 1',
        height: '400px', // Taller height allows Portrait photos in span 1 to fit perfectly without cropping!
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
          objectPosition: item.position || 'center', // Prevents heads from being cut off
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
          <h4 style={{ color: S.text, fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem', lineHeight: 1.3 }}>{item.title}</h4>
          <p style={{ color: S.gold, fontSize: '0.8rem', lineHeight: 1.5, fontWeight: 500 }}>{item.caption}</p>
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
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.gcard');
    gsap.fromTo(cards,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.08 }
    );
  }, [activeId]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="gallery" style={{ padding: '7rem 3rem', borderTop: `1px solid ${S.border}`, background: S.surface }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: S.gold, marginBottom: '0.9rem', fontWeight: 600 }}>Visual Archive</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(2rem, 4vw, 3rem)', color: S.text, lineHeight: 1.1, fontWeight: 400 }}>
              Documented Journey.
            </h2>
          </div>
          <p style={{ color: S.muted, fontSize: '0.88rem', maxWidth: '280px', lineHeight: 1.65, fontWeight: 300, textAlign: 'right' }}>
            A curated visual record of leadership, execution, and professional growth.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setActiveId(cat.id)}
              style={{
                padding: '0.55rem 1.4rem', borderRadius: '3rem',
                fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', cursor: 'pointer',
                fontFamily: S.sans, transition: 'all 0.25s ease',
                background: activeId === cat.id ? S.gold : 'transparent',
                color: activeId === cat.id ? '#060606' : S.muted,
                border: activeId === cat.id ? `1px solid ${S.gold}` : `1px solid ${S.border}`,
              }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Box Grid - 3 Columns */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
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
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem',
        }}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={() => setLightbox(null)} style={{
              background: 'none', border: `1px solid ${S.border}`, color: S.muted, cursor: 'pointer',
              fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.5rem 1.25rem', borderRadius: '3rem', transition: 'all 0.2s',
              fontFamily: S.sans, alignSelf: 'flex-end',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = S.text; e.currentTarget.style.borderColor = S.gold; }}
              onMouseLeave={e => { e.currentTarget.style.color = S.muted; e.currentTarget.style.borderColor = S.border; }}
            >
              ✕ Close
            </button>
            <img
              src={lightbox.src} alt={lightbox.title}
              style={{ width: '100%', height: 'auto', maxHeight: '72vh', objectFit: 'contain', borderRadius: '0.5rem', display: 'block', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
            />
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <h3 style={{ color: S.text, fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{lightbox.title}</h3>
              <p style={{ color: S.gold, fontSize: '0.85rem' }}>{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
