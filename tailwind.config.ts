// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.3333%)' },
        },
      },
      animation: {
        scroll: 'scroll 60s linear infinite',
      },
      colors: {
        brand: { DEFAULT: '#111827', accent: '#38bdf8', muted: '#6b7280' },
      },
      fontFamily: { sans: ['ui-sans-serif','system-ui','Inter','sans-serif'] },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,0.08)' },
    },
  },
  plugins: [],
}
