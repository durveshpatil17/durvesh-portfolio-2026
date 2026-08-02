import React from 'react';
import { S } from '../theme';

const WORK_ITEMS = [
  {
    num: '01',
    tag: 'MF Distribution',
    title: 'Mutual Fund Distribution & Advisory',
    subtitle: 'Family Business · AMFI Registered',
    problem: 'Retail investors in the family network lacked structured guidance for SIP and mutual fund allocation.',
    approach: 'Contributed to family AMFI-registered MF distribution business on the technology and operations side — client onboarding, KYC coordination, MF suitability assessments, portfolio tracking, and basic performance reporting. Currently designing an AI-based SIP allocation and onboarding platform to digitise and automate key workflows.',
    impact: '36+ clients onboarded contributing ₹13L+ AUM through SIP and lumpsum investments. Practical exposure to financial services operations, client relationship management, and the challenge of digitising traditional advisory workflows.',
    photo: '/assets/images/achievements/Nivesh mantrana event attending photo.jpg',
    photoCaption: 'Nivesh Mantrana 2024 — National MF industry summit, Indore',
  },
  {
    num: '02',
    tag: 'Digital Strategy & Execution',
    title: 'Social Media Head — 4 Major College Events',
    subtitle: 'KBT College Nashik · Techfest 2024 & 2025 · Fusion 2025 & 2026',
    problem: 'College events needed consistent digital branding, reel strategy, and audience engagement across 3 years.',
    approach: 'Designed and executed digital strategy for four consecutive major college events — campaign architecture, content planning, audience targeting, team coordination, and cross-functional execution. Built the operational system from zero in 2024 and refined it through three iterations over three years.',
    impact: 'Organic reach scaled each year. Recognised with the Special Achievers Award — Most Outstanding Content Creator — by Dr. Satish R. Devane, Director, KBT College of Engineering, 25 April 2026. Demonstrated that digital strategy and execution, done with structure and consistency, creates compounding results.',
    photo: '/assets/images/achievements/Social Media Head Techfest 2k24.jpg',
    photoCaption: 'Social Media Head — Techfest 2024',
  },
  {
    num: '03',
    tag: 'Public Speaking',
    title: 'Live Industry Project — Presented to IT Department',
    subtitle: 'Live Industry Project · Dematade Algo Technology Solutions · Final Year B.E. IT',
    problem: 'Students needed exposure to how live industry projects are secured and what real-world engineering engagement looks like beyond academics.',
    approach: 'Architected an NLP-to-strategy translation pipeline for Indian financial markets — framed not just as a technical build but as an exploration of AI-assisted decision support, financial system workflows, and business-usable output. Presented to the entire IT department at KBT College, sharing how the project was secured, the approach taken, and its industry relevance.',
    impact: 'Pre-Placement Offer received from Dematade Algo Technology Solutions. Project demonstrated how AI capability can be translated into business-relevant, adoption-ready output — not just a technical proof of concept.',
    photo: '/assets/images/achievements/Photo of me presenting Project in front of whole IT department students.jpg',
    photoCaption: 'Presenting the Dematade Algo Technology Solutions project to IT department students',
    doc: '/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf',
    docLabel: 'Conference Certificate ↗',
  },
  {
    num: '04',
    tag: 'Digital Promotion',
    title: 'Nivesh Mantrana 2024 — Digital Promotion',
    subtitle: "Central India's First National MF Knowledge Summit · Indore",
    problem: "Nivesh Mantrana — Central India's first national knowledge summit for mutual fund distributors — needed digital promotion to drive awareness and registrations.",
    approach: 'Managed digital promotion and social media outreach for Nivesh Mantrana — Central India\'s first national knowledge summit for mutual fund distributors. Handled content strategy, audience targeting, and engagement campaigns across platforms to drive event awareness and registrations.',
    impact: 'Event hosted 800 MFDs from 45 cities across 6 states. Keynote by Madhya Pradesh CM Mohan Yadav. Felicitated at the event for digital promotion contribution.',
    photo: '/assets/images/achievements/Felicitated at Nivesh Mantrana event in indore for Social Media Promotion.jpg',
    photoCaption: 'Felicitated at Nivesh Mantrana 2024, Indore',
  },
];

