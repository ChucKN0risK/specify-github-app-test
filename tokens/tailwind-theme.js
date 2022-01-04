const extend = {
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
    body: "rgb(30, 33, 43)",
    bodyWithOpacity: "rgba(30, 33, 43, 0.3)",
    code: "rgb(255, 142, 5)",
    title: "rgb(30, 33, 43)",
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
  borderWidth: {
    borderAccent: "2px",
    borderAccentWithOpacity: "2px",
    borderAccentWithoutRadii: "2px",
    borderDashed: "1px",
  },
  borderRadius: {
    borderAccent: "16px",
    borderAccentWithOpacity: "16px",
    borderDashed: "16px",
  },
  borderColor: {
    borderAccent: "rgb(102, 80, 239)",
    borderAccentWithOpacity: "rgba(102, 80, 239, 0.5)",
    borderAccentWithoutRadii: "rgba(102, 80, 239, 0.5)",
    borderDashed: "rgb(30, 33, 43)",
  },
  borderOpacity: {
    borderAccentWithOpacity: "0.5",
    borderAccentWithoutRadii: "0.5",
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
  boxShadow: {
    elevation1: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    elevation2:
      "0px 4px 28px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1)",
    elevation3:
      "0px 1.8518518209457397px 3.1481480598449707px rgba(0, 0, 0, 0.02), 0px 8.148148536682129px 6.518518447875977px rgba(0, 0, 0, 0.03), 0px 20px 13px rgba(0, 0, 0, 0.04), 0px 38.51852035522461px 25.481481552124023px rgba(0, 0, 0, 0.04), 0px 64.81481170654297px 46.85185241699219px rgba(0, 0, 0, 0.05), 0px 100px 80px 1px rgba(0, 0, 0, 0.07)",
  },
};

module.exports = extend;
