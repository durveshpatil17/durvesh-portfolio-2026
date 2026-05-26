export const S = {
  // Dark (hero sections)
  heroBg:      '#0C0C0F',
  heroSurface: '#141418',
  heroCard:    '#1E1E24',
  heroBorder:  'rgba(255,255,255,0.08)',
  heroText:    '#FFFFFF',
  heroMuted:   'rgba(255,255,255,0.45)',

  // Light (content sections)
  bg:          '#FAFAF8',
  surface:     '#F5F4F0',
  card:        '#FFFFFF',
  border:      '#E5E4E0',
  text:        '#111111',
  muted:       '#666666',
  subtle:      '#999999',

  // Accent — purple, used ONLY for tag pills and active nav state
  accent:      '#534AB7',
  accentLight: '#AFA9EC',
  accentDim:   'rgba(83,74,183,0.1)',
  accentBorder:'rgba(83,74,183,0.25)',

  // Typography
  serif: 'Instrument Serif, Georgia, serif',
  sans:  'Inter, system-ui, sans-serif',
};

export const TAGLINE = 'Think bigger than you think is allowed.';
export const CONTAINER = { maxWidth: '1160px', margin: '0 auto' };
export const SECTION_LIGHT = {
  padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 4rem)',
  background: '#FAFAF8',
};
export const SECTION_ALT = {
  padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 4rem)',
  background: '#F5F4F0',
};
export const CONTAINER_CLASSES = 'mx-auto w-full max-w-[1160px] px-5 sm:px-8 lg:px-10';
