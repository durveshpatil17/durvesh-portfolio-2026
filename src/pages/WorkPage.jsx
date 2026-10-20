import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { S } from '../theme';
import { usePageMeta } from '../utils/usePageMeta';

const PROFESSIONAL_WORK = [
  {
    num: '01',
    category: 'Financial Services · Strategy, Digital & Technology',
    title: 'i-Need Fin-Essential Services',
    subtitle: 'Family-Run Financial Services Practice',
    copy: [
      'i-Need Fin-Essential Services is our family-run financial services practice. My involvement spans strategy, digital development, technology initiatives, and business operations.',
      'The work brings together an understanding of financial-services processes and an interest in improving how the business operates through better digital experiences, practical systems, and technology-led initiatives.',
    ],
    contributions: [
      'Business and technology strategy.',
      'Digital presence and customer-facing experiences.',
      'Operational processes and technology initiatives.',
      'Exploration of digital opportunities within financial services.',
    ],
    photo: '/assets/images/achievements/Nivesh mantrana event attending photo.jpg',
    photoCaption: 'i-Need Fin-Essential Services — operations, strategy & industry engagement',
  },
  {
    num: '02',
    category: 'Financial Technology · Product & Engineering',
    title: 'Algorithmic Trading Technology Company',
    subtitle: 'Dematade Algo Technology Solutions',
    copy: [
      'Worked with an algorithmic trading technology company on software related to trading-strategy creation and system workflows.',
      'This experience provided exposure to the technical challenges involved in translating strategy requirements into software, working with backend components, and connecting product behavior with implementation.',
    ],
    contributions: [
      'Contributed to software related to trading-strategy creation and system workflows.',
      'Backend APIs developed with Python, Redis, and MySQL within an 8-member engineering team.',
      'Parameter validation and execution preview workflows to translate complex logic into reliable outputs.',
      'Presented technical architecture and project securing methodology to the IT department.',
    ],
    photo: '/assets/images/achievements/Photo of me presenting Project in front of whole IT department students.jpg',
    photoCaption: 'Presenting algorithmic trading project architecture to IT department students and faculty',
    doc: '/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf',
    docLabel: 'Conference Certificate ↗',
  },
  {
    num: '03',
    category: 'Health Technology',
    title: 'Health-Tech Company',
    subtitle: 'Health Technology & Operational Systems',
    copy: [
      'Worked with a health-tech company on technology-related work within the healthcare domain. The experience contributes to my understanding of how software needs to account for user needs, operational realities, and reliability in domain-specific environments.',
    ],
    contributions: [
      'Technology-related work within domain-specific healthcare software.',
      'Evaluating user workflows, operational requirements, and system reliability.',
      'Designing system interactions around real-world compliance and operational constraints.',
    ],
    photo: null,
  },
];

const HISTORICAL_WORK = [
  {
    period: '2024 – 2026',
    title: 'Digital Campaign Leadership & Operational Systems',
    context: 'Techfest (2024 & 2025) & Fusion (2025 & 2026) · KBT College of Engineering',
    desc: 'Built and directed digital strategy systems across consecutive college flagship events—defining campaign schedules, content pipelines, analytics, and team coordination workflows. Conferred the Special Achievers Award — Most Outstanding Content Creator — by Dr. Satish R. Devane, Director, KBT College of Engineering (April 2026).',
    badge: 'Leadership & Execution',
  },
  {
    period: '2024',
    title: 'Digital Promotion Architecture — Nivesh Mantrana Summit',
    context: 'National Mutual Fund Knowledge Summit · Indore',
    desc: 'Managed digital promotion and social media outreach architectures for Nivesh Mantrana. Handled content strategy, audience targeting, and multi-channel engagement campaigns to drive regional and national event awareness. Felicitated on stage for digital promotion contribution.',
    badge: 'Media & Promotion',
  },
  {
    period: '2023 – 2025',
    title: 'Technical Experimentation & Engineering Projects',
    context: 'Smart India Hackathon & Department Initiatives · IT Engineering',
    desc: 'Participated in the Smart India Hackathon and departmental software initiatives, developing hands-on experience in rapid technical prototyping, problem scoping, and collaborative engineering under constraints.',
    badge: 'Technical Prototyping',
  },
  {
    period: '2025 – 2026',
    title: 'Technical Presentation & Academic Knowledge Sharing',
    context: 'Department of Information Technology · KBT College of Engineering',
    desc: 'Selected to present project securing methodology and technical architecture for the Dematade Algo project before students and faculty across the Department of Information Technology.',
    badge: 'Communication & Architecture',
  },
];

const HISTORICAL_PHOTOS = [
  { img: '/assets/images/achievements/Social Media Head Techfest 2k24.jpg', label: 'Techfest 2024 — Media Head' },
  { img: '/assets/images/achievements/Techfest 2k25 Candid.jpg', label: 'Techfest 2025 — on stage' },
  { img: '/assets/images/achievements/Social Media Head at Fusion 2k26.jpg', label: 'Fusion 2026 — Media Lead' },
  { img: '/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg', label: 'Special Achievers Award' },
  { img: '/assets/images/achievements/Participation in Smart India Hackathon.jpg', label: 'Smart India Hackathon' },
  { img: '/assets/images/achievements/Felicitation By HOD.jpg', label: 'Felicitation by HOD' },
];

