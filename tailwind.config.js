module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "blue-dark": "#11131E",
        primary: "#33A0FF",
        "blue-gray": "#C3C8D4"
      },
      boxShadow: {
        big:
          "0px 0px 20px 2px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 0%)",
        "big-active":
          "0px 0px 20px 2px rgb(0 0 0 / 13%), 0 2px 4px -1px rgb(0 0 0 / 0%)"
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        display: ["Poppins", "sans-serif"]
      }
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "900px",
        xl: "1100px"
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0rem",
        xl: "0rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
