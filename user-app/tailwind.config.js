/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                'paytm-blue': {
                    50: '#eff6ff',
                    500: '#00BAF2',
                    600: '#00A8DB',
                    700: '#0098C3',
                    900: '#002970',
                },
            },

            animation: {
                "pulse-slow": "pulseSlow 3s ease-in-out infinite"
            },

            keyframes: {
                pulseSlow: {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.85 }
                }
            },

            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
}