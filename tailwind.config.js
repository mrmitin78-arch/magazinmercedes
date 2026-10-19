/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#121417',
        accent: '#C4A35A',
        paper: '#F2F4F6',
        surface: '#FFFFFF',
        rule: '#C5CCD3',
        ok: '#1B7F4E',
        warn: '#B86E00',
        fail: '#8B1E1E',
        mute: '#5C6570',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { terminal: '1200px' },
      borderRadius: { term: '2px' },
      minHeight: { touch: '48px' },
      minWidth: { touch: '48px' },
    },
  },
};
