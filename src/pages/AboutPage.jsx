import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { S } from '../theme';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        gsap.utils.toArray('.reveal').forEach(el => {
          gsap.fromTo(el,
            { y: 20, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
              scrollTrigger: {
                trigger: el, start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      });

      mm.add('(max-width: 767px)', () => {
        gsap.utils.toArray('.reveal').forEach(el => {
          gsap.fromTo(el, { opacity: 0 }, {
            opacity: 1, duration: 0.6, ease: 'power2.out',
            scrollTrigger: {
              trigger: el, start: 'top 90%',
              toggleActions: 'play none none none',
            },
          });
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Shared style tokens
  const SECTION_LABEL = {
    fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: '#999999',
    display: 'block', marginBottom: '0.875rem',
  };
  const LIGHT_BORDER = { borderTop: '0.5px solid #E5E4E0' };
  const DARK_BORDER  = { borderTop: '0.5px solid rgba(255,255,255,0.07)' };
  const SECTION_LIGHT = {
    padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)',
    background: '#FAFAF8',
  };
  const SECTION_ALT = {
    padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)',
    background: '#F5F4F0',
  };
  const CONTAINER = { maxWidth: '1160px', margin: '0 auto' };

  return (
    <div ref={pageRef}>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          01. HERO — Dark, full viewport, one photo
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{
        minHeight: '100svh',
        position: 'relative',
        background: '#0C0C0F',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
      }}>

        {/* Photo — right half on desktop */}
        <div className="hidden lg:block" style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: '48%', zIndex: 0,
        }}>
          <img
            src="/assets/images/personal/Profile photo.jpg"
            alt="Durvesh H. Patil"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
              display: 'block',
            }}
          />
          {/* Gradient — photo fades into dark background */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #0C0C0F 0%, rgba(12,12,15,0.55) 40%, transparent 80%)',
            zIndex: 1,
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, #0C0C0F 0%, transparent 40%)',
            zIndex: 1,
          }} />
        </div>

        {/* Mobile photo — top portion */}
        <div className="lg:hidden" style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '58vh', overflow: 'hidden',
        }}>
          <img
            src="/assets/images/personal/Profile photo.jpg"
            alt="Durvesh H. Patil"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(12,12,15,0.1) 0%, rgba(12,12,15,0.55) 55%, #0C0C0F 100%)',
          }} />
        </div>

        {/* Text content — left, anchored to bottom */}
        <div style={{
          position: 'relative', zIndex: 2,
          width: '100%', maxWidth: '1160px', margin: '0 auto',
          padding: '0 clamp(1.25rem,5vw,4rem)',
        }}>
          <div className="reveal" style={{ maxWidth: '540px' }}>

            {/* Eyebrow */}
            <div style={{
              display: 'flex', alignItems: 'center',
              gap: '12px', marginBottom: '1.75rem',
            }}>
              <div style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
              <span style={{
                fontSize: '11px', letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.38)', fontWeight: 500,
              }}>
                About
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: S.serif,
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              lineHeight: 0.92, fontWeight: 400,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '0.06em',
            }}>
              Durvesh
            </h1>
            <h1 style={{
              fontFamily: S.serif,
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              lineHeight: 0.92, fontWeight: 400,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.65)',
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}>
              Patil<span style={{ color: '#534AB7' }}>.</span>
            </h1>

            {/* One-liner */}
            <p style={{
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              color: 'rgba(255,255,255,0.42)',
              lineHeight: 1.7,
              maxWidth: '400px',
              fontWeight: 300,
            }}>
              MBA student studying how AI meets the real world.
              Writer for people who weren't handed the roadmap.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem', right: 'clamp(1.25rem,5vw,4rem)',
          zIndex: 3,
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-end', gap: '6px',
        }}>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)',
          }} />
          <span style={{
            fontSize: '9px', letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)',
          }}>
            Scroll
          </span>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          02. WHO I AM — Pull quote + honest paragraph
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ ...SECTION_LIGHT, ...LIGHT_BORDER }}>
        <div style={CONTAINER}>

          {/* Pull quote */}
          <div className="reveal" style={{
            display: 'flex', gap: '2rem',
            alignItems: 'flex-start',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}>
            <div style={{
              width: '2px', flexShrink: 0,
              alignSelf: 'stretch',
              background: '#534AB7',
              opacity: 0.35,
              borderRadius: '1px',
              minHeight: '60px',
            }} />
            <p style={{
              fontFamily: S.serif, fontStyle: 'italic',
              fontSize: 'clamp(1.3rem, 2.8vw, 2.1rem)',
              color: '#111111', lineHeight: 1.4,
              fontWeight: 400, maxWidth: '800px',
            }}>
              "I didn't come from a family of consultants or a school that had a roadmap for this. I figured it out as I went — and I still am."
            </p>
          </div>

          {/* One honest paragraph — two columns on desktop */}
          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
          }}>
            <p style={{
              fontSize: '15px', color: '#666666',
              lineHeight: 1.8, fontWeight: 300,
            }}>
              I'm an MBA student at SCIT Pune, Symbiosis International University,
              with an engineering background from KBT College of Engineering, Nashik.
              I study the space where AI as a technology meets what organisations
              actually manage to do with it — the adoption gap, the human resistance,
              the implementation reality that rarely matches the promise.
            </p>
            <p style={{
              fontSize: '15px', color: '#666666',
              lineHeight: 1.8, fontWeight: 300,
            }}>
              Alongside that, I write — for people who are trying to figure out where
              they fit in a world changing faster than expected. Not advice. Perspective.
              The kind I wish existed when I was making decisions without a roadmap.
              I built that writing habit the same way I built everything else: by starting
              before I felt ready, and staying consistent until it meant something.
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          03. THE PATH — 4 milestone cards, 2×2 grid
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ ...SECTION_ALT, ...LIGHT_BORDER }}>
        <div style={CONTAINER}>

          <div className="reveal" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <span style={SECTION_LABEL}>The path</span>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: '#111111', fontWeight: 400,
            }}>
              How I got here.
            </h2>
          </div>

          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))',
            gap: '1px',
            background: '#E5E4E0',
            border: '0.5px solid #E5E4E0',
            borderRadius: '16px',
            overflow: 'hidden',
          }}>
            {[
              {
                label: 'Education',
                title: 'B.E. IT → MBA',
                body: 'KBT College of Engineering, Nashik — engineering foundation. Now MBA at SCIT Pune, Symbiosis International University, 2024–26. Specialising in IT strategy and information management.',
              },
              {
                label: 'Live Industry Work',
                title: 'NLP Strategy Pipeline',
                body: 'Built an end-to-end NLP-to-strategy system for Indian financial markets with Dematade Algo Technology Solutions during final year of engineering. Live industry project. Pre-Placement Offer received.',
              },
              {
                label: 'Published Research',
                title: '2 Research Papers',
                body: 'Presented and published at an international conference on AI for Innovation and Sustainability. Second paper published in an international science journal. Academic rigour alongside execution.',
              },
              {
                label: 'Leadership',
                title: 'Social Media Head — 4 Events',
                body: 'Led digital strategy and content execution for Techfest 2024 & 2025 and Fusion 2025 & 2026 at KBT College Nashik. Built the system from zero in 2024 and scaled it three consecutive years.',
              },
            ].map((card, i) => (
              <div key={card.label} style={{
                background: '#FAFAF8',
                padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
              }}>
                <span style={{
                  fontSize: '10px', fontWeight: 600,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: '#534AB7',
                }}>
                  {card.label}
                </span>
                <h3 style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                  color: '#111111', fontWeight: 500,
                  lineHeight: 1.25,
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontSize: '14px', color: '#666666',
                  lineHeight: 1.7, fontWeight: 300,
                }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          04. RECOGNITION — Two moments, light bg
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ ...SECTION_LIGHT, ...LIGHT_BORDER }}>
        <div style={CONTAINER}>

          <div className="reveal" style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <span style={SECTION_LABEL}>Recognition</span>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: '#111111', fontWeight: 400,
            }}>
              What the work led to.
            </h2>
          </div>

          {/* Primary — Special Achievers Award */}
          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
            marginBottom: 'clamp(2.5rem, 4vw, 4rem)',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            background: '#FFFFFF',
            border: '0.5px solid #E5E4E0',
            borderRadius: '20px',
          }}>
            {/* Photo */}
            <div style={{
              borderRadius: '14px',
              overflow: 'hidden',
              border: '0.5px solid #E5E4E0',
              position: 'relative',
            }}>
              <img
                src="/assets/images/achievements/Special Achievers award- Most outstanding Content creator award.jpg"
                alt="Special Achievers Award — Most Outstanding Content Creator"
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Text */}
            <div>
              {/* Award badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                gap: '0.5rem', marginBottom: '1.25rem',
                padding: '0.4rem 1rem',
                background: 'rgba(83,74,183,0.06)',
                border: '0.5px solid rgba(83,74,183,0.2)',
                borderRadius: '30px',
              }}>
                <span style={{ fontSize: '12px', color: '#534AB7' }}>★</span>
                <span style={{
                  fontSize: '10px', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#534AB7',
                  fontWeight: 600,
                }}>
                  Special Achievers Award · April 2026
                </span>
              </div>

              <h3 style={{
                fontFamily: S.serif,
                fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                color: '#111111', fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}>
                Most Outstanding<br />
                <em>Content Creator.</em>
              </h3>

              <p style={{
                fontSize: '15px', color: '#666666',
                lineHeight: 1.75, fontWeight: 300,
                marginBottom: '1.5rem',
              }}>
                Awarded on farewell day by{' '}
                <strong style={{ color: '#333333', fontWeight: 500 }}>
                  Dr. Satish R. Devane, Director
                </strong>
                , Maratha Vidya Prasarak Samaj's KBT College of Engineering — in
                front of the entire graduating batch of 2026. Four years of consistent
                work, recognised in one moment.
              </p>

              {/* Supporting details */}
              <div style={{
                borderTop: '0.5px solid #E5E4E0',
                paddingTop: '1.25rem',
                display: 'flex', flexDirection: 'column',
                gap: '0.625rem',
              }}>
                {[
                  'KBT College of Engineering, Nashik — Maratha Vidya Prasarak Samaj',
                  'Farewell Day, 25 April 2026',
                  'Recognised for four consecutive years of social media leadership',
                ].map(detail => (
                  <div key={detail} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                  }}>
                    <span style={{
                      width: '4px', height: '4px', borderRadius: '50%',
                      background: '#534AB7', flexShrink: 0, marginTop: '0.55rem',
                      opacity: 0.5,
                    }} />
                    <span style={{
                      fontSize: '13px', color: '#999999',
                      fontWeight: 300, lineHeight: 1.6,
                    }}>
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary — Fusion 2025 felicitation */}
          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
            alignItems: 'center',
            padding: 'clamp(1.25rem, 2.5vw, 2rem)',
            background: '#F5F4F0',
            border: '0.5px solid #E5E4E0',
            borderRadius: '16px',
          }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                gap: '0.5rem', marginBottom: '1rem',
                padding: '0.35rem 0.875rem',
                background: 'rgba(83,74,183,0.06)',
                border: '0.5px solid rgba(83,74,183,0.15)',
                borderRadius: '30px',
              }}>
                <span style={{
                  fontSize: '10px', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#534AB7', fontWeight: 600,
                }}>
                  Felicitation · January 2025
                </span>
              </div>
              <h3 style={{
                fontFamily: S.serif,
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                color: '#111111', fontWeight: 400,
                lineHeight: 1.25, marginBottom: '0.75rem',
              }}>
                Felicitated by Sarchitnis Adv. Nitin Baburao Thakare,<br />
                <em>Maratha Vidya Prasarak Samaj.</em>
              </h3>
              <p style={{
                fontSize: '14px', color: '#666666',
                lineHeight: 1.7, fontWeight: 300,
              }}>
                Recognised on stage at Fusion 2025, KBT College Nashik — the same
                event whose promotion reel crossed one million organic views. The
                moment that made four years of consistent work feel concrete.
              </p>
            </div>
            <div style={{
              borderRadius: '12px', overflow: 'hidden',
              border: '0.5px solid #E5E4E0',
            }}>
              <img
                src="/assets/images/achievements/Crossed 1 Million Views on Social Media event promotion reel of Fusion 2k25.jpg"
                alt="Felicitation at Fusion 2025"
                style={{
                  width: '100%', aspectRatio: '4/3',
                  objectFit: 'cover', display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          05. BEYOND THE WORK — The person, 3 lines
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ ...SECTION_ALT, ...LIGHT_BORDER }}>
        <div style={{ ...CONTAINER, maxWidth: '720px' }}>
          <div className="reveal">
            <span style={SECTION_LABEL}>Beyond the work</span>

            <p style={{
              fontFamily: S.serif, fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
              color: '#111111', lineHeight: 1.5,
              fontWeight: 400,
              marginBottom: '1.75rem',
            }}>
              "The best version of yourself isn't found — it's built, incrementally,
              through decisions most people are too comfortable to make."
            </p>

            <p style={{
              fontSize: '15px', color: '#666666',
              lineHeight: 1.8, fontWeight: 300,
              marginBottom: '1.5rem',
            }}>
              I sing. I listen to podcasts at 2x. I believe Virat Kohli was right —
              even a 1% chance is enough to go all in. Outside of work and study,
              I run two Instagram accounts: one for thoughts on tech, MBA life, and
              careers; one for cinema and editing craft. Neither is what I do.
              Both are part of who I am.
            </p>

            {/* Text links — no cards, no avatars */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.instagram.com/_thedurvesh/"
                target="_blank" rel="noreferrer"
                style={{
                  fontSize: '13px', color: '#999999',
                  textDecoration: 'none', letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#534AB7'}
                onMouseLeave={e => e.target.style.color = '#999999'}
              >
                @_thedurvesh ↗
              </a>
              <a
                href="https://www.instagram.com/cinesyncbydurvesh/"
                target="_blank" rel="noreferrer"
                style={{
                  fontSize: '13px', color: '#999999',
                  textDecoration: 'none', letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#534AB7'}
                onMouseLeave={e => e.target.style.color = '#999999'}
              >
                @cinesyncbydurvesh ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          06. CONTACT — Dark, minimal, one action
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{
        padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,4rem)',
        background: '#0C0C0F',
        ...DARK_BORDER,
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div className="reveal">
            <span style={{
              ...SECTION_LABEL,
              color: 'rgba(255,255,255,0.25)',
            }}>
              Connect
            </span>

            <h2 style={{
              fontFamily: S.serif,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: '#FFFFFF', fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}>
              Let's talk.
            </h2>

            <p style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.7, fontWeight: 300,
              marginBottom: '2.5rem',
            }}>
              Whether you're a recruiter, a collaborator, or someone
              figuring out their path — I read everything.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(1.25rem, 3vw, 2.5rem)',
              flexWrap: 'wrap',
            }}>
              {[
                { label: 'Email',              href: 'mailto:durveshpatilit@gmail.com' },
                { label: 'LinkedIn',           href: 'https://www.linkedin.com/in/durvesh-patil-628069214/' },
                { label: '@_thedurvesh',       href: 'https://www.instagram.com/_thedurvesh/' },
                { label: '@cinesyncbydurvesh', href: 'https://www.instagram.com/cinesyncbydurvesh/' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank" rel="noreferrer"
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.35)',
                    textDecoration: 'none',
                    fontWeight: 300,
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s',
                    minHeight: '44px',
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={e => e.target.style.color = '#FFFFFF'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
