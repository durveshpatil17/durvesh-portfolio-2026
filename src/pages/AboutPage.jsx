import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Megaphone, TrendingUp } from 'lucide-react';
import { S, CONTAINER_CLASSES } from '../theme';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray('.about-reveal').forEach((el) => {
          gsap.fromTo(el, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
          });
        });
      }, containerRef);
      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray('.about-reveal').forEach((el) => {
          gsap.fromTo(el, { y: 20, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
          });
        });
      }, containerRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <main ref={containerRef} style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '8rem', color: '#ffffff' }}>
      <div className={CONTAINER_CLASSES}>

        {/* ── BLOCK 1: PROFILE HERO ── */}
        <section className="about-reveal flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-24 md:mb-32">
          <div className="flex-shrink-0 relative">
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #ffffff' }}>
              <img src="/assets/images/personal/Profile photo.jpg" alt="Durvesh H. Patil" loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, fontWeight: 400, marginBottom: '0.75rem' }}>
              Durvesh Hrudyesh Patil
            </h1>
            <p style={{ color: S.gold, fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', fontWeight: 500, marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
              AI Engineer · Digital Brand Builder · MBA Student at SCIT Pune
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', lineHeight: 1.6, fontWeight: 400, maxWidth: '800px' }}>
              Born and brought up in Raver, Maharashtra. I build AI systems, command digital attention, and lead with a founder's mindset. Currently bridging deep tech and business strategy as an MBA student at SCIT Pune.
            </p>
          </div>
        </section>

        {/* ── BLOCK 2: THE STORY (Timeline) ── */}
        <section className="about-reveal mb-24 md:mb-32">
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', marginBottom: '3rem', fontWeight: 500 }}>
            The Story
          </p>
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Timeline Left */}
            <div className="flex-1 relative" style={{ paddingLeft: '1.5rem', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
              
              {[
                { year: 'Early', title: 'Raver, Maharashtra', desc: "Where it all began. Born and raised in Raver, built curiosity early for technology, people, and how things work at scale." },
                { year: '2020', title: 'SSC · Nehru Montessori Senior Secondary School, Burhanpur', desc: "The foundation years that shaped discipline and ambition." },
                { year: '2022', title: 'HSC', desc: "Higher secondary completed. Chose the engineering path with clear intent." },
                { year: '2022–2026', title: "B.E. Information Technology · MVPS's KBT College of Engineering, Nashik", desc: "Four years of building — technically and personally. Hands-on projects in AI, FinTech, and digital systems. Roll No. 18, BE-IT Batch 2025–26." },
                { year: '2026–present', title: 'MBA (IT Business Management) · SCIT Pune', desc: "Nationally selected on March 7, 2026 for the MBA (ITBM) program at Symbiosis Centre for Information Technology, Pune — one of India's top B-schools for tech management. Currently pursuing." },
              ].map((item, i) => (
                <div key={i} className="mb-12 relative">
                  {/* Timeline Dot */}
                  <div style={{ position: 'absolute', left: '-1.5rem', top: '0.25rem', transform: 'translateX(-50%)', width: '9px', height: '9px', borderRadius: '50%', background: S.gold }} />
                  
                  <span style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', fontWeight: 500 }}>{item.year}</span>
                  <h3 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 500, marginBottom: '0.75rem', lineHeight: 1.4 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontWeight: 400 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Float Right Image Desktop */}
            <div className="hidden lg:block w-[400px] flex-shrink-0">
              <div style={{ position: 'sticky', top: '120px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                <img src="/assets/images/personal/Personal Photo 1.webp" alt="Durvesh Patil Portrait" loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOCK 3: WHAT I DO (3-col card grid) ── */}
        <section className="about-reveal mb-24 md:mb-32">
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', marginBottom: '2rem', fontWeight: 500 }}>
            What I Do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
              <Cpu size={24} color={S.gold} style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 500, marginBottom: '1rem' }}>AI Engineering</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontWeight: 400 }}>
                Builds scalable AI systems. Live algorithmic trading dispatcher on AWS. Published researcher in NLP and FinTech.
              </p>
            </div>

            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
              <Megaphone size={24} color={S.gold} style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 500, marginBottom: '1rem' }}>Digital Brand Building</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontWeight: 400 }}>
                Social Media Head for Techfest ('24, '25) and Fusion ('25, '26). Engineered campaigns reaching 3.6M+ organically.
              </p>
            </div>

            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
              <TrendingUp size={24} color={S.gold} style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 500, marginBottom: '1rem' }}>Business & FinTech</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontWeight: 400 }}>
                Scaled a family MFD business to ₹13L+ AUM. Bridges code and capital with a founder's lens.
              </p>
            </div>

          </div>
        </section>

        {/* ── BLOCK 4: LEADERSHIP & CAMPUS ROLES ── */}
        <section className="about-reveal mb-24 md:mb-32">
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Leadership & Campus Roles
          </p>
          
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontWeight: 400, maxWidth: '900px', marginBottom: '3rem' }}>
            As Social Media Head across four major campus events, I engineered digital attention systems — scripting reels, coordinating multi-team campaigns, and scaling event reach to 3.6M+ organically.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { img: "Social Media Head Techfest 2k24.jpg", role: "Social Media Head", org: "Techfest · KBTCOE", year: "2024", desc: "Led complete digital operations, scripting, and audience engagement." },
              { img: "Social Media Head Techfest 2k25.jpg", role: "Social Media Head", org: "Techfest · KBTCOE", year: "2025", desc: "Scaled event reach through high-engagement reels and coordinated campaigns." },
              { img: "Social Media Head at Fusion 2k26.jpg", role: "Social Media Head", org: "Fusion · KBTCOE", year: "2026", desc: "Orchestrated event branding campaign improving digital visibility massively." },
              { img: "Techfest 2k25 Candid.jpg", role: "On-ground Execution", org: "Techfest 2k25", year: "2025", desc: "Real-time coordination across technical and cultural teams." },
              { img: "Photo of me presenting Project in front of whole IT department students.jpg", role: "Project Presentation", org: "IT Dept · KBTCOE", year: "2025", desc: "Presented capstone AI project to the entire IT department." }
            ].map((role, i) => (
              <div key={i} style={{ 
                display: 'flex', alignItems: 'center', gap: '1.5rem', 
                padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' 
              }}>
                <div style={{ width: '80px', height: '80px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={`/assets/images/achievements/${role.img}`} alt={role.role} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 500, marginBottom: '0.25rem' }}>{role.role}</h4>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: S.gold, fontWeight: 500 }}>{role.org}</span>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>{role.year}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>{role.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOCK 5: ACHIEVEMENTS & FELICITATIONS ── */}
        <section className="about-reveal mb-24 md:mb-32">
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', marginBottom: '2rem', fontWeight: 500 }}>
            Achievements & Felicitations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "Most Enthusiastic Personality Felicitation.JPG", title: "Most Enthusiastic Personality", label: "Special Achievers Award · KBTCOE · Apr 2026" },
              { img: "Special Achievers award- Most outstanding Content creator award.jpg", title: "Outstanding Content Creator", label: "Felicitated by Director Dr. Satish R. Devane · KBTCOE" },
              { img: "Felicitation By HOD.jpg", title: "Felicitation by HOD", label: "Recognised by Head of Department · KBTCOE" },
              { img: "Felicitated at Nivesh Mantrana event in indore for Social Media Promotion.jpg", title: "Felicitated at Nivesh Mantrana", label: "Social Media Promotion · Indore · 2024" },
              { img: "Felicitation at Nivesh Mantrana 2k24 for Event Volunteering.jpg", title: "Event Volunteering Recognition", label: "Nivesh Mantrana 2k24 · Indore" },
              { img: "award receiving candid photo at nivesh mantrana 2k24.jpg", title: "Award Receiving", label: "Nivesh Mantrana 2k24 · Candid" },
              { img: "Crossed 1 Million Views on Social Media event promotion reel of Fusion 2k25.jpg", title: "1 Million Views", label: "Fusion 2k25 Promo Reel · Organic Reach" }
            ].map((achieve, i) => (
              <div key={i} className="hover:-translate-y-1 transition-transform duration-300" 
                style={{ display: 'flex', flexDirection: 'column', height: '360px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ height: '60%', width: '100%', overflow: 'hidden' }}>
                  <img src={`/assets/images/achievements/${achieve.img}`} alt={achieve.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ height: '40%', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '14px', color: '#ffffff', fontWeight: 500, marginBottom: '0.5rem', lineHeight: 1.3 }}>{achieve.title}</h4>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: 400, lineHeight: 1.4 }}>{achieve.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOCK 6: BEYOND THE CLASSROOM ── */}
        <section className="about-reveal mb-24 md:mb-32">
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', marginBottom: '3rem', fontWeight: 500 }}>
            Beyond the Classroom
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { img: "achievements/Fusion 2k25 Cricket tournament winner.jpg", title: "Cricket", desc: "Winner, Fusion 2k25 Cricket Tournament · Institute Level · Jan 31, 2025" },
              { img: "achievements/NSS Camp Best Kitchen award.jpg", title: "NSS · National Service Scheme", desc: "Active NSS volunteer. Team awarded Best Kitchen at NSS Camp — a reflection of operational discipline, coordination, and shared ownership under demanding conditions." },
              { img: "achievements/Participation in Smart India Hackathon.jpg", title: "Smart India Hackathon", desc: "Participated in SIH — National Level. Applied problem-solving under real-world constraints with a cross-functional team." },
              { img: "personal/CineSync.jpg", title: "CineSync · Personal Creative Account", desc: "A personal page for cinematic content, reels, and visual storytelling. Where creativity meets the lens — separate from academics, purely personal passion." },
              { img: "achievements/Photo with college principal on matching outfits in college cultural fest.jpg", title: "Cultural Moments", desc: "Part of the cultural fabric of KBTCOE — from matching outfits with the principal at fests to being the digital face of every major campus event." },
              { img: "achievements/Nivesh mantrana event attending photo.jpg", title: "Nivesh Mantrana · Indore", desc: "Attended and volunteered at Nivesh Mantrana, a national-level finance and investment awareness event in Indore." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 items-start">
                <div style={{ width: '100%', sm: { width: '160px' }, height: '200px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden' }} className="sm:w-[160px]">
                  <img src={`/assets/images/${item.img}`} alt={item.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 500, marginBottom: '0.75rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontWeight: 400 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOCK 7: RESEARCH CALLOUT ── */}
        <section className="about-reveal mb-24 md:mb-32">
          <div style={{ 
            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', 
            borderLeft: `4px solid ${S.gold}`, padding: '2rem', borderRadius: '12px',
            display: 'flex', flexDirection: 'column', gap: '1.5rem'
          }} className="md:flex-row md:items-center md:justify-between">
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 400, fontFamily: S.serif, letterSpacing: '0.02em' }}>
              Published Researcher · IJSMT · Impact Factor 3.8 · AI & FinTech
            </h3>
            <a href="/#research" style={{ 
              display: 'inline-block', padding: '0.75rem 1.5rem', background: '#ffffff', color: '#0a0a0a', 
              borderRadius: '999px', fontSize: '0.85rem', fontWeight: 500, flexShrink: 0, textAlign: 'center' 
            }}>
              View Publications →
            </a>
          </div>
        </section>

        {/* ── BLOCK 8: CLOSING QUOTE ── */}
        <section className="about-reveal text-center pb-16">
          <p style={{ 
            fontFamily: S.serif, fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', color: '#ffffff', 
            lineHeight: 1.4, fontStyle: 'italic', fontWeight: 400, maxWidth: '1000px', margin: '0 auto 1.5rem' 
          }}>
            "I don't just write code — I architect systems, build audiences, and lead from the front. Every role I've taken has been a step toward becoming an AI product leader who understands people as much as technology."
          </p>
          <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>— Durvesh H. Patil</span>
        </section>

      </div>
    </main>
  );
}
