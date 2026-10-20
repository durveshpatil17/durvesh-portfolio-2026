import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';
import { articles } from '../data/articles';
import { reels } from '../data/reels';
import { usePageMeta } from '../utils/usePageMeta';

gsap.registerPlugin(ScrollTrigger);

const N = 6;

const HERO_PHOTOS = [
  { src: '/assets/images/personal/Personal Photo 2.JPG',  pos: '50% 20%' },
  { src: '/assets/images/personal/personal photo 3.jpeg', pos: '50% 30%' },
  { src: '/assets/images/personal/Personal photo 4.jpg',  pos: '50% 25%' },
  { src: '/assets/images/personal/Personal photo 6.jpg',  pos: '50% 15%' },
  { src: '/assets/images/personal/personal photo 7.webp', pos: '50% 20%' },
  { src: '/assets/images/personal/personal photo 8.jpg',  pos: '50% 22%' },
];

const L = { bg: '#FAFAF8', border: '#E5E4E0', text: '#111111', muted: '#555555', sub: '#888888' };
const D = { bg: '#111118', border: 'rgba(255,255,255,0.08)', text: '#FFFFFF', muted: 'rgba(255,255,255,0.6)', sub: 'rgba(255,255,255,0.35)' };

export default function HomePage() {
  const pageRef = useRef(null);

  usePageMeta(
    'Durvesh Patil — Technology Consultant & Venture Builder',
    'Technology strategy, system architecture, product and system design, implementation planning, and technology venture building.'
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const publishedArticles = articles.filter((a) => a.status === 'published').slice(0, 3);

  return (
    <div ref={pageRef}>
      {/* ════════════════════════════════════════ SECTION 1 — HERO */}
      <section
        className="hero-section"
        style={{
          position: 'relative',
          minHeight: '100svh',
          background: '#0C0C0F',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        {/* Photo carousel */}
        <div className="hero-photo-wrap">
          <div
            style={{
              display: 'flex',
              width: `${N * 100}%`,
              height: '100%',
              animation: `carousel-slide ${N * 3.5}s ease-in-out infinite`,
            }}
          >
            {HERO_PHOTOS.map((p, i) => (
              <div
                key={i}
                style={{
                  width: `${100 / N}%`,
                  height: '100%',
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={p.src}
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: p.pos,
                  }}
                />
              </div>
            ))}
          </div>

          <div className="hero-mobile-grad" />

          <div
            className="hero-desktop-grads"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to left, #0C0C0F 0%, rgba(12,12,15,0.6) 35%, transparent 70%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, #0C0C0F 0%, transparent 40%)',
              }}
            />
          </div>
        </div>

        {/* Dots */}
        <div
          className="hero-dots"
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: 'clamp(1.25rem, 5vw, 4rem)',
            zIndex: 5,
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
          }}
        >
          {HERO_PHOTOS.map((_, i) => (
            <div
              key={i}
              style={{
                height: '5px',
                borderRadius: '3px',
                animationName: `dot-${i + 1}`,
                animationDuration: `${N * 3.5}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
              }}
            />
          ))}
        </div>

        {/* Text block */}
        <div
          className="hero-text-container"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1160px',
            margin: '0 auto',
            padding: 'clamp(1.25rem, 5vw, 4rem)',
            paddingTop: 'max(90px, 10svh)',
            paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: '560px' }}
          >
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{ width: '22px', height: '1px', background: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 600,
                }}
              >
                TECHNOLOGY CONSULTANT · VENTURE BUILDER
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: S.serif,
                fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
                lineHeight: 1.02,
                color: '#FFFFFF',
                marginBottom: '0.1em',
                letterSpacing: '-0.02em',
              }}
            >
              Making better technology decisions.
            </h1>
            <h1
              style={{
                fontFamily: S.serif,
                fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
                lineHeight: 1.02,
                color: 'rgba(255,255,255,0.72)',
                fontStyle: 'italic',
                letterSpacing: '-0.02em',
                marginBottom: '1.75rem',
              }}
            >
              Building systems that work.
            </h1>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: 'clamp(14px, 1.4vw, 15px)',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.75,
                maxWidth: '500px',
                marginBottom: '2rem',
                fontWeight: 300,
              }}
            >
              I work with businesses on technology strategy, system architecture, product and system
              design, and implementation planning. My focus is understanding the problem behind the
              requirement and finding a practical way to solve it.
              <br />
              <br />
              Alongside consulting, I’m developing ventures of my own across technology and digital products.
            </p>

            {/* Hero CTAs */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <Link
                to="/work"
                style={{
                  padding: '0.8rem 1.75rem',
                  background: '#FFFFFF',
                  color: '#0C0C0F',
                  borderRadius: '30px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '44px',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Explore My Work
              </Link>
              <Link
                to="/contact"
                style={{
                  padding: '0.8rem 1.6rem',
                  background: 'transparent',
                  border: '0.5px solid rgba(255,255,255,0.3)',
                  color: 'rgba(255,255,255,0.85)',
                  borderRadius: '30px',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '44px',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                }}
              >
                Discuss a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════ SECTION 2 — POSITIONING STATEMENT */}
      <section
        style={{
          padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem)',
          background: L.bg,
          borderTop: `0.5px solid ${L.border}`,
          borderBottom: `0.5px solid ${L.border}`,
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div
              style={{
                width: '2px',
                flexShrink: 0,
                alignSelf: 'stretch',
                background: '#534AB7',
                opacity: 0.4,
                minHeight: '70px',
                borderRadius: '1px',
              }}
            />
            <div>
              <h2
                style={{
                  fontFamily: S.serif,
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
                  color: L.text,
                  lineHeight: 1.25,
                  fontWeight: 400,
                  marginBottom: '1.25rem',
                }}
              >
                Technology is a business decision before it becomes a technical one.
              </h2>
              <p
                style={{
                  fontSize: 'clamp(15px, 1.5vw, 17px)',
                  color: L.muted,
                  lineHeight: 1.8,
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                The right solution starts with understanding what needs to change, why it matters,
                and what the business can realistically implement. I approach technology work by
                connecting business objectives with system design, technical decisions, and practical
                execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ SECTION 3 — WHAT I WORK ON */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 4rem)', background: '#FAFAF8' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#888888',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.6rem',
              }}
            >
              Services Overview
            </span>
            <h2
              style={{
                fontFamily: S.serif,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#111111',
                fontWeight: 400,
                marginBottom: '1rem',
              }}
            >
              Where I Work
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: '#666666',
                lineHeight: 1.7,
                maxWidth: '680px',
                fontWeight: 300,
                margin: 0,
              }}
            >
              My work spans the decisions that shape a product or business system—from defining the
              problem and choosing an approach to planning the architecture and guiding implementation.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                title: 'Technology Strategy',
                body: 'Clarifying technology priorities, evaluating approaches, and connecting technical decisions with business objectives.',
                link: '/services',
              },
              {
                title: 'Systems & Architecture',
                body: 'Structuring systems, understanding dependencies, and planning architectures around functional requirements, constraints, and future needs.',
                link: '/services',
              },
              {
                title: 'Product & System Design',
                body: 'Translating business requirements into coherent product flows, system components, and implementation-ready decisions.',
                link: '/services',
              },
              {
                title: 'Operational Improvement',
                body: 'Identifying process friction and evaluating where better systems, automation, or technology can improve the way work gets done.',
                link: '/services',
              },
            ].map((srv) => (
              <div
                key={srv.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '0.5px solid #E5E4E0',
                  padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: S.serif,
                      fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)',
                      color: '#111111',
                      fontWeight: 400,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {srv.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#666666',
                      lineHeight: 1.65,
                      fontWeight: 300,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {srv.body}
                  </p>
                </div>
                <Link
                  to={srv.link}
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: S.accent,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ SECTION 4 — SELECTED WORK (Dark) */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 4rem)', background: D.bg }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: D.sub,
                display: 'block',
                marginBottom: '0.6rem',
              }}
            >
              Experience
            </span>
            <h2
              style={{
                fontFamily: S.serif,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: D.text,
                fontWeight: 400,
                marginBottom: '1rem',
              }}
            >
              Work Across Technology and Business
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: D.muted,
                lineHeight: 1.7,
                maxWidth: '680px',
                fontWeight: 300,
                margin: 0,
              }}
            >
              Different domains present different constraints. The common thread in my work is
              understanding the underlying problem and contributing to a practical technical or
              operational response.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Card 1: i-Need Fin-Essential Services */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#AFA9EC',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}
                >
                  Financial Services · Strategy &amp; Technology
                </span>
                <h3
                  style={{
                    fontFamily: S.serif,
                    fontSize: '1.4rem',
                    color: '#FFFFFF',
                    fontWeight: 400,
                    marginBottom: '1rem',
                  }}
                >
                  i-Need Fin-Essential Services
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    marginBottom: '1.5rem',
                  }}
                >
                  Working within our family-run financial services practice across strategy, digital
                  development, technology initiatives, and business operations. My focus includes
                  exploring how better digital experiences and practical systems can support the way
                  the business operates and serves its customers.
                </p>
              </div>
              <Link
                to="/work"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                View Work →
              </Link>
            </div>

            {/* Card 2: Algorithmic Trading Technology */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#AFA9EC',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}
                >
                  Financial Technology · Product Engineering
                </span>
                <h3
                  style={{
                    fontFamily: S.serif,
                    fontSize: '1.4rem',
                    color: '#FFFFFF',
                    fontWeight: 400,
                    marginBottom: '1rem',
                  }}
                >
                  Algorithmic Trading Technology
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    marginBottom: '1.5rem',
                  }}
                >
                  Experience working with an algorithmic trading technology company, contributing to
                  technology for strategy creation and related system workflows. The work connects
                  product requirements with technical implementation in a trading-focused environment.
                </p>
              </div>
              <Link
                to="/work"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                View Work →
              </Link>
            </div>

            {/* Card 3: Health-Tech */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#AFA9EC',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}
                >
                  Health Technology
                </span>
                <h3
                  style={{
                    fontFamily: S.serif,
                    fontSize: '1.4rem',
                    color: '#FFFFFF',
                    fontWeight: 400,
                    marginBottom: '1rem',
                  }}
                >
                  Health-Tech
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    marginBottom: '1.5rem',
                  }}
                >
                  Experience working with a health-tech company, contributing to technology work within
                  a domain where usability, operational needs, and system reliability matter.
                </p>
              </div>
              <Link
                to="/work"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                View Work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ SECTION 5 — VENTURES */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#FAFAF8',
          borderBottom: '0.5px solid #E5E4E0',
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div
            className="reveal"
            style={{
              background: '#FFFFFF',
              border: '0.5px solid #E5E4E0',
              borderRadius: '20px',
              padding: 'clamp(2rem, 5vw, 4rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: S.accent,
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                Venture Building
              </span>
              <h2
                style={{
                  fontFamily: S.serif,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: '#111111',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                }}
              >
                Building Beyond Client Work
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#555555',
                  lineHeight: 1.8,
                  fontWeight: 300,
                  marginBottom: '2rem',
                }}
              >
                Consulting offers one perspective on technology: understanding problems and helping
                others solve them. Building ventures offers another: making decisions under uncertainty,
                testing assumptions, and working through the practical challenges of turning an idea
                into a product.
                <br />
                <br />
                I’m developing ventures of my own across technology, including work exploring fintech
                and health-tech opportunities.
              </p>
              <Link
                to="/ventures"
                style={{
                  padding: '0.8rem 1.8rem',
                  background: '#111111',
                  color: '#FFFFFF',
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
                Explore Ventures →
              </Link>
            </div>

            <div
              style={{
                background: '#FAFAF8',
                borderRadius: '16px',
                border: '0.5px solid #EAE9E4',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#888888',
                  }}
                >
                  Active Initiative 01
                </span>
                <h3
                  style={{
                    fontFamily: S.serif,
                    fontSize: '1.3rem',
                    color: '#111111',
                    fontWeight: 400,
                    marginTop: '0.25rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  Financial Technology
                </h3>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                  Exploring structured systems to eliminate manual friction and streamline digital
                  access for wealth advisory practices.
                </p>
              </div>

              <div style={{ borderTop: '0.5px solid #EAE9E4', paddingTop: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#888888',
                  }}
                >
                  Active Initiative 02
                </span>
                <h3
                  style={{
                    fontFamily: S.serif,
                    fontSize: '1.3rem',
                    color: '#111111',
                    fontWeight: 400,
                    marginTop: '0.25rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  Health Technology
                </h3>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                  Investigating software workflows designed around operational and administrative
                  realities in healthcare delivery environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ SECTION 6 — WRITING & RESEARCH */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 4rem)', background: L.bg }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div
            className="reveal"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: L.sub,
                  display: 'block',
                  marginBottom: '0.6rem',
                }}
              >
                Thinking &amp; Essays
              </span>
              <h2
                style={{
                  fontFamily: S.serif,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: L.text,
                  fontWeight: 400,
                }}
              >
                Ideas Worth Working Through
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: L.muted,
                  lineHeight: 1.7,
                  maxWidth: '680px',
                  fontWeight: 300,
                  marginTop: '0.5rem',
                }}
              >
                I write about technology, business, personal finance, careers, and the changing
                relationship between people and work. My writing is a way to examine how systems,
                incentives, and technology shape decisions beyond the technical layer.
              </p>
            </div>
            <Link
              to="/writing"
              style={{
                fontSize: '11px',
                color: S.accent,
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Read My Writing →
            </Link>
          </div>

          <div className="reveal" style={{ borderTop: `0.5px solid ${L.border}` }}>
            {publishedArticles.map((a, i) => (
              <Link to={`/writing/${a.slug}`} key={a.id} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 3.5rem',
                    gap: '1.5rem',
                    alignItems: 'center',
                    padding: 'clamp(1.25rem, 2.5vw, 1.75rem) clamp(0.75rem, 1.5vw, 1.25rem)',
                    borderBottom: `0.5px solid ${L.border}`,
                    background: 'transparent',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F4F0')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  <div>
                    <span className="tag-pill" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                      {a.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: S.serif,
                        fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                        color: L.text,
                        fontWeight: 400,
                        lineHeight: 1.25,
                        marginBottom: '0.35rem',
                      }}
                    >
                      {a.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13px',
                        color: L.muted,
                        fontWeight: 300,
                        lineHeight: 1.55,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {a.excerpt}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div
                      style={{
                        fontFamily: S.serif,
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                        color: S.accent,
                        opacity: 0.15,
                        lineHeight: 1,
                        fontStyle: 'italic',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span style={{ fontSize: '10px', color: '#AAA' }}>{a.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Optional Media embeds ── */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 4rem)', background: '#FAFAF8' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999999', display: 'block', marginBottom: '0.5rem' }}>Public Media &amp; Presentations</span>
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: '#111111', fontWeight: 400, fontFamily: S.serif }}>
              Talks and recorded sessions.
            </h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            <div>
              <div style={{ borderRadius: '14px', overflow: 'hidden', border: `0.5px solid ${D.border}`, aspectRatio: '16/9', background: '#1A1A22' }}>
                <iframe src="https://www.youtube.com/embed/eIYjcYqhaOE" title="Durvesh Patil"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} />
              </div>
              <a href="https://youtube.com/watch?v=eIYjcYqhaOE" target="_blank" rel="noreferrer"
                style={{ display: 'block', marginTop: '0.6rem', fontSize: '11px', color: '#666', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.04em' }}
                onMouseEnter={e => e.currentTarget.style.color = S.accent}
                onMouseLeave={e => e.currentTarget.style.color = '#666'}>
                Watch on YouTube →
              </a>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
                {reels.map(reel => (
                  <a key={reel.id} href={reel.url} target="_blank" rel="noreferrer"
                    style={{ display: 'block', aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden', border: `0.5px solid ${D.border}`, position: 'relative', textDecoration: 'none', transition: 'border-color 0.2s, transform 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = S.accent; e.currentTarget.style.transform = 'scale(1.02)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = D.border; e.currentTarget.style.transform = 'scale(1)'; }}>
                    <img src={reel.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
                    {reel.type === 'reel' && (
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="8" height="10" viewBox="0 0 9 11" fill="white"><path d="M0 0l9 5.5-9 5.5V0z" /></svg>
                      </div>
                    )}
                    <span style={{ position: 'absolute', bottom: '6px', left: '8px', fontSize: '8px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{reel.type}</span>
                  </a>
                ))}
              </div>
              <a href="https://www.instagram.com/_thedurvesh/" target="_blank" rel="noreferrer"
                style={{ display: 'block', marginTop: '0.6rem', fontSize: '11px', color: '#666', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.04em' }}
                onMouseEnter={e => e.currentTarget.style.color = S.accent}
                onMouseLeave={e => e.currentTarget.style.color = '#666'}>
                @_thedurvesh on Instagram →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ SECTION 7 — ABOUT PREVIEW */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#0C0C0F',
          borderTop: '0.5px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="reveal">
            <span
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Background &amp; Perspective
            </span>
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
              A Technical Foundation. A Business Perspective.
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: '2rem',
                maxWidth: '740px',
              }}
            >
              My background in Information Technology engineering and Information Technology Business
              Management informs how I approach technology: with attention to both the systems being
              built and the business realities they need to serve.
              <br />
              <br />
              My work across financial services, technology projects, and ventures continues to shape
              that perspective.
            </p>
            <Link
              to="/about"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                textDecoration: 'none',
              }}
            >
              More About Me →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ SECTION 8 — CLOSING CTA */}
      <section
        id="contact"
        style={{
          padding: 'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#070709',
          textAlign: 'center',
          borderTop: '0.5px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div className="reveal">
            <h2
              style={{
                fontFamily: S.serif,
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Have a technology problem worth thinking through?
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}
            >
              If you’re evaluating a technical direction, planning a product or system, or working
              through an operational challenge, let’s start with the problem and understand what a
              useful solution would look like.
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
              Discuss a Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
