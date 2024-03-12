/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SFProBold: ["var(--font-SFProBold)"],
        SFProSemibold: ["var(--font-SFProSemibold)"],
        SFProRegular: ["var(--font-SFProRegular)"],
        SFProMedium: ["var(--font-SFProMedium)"],
        SFProLight: ["var(--font-SFProLight)"],
        darkerGrotesque: ["var(--font-darkerGrotesque)"],
      },
    },
  },
  plugins: [],
};
