import React from 'react';
import { motion } from 'framer-motion';

const S_SERIF = 'Instrument Serif, Georgia, serif';
const S_ACCENT = '#534AB7';

export function IkeaTransformationInfographic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        background: '#141418',
        border: '0.5px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: 'clamp(1.5rem, 3vw, 2.25rem)',
        margin: '2.5rem 0',
        color: '#FFFFFF',
      }}
    >
      <div style={{
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: S_ACCENT,
        marginBottom: '1.25rem'
      }}>
        CASE STUDY — THE IKEA VALUE LOOP
      </div>

      <div className="ikea-flow-container">
        {/* Step 1: Muted Card */}
        <div className="ikea-card" style={{
          background: '#18181D',
          borderRadius: '12px',
          padding: '1.25rem',
          border: '0.5px solid rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ fontFamily: S_SERIF, fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '0.5rem' }}>
            8,500
          </div>
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: '0.35rem' }}>
            Roles Automated
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4, fontWeight: 300 }}>
            Routine customer service tasks delegated to AI chatbot.
          </div>
        </div>

        {/* Desktop Connector 1 */}
        <div className="ikea-connector-desktop">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={S_ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="12" x2="20" y2="12" />
            <polyline points="14 6 20 12 14 18" />
          </svg>
        </div>

        {/* Mobile Connector 1 */}
        <div className="ikea-connector-mobile">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={S_ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="4" x2="12" y2="20" />
            <polyline points="6 14 12 20 18 14" />
          </svg>
        </div>

        {/* Step 2: Highlighted Pivot Card */}
        <div className="ikea-card" style={{
          background: '#1E1E24',
          borderRadius: '12px',
          padding: '1.25rem',
          border: `0.5px solid ${S_ACCENT}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{
            display: 'inline-block',
            width: 'fit-content',
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            background: S_ACCENT,
            color: '#FFFFFF',
            padding: '3px 9px',
            borderRadius: '12px',
            marginBottom: '0.75rem'
          }}>
            Retrained
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.35rem' }}>
            Design Advisors
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.4, fontWeight: 300 }}>
            Employees upskilled into remote room planning & consultation.
          </div>
        </div>

        {/* Desktop Connector 2 */}
        <div className="ikea-connector-desktop">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={S_ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="12" x2="20" y2="12" />
            <polyline points="14 6 20 12 14 18" />
          </svg>
        </div>

        {/* Mobile Connector 2 */}
        <div className="ikea-connector-mobile">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={S_ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="4" x2="12" y2="20" />
            <polyline points="6 14 12 20 18 14" />
          </svg>
        </div>

        {/* Step 3: Muted Card */}
        <div className="ikea-card" style={{
          background: '#18181D',
          borderRadius: '12px',
          padding: '1.25rem',
          border: '0.5px solid rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ fontFamily: S_SERIF, fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: S_ACCENT, lineHeight: 1, marginBottom: '0.5rem' }}>
            $1.3B
          </div>
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: '0.35rem' }}>
            New Revenue Stream
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4, fontWeight: 300 }}>
            Direct revenue unlocked by redirecting human effort into sales.
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function AlphabetCapexInfographic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        background: '#141418',
        border: '0.5px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: 'clamp(1.5rem, 3vw, 2.25rem)',
        margin: '2.5rem 0',
        color: '#FFFFFF',
      }}
    >
      <div style={{
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: S_ACCENT,
        marginBottom: '0.5rem'
      }}>
        ALPHABET Q2 2026 — CAPITAL ALLOCATION GAP
      </div>

      <div style={{
        fontFamily: S_SERIF,
        fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
        color: '#FFFFFF',
        fontWeight: 400,
        marginBottom: '1.75rem'
      }}>
        AI Infrastructure Capex vs. Operating Cash Flow
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Bar 1 */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
              AI Infrastructure Capex (Chips, Servers, Data Centers)
            </span>
            <span style={{ fontFamily: S_SERIF, fontSize: '1.6rem', color: S_ACCENT, lineHeight: 1 }}>
              $44.9B
            </span>
          </div>
          <div style={{ width: '100%', height: '12px', background: '#1E1E24', borderRadius: '6px', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ height: '100%', background: S_ACCENT, borderRadius: '6px' }}
            />
          </div>
        </div>

        {/* Bar 2 */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
              Operating Cash Flow
            </span>
            <span style={{ fontFamily: S_SERIF, fontSize: '1.6rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1 }}>
              $39.1B
            </span>
          </div>
          <div style={{ width: '100%', height: '12px', background: '#1E1E24', borderRadius: '6px', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '87.1%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              style={{ height: '100%', background: 'rgba(255,255,255,0.3)', borderRadius: '6px' }}
            />
          </div>
        </div>
      </div>

      <div style={{
        marginTop: '1.75rem',
        paddingTop: '1rem',
        borderTop: '0.5px solid rgba(255,255,255,0.08)',
        fontSize: '13px',
        color: 'rgba(255,255,255,0.5)',
        fontStyle: 'italic',
        lineHeight: 1.5
      }}>
        "First negative free cash flow quarter since Alphabet's 2004 IPO."
      </div>
    </motion.div>
  );
}

export function GenAiRoiMismatchInfographic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        background: '#141418',
        border: '0.5px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: 'clamp(1.5rem, 3vw, 2.25rem)',
        margin: '2.5rem 0',
        color: '#FFFFFF',
      }}
    >
      <div style={{
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: S_ACCENT,
        marginBottom: '0.5rem'
      }}>
        MIT 2025 STUDY — THE GENAI DIVIDE
      </div>

      <div style={{
        fontFamily: S_SERIF,
        fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
        color: '#FFFFFF',
        fontWeight: 400,
        marginBottom: '1.5rem'
      }}>
        Where AI Budget Goes vs. Where ROI Shows Up
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.25rem',
        marginBottom: '1.5rem'
      }}>
        {/* Column 1 */}
        <div style={{
          background: '#1E1E24',
          borderRadius: '12px',
          padding: '1.25rem',
          border: '0.5px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '0.4rem'
          }}>
            Front-Office / Hype Driven
          </div>
          <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '1rem' }}>
            Sales & Marketing
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
                <span>Budget Share</span>
                <span style={{ color: '#FFFFFF', fontWeight: 500 }}>Highest</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: 'rgba(255,255,255,0.4)' }} />
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
                <span>Financial ROI</span>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>Weakest</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '15%', height: '100%', background: 'rgba(255,255,255,0.2)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div style={{
          background: '#1E1E24',
          borderRadius: '12px',
          padding: '1.25rem',
          border: `0.5px solid ${S_ACCENT}`
        }}>
          <div style={{
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: S_ACCENT,
            marginBottom: '0.4rem'
          }}>
            Back-Office / Operational
          </div>
          <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '1rem' }}>
            Customer Service & HR Ops
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
                <span>Budget Share</span>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Lower</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '35%', height: '100%', background: 'rgba(255,255,255,0.4)' }} />
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
                <span>Financial ROI</span>
                <span style={{ color: S_ACCENT, fontWeight: 600 }}>Strongest</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '90%', height: '100%', background: S_ACCENT }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        fontSize: '12px',
        color: 'rgba(255,255,255,0.5)',
        lineHeight: 1.5,
        borderTop: '0.5px solid rgba(255,255,255,0.08)',
        paddingTop: '0.85rem'
      }}>
        <strong style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Key Finding:</strong> 95% of corporate GenAI pilots fail to deliver measurable financial returns when spending prioritizes sales hype over operational integration.
      </div>
    </motion.div>
  );
}
