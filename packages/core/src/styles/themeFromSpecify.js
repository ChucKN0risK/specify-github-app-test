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
    'text-color-body': 'rgb(196, 196, 196)',
    'text-color-code': 'rgb(196, 196, 196)',
    'text-color-title': 'rgb(196, 196, 196)',
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
    'colors-colors-accent': 'rgb(102, 80, 239)',
    'colors-colors-black': 'rgb(30, 33, 43)',
    'colors-colors-green': 'rgb(88, 205, 82)',
    'colors-colors-grey': 'rgb(204, 213, 225)',
    'colors-colors-orange': 'rgb(255, 142, 5)',
    'colors-colors-red': 'rgb(227, 44, 34)',
    'colors-colors-white': 'rgb(255, 255, 255)',
  },
  boxShadow: {
    'box-shadow-elevation-1': '0px 4px 8px rgba(0, 0, 0, 0.1)',
    'box-shadow-elevation-2':
      '0px 4px 28px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1)',
    'box-shadow-elevation-3':
      '0px 1.8518518209457397px 3.1481480598449707px rgba(0, 0, 0, 0.02), 0px 8.148148536682129px 6.518518447875977px rgba(0, 0, 0, 0.03), 0px 20px 13px rgba(0, 0, 0, 0.04), 0px 38.51852035522461px 25.481481552124023px rgba(0, 0, 0, 0.04), 0px 64.81481170654297px 46.85185241699219px rgba(0, 0, 0, 0.05), 0px 100px 80px rgba(0, 0, 0, 0.07)',
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
