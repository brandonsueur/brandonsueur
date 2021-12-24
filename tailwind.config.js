module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#33A0FF",
      },
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "800px",
        xl: "900px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0rem",
        xl: "0rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
