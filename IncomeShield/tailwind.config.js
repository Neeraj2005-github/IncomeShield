/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2563EB',
                accent: '#F97316',
                success: '#16A34A',
                danger: '#DC2626',
                bg: '#F0F4FF',
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
