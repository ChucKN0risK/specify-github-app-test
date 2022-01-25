const extend = {
  spacing: {
    baseSpace01: "4px",
    baseSpace02: "8px",
    baseSpace03: "12px",
    baseSpace04: "16px",
    baseSpace05: "32px",
    baseSpace06: "48px",
    baseSpace07: "64px",
    baseSpace08: "80px",
    baseSpace09: "96px",
    baseSpace10: "112px",
  },
  colors: {
    colorsAccent: "rgb(87, 124, 254)",
    colorsBlack: "rgb(30, 33, 43)",
    colorsGreen: "rgb(88, 205, 82)",
    colorsGrey: "rgb(204, 213, 225)",
    colorsOrange: "rgb(255, 142, 5)",
    colorsRed: "rgb(245, 72, 63)",
    colorsWhite: "rgb(255, 255, 255)",
  },

  backgroundImage: (theme) => ({
    gradientsColored: "linear-gradient(90deg, #f5483f 0%, #ff8e05 100%)",
    gradientsDark: "linear-gradient(90deg, #1e212b 0%, #ccd5e1 100%)",
    gradientsNeutral: "linear-gradient(90deg, #ccd5e1 0%, #ffffff 100%)",
    gradientsSafari: "linear-gradient(90deg, #ff8e05 0%, #ffffff 100%)",
  }),
};

module.exports = extend;
