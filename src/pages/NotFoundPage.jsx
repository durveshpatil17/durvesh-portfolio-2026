import { Link } from 'react-router-dom';
import { S } from '../theme';
import { usePageMeta } from '../utils/usePageMeta';

export default function NotFoundPage() {
  usePageMeta('Page Not Found', 'The requested page could not be found.');

  return (
    <main
      style={{
        minHeight: '80vh',
        background: '#FAFAF8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px clamp(1.25rem, 5vw, 4rem) 60px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '580px', margin: '0 auto' }}>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: S.accent,
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          404 Error
        </span>
        <h1
          style={{
            fontFamily: S.serif,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: '#111111',
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: '1.25rem',
          }}
        >
          Page not found<span style={{ color: S.accent }}>.</span>
        </h1>
        <p
          style={{
            fontSize: '15px',
            color: '#666666',
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: '2.5rem',
          }}
        >
          The page or route you requested does not exist or has moved. Explore the primary sections below:
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {[
            { to: '/', label: 'Home' },
            { to: '/work', label: 'Work & Projects' },
            { to: '/services', label: 'Services' },
            { to: '/writing', label: 'Writing' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '30px',
                border: '0.5px solid #D5D4D0',
                background: '#FFFFFF',
                color: '#333333',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = S.accent;
                e.currentTarget.style.color = S.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D5D4D0';
                e.currentTarget.style.color = '#333333';
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
