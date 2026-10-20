/**
 * Utility to parse inline markdown (bold, italic, code, links) into React elements.
 * Handles:
 * - **bold text**
 * - *italic text*
 * - `code text`
 * - [link text](url)
 */
export function renderFormattedText(text) {
  if (typeof text !== 'string') return text;
  if (!text) return '';

  // Regex to match markdown patterns:
  // 1: Bold: \*\*(.*?)\*\*
  // 2: Italic: \*([^*]+)\*
  // 3: Inline code: `([^`]+)`
  // 4: Link: \[([^\]]+)\]\(([^)]+)\)
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern);

  if (parts.length === 1) {
    return text;
  }

  return parts.map((part, index) => {
    if (!part) return null;

    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={index} style={{ fontWeight: 600, color: 'inherit' }}>
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      return (
        <em key={index} style={{ fontStyle: 'italic' }}>
          {part.slice(1, -1)}
        </em>
      );
    }

    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      return (
        <code
          key={index}
          style={{
            background: 'rgba(0,0,0,0.05)',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '0.9em',
            fontFamily: 'monospace',
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target={linkMatch[2].startsWith('http') ? '_blank' : '_self'}
          rel={linkMatch[2].startsWith('http') ? 'noreferrer' : undefined}
          style={{
            color: '#534AB7',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }}
        >
          {linkMatch[1]}
        </a>
      );
    }

    return part;
  });
}
