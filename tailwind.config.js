/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#11244C",
                "primary-content": "#7EBCEE",
                secondary: "#3E1C5D",
                "secondary-content": "#B178D5",
            },
        },
    },
    plugins: [],
};