const PUBLICATIONS = [
  {
    num: '01',
    title: 'AI for Innovation, Sustainability & Global Development',
    venue: 'International Conference on Artificial Intelligence for Innovation, Sustainability and Global Development',
    type: 'Conference Paper · Presented & Published',
    desc: 'Investigated applied artificial intelligence models and decision-support frameworks addressing sustainability and complex data synthesis.',
    cert: '/assets/documents/Certificate of Presentation and Publication ar international conference on Artificial Intelligence for Innovation, sustainability and global development.pdf',
    certImg: '/assets/images/certificates/Internation Journal of science paper publication certificate.jpeg',
  },
  {
    num: '02',
    title: 'Research Publication — International Journal of Science',
    venue: 'International Journal of Science',
    type: 'Journal Publication · Peer Reviewed',
    desc: 'Peer-reviewed technical research exploring systems methodologies, published in an international science journal.',
    cert: '/assets/documents/Durvesh Patil_Participation_Certificate.pdf',
    certImg: '/assets/images/certificates/second-research-certificate.jpg',
  },
];

export default function WorkPage() {
  usePageMeta(
    'Selected Work · Technology in the Context of Real Problems',
    'Professional experience across financial services, algorithmic trading technology, and health-tech by Durvesh Patil, Technology Consultant.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAF8', paddingTop: '60px' }}>

      {/* ── Section 1 — Introduction ── */}
      <section style={{ padding: 'clamp(3.5rem,6vw,5.5rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8', borderBottom: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label">SELECTED WORK</span>
          <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.4rem,5.5vw,4.5rem)', color: '#111111', fontWeight: 400, lineHeight: 1.08, maxWidth: '880px', marginTop: '0.5rem' }}>
            Technology in the Context of Real Problems
          </h1>
          <p style={{ color: '#555555', fontSize: 'clamp(1rem,1.5vw,1.1rem)', lineHeight: 1.8, fontWeight: 300, maxWidth: '720px', marginTop: '1.5rem' }}>
            My experience spans financial services, algorithmic trading technology, and health-tech. Across these contexts, I’m interested in the relationship between business requirements, system design, and practical implementation.
          </p>
        </div>
      </section>

      {/* ── Section 2 — Professional & Business Experience ── */}
      <section style={{ padding: 'clamp(3.5rem,6vw,5.5rem) clamp(1.25rem,5vw,4rem)', background: '#FFFFFF', borderBottom: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }}>
            <span className="sec-label">PROFESSIONAL EXPERIENCE</span>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#111111', fontWeight: 400, marginTop: '0.35rem' }}>
              Work Across Technology &amp; Business
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {PROFESSIONAL_WORK.map((item) => (
              <article
                key={item.num}
                style={{
                  border: '0.5px solid #E5E4E0',
                  borderRadius: '16px',
                  background: '#FAFAF8',
                  padding: 'clamp(1.75rem,3.5vw,3rem)',
                  display: 'grid',
                  gridTemplateColumns: item.photo ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
                  gap: 'clamp(2rem,4vw,3.5rem)',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: S.serif, fontSize: '0.9rem', color: '#999', fontStyle: 'italic' }}>{item.num}</span>
                    <span className="tag-pill">{item.category}</span>
                  </div>

                  <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem,2.6vw,2.2rem)', color: '#111111', fontWeight: 400, lineHeight: 1.2, marginBottom: '0.35rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '11px', color: '#888888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 500 }}>
                    {item.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
                    {item.copy.map((paragraph, pIdx) => (
                      <p key={pIdx} style={{ color: '#444444', fontSize: '0.97rem', lineHeight: 1.8, fontWeight: 300 }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div style={{ borderTop: '0.5px solid #E5E4E0', paddingTop: '1.25rem' }}>
                    <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', color: S.accent, fontWeight: 600, marginBottom: '0.75rem' }}>
                      Key Contribution Areas
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {item.contributions.map((c, cIdx) => (
                        <li key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#555555', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>
                          <span style={{ color: S.accent, marginTop: '2px' }}>—</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.doc && (
                    <div style={{ marginTop: '1.5rem', borderTop: '0.5px solid #E5E4E0', paddingTop: '1rem' }}>
                      <a
                        href={item.doc}
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#555555', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
                        onMouseEnter={e => (e.currentTarget.style.color = S.accent)}
                        onMouseLeave={e => (e.currentTarget.style.color = '#555555')}
                      >
                        {item.docLabel}
                      </a>
                    </div>
                  )}
                </div>

                {item.photo && (
                  <div>
                    <div style={{ borderRadius: '14px', overflow: 'hidden', border: '0.5px solid #E5E4E0', position: 'relative', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                      <img src={item.photo} alt={item.photoCaption} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)', padding: '1.5rem 1.25rem 1rem' }}>
                        <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.4, fontWeight: 300 }}>{item.photoCaption}</p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3 — Earlier Experience & College-Era Work (Visually Subordinated) ── */}
      <section style={{ padding: 'clamp(3.5rem,6vw,5rem) clamp(1.25rem,5vw,4rem)', background: '#F4F4F0', borderBottom: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label" style={{ color: '#888888' }}>EARLIER EXPERIENCE</span>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.7rem,3vw,2.5rem)', color: '#111111', fontWeight: 400, marginTop: '0.35rem', marginBottom: '0.75rem' }}>
            Earlier Experience &amp; Leadership
          </h2>
          <p style={{ color: '#666666', fontSize: '0.98rem', lineHeight: 1.75, fontWeight: 300, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Before focusing my professional narrative on technology consulting and venture building, I worked on projects and initiatives during my engineering years that developed my experience in execution, communication, research, and working with teams.
          </p>

          {/* Compact card grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {HISTORICAL_WORK.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '0.5px solid #E5E4E0',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: S.accent, fontWeight: 600 }}>{item.badge}</span>
                  <span style={{ fontSize: '11px', color: '#888888', fontWeight: 500 }}>{item.period}</span>
                </div>
                <h3 style={{ fontFamily: S.serif, fontSize: '1.15rem', color: '#111111', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.35rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '11px', color: '#777777', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.85rem' }}>
                  {item.context}
                </p>
                <p style={{ color: '#555555', fontSize: '0.86rem', lineHeight: 1.65, fontWeight: 300, marginTop: 'auto' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Compact visual evidence gallery */}
          <div>
            <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#888888', fontWeight: 600, marginBottom: '1rem' }}>
              Historical Activities &amp; Institutional Recognition
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.75rem' }}>
              {HISTORICAL_PHOTOS.map(p => (
                <div key={p.label} style={{ borderRadius: '10px', overflow: 'hidden', border: '0.5px solid #E5E4E0', position: 'relative', background: '#FFFFFF' }}>
                  <img src={p.img} alt={p.label} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                  <div style={{ padding: '0.65rem 0.75rem', background: '#FAFAF8', borderTop: '0.5px solid #EAEAE6' }}>
                    <p style={{ fontSize: '10px', color: '#666666', lineHeight: 1.3, fontWeight: 400 }}>{p.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4 — Research & Publications ── */}
      <section style={{ padding: 'clamp(3.5rem,6vw,5.5rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8', borderBottom: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label">RESEARCH &amp; PUBLICATIONS</span>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#111111', fontWeight: 400, marginTop: '0.35rem', marginBottom: '0.75rem' }}>
            Research &amp; Publications
          </h2>
          <p style={{ color: '#555555', fontSize: '0.98rem', lineHeight: 1.75, fontWeight: 300, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Research gives me another way to examine technology: beyond its implementation, towards its assumptions, applications, and broader implications.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {PUBLICATIONS.map(paper => (
              <div
                key={paper.num}
                style={{
                  border: '0.5px solid #E5E4E0',
                  borderRadius: '14px',
                  background: '#FFFFFF',
                  padding: 'clamp(1.5rem,2.5vw,2.5rem)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'clamp(1.75rem,3vw,3rem)',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: S.serif, fontSize: '0.85rem', color: '#999', fontStyle: 'italic' }}>{paper.num}</span>
                    <span className="tag-pill">{paper.type}</span>
                  </div>
                  <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.2rem,2vw,1.65rem)', color: '#111111', fontWeight: 400, lineHeight: 1.25, marginBottom: '0.4rem' }}>
                    {paper.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#888', fontStyle: 'italic', marginBottom: '0.85rem', lineHeight: 1.5 }}>
                    {paper.venue}
                  </p>
                  <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.25rem' }}>
                    {paper.desc}
                  </p>
                  <a
                    href={paper.cert}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#555', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
                    onMouseEnter={e => (e.currentTarget.style.color = S.accent)}
                    onMouseLeave={e => (e.currentTarget.style.color = '#555')}
                  >
                    View Publication Certificate ↗
                  </a>
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '0.5px solid #E5E4E0' }}>
                  <img src={paper.certImg} alt={paper.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section style={{ padding: 'clamp(4rem,7vw,6rem) clamp(1.25rem,5vw,4rem)', background: '#111118', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="sec-label" style={{ color: 'rgba(255,255,255,0.4)' }}>NEXT STEPS</span>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#FFFFFF', fontWeight: 400, lineHeight: 1.15, marginTop: '0.5rem', marginBottom: '1rem' }}>
            Have a technology problem worth thinking through?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.97rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '2rem' }}>
            If you’re evaluating a technical direction, planning a product or system, or working through an operational challenge, let’s start with the problem and understand what a useful solution would look like.
          </p>
          <Link
            to="/contact"
            style={{
              padding: '0.85rem 2rem',
              background: '#FFFFFF',
              color: '#0C0C0F',
              borderRadius: '30px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Discuss a Project →
          </Link>
        </div>
      </section>

    </main>
  );
}
