/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: "500px",
            md: "768px",
            "2md": "870px",
            lg: "1000px",
            xl: "1280px",
            "2xl": "1400px",
        },
    },
    plugins: []
};