const RECOGNITION_PHOTOS = [
  { img: '/assets/images/achievements/Techfest 2k25 Candid.jpg',              label: 'Techfest 2025 — on stage' },
  { img: '/assets/images/achievements/Social Media Head Techfest 2k25.jpg',   label: 'Social Media Head — Techfest 2025' },
  { img: '/assets/images/achievements/Social Media Head at Fusion 2k26.jpg',  label: 'Social Media Head — Fusion 2026' },
  { img: '/assets/images/achievements/NSS Camp Best Kitchen award.jpg',        label: 'NSS Camp — Best Kitchen Award' },
  { img: '/assets/images/achievements/Participation in Smart India Hackathon.jpg', label: 'Smart India Hackathon' },
  { img: '/assets/images/achievements/Felicitation By HOD.jpg',               label: 'Felicitation by HOD' },
];

const BG_ALT = ['#FAFAF8', '#111118', '#FAFAF8', '#111118'];
const TEXT_ALT = ['#111111', '#FFFFFF', '#111111', '#FFFFFF'];
const MUTED_ALT = ['#555', 'rgba(255,255,255,0.5)', '#555', 'rgba(255,255,255,0.5)'];
const BORDER_ALT = ['#E5E4E0', 'rgba(255,255,255,0.08)', '#E5E4E0', 'rgba(255,255,255,0.08)'];

