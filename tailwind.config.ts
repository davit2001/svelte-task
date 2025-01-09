// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontSize: {
      'lg': '2rem',
      'sm': '0.875rem'
    },
    borderRadius: {
      sm: '0.25rem',
      lg: '0.625rem',
      md: '0.5rem',
      full: '9999px',
    },
    extend: {
      colors: {
        primary: {
          bgDefault: '#24FFBC',
        },
        secondary: {
          bgDefault: '#1B1E22',
        },
        general: {
          background: '#0B0B0F',
          border: '#15171B',
          bodyPrimary: '#F5F5F5',
        },
        iconOnDark: '#83838D',
      },
      backgroundImage: {
        'color-gradient': 'linear-gradient(132.15deg, #0B0B0F 0%, rgba(26, 26, 34, 0.9) 95.96%)',
        'black-gradient': 'linear-gradient(132.15deg, #211A1A 0%, #212127 95.96%)',
      },
      fontFamily: {
        sfPro: ['"SF Pro"', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      boxShadow: {
        'custom': '0px 0px 0px 1px #00000014',
      },
      keyframes: {
        custom_bounce: {
          '0%, 4.7%': {
            transform: 'matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 0,
          },
          '9.41%': {
            transform: 'matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 0.2,
          },
          '14.11%': {
            transform: 'matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 0.2,
          },
          '18.72%': {
            transform: 'matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 0.4,
          },
          '24.32%': {
            transform: 'matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 0.4,
          },
          '29.93%': {
            transform: 'matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 0.6,
          },
          '35.54%': {
            transform: 'matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 0.6,
          },
          '41.04%': {
            transform: 'matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 0.8,
          },
          '52.15%': {
            transform: 'matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 0.8,
          },
          '63.26%': {
            transform: 'matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 1,
          },
          '85.49%': {
            transform: 'matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 1,
          },
          '100%': {
            transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: 1,
          },
        },
        topToPosition: {
          '0%': { opacity: 0, transform: 'translateY(-800px)' },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        topToPosition: 'topToPosition 1s linear both',
        custom_bounce: 'custom_bounce 1s linear both',
      }
    }
  },

  plugins: [typography, forms]
} satisfies Config;
