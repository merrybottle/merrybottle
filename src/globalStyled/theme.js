const breakpoint = {
  mobile: 700,
  small: 1100
};

export default {
  breakpoint: {
    mobile: {
      max: `${breakpoint.mobile}px`
    },
    small: {
      min: `${breakpoint.mobile + 1}px`,
      max: `${breakpoint.small}px`
    },
    medium: {
      min: `${breakpoint.small + 1}px`
    }
  }
};
