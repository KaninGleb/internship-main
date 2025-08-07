/** @type {import('tailwindcss').Config} */
import './src/styles/_colors.css'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Accent
        accent: {
          100: 'var(--color-accent-100)', // #bea6ff
          300: 'var(--color-accent-300)', // #a280ff
          500: 'var(--color-accent-500)', // #8c61ff
          700: 'var(--color-accent-700)', // #704ecc
          900: 'var(--color-accent-900)', // #382766
        },
        // Success
        success: {
          100: 'var(--color-success-100)', // #80ffbf
          300: 'var(--color-success-300)', // #22e584
          500: 'var(--color-success-500)', // #14cc70
          700: 'var(--color-success-700)', // #0f9954
          900: 'var(--color-success-900)', // #0a6638
        },
        // Danger
        danger: {
          100: 'var(--color-danger-100)', // #ff8099
          300: 'var(--color-danger-300)', // #f23d61
          500: 'var(--color-danger-500)', // #cc1439
          700: 'var(--color-danger-700)', // #990f2b
          900: 'var(--color-danger-900)', // #660a1d
        },
        // Warning
        warning: {
          100: 'var(--color-warning-100)', // #ffd073
          300: 'var(--color-warning-300)', // #e5ac39
          500: 'var(--color-warning-500)', // #d99000
          700: 'var(--color-warning-700)', // #960
          900: 'var(--color-warning-900)', // #640
        },
        // Info
        info: {
          100: 'var(--color-info-100)', // #73a5ff
          300: 'var(--color-info-300)', // #4c8dff
          500: 'var(--color-info-500)', // #397df6
          700: 'var(--color-info-700)', // #2f68cc
          900: 'var(--color-info-900)', // #234e99
        },
        // Light
        light: {
          100: 'var(--color-light-100)', // #fff
          300: 'var(--color-light-300)', // #f9f7ff
          500: 'var(--color-light-500)', // #f4f2fa
          700: 'var(--color-light-700)', // #dcdae0
          900: 'var(--color-light-900)', // #c3c1c7
        },
        // Dark
        dark: {
          100: 'var(--color-dark-100)', // #808080
          300: 'var(--color-dark-300)', // #4c4c4c
          500: 'var(--color-dark-500)', // #333
          700: 'var(--color-dark-700)', // #171717
          900: 'var(--color-dark-900)', // #000
        },
      },
    },
  },
  plugins: [],
}
