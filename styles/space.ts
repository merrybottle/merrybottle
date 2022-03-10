import { css, FlattenSimpleInterpolation } from 'styled-components';
import { Query, responsiveStyle } from './media';

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

export const getSpace = (type: Space | string | number): string =>
  spaces[type as Space];

export type SpaceProps = Space | Partial<Record<Query, Space>>;

export const padding = (space: SpaceProps): FlattenSimpleInterpolation => {
  return responsiveStyle('padding', space, getSpace);
};
export const paddingTop = (space: SpaceProps): FlattenSimpleInterpolation => {
  return responsiveStyle('padding-top', space, getSpace);
};
export const paddingBottom = (
  space: SpaceProps
): FlattenSimpleInterpolation => {
  return responsiveStyle('padding-bottom', space, getSpace);
};
export const paddingLeft = (space: SpaceProps): FlattenSimpleInterpolation => {
  return responsiveStyle('padding-left', space, getSpace);
};
export const paddingRight = (space: SpaceProps): FlattenSimpleInterpolation => {
  return responsiveStyle('padding-right', space, getSpace);
};
export const paddingX = (space: SpaceProps): FlattenSimpleInterpolation => {
  return css`
    ${responsiveStyle('padding-left', space, getSpace)}
    ${responsiveStyle('padding-right', space, getSpace)}
  `;
};
export const paddingY = (space: SpaceProps): FlattenSimpleInterpolation => {
  return css`
    ${responsiveStyle('padding-top', space, getSpace)}
    ${responsiveStyle('padding-bottom', space, getSpace)}
  `;
};

export const margin = (space: SpaceProps): FlattenSimpleInterpolation => {
  return responsiveStyle('margin', space, getSpace);
};
export const marginTop = (space: SpaceProps): FlattenSimpleInterpolation => {
  return responsiveStyle('margin-top', space, getSpace);
};
export const marginBottom = (space: SpaceProps): FlattenSimpleInterpolation => {
  return responsiveStyle('margin-bottom', space, getSpace);
};
export const marginLeft = (space: SpaceProps): FlattenSimpleInterpolation => {
  return responsiveStyle('margin-left', space, getSpace);
};
export const marginRight = (space: SpaceProps): FlattenSimpleInterpolation => {
  return responsiveStyle('margin-right', space, getSpace);
};
export const marginX = (space: SpaceProps): FlattenSimpleInterpolation => {
  return css`
    ${responsiveStyle('margin-left', space, getSpace)}
    ${responsiveStyle('margin-right', space, getSpace)}
  `;
};
export const marginY = (space: SpaceProps): FlattenSimpleInterpolation => {
  return css`
    ${responsiveStyle('margin-top', space, getSpace)}
    ${responsiveStyle('margin-bottom', space, getSpace)}
  `;
};
