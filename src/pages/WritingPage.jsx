import React, { useState } from 'react';
import { S } from '../theme';
import { articles } from '../data/articles';

const CATEGORIES = ['All', 'Mindset', 'Goals', 'Career', 'Reflection', 'Future', 'Technology'];

export default function WritingPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? articles : articles.filter(a => a.category === active);

  return (
    <main style={{ minHeight: '100vh', paddingTop: '6rem' }}>

      {/* Header */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <p className="app-label" style={{ marginBottom: '1rem' }}>Writing</p>
          <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.8rem,7vw,6rem)', color: S.text, fontWeight: 400, lineHeight: 1.05, maxWidth: '700px', marginBottom: '1.5rem' }}>
            Ideas on mindset,<br /><span style={{ fontStyle: 'italic' }}>career, and ambition.</span>
          </h1>
          <p style={{ color: S.muted, fontSize: 'clamp(0.95rem,1.5vw,1.1rem)', fontWeight: 300, lineHeight: 1.7, maxWidth: '520px' }}>
            I write when I have something real to say. These are articles on the things I think about — mindset, careers, technology, and the world changing around us.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <div style={{ borderTop: '1px solid S.border', borderBottom: '1px solid S.border', padding: '0 clamp(1.25rem,5vw,5rem)', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', gap: '0', minWidth: 'max-content' }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '1rem 1.25rem',
                fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500,
                color: active === cat ? S.accent : S.muted,
                borderBottom: active === cat ? `2px solid ${S.accent}` : '2px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
                whiteSpace: 'nowrap',
              }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles list */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          {filtered.map((article, i) => (
            <div key={article.id} style={{
              borderTop: '1px solid S.border',
              display: 'grid', gridTemplateColumns: '1fr auto',
              gap: '2rem', alignItems: 'center',
              padding: 'clamp(1.5rem,2.5vw,2.25rem) 0',
              cursor: article.status === 'coming-soon' ? 'default' : 'pointer',
              transition: 'background 0.2s',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                  <span className="app-pill">{article.category}</span>
                  <span style={{ fontSize: '0.6rem', color: S.muted, letterSpacing: '0.08em' }}>{article.readTime} read</span>
                  {article.status === 'coming-soon' && (
                    <span className="app-pill" style={{ background: 'rgba(255,255,255,0.05)', color: S.muted, borderColor: 'rgba(255,255,255,0.08)' }}>Coming soon</span>
                  )}
                </div>
                <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.1rem,2.5vw,1.75rem)', color: S.text, fontWeight: 400, lineHeight: 1.25, marginBottom: '0.6rem' }}>{article.title}</h2>
                <p style={{ color: S.muted, fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.excerpt}</p>
              </div>
              <div style={{ flexShrink: 0, textAlign: 'right' }}>
                <div style={{ fontFamily: S.serif, fontSize: 'clamp(2.5rem,5vw,4rem)', color: S.accent, opacity: 0.12, lineHeight: 1, fontWeight: 400 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Author card */}
      <section style={{ borderTop: '1px solid S.border', background: '#13131A', padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 'clamp(2rem,4vw,4rem)', alignItems: 'center' }}>
          <div style={{ aspectRatio: '4/3', maxWidth: '320px', borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid S.border' }}>
            <img src="/assets/images/personal/Personal photo 6.jpg" alt="Durvesh H. Patil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <p className="app-label" style={{ marginBottom: '1rem' }}>About the author</p>
            <h3 style={{ fontFamily: S.serif, fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: S.text, fontWeight: 400, marginBottom: '1rem' }}>Durvesh H. Patil</h3>
            <p style={{ color: S.muted, fontSize: 'clamp(0.9rem,1.5vw,1.05rem)', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.5rem' }}>
              Engineering grad from KBT College Nashik. MBA student at SCIT Pune, Symbiosis International University. Content creator with 4M+ organic views across @_thedurvesh and @cinesyncbydurvesh. I write about mindset, careers, and the world changing around us.
            </p>
            <a href="https://www.instagram.com/_thedurvesh/" target="_blank" rel="noreferrer"
              style={{ color: S.accent, fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.06em' }}>
              Follow on Instagram →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
