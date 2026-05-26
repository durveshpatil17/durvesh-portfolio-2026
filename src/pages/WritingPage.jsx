import React, { useState } from 'react';
import { S } from '../theme';
import { articles } from '../data/articles';

const CATEGORIES = ['All', 'Mindset', 'Goals', 'Career', 'Reflection', 'Future', 'Technology'];

export default function WritingPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? articles : articles.filter(a => a.category === active);

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAF8', paddingTop: '60px' }}>

      {/* ── Page header ── */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,4rem)', background: '#FAFAF8', borderBottom: '0.5px solid #E5E4E0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label">Writing</span>
          <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.4rem,6vw,5rem)', color: '#111111', fontWeight: 400, lineHeight: 1.05, maxWidth: '680px', marginBottom: '1.25rem' }}>
            Ideas on mindset,<br /><span style={{ fontStyle: 'italic' }}>career, and ambition.</span>
          </h1>
          <p style={{ color: '#666', fontSize: 'clamp(0.95rem,1.5vw,1.05rem)', fontWeight: 300, lineHeight: 1.7, maxWidth: '500px' }}>
            I write when I have something real to say. These are articles on the things I think about — mindset, careers, technology, and the world changing around us.
          </p>
        </div>
      </section>

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
          {filtered.map((article, i) => (
            <div key={article.id} style={{
              borderTop: '0.5px solid #E5E4E0',
              display: 'grid', gridTemplateColumns: '1fr 3.5rem',
              gap: '1.5rem', alignItems: 'center',
              padding: 'clamp(1.25rem,2.5vw,2rem) 0',
              cursor: article.status === 'coming-soon' ? 'default' : 'pointer',
              transition: 'opacity 0.2s',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="tag-pill">{article.category}</span>
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
          ))}
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
              Engineering grad from KBT College Nashik. MBA student at SCIT Pune, Symbiosis International University. Content creator with 4M+ organic views across @_thedurvesh and @cinesyncbydurvesh. I write about mindset, careers, and the world changing around us.
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
