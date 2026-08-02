import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { S } from '../theme';
import { articles } from '../data/articles';
import { posts } from '../data/posts';

export default function ArticlePage() {
  const { slug } = useParams();
  
  // Find article metadata
  const article = articles.find(a => a.slug === slug);
  const content = posts[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article || !content) {
    return (
      <main style={{ minHeight: '100vh', background: '#FAFAF8', paddingTop: '120px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: S.serif, fontSize: '3rem', color: '#111111' }}>Article not found</h1>
        <Link to="/writing" style={{ color: S.accent, textDecoration: 'none', marginTop: '2rem', display: 'inline-block' }}>
          ← Back to Writing
        </Link>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAF8', paddingTop: '100px', paddingBottom: '100px' }}>
      <article style={{ maxWidth: '680px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 2rem)' }}>
        
        <Link to="/writing" style={{ 
          fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', 
          color: '#999', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          marginBottom: '3rem', transition: 'color 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#111'}
        onMouseLeave={e => e.currentTarget.style.color = '#999'}>
          ← Back
        </Link>

        <motion.header 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase',
              padding: '4px 12px', borderRadius: '30px',
              background: article.category === 'The Governor' ? 'rgba(83,74,183,0.08)' : 'rgba(0,0,0,0.05)',
              color: article.category === 'The Governor' ? '#534AB7' : '#555555',
            }}>
              {article.category}
            </span>
            <span style={{ fontSize: '11px', color: '#999', letterSpacing: '0.05em' }}>
              {article.readTime} read
            </span>
          </div>

          <h1 style={{ 
            fontFamily: 'Instrument Serif, Georgia, serif', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            color: '#111111', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem' 
          }}>
            {article.title}
          </h1>

          <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7, fontWeight: 300, fontStyle: 'italic' }}>
            {article.excerpt}
          </p>
        </motion.header>

        <div className="article-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {content.map((block, index) => {
            if (block.type === 'component') {
              return <React.Fragment key={index}>{block.component}</React.Fragment>;
            }
            if (block.type === 'references') {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '0.5px solid #E5E4E0' }}
                >
                  <h3 style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#999999', marginBottom: '1.25rem' }}>
                    References & Sources
                  </h3>
                  <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', margin: 0 }}>
                    {block.items.map((refItem, rIdx) => (
                      <li key={rIdx} style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6, fontWeight: 300 }}>
                        {refItem}
                      </li>
                    ))}
                  </ol>
                </motion.div>
              );
            }
            if (block.type === 'heading') {
              return (
                <motion.h2 
                  key={index} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  style={{ 
                    fontFamily: 'Instrument Serif, Georgia, serif', 
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                    color: '#111111', fontWeight: 400, 
                    marginTop: '2rem', marginBottom: '0.5rem' 
                  }}
                >
                  {block.content}
                </motion.h2>
              );
            }
            if (block.type === 'bold') {
              return (
                <motion.p 
                  key={index} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  style={{ 
                    fontSize: '16px', color: '#111', lineHeight: 1.8, fontWeight: 500 
                  }}
                >
                  {block.content}
                </motion.p>
              );
            }
            return (
              <motion.p 
                key={index} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{ 
                  fontSize: '16px', color: '#444', lineHeight: 1.8, fontWeight: 300 
                }}
              >
                {block.content}
              </motion.p>
            );
          })}
        </div>
      </article>
    </main>
  );
}

