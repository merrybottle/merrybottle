const breakpoint = {
  mobile: 960,
  small: 1100,
  medium: 1700
};

export default {
  brickwall: `
    background-color: #f6ddcc;
    background-image:
      linear-gradient(335deg, #cd5c5c 23px, transparent 23px),
      linear-gradient(155deg, #cd5c5c 23px, transparent 23px),
      linear-gradient(335deg, #cd5c5c 23px, transparent 23px),
      linear-gradient(155deg, #cd5c5c 23px, transparent 23px);
    background-position:
      0 2px,
      4px 35px,
      29px 31px,
      34px 6px;
    background-size: 58px 58px;
  `,
  breakpoint: {
    mobile: {
      max: `${breakpoint.mobile}px`
    },
    small: {
      min: `${breakpoint.mobile + 1}px`,
      max: `${breakpoint.small}px`
    },
    medium: {
      min: `${breakpoint.small + 1}px`,
      max: `${breakpoint.medium}px`
    },
    large: {
      min: `${breakpoint.medium + 1}px`
    }
  },
  color: {
    dark: '#1a1a1a',
    primary: '#48c9b0'
  },
  font: {
    body: `'Muli', sans-serif`,
    title: `'Nixie One', sans-serif`
  }
};
