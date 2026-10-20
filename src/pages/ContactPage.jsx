import { useState, useEffect } from 'react';
import { S } from '../theme';
import { usePageMeta } from '../utils/usePageMeta';

const ENQUIRY_OPTIONS = [
  'Technology Strategy',
  'System Architecture',
  'Product & System Design',
  'Operational Improvement',
  'AI & Digital Innovation',
  'Venture or Collaboration',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    area: '',
    description: '',
  });

  const [copied, setCopied] = useState(false);
  const [prepared, setPrepared] = useState(false);

  usePageMeta(
    'Contact · Let\'s start with the problem',
    'Get in touch with Durvesh Patil, Technology Consultant & Venture Builder, for technology strategy, system architecture, product design, or operational improvement.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[Enquiry: ${formData.area || 'General'}] from ${formData.name || 'Website Visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization || 'Not specified'}\n` +
      `Area of Enquiry: ${formData.area || 'General'}\n\n` +
      `Description of the Problem:\n${formData.description}\n`
    );
    return `mailto:durveshpatilit@gmail.com?subject=${subject}&body=${body}`;
  };

  const getEnquirySummary = () => {
    return (
      `To: durveshpatilit@gmail.com\n` +
      `Subject: [Enquiry: ${formData.area || 'General'}] from ${formData.name || 'Website Visitor'}\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization || 'Not specified'}\n` +
      `Area of Enquiry: ${formData.area || 'General'}\n\n` +
      `Description of the Problem:\n${formData.description}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrepared(true);
    window.location.href = generateMailtoUrl();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getEnquirySummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAF8', paddingTop: '60px' }}>
      
      {/* ── Section 1 — Introduction ── */}
      <section
        style={{
          padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem)',
          background: '#FAFAF8',
          borderBottom: '0.5px solid #E5E4E0',
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <span className="sec-label">CONTACT</span>
          <h1
            style={{
              fontFamily: S.serif,
              fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
              color: '#111111',
              fontWeight: 400,
              lineHeight: 1.08,
              maxWidth: '820px',
              marginTop: '0.5rem',
              marginBottom: '1.25rem',
            }}
          >
            Let&apos;s start with the problem.
          </h1>
          <p
            style={{
              color: '#555555',
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              fontWeight: 300,
              lineHeight: 1.75,
              maxWidth: '680px',
            }}
          >
            If you’re evaluating a technology direction, planning a product or system, or working through an operational challenge, share a little context. The most useful conversations begin with understanding what needs to change.
          </p>
        </div>
      </section>

      {/* ── Contact Form Section ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem)', background: '#FAFAF8' }}>
        <div
          style={{
            maxWidth: '1160px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'flex-start',
          }}
        >
          {/* Left: Enquiry Form */}
          <div
            style={{
              background: '#FFFFFF',
              border: '0.5px solid #E5E4E0',
              borderRadius: '20px',
              padding: 'clamp(1.75rem, 4vw, 3rem)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.03)',
            }}
          >
            <h2
              style={{
                fontFamily: S.serif,
                fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                color: '#111111',
                fontWeight: 400,
                marginBottom: '0.5rem',
              }}
            >
              Enquiry Form
            </h2>
            <p
              style={{
                fontSize: '13px',
                color: '#777777',
                lineHeight: 1.6,
                fontWeight: 300,
                marginBottom: '2rem',
              }}
            >
              Share context on your business or technical problem.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#333333',
                    marginBottom: '0.5rem',
                  }}
                >
                  Name <span style={{ color: S.accent }}>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #DCDAD5',
                    fontSize: '14px',
                    background: '#FAFAF8',
                    color: '#111111',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = S.accent)}
                  onBlur={(e) => (e.target.style.borderColor = '#DCDAD5')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#333333',
                    marginBottom: '0.5rem',
                  }}
                >
                  Email <span style={{ color: S.accent }}>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #DCDAD5',
                    fontSize: '14px',
                    background: '#FAFAF8',
                    color: '#111111',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = S.accent)}
                  onBlur={(e) => (e.target.style.borderColor = '#DCDAD5')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-organization"
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#333333',
                    marginBottom: '0.5rem',
                  }}
                >
                  Organization <span style={{ color: '#888', fontWeight: 400 }}>(Optional)</span>
                </label>
                <input
                  id="contact-organization"
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Company, firm, or practice name"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #DCDAD5',
                    fontSize: '14px',
                    background: '#FAFAF8',
                    color: '#111111',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = S.accent)}
                  onBlur={(e) => (e.target.style.borderColor = '#DCDAD5')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-area"
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#333333',
                    marginBottom: '0.5rem',
                  }}
                >
                  Area of Enquiry <span style={{ color: S.accent }}>*</span>
                </label>
                <select
                  id="contact-area"
                  name="area"
                  required
                  value={formData.area}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #DCDAD5',
                    fontSize: '14px',
                    background: '#FAFAF8',
                    color: formData.area ? '#111111' : '#777777',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = S.accent)}
                  onBlur={(e) => (e.target.style.borderColor = '#DCDAD5')}
                >
                  <option value="" disabled>
                    Select an area of enquiry...
                  </option>
                  {ENQUIRY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-description"
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#333333',
                    marginBottom: '0.5rem',
                  }}
                >
                  Description of the Problem <span style={{ color: S.accent }}>*</span>
                </label>
                <textarea
                  id="contact-description"
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please describe the context, what needs to change, and what you aim to achieve..."
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #DCDAD5',
                    fontSize: '14px',
                    background: '#FAFAF8',
                    color: '#111111',
                    outline: 'none',
                    boxSizing: 'border-box',
                    lineHeight: 1.6,
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = S.accent)}
                  onBlur={(e) => (e.target.style.borderColor = '#DCDAD5')}
                />
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  id="prepare-enquiry-btn"
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.5rem',
                    background: '#111111',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Prepare Enquiry →
                </button>

                <button
                  type="button"
                  id="copy-enquiry-btn"
                  onClick={handleCopy}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.5rem',
                    background: 'transparent',
                    color: '#333333',
                    border: '0.5px solid #CCC',
                    borderRadius: '30px',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#111';
                    e.currentTarget.style.color = '#111';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#CCC';
                    e.currentTarget.style.color = '#333';
                  }}
                >
                  {copied ? '✓ Enquiry Copied to Clipboard' : 'Copy Enquiry to Clipboard'}
                </button>
              </div>

              {/* Notice on email dispatch */}
              <div
                style={{
                  marginTop: '0.5rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  background: '#F5F4F0',
                  border: '0.5px solid #E5E4E0',
                }}
              >
                <p
                  style={{
                    fontSize: '12px',
                    color: '#666666',
                    lineHeight: 1.55,
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  Clicking <strong>Prepare Enquiry</strong> will open your default email application addressed to <code>durveshpatilit@gmail.com</code> with your message details ready to review and send. No data is stored externally.
                </p>
              </div>

              {prepared && (
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(46,125,50,0.08)',
                    border: '0.5px solid rgba(46,125,50,0.25)',
                    borderRadius: '8px',
                    color: '#2E7D32',
                    fontSize: '13px',
                    fontWeight: 400,
                  }}
                >
                  Your email client has been prepared. If your mail application did not open automatically, please click <strong>Copy Enquiry to Clipboard</strong> and send directly to <strong>durveshpatilit@gmail.com</strong>.
                </div>
              )}
            </form>
          </div>

          {/* Right: Direct Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Direct Email Card */}
            <div
              style={{
                background: '#FFFFFF',
                border: '0.5px solid #E5E4E0',
                borderRadius: '16px',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Direct Communication
              </span>
              <h3
                style={{
                  fontFamily: S.serif,
                  fontSize: '1.4rem',
                  color: '#111111',
                  fontWeight: 400,
                  marginBottom: '0.5rem',
                }}
              >
                Direct Email
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#666666',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  marginBottom: '1rem',
                }}
              >
                If you prefer to write directly:
              </p>
              <a
                href="mailto:durveshpatilit@gmail.com"
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: S.accent,
                  textDecoration: 'none',
                  display: 'inline-block',
                  wordBreak: 'break-all',
                }}
              >
                durveshpatilit@gmail.com →
              </a>
            </div>

            {/* Professional Profiles */}
            <div
              style={{
                background: '#FFFFFF',
                border: '0.5px solid #E5E4E0',
                borderRadius: '16px',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                Professional Links
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href="https://www.linkedin.com/in/durveshpatil9212/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '14px',
                    color: '#333333',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    borderBottom: '0.5px solid #F0EFEA',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = S.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
                >
                  <span>LinkedIn</span>
                  <span style={{ color: '#999', fontSize: '12px' }}>↗</span>
                </a>
                <a
                  href="https://www.instagram.com/_thedurvesh/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '14px',
                    color: '#333333',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    borderBottom: '0.5px solid #F0EFEA',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = S.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
                >
                  <span>Instagram (@_thedurvesh)</span>
                  <span style={{ color: '#999', fontSize: '12px' }}>↗</span>
                </a>
                <a
                  href="https://youtube.com/watch?v=eIYjcYqhaOE"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '14px',
                    color: '#333333',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = S.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
                >
                  <span>YouTube / Speaking</span>
                  <span style={{ color: '#999', fontSize: '12px' }}>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
