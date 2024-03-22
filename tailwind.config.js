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
       backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('/hero-img.jpg')",
        "footer-bg-image": "url('/_footer-bg1.png')",
      },
      colors: {
        default: "#444444",
        primary: "#00C465",
        secondary: "#DD1155",
        secondaryAccent: "#EFB3C7",
        danger: "#FF331F",
        muted: "#909090",
        disabled: "#C4C4C4",
        defaultAccent: "#EEEEEE",
        // primaryAccent: "#FF331F",
        primaryAccent: "#D3F0E2",
        dangerAccent: "#FBD2E0",
        white: "#FFFFFF",
        background: "rgb(214, 219, 220)"
      },
    },
  },
  plugins: [],
}

