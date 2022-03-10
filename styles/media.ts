import { css, FlattenSimpleInterpolation } from 'styled-components';

export type Query = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const queries: Record<Query, string> = {
  xs: '(min-width: 0em)',
  sm: `(min-width: 23.5625em)`, // 377px
  md: `(min-width: 34.8125em)`, // 557px
  lg: `(min-width: 50.5625em)`, // 809px
  xl: `(min-width: 75.0625em)`, // 1201px
};

export const mediaMatch = (
  media: Partial<Record<Query, FlattenSimpleInterpolation>>
): FlattenSimpleInterpolation => {
  let style: FlattenSimpleInterpolation = css``;

  Object.keys(queries).forEach((q) => {
    const query = q as Query;

    if (media[query]) {
      style = css`
        ${style}

        @media ${queries[query]} {
          ${media[query]}
        }
      `;
    }
  });

  return style;
};

export const responsiveStyle = (
  property: string,
  value: string | number | Partial<Record<Query, string | number>>,
  fn?: (value: string | number) => FlattenSimpleInterpolation | string
): FlattenSimpleInterpolation => {
  if (typeof value === 'string' || typeof value === 'number') {
    return css`
      ${property}: ${fn ? fn(value) : value};
    `;
  }

  const responsiveCss: Partial<Record<Query, FlattenSimpleInterpolation>> = {};

  Object.keys(value).forEach((media) => {
    const mediaStyle = value[media as Query];
    if (mediaStyle) {
      responsiveCss[media as Query] = css`
        ${property}: ${fn ? fn(mediaStyle) : mediaStyle};
      `;
    }
  });

  return mediaMatch(responsiveCss);
};
