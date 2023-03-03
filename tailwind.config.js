/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0.0000%": { content: "" },
          "1.1395%": { content: "#" },
          "2.2791%": { content: "# " },
          "3.4186%": { content: "# H" },
          "4.5581%": { content: "# Hi" },
          "5.6977%": { content: "# Hi," },
          "6.8372%": { content: "# Hi, " },
          "7.9767%": { content: "# Hi, I" },
          "9.1163%": { content: "# Hi, I'" },
          "10.2558%": { content: "# Hi, I'm" },
          "11.395%": { content: "# Hi, I'm " },
          "12.5345%": { content: "# Hi, I'm A" },
          "13.674%": { content: "# Hi, I'm Ai" },
          "14.8135%": { content: "# Hi, I'm Ai" },
          "15.953%": { content: "# Hi, I'm Aid" },
          "17.0925%": { content: "# Hi, I'm Aide" },
          "18.232%": { content: "# Hi, I'm Aiden" },
          "19.3715%": { content: "# Hi, I'm Aide" },
          "20.511%": { content: "# Hi, I'm Aid" },
          "21.6506%": { content: "# Hi, I'm Aida" },
          "22.79%": { content: "# Hi, I'm Aidan" },
        },
        blink: {
          "0%, 100%": { opacity: 1},
          "50%": { opacity: 0},
        },
      },
      animation: {
        typewriter: "typing 13.5s infinite",
        cursor: "blink 0.5s linear infinite",
      }
    },
  },
  plugins: [],
}
