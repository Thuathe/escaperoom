// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
extend: {
   fontFamily: {
      cinzel: ['Cinzel', 'serif'],},
  animation: {
    float: "float 8s ease-in-out infinite",
    blink: "blink 3s ease-in-out infinite",
    drift: "drift 12s linear infinite",
  },
  keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-15px)" },
    },
    blink: {
      "0%, 100%": { opacity: 0.2 },
      "50%": { opacity: 1 },
    },
    drift: {
      "0%": { transform: "translate(0, 0)" },
      "100%": { transform: "translate(40px, -60px)" },
    },
  },
},
  },
  plugins: [],
};
