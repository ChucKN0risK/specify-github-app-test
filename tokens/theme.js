const theme = {
  zIndices: { background: 1, middle: 50, foreground: 100 },
  durations: { veryLong: "3s", short: "100ms", base: "300ms", long: "700ms" },
  sizes: {
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
  fontSizes: [13, 14, 32],
  letterSpacings: { body: "10px", bodyWithOpacity: "10px" },
  lineHeights: {
    body: "20px",
    bodyWithOpacity: "20px",
    code: "20px",
    list: "20px",
    title: "40px",
  },
  borderWidths: {
    borderAccent: "2px",
    borderAccentWithOpacity: "2px",
    borderAccentWithoutRadii: "2px",
    borderDashed: "1px",
  },
  borderStyles: {
    borderAccent: "solid",
    borderAccentWithOpacity: "solid",
    borderAccentWithoutRadii: "solid",
    borderDashed: "dashed",
  },
  radii: { borderAccent: 16, borderAccentWithOpacity: 16, borderDashed: 16 },
  colors: {
    colorsAccent: "rgb(87, 124, 254)",
    colorsBlack: "rgb(30, 33, 43)",
    colorsGreen: "rgb(88, 205, 82)",
    colorsGrey: "rgb(204, 213, 225)",
    colorsOrange: "rgb(255, 142, 5)",
    colorsRed: "rgb(245, 72, 63)",
    colorsWhite: "rgb(255, 255, 255)",
  },
  shadows: {
    elevation1: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    elevation2:
      "0px 4px 28px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1)",
    elevation3:
      "0px 1.8518518209457397px 3.1481480598449707px rgba(0, 0, 0, 0.02), 0px 8.148148536682129px 6.518518447875977px rgba(0, 0, 0, 0.03), 0px 20px 13px rgba(0, 0, 0, 0.04), 0px 38.51852035522461px 25.481481552124023px rgba(0, 0, 0, 0.04), 0px 64.81481170654297px 46.85185241699219px rgba(0, 0, 0, 0.05), 0px 100px 80px 1px rgba(0, 0, 0, 0.07)",
  },
  fonts: {
    firaCodeMedium: "FiraCode-Medium",
    interMedium: "Inter-Medium",
    interSemiBold: "Inter-SemiBold",
    robotoRegular: "Roboto-Regular",
  },
  fontWeights: {
    firaCodeMedium: 500,
    interMedium: 500,
    interSemiBold: 600,
    robotoRegular: 400,
  },
  gradients: {
    gradientsColored:
      "linear-gradient(90deg, rgb(245, 72, 63) 0%, rgb(255, 142, 5) 100%)",
    gradientsDark:
      "linear-gradient(90deg, rgb(30, 33, 43) 0%, rgb(204, 213, 225) 100%)",
    gradientsNeutral:
      "linear-gradient(90deg, rgb(204, 213, 225) 0%, rgb(255, 255, 255) 100%)",
    gradientsSafari:
      "linear-gradient(90deg, rgb(255, 142, 5) 0%, rgb(255, 255, 255) 100%)",
  },
  opacities: [0.1, 0.5, 0.95],
};

export default theme;
