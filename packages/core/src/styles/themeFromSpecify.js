const customTheme = {
  fontSize: {
    'font-size-code': '13px',
    'font-size-body': '14px',
    'font-size-title': '32px',
  },
  lineHeight: {
    'line-height-body': '20px',
    'line-height-code': '20px',
    'line-height-title': '40px',
  },
  textColor: {
    'text-color-body': '#c4c4c4',
    'text-color-code': '#c4c4c4',
    'text-color-title': '#c4c4c4',
  },
  fontFamily: {
    'font-family-body': ['Inter-Medium'],
    'font-family-code': ['FiraCode-Regular'],
    'font-family-title': ['Inter-SemiBold'],
  },
  fontWeight: {
    'font-weight-code': 400,
    'font-weight-body': 500,
    'font-weight-title': 600,
  },
  colors: {
    'colors-colors-accent': '#6650ef',
    'colors-colors-black': '#1e212b',
    'colors-colors-green': '#58cd52',
    'colors-colors-grey': '#ccd5e1',
    'colors-colors-orange': '#ff8e05',
    'colors-colors-red': '#e32c22',
    'colors-colors-white': '#ffffff',
  },
  boxShadow: {
    'box-shadow-elevation-1': '0px 4px 8px #000000',
    'box-shadow-elevation-2': '0px 4px 28px #000000, 0px 4px 4px #000000',
    'box-shadow-elevation-3':
      '0px 1.8518518209457397px 3.1481480598449707px #000000, 0px 8.148148536682129px 6.518518447875977px #000000, 0px 20px 13px #000000, 0px 38.51852035522461px 25.481481552124023px #000000, 0px 64.81481170654297px 46.85185241699219px #000000, 0px 100px 80px #000000',
  },

  backgroundImage: (theme) => ({
    'background-image-gradients-colored':
      'linear-gradient(90deg, #f5483f 0%, #ff8e05 100%)',
    'background-image-gradients-dark':
      'linear-gradient(90deg, #1e212b 0%, #ccd5e1 100%)',
    'background-image-gradients-neutral':
      'linear-gradient(90deg, #ccd5e1 0%, #ffffff 100%)',
  }),
};

module.exports = customTheme;
