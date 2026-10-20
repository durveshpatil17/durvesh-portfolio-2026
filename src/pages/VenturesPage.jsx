import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';
import { usePageMeta } from '../utils/usePageMeta';

gsap.registerPlugin(ScrollTrigger);

const VENTURES = [
  {
    name: 'Financial Technology Initiative',
    domain: 'Financial Technology',
    stage: 'In development',
    stageColor: '#534AB7',
    summary:
      'I’m exploring how technology can improve the way financial services are understood, accessed, and delivered. The work involves examining business needs and considering how digital products and systems might address them.',
    problem:
      'Retail investors and independent financial practices frequently face friction across onboarding, suitability assessment, and portfolio tracking. Disjointed tools and manual handoffs create operational overhead and reduce clarity for clients.',
    role:
      'Venture initiator — leading problem definition, product workflows, data flow mapping, and prototype architecture.',
    nextSteps:
      'Validating user workflows with practice managers, refining system requirements, and testing structured allocation models.',
  },
  {
    name: 'Healthcare Systems Initiative',
    domain: 'Health Technology',
    stage: 'Exploring',
    stageColor: '#2E7D32',
    summary:
      'I’m interested in technology that helps address practical challenges within healthcare and related services. My focus is on understanding the problem, the people involved, and the operational realities a useful product must account for.',
    problem:
      'Care delivery environments require software that respects demanding operational constraints. Tools that fail to account for intuitive day-to-day habits risk user fatigue, data fragmentation, and administrative delays.',
    role:
      'Venture exploration — conducting problem analysis, mapping user interaction points, and assessing technical feasibility.',
    nextSteps:
      'Engaging in domain-specific problem interviews, studying workflow requirements, and evaluating non-clinical operational bottlenecks.',
  },
];

export default function VenturesPage() {
  const pageRef = useRef(null);

  usePageMeta(
    'Ventures in Development',
    'Ventures being built and developed across financial technology and health-tech by Durvesh Patil.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-vtr').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} style={{ minHeight: '100vh', background: '#FAFAF8', paddingTop: '60px' }}>
      {/* ── Page Header ── */}
      <section
        style={{
          padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#FAFAF8',
          borderBottom: '0.5px solid #E5E4E0',
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label">VENTURE BUILDING</span>
          <h1
            style={{
              fontFamily: S.serif,
              fontSize: 'clamp(2.5rem, 6.5vw, 5.2rem)',
              color: '#111111',
              fontWeight: 400,
              lineHeight: 1.05,
              maxWidth: '820px',
              marginBottom: '1.5rem',
            }}
          >
            Exploring problems.<br />
            <span style={{ fontStyle: 'italic' }}>Developing technology-led solutions.</span>
          </h1>
          <p
            style={{
              color: '#555555',
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              fontWeight: 300,
              lineHeight: 1.75,
              maxWidth: '680px',
            }}
          >
            Alongside consulting, I work on ventures of my own. These projects allow me to apply
            business understanding, product thinking, and technical decisions to problems I believe
            are worth exploring.
          </p>
          <p
            style={{
              color: '#777777',
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: '680px',
              marginTop: '0.75rem',
            }}
          >
            The work is ongoing. Each initiative has its own stage, constraints, and questions to resolve.
          </p>
        </div>
      </section>

      {/* ── Ventures List ── */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 6rem) clamp(1.25rem, 5vw, 4rem)', background: '#FAFAF8' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {VENTURES.map((item, index) => (
            <div
              key={item.name}
              className="reveal-vtr"
              style={{
                background: '#FFFFFF',
                border: '0.5px solid #E5E4E0',
                borderRadius: '20px',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.02)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.75rem',
                  borderBottom: '0.5px solid #F0EFEA',
                  paddingBottom: '1.25rem',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: S.serif,
                      fontSize: '1rem',
                      color: S.accent,
                      fontStyle: 'italic',
                      display: 'block',
                      marginBottom: '0.25rem',
                    }}
                  >
                    0{index + 1}
                  </span>
                  <h2
                    style={{
                      fontFamily: S.serif,
                      fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                      color: '#111111',
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {item.name}
                  </h2>
                </div>

                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: '30px',
                      background: 'rgba(0,0,0,0.04)',
                      color: '#555555',
                    }}
                  >
                    {item.domain}
                  </span>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: '30px',
                      background: 'rgba(83,74,183,0.08)',
                      color: item.stageColor,
                      border: '0.5px solid rgba(83,74,183,0.15)',
                    }}
                  >
                    Stage: {item.stage}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                  color: '#222222',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: '2rem',
                }}
              >
                {item.summary}
              </p>

              {/* Three column breakdown: Problem, Role, Next Steps */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                <div
                  style={{
                    background: '#FAFAF8',
                    padding: '1.5rem',
                    borderRadius: '14px',
                    border: '0.5px solid #EAE9E4',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#888888',
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: '0.6rem',
                    }}
                  >
                    Problem Being Explored
                  </span>
                  <p style={{ fontSize: '14px', color: '#555555', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                    {item.problem}
                  </p>
                </div>

                <div
                  style={{
                    background: '#FAFAF8',
                    padding: '1.5rem',
                    borderRadius: '14px',
                    border: '0.5px solid #EAE9E4',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: S.accent,
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: '0.6rem',
                    }}
                  >
                    Role &amp; Contribution
                  </span>
                  <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                    {item.role}
                  </p>
                </div>

                <div
                  style={{
                    background: '#FAFAF8',
                    padding: '1.5rem',
                    borderRadius: '14px',
                    border: '0.5px solid #EAE9E4',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#444444',
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: '0.6rem',
                    }}
                  >
                    Current Focus &amp; Questions
                  </span>
                  <p style={{ fontSize: '14px', color: '#555555', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                    {item.nextSteps}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing Statement & CTA (Dark) ── */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#111118',
          borderTop: '0.5px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="reveal-vtr">
            <h2
              style={{
                fontFamily: S.serif,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#FFFFFF',
                fontWeight: 400,
                lineHeight: 1.25,
                marginBottom: '1.25rem',
              }}
            >
              Working through what is not yet resolved.
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: '2.5rem',
              }}
            >
              Building a venture means working through the parts that are not yet resolved. I approach
              that process with the same attention to the problem, the system, and the decisions
              required to move forward.
            </p>
            <Link
              to="/contact"
              style={{
                padding: '0.85rem 2.25rem',
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
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Discuss Technology &amp; Product Work →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
