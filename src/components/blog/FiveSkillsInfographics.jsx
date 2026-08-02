import React from 'react';
import { motion } from 'framer-motion';

const SERIF = 'Instrument Serif, Georgia, serif';
const ACCENT = '#534AB7';
const CARD_BG = '#141418';
const BORDER = 'rgba(255,255,255,0.07)';

/**
 * ClarityDecisionMediationInfographic
 *
 * Mediation diagram:
 *   Clarity (left input) → Decision Making (centre, master skill)
 *   Decision Making → Communication, Negotiation, Leadership (right outputs)
 */
export function ClarityDecisionMediationInfographic() {
  const outputs = [
    { label: 'Communication', sub: 'Makes decisions reach people' },
    { label: 'Negotiation',   sub: 'Turns decisions into leverage' },
    { label: 'Leadership',    sub: 'Moves others on the decision' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: CARD_BG,
        borderRadius: '16px',
        border: `0.5px solid ${BORDER}`,
        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        margin: '2.5rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <span style={{
          fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.28)', fontWeight: 500,
        }}>
          How the skills connect
        </span>
        <p style={{
          fontFamily: SERIF, fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(255,255,255,0.75)',
          marginTop: '0.4rem', lineHeight: 1.4, fontWeight: 400,
        }}>
          Decision making is the master skill. Everything routes through it.
        </p>
      </div>

      {/* Diagram — horizontal on desktop, vertical on mobile */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        paddingBottom: '0.25rem',
      }}>

        {/* LEFT: Clarity */}
        <div style={{ flexShrink: 0, textAlign: 'center', minWidth: '120px' }}>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: 'rgba(83,74,183,0.12)',
              border: `1px solid ${ACCENT}`,
              borderRadius: '12px',
              padding: '0.9rem 1.1rem',
              display: 'inline-block',
            }}
          >
            <div style={{
              fontFamily: SERIF, fontStyle: 'italic',
              fontSize: '1.1rem', color: '#AFA9EC',
              lineHeight: 1.1, marginBottom: '0.3rem',
            }}>
              Clarity
            </div>
            <div style={{
              fontSize: '10px', color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.04em', lineHeight: 1.4,
            }}>
              The input
            </div>
          </motion.div>
        </div>

        {/* Arrow left → centre */}
        <Arrow />

        {/* CENTRE: Decision Making */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{
            flexShrink: 0,
            background: ACCENT,
            borderRadius: '14px',
            padding: '1.1rem 1.4rem',
            textAlign: 'center',
            minWidth: '154px',
            boxShadow: `0 0 32px rgba(83,74,183,0.3)`,
          }}
        >
          <div style={{
            fontFamily: SERIF, fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: '#FFFFFF', lineHeight: 1.1,
            marginBottom: '0.35rem',
          }}>
            Decision Making
          </div>
          <div style={{
            fontSize: '10px', color: 'rgba(255,255,255,0.65)',
            letterSpacing: '0.05em', lineHeight: 1.4,
          }}>
            The master skill —<br />everything routes here
          </div>
        </motion.div>

        {/* Arrow centre → right */}
        <Arrow />

        {/* RIGHT: Three outputs */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.625rem',
          minWidth: '160px',
        }}>
          {outputs.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `0.5px solid ${BORDER}`,
                borderRadius: '10px',
                padding: '0.65rem 0.9rem',
              }}
            >
              <div style={{
                fontFamily: SERIF, fontStyle: 'italic',
                fontSize: '0.95rem', color: 'rgba(255,255,255,0.82)',
                lineHeight: 1.1, marginBottom: '0.2rem',
              }}>
                {o.label}
              </div>
              <div style={{
                fontSize: '10px', color: 'rgba(255,255,255,0.3)',
                lineHeight: 1.4, letterSpacing: '0.02em',
              }}>
                {o.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <p style={{
        fontSize: '12px', color: 'rgba(255,255,255,0.25)',
        marginTop: '1.5rem', lineHeight: 1.6, fontWeight: 300,
        fontStyle: 'italic',
      }}>
        Clarity is the precondition. Decision making is the mechanism.
        Communication, negotiation, and leadership are the execution layer.
      </p>
    </motion.div>
  );
}

function Arrow() {
  return (
    <div style={{
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      padding: '0 0.5rem',
      color: 'rgba(255,255,255,0.2)',
    }}>
      <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
        <line x1="0" y1="6" x2="22" y2="6" stroke="currentColor" strokeWidth="1" />
        <path d="M18 2L26 6L18 10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
