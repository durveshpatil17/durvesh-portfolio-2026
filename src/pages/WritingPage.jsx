import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { S } from '../theme';
import { articles } from '../data/articles';

const CATEGORIES = [
  'All',
  'Technology & Business',
  'IT Risk, Security & Governance',
  'AI & Emerging Technology',
  'Enterprise Systems & Digital Operations',
  'Projects, Experiments & Case Notes',
];

export default function WritingPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? articles : articles.filter(a => a.category === active);

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAF8', paddingTop: '60px' }}>

      {/* ── Page header ── */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8', borderBottom: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label">Writing</span>
          <h1 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(2.8rem,7vw,6rem)', color: '#111111', fontWeight: 400, lineHeight: 1.05, maxWidth: '700px', marginBottom: '1.5rem' }}>
            Technology inside<br />
            <em>business environments.</em>
          </h1>
          <p style={{ color: '#666', fontSize: 'clamp(0.95rem,1.5vw,1.05rem)', fontWeight: 300, lineHeight: 1.7, maxWidth: '500px' }}>
            I write about technology from a business-first lens — covering enterprise systems, IT risk, information security, AI in business, product adoption, and the broader shifts shaping how organizations operate and make decisions.
          </p>
        </div>
      </section>

      {/* Start Here — featured article */}
      {(() => {
        const featured = articles.find(a => a.featured);
        if (!featured) return null;
        const CardComponent = featured.status === 'published' ? Link : 'div';
        const cardProps = featured.status === 'published' ? { to: `/writing/${featured.slug}`, style: { textDecoration: 'none', display: 'block' } } : {};
        
        return (
          <div className="reveal" style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <CardComponent {...cardProps}>
              <div style={{
                background: '#FFFFFF',
                border: '0.5px solid #E5E4E0',
                borderRadius: '20px',
                padding: 'clamp(1.75rem,3vw,2.75rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
                gap: 'clamp(1.5rem,3vw,3rem)',
                alignItems: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
                ...(featured.status === 'published' ? { cursor: 'pointer' } : {})
              }}
              onMouseEnter={e => { if(featured.status==='published') { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 30px rgba(0,0,0,0.04)'; } }}
              onMouseLeave={e => { if(featured.status==='published') { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; } }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{
                    fontSize: '10px', fontWeight: 600,
                    letterSpacing: '0.16em', textTransform: 'uppercase',
                    padding: '4px 12px', borderRadius: '30px',
                    background: '#111111', color: '#FFFFFF',
                  }}>
                    Start here
                  </span>
                  <span style={{
                    fontSize: '10px', letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: '#999999',
                  }}>
                    {featured.readTime} read
                  </span>
                </div>
                <h2 style={{
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontSize: 'clamp(1.3rem,2.5vw,2rem)',
                  color: '#111111', fontWeight: 400,
                  lineHeight: 1.2, marginBottom: '1rem',
                }}>
                  {featured.title}
                </h2>
                <p style={{
                  fontSize: '15px', color: '#666666',
                  lineHeight: 1.7, fontWeight: 300,
                  marginBottom: '1.5rem',
                }}>
                  {featured.excerpt}
                </p>
                <span style={{
                  fontSize: '12px', color: featured.status === 'published' ? S.accent : '#999999',
                  letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500
                }}>
                  {featured.status === 'published' ? 'Read Article →' : 'Coming soon'}
                </span>
              </div>
              <div style={{
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontSize: 'clamp(5rem,12vw,9rem)',
                color: '#111111', opacity: 0.04,
                lineHeight: 1, fontStyle: 'italic',
                textAlign: 'right',
                userSelect: 'none',
              }}>
                01
              </div>
            </div>
          </CardComponent>
        </div>
        );
      })()}

      {/* ── Category filters ── */}
      <div style={{ borderBottom: '0.5px solid #E5E4E0', background: '#FAFAF8', padding: '0 clamp(1.25rem,5vw,4rem)', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'flex', gap: 0, minWidth: 'max-content' }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '1rem 1.1rem',
                fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500,
                color: active === cat ? S.accent : '#999',
                borderBottom: active === cat ? `2px solid ${S.accent}` : '2px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
                whiteSpace: 'nowrap',
              }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Articles list ── */}
      <section style={{ padding: 'clamp(2rem,4vw,4rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          {filtered.map((article, i) => {
            const ItemComponent = article.status === 'published' ? Link : 'div';
            const itemProps = article.status === 'published' ? { to: `/writing/${article.slug}`, style: { textDecoration: 'none', display: 'block' } } : {};
            
            return (
              <ItemComponent key={article.id} {...itemProps}>
                <div style={{
                  borderTop: '0.5px solid #E5E4E0',
                  display: 'grid', gridTemplateColumns: '1fr 3.5rem',
                  gap: '1.5rem', alignItems: 'center',
                  padding: 'clamp(1.25rem,2.5vw,2rem) 0',
                  cursor: article.status === 'coming-soon' ? 'default' : 'pointer',
                  transition: 'background 0.2s, padding-left 0.2s',
                }}
                onMouseEnter={e => { if(article.status==='published') { e.currentTarget.style.paddingLeft='1rem'; e.currentTarget.style.background='rgba(0,0,0,0.01)'; } }}
                onMouseLeave={e => { if(article.status==='published') { e.currentTarget.style.paddingLeft='0'; e.currentTarget.style.background='transparent'; } }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="tag-pill" style={{
                    marginBottom: '0.4rem',
                    display: 'inline-block',
                  }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: '10px', color: '#BBB', letterSpacing: '0.06em' }}>{article.readTime} read</span>
                  {article.status === 'coming-soon' && (
                    <span className="tag-pill" style={{ background: '#F0EFF0', color: '#999', borderColor: '#E5E4E0' }}>Coming soon</span>
                  )}
                </div>
                <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.05rem,2.5vw,1.7rem)', color: '#111111', fontWeight: 400, lineHeight: 1.25, marginBottom: '0.5rem' }}>{article.title}</h2>
                <p style={{ color: '#888', fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.excerpt}</p>
              </div>
              <div style={{ flexShrink: 0, textAlign: 'right' }}>
                <div style={{ fontFamily: S.serif, fontSize: 'clamp(2rem,5vw,3.5rem)', color: S.accent, opacity: 0.1, lineHeight: 1, fontWeight: 400 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          </ItemComponent>
            );
          })}
          {/* Last border */}
          <div style={{ borderTop: '0.5px solid #E5E4E0' }} />
        </div>
      </section>

      {/* ── Author card ── */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,4rem)', background: '#111118', borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 'clamp(2rem,4vw,4rem)', alignItems: 'center' }}>
          <div style={{ aspectRatio: '4/3', maxWidth: '320px', borderRadius: '16px', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 4px 32px rgba(0,0,0,0.3)' }}>
            <img src="/assets/images/personal/Personal photo 6.jpg" alt="Durvesh H. Patil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <span className="sec-label" style={{ color: 'rgba(255,255,255,0.38)' }}>About the author</span>
            <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: '#FFFFFF', fontWeight: 400, marginBottom: '1rem' }}>Durvesh H. Patil</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(0.9rem,1.5vw,1rem)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
              MBA-ITBM student at SCIT Pune, Symbiosis International University. Engineering background from KBT College Nashik. I write about technology from a business-first lens — enterprise systems, IT risk, information security, AI in business, and the decisions that shape how organizations operate. Twice a month.
            </p>
            <a href="https://www.instagram.com/_thedurvesh/" target="_blank" rel="noreferrer"
              style={{ color: '#AFA9EC', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              Follow on Instagram →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
