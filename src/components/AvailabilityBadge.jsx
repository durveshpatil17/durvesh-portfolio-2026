import { S } from '../theme';
import { useNavigate } from 'react-router-dom';

export default function AvailabilityBadge() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <button
      onClick={handleClick}
      className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition-colors"
      style={{
        background: 'rgba(83, 74, 183, 0.08)',
        border: '1px solid rgba(83, 74, 183, 0.25)',
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: S.accent,
          animation: 'pulse 2s infinite',
        }}
      />
      <span
        style={{
          color: S.accent,
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontWeight: 600,
        }}
      >
        Available for Advisory &amp; Projects
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

