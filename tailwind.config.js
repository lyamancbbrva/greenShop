/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: "500px",
            // => @media (min-width: 640px) { ... }
            md: "768px",
            // => @media (min-width: 768px) { ... }
            lg: "1000px",
            // => @media (min-width: 1024px) { ... }
            xl: "1280px",
            // => @media (min-width: 1280px) { ... }
            "2xl": "1400px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: []
};
