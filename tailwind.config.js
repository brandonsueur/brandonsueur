module.exports = {
  contents: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  jit: true,
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "blue-dark": "#11131E",
        "blue-grey": "#2982CE",
        primary: "#33A0FF",
        "blue-gray": "#C3C8D4",
        "grey-light": "#1C212D",
        "grey-light2": "#262D3A",
        "grey-light3": "#9196A1"
      },
      boxShadow: {
        btn: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        btnHover: "0px 7px 32px -13px #33A0FF"
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        display: ["Poppins", "sans-serif"]
      },
      width: {
        68: "68px",
        86: "86px"
      }
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "900px",
        xl: "1050px"
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0rem",
        xl: "0rem"
      }
    }
  }
};
