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
        btn: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        btnHover: "0px 7px 32px -13px #33A0FF"
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
