import React from 'react';
import { S } from '../theme';

const WORK_ITEMS = [
  {
    num: '01',
    tag: 'AI Engineering',
    title: 'Algorithmic Strategy Builder',
    subtitle: 'Live Industry Project',
    problem: 'Indian financial markets lacked NLP-driven strategy tools accessible to retail investors.',
    approach: 'Architected an NLP-to-strategy translation pipeline — data ingestion, NLP analysis, signal output — as a live industry engagement.',
    impact: 'End-to-end production system. Business impact over academic theory.',
    photo: '/assets/images/achievements/Participation in Smart India Hackathon.jpg',
    photoCaption: 'Smart India Hackathon — ideation phase',
    doc: '/assets/documents/TradeArth_Project letter.pdf',
    docLabel: 'Project Letter',
  },
  {
    num: '02',
    tag: 'MF Distribution',
    title: 'Mutual Fund Distribution & Advisory',
    subtitle: 'AMFI Registered Business',
    problem: 'Retail investors lacked accessible, structured guidance for SIP and mutual fund allocation.',
    approach: 'Built an AMFI-registered MFD business — client acquisition, KYC coordination, SIP structuring, and portfolio guidance.',
    impact: '36+ clients onboarded. ₹13L+ AUM under management.',
    photo: '/assets/images/achievements/Nivesh mantrana event attending photo.jpg',
    photoCaption: 'Nivesh Mantrana 2024 — industry event',
  },
  {
    num: '03',
    tag: 'Engineering',
    title: 'Real-Time Communication Platform',
    subtitle: 'WebRTC Architecture',
    problem: 'Concurrent users required scalable, low-latency video and messaging infrastructure.',
    approach: 'Designed and implemented a WebRTC-based platform with real-time messaging and concurrent session architecture.',
    impact: 'Production-grade performance under concurrent user load.',
    photo: '/assets/images/achievements/Photo of me presenting Project in front of whole IT department students.jpg',
    photoCaption: 'Presenting to the IT department',
    doc: '/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf',
    docLabel: 'Conference Certificate',
  },
  {
    num: '04',
    tag: 'Content Strategy',
    title: 'Social Media Head — 4 Major Events',
    subtitle: 'Techfest 2k24, Fusion 2k25, Techfest 2k25, Fusion 2k26',
    problem: 'College events needed consistent digital branding and audience engagement across 3 years.',
    approach: 'Led content strategy, reel scripting, and campaign execution for four consecutive major events at Symbiosis International University.',
    impact: 'Fusion 2025 reel crossed 1M views organically. 4M+ total reach. Outstanding Content Creator Award.',
    photo: '/assets/images/achievements/Felicitated at Nivesh Mantrana event in indore for Social Media Promotion.jpg',
    photoCaption: 'Felicitated at Nivesh Mantrana, Indore',
  },
];

const CREDENTIALS = [
  {
    img: '/assets/images/certificates/Techfest 2k25 Social Media head Participation certificate.jpeg',
    label: 'Techfest 2025 — Social Media Head',
  },
  {
    img: '/assets/images/certificates/Internation Journal of science paper publication certificate.jpeg',
    label: 'International Journal Publication',
  },
  {
    img: '/assets/images/certificates/second-research-certificate.jpg',
    label: 'Research Certificate',
  },
  {
    img: '/assets/images/certificates/Cricket tournament winner certificate.jpeg',
    label: 'Cricket Tournament Winners',
  },
];

const RECOGNITION_PHOTOS = [
  {
    img: '/assets/images/achievements/Most Enthusiastic Personality Felicitation.JPG',
    label: 'Most Enthusiastic Personality',
  },
  {
    img: '/assets/images/achievements/Felicitation at Nivesh Mantrana 2k24 for Event Volunteering.jpg',
    label: 'Nivesh Mantrana 2024 — Event Volunteering',
  },
  {
    img: '/assets/images/achievements/award receiving candid photo at nivesh mantrana 2k24.jpg',
    label: 'Award — Nivesh Mantrana 2024',
  },
];

export default function WorkPage() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '6rem' }}>

      {/* Header */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,5rem) clamp(3rem,5vw,4rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 600, marginBottom: '1rem' }}>Work</p>
          <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.8rem,7vw,6rem)', color: S.text, fontWeight: 400, lineHeight: 1.05, maxWidth: '700px' }}>
            Real systems.<br /><span style={{ fontStyle: 'italic' }}>Measurable outcomes.</span>
          </h1>
        </div>
      </section>

      {/* Work items */}
      {WORK_ITEMS.map((item, i) => (
        <section key={item.num} style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: i % 2 === 1 ? '#0c0c0c' : '#060606',
          padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,5rem)',
        }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(2.5rem,5vw,5rem)', alignItems: 'center' }}>

            {/* Text — left on even, right on odd */}
            <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: S.serif, fontSize: '0.9rem', color: S.muted, opacity: 0.5 }}>{item.num}</span>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: S.gold, border: '1px solid rgba(201,168,76,0.25)', padding: '0.25rem 0.75rem', borderRadius: '3rem' }}>{item.tag}</span>
              </div>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.6rem,3vw,2.5rem)', color: S.text, fontWeight: 400, lineHeight: 1.15, marginBottom: '0.4rem' }}>{item.title}</h2>
              <p style={{ fontSize: '0.75rem', color: S.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2rem', fontWeight: 500 }}>{item.subtitle}</p>

              {[
                { label: 'Problem', value: item.problem },
                { label: 'Approach', value: item.approach },
                { label: 'Impact', value: item.impact },
              ].map(row => (
                <div key={row.label} style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: S.gold, fontWeight: 600, marginBottom: '0.4rem' }}>{row.label}</p>
                  <p style={{ color: S.muted, fontSize: 'clamp(0.9rem,1.5vw,1rem)', lineHeight: 1.7, fontWeight: 300 }}>{row.value}</p>
                </div>
              ))}

              {item.doc && (
                <a href={item.doc} target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: S.muted, fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = S.gold}
                  onMouseLeave={e => e.currentTarget.style.color = S.muted}>
                  ↗ {item.docLabel}
                </a>
              )}
            </div>

            {/* Photo — alternating side */}
            <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
              <div style={{ borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
                <img
                  src={item.photo}
                  alt={item.photoCaption}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.75), transparent)', padding: '1.5rem 1.25rem 1rem' }}>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(237,235,230,0.6)', lineHeight: 1.4, fontWeight: 300 }}>{item.photoCaption}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Certificates grid */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,5rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 600, marginBottom: '1rem' }}>Certificates</p>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem,4vw,3rem)', color: S.text, fontWeight: 400, marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>Credentials.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(0.75rem,1.5vw,1.25rem)' }}>
            {CREDENTIALS.map(cert => (
              <div key={cert.label} style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: '#141414' }}>
                <img src={cert.img} alt={cert.label} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                <p style={{ padding: '0.875rem 1rem', fontSize: '0.75rem', color: S.muted, fontWeight: 300, lineHeight: 1.5 }}>{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition photos */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0c0c0c', padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,5rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.gold, fontWeight: 600, marginBottom: '1rem' }}>Recognition</p>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem,4vw,3rem)', color: S.text, fontWeight: 400, marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>Beyond the work.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(0.75rem,1.5vw,1.25rem)' }}>
            {RECOGNITION_PHOTOS.map(r => (
              <div key={r.label} style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
                <img src={r.img} alt={r.label} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.8), transparent)', padding: '1.5rem 1rem 1rem' }}>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(237,235,230,0.65)', lineHeight: 1.4, fontWeight: 300 }}>{r.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
