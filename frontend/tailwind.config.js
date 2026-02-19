/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Clash Display', 'sans-serif'],
                body: ['Satoshi', 'sans-serif'],
                accent: ['Cabinet Grotesk', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                // Updated Premium Palette: "Obsidian & Electric Tech"
                primary: {
                    DEFAULT: '#00D1FF', // Electric Cyan
                    50: '#f0faff',
                    100: '#e0f6ff',
                    200: '#bce9ff',
                    300: '#7fd6ff',
                    400: '#3abcff',
                    500: '#00D1FF',
                    600: '#008eff',
                    700: '#0070e6',
                    800: '#005ebd',
                    900: '#084b90',
                },
                secondary: {
                    DEFAULT: '#6C5DD3', // Purple Haze
                    500: '#6C5DD3',
                },
                accent: {
                    DEFAULT: '#FF2E63', // Hot Tech Red
                    500: '#FF2E63',
                },
                dark: {
                    DEFAULT: '#050505', // Deep Obsidian
                    100: '#0a0a0a',
                    200: '#121212',
                    300: '#18181b', // Surface
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #00D1FF33 0deg, #6C5DD333 180deg, #00D1FF33 360deg)',
            },
            boxShadow: {
                'neon': '0 0 20px rgba(0, 209, 255, 0.5)',
                'neon-purple': '0 0 20px rgba(108, 93, 211, 0.5)',
            }
        },
    },
    plugins: [],
}