export default function WorkPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FAFAF8', paddingTop: '60px' }}>

      {/* ── Page header ── */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8', borderBottom: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label">Work</span>
          <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.4rem,6vw,5rem)', color: '#111111', fontWeight: 400, lineHeight: 1.05, maxWidth: '680px' }}>
            Real problems.<br /><span style={{ fontStyle: 'italic' }}>Business relevance.</span>
          </h1>
          <p style={{ color: '#666666', fontSize: '15px', lineHeight: 1.7, fontWeight: 300, maxWidth: '600px', marginTop: '1.25rem' }}>
            I use projects to explore how technology can solve real business problems — whether through product thinking, automation, AI-assisted systems, or the design of more usable and scalable digital solutions. My interest is not only in what gets built, but in how it gets adopted, governed, and made useful in real-world environments.
          </p>
        </div>
      </section>

      {/* ── Work items ── */}
      {WORK_ITEMS.map((item, i) => (
        <section key={item.num} style={{
          background: BG_ALT[i],
          padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,4rem)',
          borderBottom: `0.5px solid ${BORDER_ALT[i]}`,
        }}>
          <div style={{
            maxWidth: '1160px', margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2.5rem,5vw,5rem)',
            alignItems: 'center',
          }}>
            {/* Text — left on even, right on odd */}
            <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: S.serif, fontSize: '0.85rem', color: i % 2 === 1 ? 'rgba(255,255,255,0.3)' : '#CCC', fontStyle: 'italic' }}>{item.num}</span>
                <span className="tag-pill">{item.tag}</span>
              </div>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem,3vw,2.4rem)', color: TEXT_ALT[i], fontWeight: 400, lineHeight: 1.15, marginBottom: '0.35rem' }}>{item.title}</h2>
              <p style={{ fontSize: '11px', color: MUTED_ALT[i], letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem', fontWeight: 500 }}>{item.subtitle}</p>

              {[
                { label: 'Problem',  value: item.problem  },
                { label: 'Approach', value: item.approach },
                { label: 'Impact',   value: item.impact   },
              ].map(row => (
                <div key={row.label} style={{ borderTop: `0.5px solid ${BORDER_ALT[i]}`, paddingTop: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', color: S.accent, fontWeight: 600, marginBottom: '0.4rem' }}>{row.label}</p>
                  <p style={{ color: MUTED_ALT[i], fontSize: 'clamp(0.88rem,1.4vw,0.97rem)', lineHeight: 1.75, fontWeight: 300 }}>{row.value}</p>
                </div>
              ))}

              {item.doc && (
                <a href={item.doc} target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.75rem', color: MUTED_ALT[i], fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = S.accent}
                  onMouseLeave={e => e.currentTarget.style.color = MUTED_ALT[i]}>
                  ↗ {item.docLabel}
                </a>
              )}
            </div>

            {/* Photo */}
            <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '0.5px solid #E5E4E0', position: 'relative', boxShadow: '0 4px 32px rgba(0,0,0,0.07)' }}>
                <img src={item.photo} alt={item.photoCaption} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)', padding: '1.5rem 1.25rem 1rem' }}>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4, fontWeight: 300 }}>{item.photoCaption}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Research Publications ── */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8', borderBottom: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label">Research</span>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.7rem,4vw,3rem)', color: '#111111', fontWeight: 400, marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>Published work.</h2>

          {[
            {
              num: '01',
              title: 'AI for Innovation, Sustainability & Global Development',
              venue: 'International Conference on Artificial Intelligence for Innovation, Sustainability and Global Development',
              type: 'Conference Paper · Presented & Published',
              desc: 'Research paper presented at an international conference. Covered the intersection of AI applications with sustainability and global development challenges.',
              cert: '/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf',
              certImg: '/assets/images/certificates/Internation Journal of science paper publication certificate.jpeg',
            },
            {
              num: '02',
              title: 'Research Publication — International Journal of Science',
              venue: 'International Journal of Science',
              type: 'Journal Publication',
              desc: 'Published research in an international science journal. Part of ongoing academic and technical writing alongside engineering and MBA work.',
              cert: '/assets/documents/Durvesh Patil_Participation_Certificate.pdf',
              certImg: '/assets/images/certificates/second-research-certificate.jpg',
            },
          ].map(paper => (
            <div key={paper.num} style={{ borderTop: '0.5px solid #E5E4E0', padding: 'clamp(1.5rem,2.5vw,2.5rem) 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 'clamp(2rem,4vw,4rem)', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: S.serif, fontSize: '0.85rem', color: '#CCC', fontStyle: 'italic' }}>{paper.num}</span>
                  <span className="tag-pill">{paper.type}</span>
                </div>
                <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.2rem,2vw,1.75rem)', color: '#111111', fontWeight: 400, lineHeight: 1.2, marginBottom: '0.5rem' }}>{paper.title}</h3>
                <p style={{ fontSize: '0.78rem', color: '#999', fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.5 }}>{paper.venue}</p>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.25rem' }}>{paper.desc}</p>
                <a href={paper.cert} target="_blank" rel="noreferrer"
                  style={{ color: '#999', fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = S.accent}
                  onMouseLeave={e => e.currentTarget.style.color = '#999'}>
                  View Certificate ↗
                </a>
              </div>
              <div style={{ borderRadius: '14px', overflow: 'hidden', border: '0.5px solid #E5E4E0' }}>
                <img src={paper.certImg} alt={paper.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Recognition photos ── */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,4rem)', background: '#111118' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label" style={{ color: 'rgba(255,255,255,0.38)' }}>Recognition</span>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.7rem,4vw,3rem)', color: '#FFFFFF', fontWeight: 400, marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>Moments from the work.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(0.75rem,1.5vw,1.25rem)' }}>
            {RECOGNITION_PHOTOS.map(r => (
              <div key={r.label} className="l-card" style={{ overflow: 'hidden', position: 'relative' }}>
                <img src={r.img} alt={r.label} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)', padding: '1.5rem 1rem 1rem' }}>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, fontWeight: 300 }}>{r.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
