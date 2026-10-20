import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';
import { usePageMeta } from '../utils/usePageMeta';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: '01',
    id: 'technology-strategy',
    title: 'Technology Strategy & Roadmapping',
    tag: 'Strategic Direction',
    problem:
      'Businesses can invest in technology without a clear understanding of priorities, dependencies, or the problem they are trying to solve.',
    work:
      'Clarify objectives, evaluate options, understand constraints, and identify a practical direction for technology initiatives.',
    value:
      'Better-informed decisions and a clearer relationship between business priorities and technology investment.',
  },
  {
    num: '02',
    id: 'system-architecture',
    title: 'System Architecture & Technical Planning',
    tag: 'Architecture & Systems',
    problem:
      'Systems become difficult to extend or maintain when their components, dependencies, and constraints are not understood early.',
    work:
      'Translate requirements into a system structure, define component responsibilities, assess integration needs, and document architectural decisions.',
    value:
      'A clearer technical foundation for implementation, collaboration, and future change.',
  },
  {
    num: '03',
    id: 'product-system-design',
    title: 'Product & System Design',
    tag: 'Product Engineering',
    problem:
      'A business idea or requirement is not yet a buildable product or system.',
    work:
      'Clarify user and business requirements, map workflows, define functional behavior, and connect product decisions with technical feasibility.',
    value:
      'A more coherent path from the underlying problem to a system that can be implemented and evaluated.',
  },
  {
    num: '04',
    id: 'operational-improvement',
    title: 'Operational Improvement & Automation',
    tag: 'Operations & Workflows',
    problem:
      'Repetitive processes, disconnected tools, and unclear workflows create friction in everyday operations.',
    work:
      'Examine the current process, identify bottlenecks, and evaluate where system changes, automation, or better information flows could help.',
    value:
      'Better-structured operations and a clearer basis for deciding which improvements are worth implementing.',
  },
  {
    num: '05',
    id: 'practical-ai',
    title: 'Practical AI & Digital Innovation',
    tag: 'Applied Innovation',
    problem:
      'AI and emerging technologies can attract attention without addressing a meaningful business need.',
    work:
      'Identify suitable use cases, examine data and workflow requirements, evaluate constraints, and plan a practical implementation approach.',
    value:
      'Technology initiatives grounded in a defined problem rather than novelty alone.',
  },
];

export default function ServicesPage() {
  const pageRef = useRef(null);

  usePageMeta(
    'Consulting Capabilities · Technology decisions, grounded in business reality',
    'Independent technology consulting across technology strategy, system architecture, product design, operational improvement, and practical AI applications by Durvesh Patil.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-srv').forEach((el) => {
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
      
      {/* ── Introduction ── */}
      <section
        style={{
          padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#FAFAF8',
          borderBottom: '0.5px solid #E5E4E0',
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label">CONSULTING</span>
          <h1
            style={{
              fontFamily: S.serif,
              fontSize: 'clamp(2.5rem, 6.5vw, 5.2rem)',
              color: '#111111',
              fontWeight: 400,
              lineHeight: 1.08,
              maxWidth: '880px',
              marginTop: '0.5rem',
              marginBottom: '1.5rem',
            }}
          >
            Technology decisions, grounded in business reality.
          </h1>
          <div style={{ color: '#555555', fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', fontWeight: 300, lineHeight: 1.8, maxWidth: '720px' }}>
            <p style={{ margin: '0 0 1rem' }}>
              I work through the business problem, the technical constraints, and the practical steps required to move from an idea or requirement towards a workable system.
            </p>
            <p style={{ margin: 0 }}>
              The right engagement depends on what needs to be understood, decided, designed, or improved.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '0.8rem 1.8rem',
                background: '#111111',
                color: '#FFFFFF',
                borderRadius: '30px',
                fontSize: '11px',
                fontWeight: 600,
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
              Discuss a Project →
            </Link>
            <Link
              to="/work"
              style={{
                padding: '0.8rem 1.8rem',
                background: 'transparent',
                border: '0.5px solid #CCC',
                color: '#333333',
                borderRadius: '30px',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#111';
                e.currentTarget.style.color = '#111';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#CCC';
                e.currentTarget.style.color = '#333';
              }}
            >
              Explore Selected Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Breakdown ── */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)', background: '#FAFAF8' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal-srv" style={{ marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
            <span className="sec-label">CAPABILITIES</span>
            <h2
              style={{
                fontFamily: S.serif,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#111111',
                fontWeight: 400,
                marginTop: '0.35rem',
              }}
            >
              Consulting Capabilities
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
            {SERVICES.map((srv) => (
              <div
                key={srv.num}
                id={srv.id}
                className="reveal-srv"
                style={{
                  background: '#FFFFFF',
                  border: '0.5px solid #E5E4E0',
                  borderRadius: '16px',
                  padding: 'clamp(1.75rem, 4vw, 3rem)',
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
                    marginBottom: '1.5rem',
                    borderBottom: '0.5px solid #F0EFEA',
                    paddingBottom: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span
                      style={{
                        fontFamily: S.serif,
                        fontSize: '1.1rem',
                        color: S.accent,
                        fontStyle: 'italic',
                      }}
                    >
                      {srv.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: S.serif,
                        fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                        color: '#111111',
                        fontWeight: 400,
                        margin: 0,
                      }}
                    >
                      {srv.title}
                    </h3>
                  </div>
                  <span className="tag-pill">
                    {srv.tag}
                  </span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'clamp(1.25rem, 2.5vw, 2rem)',
                  }}
                >
                  {/* The Problem */}
                  <div
                    style={{
                      background: '#FAFAF8',
                      padding: '1.5rem',
                      borderRadius: '12px',
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
                      The Problem
                    </span>
                    <p style={{ fontSize: '14px', color: '#555555', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                      {srv.problem}
                    </p>
                  </div>

                  {/* The Work */}
                  <div
                    style={{
                      background: '#FAFAF8',
                      padding: '1.5rem',
                      borderRadius: '12px',
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
                      The Work
                    </span>
                    <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                      {srv.work}
                    </p>
                  </div>

                  {/* The Value */}
                  <div
                    style={{
                      background: '#FAFAF8',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      border: '0.5px solid #EAE9E4',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#2E7D32',
                        fontWeight: 600,
                        display: 'block',
                        marginBottom: '0.6rem',
                      }}
                    >
                      The Value
                    </span>
                    <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                      {srv.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section
        style={{
          padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#111118',
          borderTop: '0.5px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="sec-label" style={{ color: 'rgba(255,255,255,0.4)' }}>NEXT STEPS</span>
          <h2
            style={{
              fontFamily: S.serif,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: '#FFFFFF',
              fontWeight: 400,
              lineHeight: 1.2,
              marginTop: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            Start with the problem.
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.75,
              fontWeight: 300,
              marginBottom: '2.5rem',
            }}
          >
            Share the business or technology challenge you’re working through. We can begin by clarifying what needs to change and what a useful next step would look like.
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
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Discuss a Project →
          </Link>
        </div>
      </section>
    </main>
  );
}
