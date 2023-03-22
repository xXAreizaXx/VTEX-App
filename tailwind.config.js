/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/components/**/*.{ts,tsx,js,jsx}",
        "./src/containers/**/*.{ts,tsx,js,jsx}",
        "./src/pages/**/*.{ts,tsx,js,jsx}",
        "./src/shared/**/**/*.{ts,tsx,js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#F71963",
                secondary: "#F96395",
                bgApp: "#FFFDEF",
            },
        },
    },
    plugins: [
    ],
};
