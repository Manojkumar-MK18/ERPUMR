export const colors = {
  black: '#111111',
  lightGrey: '#d8dbde',
  gray: '#434344',
  white: '#fff',
  active: '#f9f9f9',
  jordyBlue: '#9caaff',
  indigo: '#1d2596',
  green: '#198754',
  whitesmoke: '#F5F5F5',
  lavenderBlush: '#f2f0f1',
  purple: '#5e4660',
  lightGreen: '#b7ceaf',
  amber: '#ffc107',
  red: '#e90a32',
  cyanBlue: '#9caaff',
  limeGreen: '#36a817',
  navyBlue: '#4392c1',
  stateBlue: '#7B5DC6',
  safetyYellow: '#EAD10A',
  indianRed: '#cd5c5c',
  orange: '#fd7e14c4',
  heavyGray: '#2d2d2e'
}

const sideMenu = {
  container: colors.white,
  border: '#d6d4d4',
  anchor: {
    hover: colors.black
  },
  menu: {
    background: colors.active
  },
  icon: {
    selected: colors.purple,
    normal: colors.gray
  }
}

const theme = {
  appBackground: colors.active,
  border: '#d6d4d4',
  disabled: '#dddcde',
  hamburgerMenu: '#949292',
  login: {
    background: colors.white
  },
  input: {
    border: '#ced4da',
    background: colors.white,
    color: '#6c757d',
    active: '#46a9d8'
  },
  card: {
    background: '#675468',
    color: colors.white,
    border: colors.lightGrey,
    hover: '#55085C',
    title: {
      color: colors.gray
    },
    variantType: {
      warning: {
        primary: '#ffa726',
        secondary: '#fb8c00'
      },
      primary: {
        primary: '#66bb6a',
        secondary: '#43a047'
      },
      info: {
        primary: '#26c6da',
        secondary: '#00acc1'
      },
      danger: {
        primary: '#ef5350',
        secondary: '#e53935'
      }
    }
  },
  notes: {
    variantType: {
      warning: {
        primary: '#ffa726',
        secondary: '#fb8c00'
      },
      primary: {
        primary: '#9c27b0',
        secondary: '#701281'
      },
      info: {
        primary: '#26c6da',
        secondary: '#00acc1'
      },
      danger: {
        primary: '#e76fa4',
        secondary: '#d61a6c'
      }
    }
  },
  button: {
    primary: '#5e4660',
    light: '#f8f8f8',
    secondary: '#55085C',
    navigation: '#1d2596',
    primarySelect: '#7b687d'
  },
  icon: {
    normal: '#6c757d'
  },
  sideMenu: sideMenu,
  dropDown: {
    background: colors.active,
    color: colors.black,
    success: colors.purple,
    error: colors.red
  },
  table: {
    background: '#5e4660',
    color: colors.white,
    border: '#ced4da'
  },
  tab: {
    border: '#989399'
  },
  footer: {
    background: '#f0f3f5',
    text: '#dc143c'
  },
  header: {
    background: '#f0f3f5'
  },
  back: {
    background: colors.active,
    hover: colors.purple,
    color: colors.white
  },
  list: {
    background: colors.white,
    hover: colors.active,
    border: colors.lightGrey
  },
  chart: {
    stacked: {
      first: '#a455b3',
      second: '#62366a',
      third: '#361e3a'
    },
    line: {
      first: '#0f8edd'
    }
  }
}

export default theme
