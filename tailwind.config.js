module.exports = {
  mode: "aot",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fill: {
      current: "currentColor",
    },
    extend: {
      backgroundImage: {
        'abstract-bg-1': "url('/svgs/abstract_bg_1.svg')",
        'abstract-bg-2': "url('/svgs/abstract_bg_2.svg')",
        'abstract-bg-3': "url('/svgs/abstract_bg_3.svg')",
        'abstract-bg-4': "url('/svgs/abstract_bg_4.svg')",
      },
      fontWeight: {
        extraBold: "900",
      },
      positions: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top", 
      },
      fontFamily: {
        gordita: "Gordita",
        quicksand: "Quicksand",
      },
      fontSize: {
        "2xs": "12px",
        xs: "14px",
        sm: "16px",
        md: "18px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "48px",
        "5xl": "56px",
        "6xl": "72px",
      },
      colors: {
        black: "#020D1E",
        bitGreen: {
          temp: "#00e3be",
          link: "#40D8A6",
          50: "rgba(35, 224, 162, 0.08)",
          100: "rgba(0, 228, 175, 0.2)",
          200: "rgba(35, 224, 162, 1)",
          300: "#23E0A2",
          400: "#23FDB4",
          500: "#00CC89",
          600: "#009F6B",
          700: "rgba(16, 197, 138, 1)",
          800: "rgba(0, 159, 107, 1)",
        },
        bitGray: {
          50: "rgba(1, 25, 17, 0.4)",
          100: "rgba(1, 25, 17, 0.6)",
          200: "rgba(1, 25, 17, 0.8)",
          300: "rgba(1, 25, 17, 1)",
          400: "#011911",
          500: "#181B1D",
          600: "rgba(196, 196, 196, 0.3)",
          700: "#031735",
        },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      width: {
        252: "252px",
        "82p5": "82.5%",
        300: "300px",
        400: "400px",
        434: "434px",
        450: "450px",
        500: "500px",
        600: "600px",
      },
      height: {
        250: "250px",
        300: "300px",
        350: "350px",
        450: "450px",
      },
      borderRadius: {
        12: "12px",
        20: "20px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
