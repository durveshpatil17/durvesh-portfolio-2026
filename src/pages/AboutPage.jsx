import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';
import { usePageMeta } from '../utils/usePageMeta';

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  {
    num: '01',
    title: 'Understand before designing',
    copy: 'Start with the underlying problem, the people affected, and the constraints that shape the possible solutions.',
  },
  {
    num: '02',
    title: 'Connect business and systems',
    copy: 'Technical decisions should make sense in the context of the business objectives, workflows, dependencies, and resources involved.',
  },
  {
    num: '03',
    title: 'Design for implementation',
    copy: 'A system design is useful when its components, responsibilities, and trade-offs are clear enough to guide real work.',
  },
  {
    num: '04',
    title: 'Stay practical',
    copy: 'Not every problem needs a complex architecture or an AI solution. The right approach is the one that addresses the problem within the actual constraints.',
  },
];

export default function AboutPage() {
  const pageRef = useRef(null);

  usePageMeta(
    'About — A Technical Foundation. A Business Perspective.',
    'Technology Consultant working across technology strategy, system architecture, product design, and implementation planning. Background combining IT engineering and MBA-ITBM at SCIT Symbiosis.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-about').forEach((el) => {
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

      {/* ── Section 1 — Introduction ── */}
      <section
        style={{
          padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#FAFAF8',
          borderBottom: '0.5px solid #E5E4E0',
        }}
      >
        <div
          style={{
            maxWidth: '1160px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          <div>
            <span className="sec-label">ABOUT</span>
            <h1
              style={{
                fontFamily: S.serif,
                fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
                color: '#111111',
                fontWeight: 400,
                lineHeight: 1.1,
                marginTop: '0.5rem',
                marginBottom: '1.75rem',
              }}
            >
              A business problem is rarely solved by technology alone.
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#555555', fontSize: 'clamp(0.98rem, 1.4vw, 1.08rem)', lineHeight: 1.8, fontWeight: 300 }}>
              <p style={{ margin: 0 }}>
                My work centres on understanding how businesses operate, what needs to change, and how technology can help make that change practical.
              </p>
              <p style={{ margin: 0 }}>
                I work as a Technology Consultant across technology strategy, system architecture, product and system design, and implementation planning. Alongside consulting, I’m developing ventures of my own in technology.
              </p>
              <p style={{ margin: 0 }}>
                My experience across financial services, algorithmic trading technology, and health-tech has given me different contexts in which to think about the relationship between business needs and technical decisions.
              </p>
            </div>
          </div>

          <div>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '0.5px solid #E5E4E0',
                boxShadow: '0 4px 28px rgba(0,0,0,0.06)',
                maxWidth: '460px',
                margin: '0 auto',
              }}
            >
              <img
                src="/assets/images/personal/Profile photo.jpg"
                alt="Durvesh Patil — Technology Consultant & Venture Builder"
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '1rem 1.25rem', background: '#FFFFFF', borderTop: '0.5px solid #EAEAE6' }}>
                <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888888', margin: 0, fontWeight: 500 }}>
                  Durvesh Patil · Technology Consultant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2 — How I Approach the Work ── */}
      <section
        className="reveal-about"
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#FFFFFF',
          borderBottom: '0.5px solid #E5E4E0',
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label">PRINCIPLES</span>
          <h2
            style={{
              fontFamily: S.serif,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#111111',
              fontWeight: 400,
              marginTop: '0.35rem',
              marginBottom: '2.5rem',
            }}
          >
            How I Think About Technology
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {PRINCIPLES.map((item) => (
              <div
                key={item.num}
                style={{
                  background: '#FAFAF8',
                  border: '0.5px solid #E5E4E0',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    fontFamily: S.serif,
                    fontSize: '1rem',
                    color: S.accent,
                    fontStyle: 'italic',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.num}
                </span>
                <h3
                  style={{
                    fontFamily: S.serif,
                    fontSize: '1.25rem',
                    color: '#111111',
                    fontWeight: 400,
                    lineHeight: 1.3,
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#555555', fontSize: '0.92rem', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3 — Experience Across Domains ── */}
      <section
        className="reveal-about"
        style={{
          padding: 'clamp(3.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#FAFAF8',
          borderBottom: '0.5px solid #E5E4E0',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <span className="sec-label">DOMAINS</span>
          <h2
            style={{
              fontFamily: S.serif,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#111111',
              fontWeight: 400,
              marginTop: '0.35rem',
              marginBottom: '1.25rem',
            }}
          >
            Different Domains. A Common Thread.
          </h2>
          <p style={{ color: '#444444', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', lineHeight: 1.85, fontWeight: 300, margin: 0 }}>
            My work has touched financial services, trading-related technology, and health-tech. Each domain presents different requirements and constraints, but the questions remain connected: What problem needs to be solved? What must the system do? Which decisions matter most? And how can the solution be implemented responsibly?
          </p>
        </div>
      </section>

      {/* ── Section 4 — Technology & Business Background ── */}
      <section
        className="reveal-about"
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#FFFFFF',
          borderBottom: '0.5px solid #E5E4E0',
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="sec-label">BACKGROUND</span>
              <h2
                style={{
                  fontFamily: S.serif,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: '#111111',
                  fontWeight: 400,
                  marginTop: '0.35rem',
                  marginBottom: '1.25rem',
                }}
              >
                Technical Foundations, Business Context
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#555555', fontSize: '0.98rem', lineHeight: 1.8, fontWeight: 300 }}>
                <p style={{ margin: 0 }}>
                  My background combines Information Technology engineering with an MBA in Information Technology Business Management at SCIT, Symbiosis.
                </p>
                <p style={{ margin: 0 }}>
                  That combination informs how I approach technology work: with an interest in the architecture and implementation of systems, alongside the business priorities and operational realities they must serve.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  background: '#FAFAF8',
                  border: '0.5px solid #E5E4E0',
                  borderRadius: '12px',
                  padding: '1.5rem',
                }}
              >
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: S.accent, fontWeight: 600 }}>
                  Business Management
                </span>
                <h3 style={{ fontFamily: S.serif, fontSize: '1.2rem', color: '#111111', fontWeight: 400, marginTop: '0.35rem', marginBottom: '0.25rem' }}>
                  MBA in IT Business Management (ITBM)
                </h3>
                <p style={{ fontSize: '12px', color: '#777777', margin: 0 }}>
                  Symbiosis Centre for Information Technology (SCIT), Symbiosis International University, Pune
                </p>
              </div>

              <div
                style={{
                  background: '#FAFAF8',
                  border: '0.5px solid #E5E4E0',
                  borderRadius: '12px',
                  padding: '1.5rem',
                }}
              >
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: S.accent, fontWeight: 600 }}>
                  Engineering Foundation
                </span>
                <h3 style={{ fontFamily: S.serif, fontSize: '1.2rem', color: '#111111', fontWeight: 400, marginTop: '0.35rem', marginBottom: '0.25rem' }}>
                  Bachelor of Engineering in Information Technology
                </h3>
                <p style={{ fontSize: '12px', color: '#777777', margin: 0 }}>
                  MVP&apos;s KBT College of Engineering, SPPU, Nashik
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5 — Independent Work & Ventures ── */}
      <section
        className="reveal-about"
        style={{
          padding: 'clamp(3.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#FAFAF8',
          borderBottom: '0.5px solid #E5E4E0',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <span className="sec-label">VENTURE BUILDING</span>
          <h2
            style={{
              fontFamily: S.serif,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#111111',
              fontWeight: 400,
              marginTop: '0.35rem',
              marginBottom: '1.25rem',
            }}
          >
            Building Alongside Consulting
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#444444', fontSize: 'clamp(0.98rem, 1.4vw, 1.08rem)', lineHeight: 1.85, fontWeight: 300 }}>
            <p style={{ margin: 0 }}>
              Consulting lets me work through problems in different business contexts. Developing ventures of my own creates another opportunity to apply the same thinking directly—to examine a problem, test assumptions, make product decisions, and work through implementation.
            </p>
            <p style={{ margin: 0 }}>
              Both inform the way I think about technology: as something that must make sense in practice, not only on paper.
            </p>
          </div>
          <div style={{ marginTop: '1.75rem' }}>
            <Link
              to="/ventures"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: S.accent,
                textDecoration: 'none',
              }}
            >
              Explore Ventures in Development →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 6 — Writing & Research ── */}
      <section
        className="reveal-about"
        style={{
          padding: 'clamp(3.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#FFFFFF',
          borderBottom: '0.5px solid #E5E4E0',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <span className="sec-label">WRITING &amp; RESEARCH</span>
          <h2
            style={{
              fontFamily: S.serif,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#111111',
              fontWeight: 400,
              marginTop: '0.35rem',
              marginBottom: '1.25rem',
            }}
          >
            Thinking Beyond Implementation
          </h2>
          <p style={{ color: '#444444', fontSize: 'clamp(0.98rem, 1.4vw, 1.08rem)', lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem' }}>
            I also write and research topics spanning technology, business, personal finance, careers, and the changing world of work. I’m interested in understanding the systems and incentives behind the visible outcome, and in making complex ideas easier to reason about.
          </p>
          <Link
            to="/writing"
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
            Read My Writing →
          </Link>
        </div>
      </section>

      {/* ── Section 7 — Closing ── */}
      <section
        style={{
          padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#111118',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="sec-label" style={{ color: 'rgba(255,255,255,0.4)' }}>CONVERSATION</span>
          <h2
            style={{
              fontFamily: S.serif,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: '#FFFFFF',
              fontWeight: 400,
              lineHeight: 1.18,
              marginTop: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            Good work begins with a clear understanding of the problem.
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
            If you’re working through a technology decision, planning a product, or evaluating how a system should evolve, I welcome thoughtful conversations about the challenge.
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
            Get in Touch →
          </Link>
        </div>
      </section>

    </main>
  );
}
