module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "80px",
        xl: "900px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
