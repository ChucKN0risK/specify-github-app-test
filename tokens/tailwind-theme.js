const theme = {
  fontSize: {
    code: "13px",
    body: "14px",
    bodyWithOpacity: "14px",
    list: "14px",
    title: "32px",
  },
  letterSpacing: { body: "10px", bodyWithOpacity: "10px" },
  lineHeight: {
    body: "20px",
    bodyWithOpacity: "20px",
    code: "20px",
    list: "20px",
    title: "40px",
  },
  textColor: {
    body: "#1e212b",
    bodyWithOpacity: "#1e212b",
    code: "#ff8e05",
    title: "#1e212b",
  },
  fontFamily: {
    body: ["Inter-Medium"],
    bodyWithOpacity: ["Inter-Medium"],
    code: ["FiraCode-Medium"],
    list: ["Roboto-Regular"],
    title: ["Inter-SemiBold"],
  },
  fontWeight: {
    list: 400,
    body: 500,
    bodyWithOpacity: 500,
    code: 500,
    title: 600,
  },
  textOpacity: { bodyWithOpacity: "0.30000001192092896" },
  colors: {
    colorsAccent: "#577cfe",
    colorsBlack: "#1e212b",
    colorsGreen: "#58cd52",
    colorsGrey: "#ccd5e1",
    colorsOrange: "#ff8e05",
    colorsRed: "#f5483f",
    colorsWhite: "#ffffff",
  },

  backgroundImage: (theme) => ({
    gradientsColored: "linear-gradient(90deg, #f5483f 0%, #ff8e05 100%)",
    gradientsDark: "linear-gradient(90deg, #1e212b 0%, #ccd5e1 100%)",
    gradientsNeutral: "linear-gradient(90deg, #ccd5e1 0%, #ffffff 100%)",
    gradientsSafari: "linear-gradient(90deg, #ff8e05 0%, #ffffff 100%)",
  }),
};

export default theme;
