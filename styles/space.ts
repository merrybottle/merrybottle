import { css, FlattenSimpleInterpolation } from 'styled-components';
import { mediaMatch, Query } from './media';

export type Space = 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const spaces: Record<Space, string> = {
  none: '0px',
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  xxl: '64px',
};

export const getSpace = (type: Space): string => spaces[type];

const spacingStyle = (
  property: string,
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  if (typeof space === 'string') {
    return css`
      ${property}: ${getSpace(space)};
    `;
  }

  const spacingCss: Partial<Record<Query, FlattenSimpleInterpolation>> = {};

  Object.keys(space).forEach((media) => {
    const mediaSpace = space[media as Query];
    if (mediaSpace) {
      spacingCss[media as Query] = css`
        ${property}: ${getSpace(mediaSpace)};
      `;
    }
  });

  return mediaMatch(spacingCss);
};

export const padding = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return spacingStyle('padding', space);
};
export const paddingTop = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return spacingStyle('padding-top', space);
};
export const paddingBottom = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return spacingStyle('padding-bottom', space);
};
export const paddingLeft = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return spacingStyle('padding-left', space);
};
export const paddingRight = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return spacingStyle('padding-right', space);
};
export const paddingX = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return css`
    ${spacingStyle('padding-left', space)}
    ${spacingStyle('padding-right', space)}
  `;
};
export const paddingY = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return css`
    ${spacingStyle('padding-top', space)}
    ${spacingStyle('padding-bottom', space)}
  `;
};

export const margin = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return spacingStyle('margin', space);
};
export const marginTop = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return spacingStyle('margin-top', space);
};
export const marginBottom = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return spacingStyle('margin-bottom', space);
};
export const marginLeft = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return spacingStyle('margin-left', space);
};
export const marginRight = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return spacingStyle('margin-right', space);
};
export const marginX = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return css`
    ${spacingStyle('margin-left', space)}
    ${spacingStyle('margin-right', space)}
  `;
};
export const marginY = (
  space: Space | Partial<Record<Query, Space>>
): FlattenSimpleInterpolation => {
  return css`
    ${spacingStyle('margin-top', space)}
    ${spacingStyle('margin-bottom', space)}
  `;
};
