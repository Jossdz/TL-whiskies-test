import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Cabin",
      styles: ["200", "400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: [
    "Cabin",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
  // See below for the full list of options.
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
