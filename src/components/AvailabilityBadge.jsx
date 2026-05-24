import React from 'react';
import { S } from '../theme';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AvailabilityBadge() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition-colors"
      style={{
        background: 'rgba(201, 168, 76, 0.15)',
        border: '1px solid rgba(201, 168, 76, 0.25)',
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: S.gold,
          animation: 'pulse 2s infinite',
        }}
      />
      <span
        style={{
          color: S.gold,
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontWeight: 600,
        }}
      >
        Open to Internship 2026
      </span>
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </button>
  );
}
