import React from 'react';
import { S } from '../theme';

const WORK_ITEMS = [
  {
    num: '01',
    tag: 'Public Speaking',
    title: 'Live Industry Project — Presented to IT Department',
    subtitle: 'KBT College of Engineering, Nashik',
    problem: 'Students needed exposure to how live industry projects are secured and what real-world engineering engagement looks like beyond academics.',
    approach: 'Presented the Dematade Algo Technology Solutions Algorithmic Strategy Builder project to the entire IT department student body. Shared the process of securing a live industry project, the challenges faced, technical decisions made, and the impact it had on our team.',
    impact: 'Inspired peers to pursue industry projects. Demonstrated how engineering work translates to real business impact. Received PPO from Dematade Algo Technology Solutions following the engagement.',
    photo: '/assets/images/achievements/Photo of me presenting Project in front of whole IT department students.jpg',
    photoCaption: 'Presenting the Dematade Algo Technology Solutions project to IT department students',
    doc: '/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf',
    docLabel: 'Conference Certificate ↗',
  },
  {
    num: '02',
    tag: 'MF Distribution',
    title: 'Mutual Fund Distribution & Advisory',
    subtitle: 'Family Business · AMFI Registered',
    problem: 'Retail investors in the family network lacked structured guidance for SIP and mutual fund allocation.',
    approach: 'Contributed to the family MF distribution business — onboarded clients, managed KYC and MF suitability assessments, assisted in portfolio tracking and basic performance reporting. Currently building an AI-based SIP allocation and onboarding mini-platform to automate key workflows.',
    impact: 'Onboarded 36+ clients contributing ₹13L+ AUM through SIP and lumpsum investments.',
    photo: '/assets/images/achievements/Nivesh mantrana event attending photo.jpg',
    photoCaption: 'Nivesh Mantrana 2024 — National MF industry summit, Indore',
  },
  {
    num: '03',
    tag: 'Content Strategy',
    title: 'Social Media Head — 4 Major College Events',
    subtitle: 'KBT College Nashik · Techfest 2k24, 2k25 · Fusion 2k25, 2k26',
    problem: 'College events needed consistent digital branding, reel strategy, and audience engagement across 3 years.',
    approach: 'Led content strategy, reel scripting, campaign execution, and team coordination for four consecutive major events. Built the digital promotion system from scratch in 2024 and scaled it each year.',
    impact: 'Fusion 2025 reel crossed 1M views organically. 4M+ total reach. Outstanding Content Creator Award. Felicitated by Sarchitnis Adv. Nitin Baburao Thakare, Maratha Vidya Prasak Samaj.',
    photo: '/assets/images/achievements/Social Media Head Techfest 2k24.jpg',
    photoCaption: 'Social Media Head — Techfest 2024',
  },
  {
    num: '04',
    tag: 'Digital Promotion',
    title: 'Nivesh Mantrana 2024 — Digital Promotion',
    subtitle: "Central India's First National MF Knowledge Summit · Indore",
    problem: "Nivesh Mantrana — Central India's first national knowledge summit for mutual fund distributors — needed digital promotion to drive awareness and registrations.",
    approach: 'Managed social media promotion and digital outreach for the event. Handled content, reach strategy, and audience engagement across platforms.',
    impact: "Event hosted 800 MFDs from 45 cities across 6 states. Keynote by Madhya Pradesh CM Mohan Yadav. Felicitated at the event for digital promotion contribution.",
    photo: '/assets/images/achievements/Felicitated at Nivesh Mantrana event in indore for Social Media Promotion.jpg',
    photoCaption: 'Felicitated at Nivesh Mantrana 2024, Indore',
  }
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
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <p className="sec-label" style={{ marginBottom: '1rem' }}>Work</p>
          <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.8rem,7vw,6rem)', color: S.text, fontWeight: 400, lineHeight: 1.05, maxWidth: '700px' }}>
            Real systems.<br /><span style={{ fontStyle: 'italic' }}>Measurable outcomes.</span>
          </h1>
        </div>
      </section>

      {/* Work items */}
      {WORK_ITEMS.map((item, i) => (
        <section key={item.num} style={{
          borderTop: '1px solid S.border',
          background: i % 2 === 1 ? '#13131A' : '#0A0A0F',
          padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)',
        }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(2.5rem,5vw,5rem)', alignItems: 'center' }}>

            {/* Text — left on even, right on odd */}
            <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: S.serif, fontSize: '0.9rem', color: S.muted, opacity: 0.5 }}>{item.num}</span>
                <span className="tag-pill">{item.tag}</span>
              </div>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.6rem,3vw,2.5rem)', color: S.text, fontWeight: 400, lineHeight: 1.15, marginBottom: '0.4rem' }}>{item.title}</h2>
              <p style={{ fontSize: '0.75rem', color: S.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2rem', fontWeight: 500 }}>{item.subtitle}</p>

              {[
                { label: 'Problem', value: item.problem },
                { label: 'Approach', value: item.approach },
                { label: 'Impact', value: item.impact },
              ].map(row => (
                <div key={row.label} style={{ borderTop: '1px solid S.border', paddingTop: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: S.accent, fontWeight: 600, marginBottom: '0.4rem' }}>{row.label}</p>
                  <p style={{ color: S.muted, fontSize: 'clamp(0.9rem,1.5vw,1rem)', lineHeight: 1.7, fontWeight: 300 }}>{row.value}</p>
                </div>
              ))}

              {item.doc && (
                <a href={item.doc} target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: S.muted, fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = S.accent}
                  onMouseLeave={e => e.currentTarget.style.color = S.muted}>
                  ↗ {item.docLabel}
                </a>
              )}
            </div>

            {/* Photo — alternating side */}
            <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
              <div style={{ borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid S.border', position: 'relative' }}>
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
      <section style={{ borderTop: '1px solid S.border', padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <p className="sec-label" style={{ marginBottom: '1rem' }}>Certificates</p>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem,4vw,3rem)', color: S.text, fontWeight: 400, marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>Credentials.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(0.75rem,1.5vw,1.25rem)' }}>
            {CREDENTIALS.map(cert => (
              <div key={cert.label} className="l-card" style={{ overflow: 'hidden', background: '#1C1C26' }}>
                <img src={cert.img} alt={cert.label} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                <p style={{ padding: '0.875rem 1rem', fontSize: '0.75rem', color: S.muted, fontWeight: 300, lineHeight: 1.5 }}>{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section style={{ borderTop: '1px solid S.border', background: '#13131A', padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <p className="sec-label" style={{ marginBottom: '1rem' }}>Research</p>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem,4vw,3rem)', color: S.text, fontWeight: 400, marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>Published work.</h2>

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
            <div key={paper.num} style={{ borderTop: '1px solid S.border', padding: 'clamp(1.5rem,2.5vw,2.5rem) 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 'clamp(2rem,4vw,4rem)', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: S.serif, fontSize: '0.9rem', color: S.muted, opacity: 0.5 }}>{paper.num}</span>
                  <span className="tag-pill">{paper.type}</span>
                </div>
                <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.2rem,2vw,1.8rem)', color: S.text, fontWeight: 400, lineHeight: 1.2, marginBottom: '0.5rem' }}>{paper.title}</h3>
                <p style={{ fontSize: '0.78rem', color: S.muted, fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.5 }}>{paper.venue}</p>
                <p style={{ color: S.muted, fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.25rem' }}>{paper.desc}</p>
                <a href={paper.cert} target="_blank" rel="noreferrer"
                  style={{ color: S.muted, fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = S.accent}
                  onMouseLeave={e => e.currentTarget.style.color = S.muted}>
                  View Certificate ↗
                </a>
              </div>
              <div style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid S.border' }}>
                <img src={paper.certImg} alt={paper.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition photos */}
      <section style={{ borderTop: '1px solid S.border', background: '#13131A', padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <p className="sec-label" style={{ marginBottom: '1rem' }}>Recognition</p>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem,4vw,3rem)', color: S.text, fontWeight: 400, marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>Beyond the work.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(0.75rem,1.5vw,1.25rem)' }}>
            {RECOGNITION_PHOTOS.map(r => (
              <div key={r.label} className="l-card" style={{ overflow: 'hidden', position: 'relative' }}>
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
