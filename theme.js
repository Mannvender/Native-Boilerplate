const baseSpacing = 30

const theme = {
  mode: 'dark',
  anchor: {
    fontWeight: 400,
  },
  button: {
    color: 'white',
    extend: {
      fontWeight: 500,
      fontSize: 16,
      margin: {bottom: '2.25rem'},
    },
    padding: {
      horizontal: '2.75rem',
    },
  },
  formField: {
    label: {
      size: '1rem',
      margin: {horizontal: 'none', vertical: 'small'},
      color: 'dark-1',
      weight: 400,
    },
    error: {
      margin: {horizontal: 'none', vertical: 'small'},
      weight: 400,
      size: '0.875rem',
    },
  },
  global: {
    anchor: {
      color: {light: 'brand'},
      fontWeight: 400,
    },
    animation: {
      duration: '0.2s',
    },
    borderSize: {
      xsmall: '0.5px',
      small: '2px',
      medium: '4px',
      large: '6px',
      xlarge: '12px',
    },
    drop: {
      shadowSize: 'large',
    },
    edgeSize: {
      none: '0px',
      hair: '1px',
      xxsmall: '0.125rem',
      xsmall: '0.25rem',
      small: '0.5rem',
      medium: '1rem',
      large: '2rem',
      largePercentage: '2.5%',
      xlarge: '4rem',
      xlargePercentage: '4%',
      xxlarge: '8rem',
      xxlargePercentage: '8%',
    },
    hover: {
      background: {
        color: 'hover',
      },
    },
    size: {
      xxsmall: '32px',
      xsmall: '64px',
      small: '128px',
      medium: '256px',
      large: '512px',
      xlarge: '768px',
      full: '100%',
    },
    colors: {
      'accent-1': '#162D6E',
      brand: '#162D6E',
      'brand-3p': '#ccdef04f',
      'brand-20p': '#ccdef0',
      border: '#CBCBCB',
      'comp-1': '#2d6e16',
      'comp-2': '#6e162d',
      'dark-1': '#181818',
      'dark-2': '#707070',
      'dark-3': '#646464',
      hover: '#ccdef0',
      'light-2': '#EFEFEF',
      placeholder: '#686868',
      secondary: 'rgb(68,68,68)',
      text: {dark: 'white', light: '#707070'},
    },
    focus: {
      border: {
        color: 'brand',
      },
    },
    font: {
      family: "'Open Sans', sans-serif",
      /* size: '16px',
	height: '20px', */
    },
    input: {
      padding: `${baseSpacing / 2}px`,
      weight: 400,
    },
  },
  heading: {
    responsiveBreakpoint: 'xsmall',
    extend: {
      marginTop: 0,
    },
    font: {
      weight: 600,
      family: "'Muli', sans-serif;",
    },
    level: {
      1: {
        font: {
          weight: 900,
        },
        // default size to heading level 1
        medium: {
          size: '3rem',
          maxWidth: 'none',
        },
      },
      2: {
        medium: {
          size: '1.6rem',
          height: '2.3rem',
        },
      },
    },
  },
  paragraph: {
    // default size to paragraph
    medium: {
      size: '1.125rem',
      height: '1.5rem',
      maxWidth: 'none',
    },
    extend: {
      fontWeight: 300,
    },
  },
  text: {
    alert: {
      size: '0.8rem',
      maxWidth: 'none',
    },
    medium: {
      size: '1rem',
      height: '1.5rem',
      maxWidth: 'none',
    },
    heroDesc: {
      size: '1.875rem',
      height: 'normal',
      maxWidth: 'none',
    },
  },
  textInput: {
    extend: {
      background: 'white',
      fontSize: '1rem',
    },
  },
  maskedInput: {
    extend: {
      background: 'white',
      fontSize: '1rem',
    },
  },
}

export default theme
