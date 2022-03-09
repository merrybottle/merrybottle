import { css, FlattenSimpleInterpolation } from 'styled-components';
import { mediaMatch, Query } from './media';

export type Color =
  | 'black'
  | 'white'
  | 'dark'
  | 'pink'
  | 'yellow'
  | 'blue'
  | 'red'
  | 'spaceship'
  | 'oneflare';

export const colors: Record<Color, string> = {
  black: '#000000',
  white: '#ffffff',
  dark: '#373b43',
  pink: '#efa9ae',
  yellow: '#ffb400',
  blue: '#7ebdc3',
  red: '#f25f5c',
  spaceship: '#600ce8',
  oneflare: '#0c8688',
};

export const getColor = (type: Color): string => colors[type];

const colorStyle = (
  property: string,
  color: Color | Partial<Record<Query, Color>>
): FlattenSimpleInterpolation => {
  if (typeof color === 'string') {
    return css`
      ${property}: ${getColor(color)};
    `;
  }

  const colorCss: Partial<Record<Query, FlattenSimpleInterpolation>> = {};

  Object.keys(color).forEach((media) => {
    const mediaSpace = color[media as Query];
    if (mediaSpace) {
      colorCss[media as Query] = css`
        ${property}: ${getColor(mediaSpace)};
      `;
    }
  });

  return mediaMatch(colorCss);
};

export const backgroundColor = (type: Color): FlattenSimpleInterpolation =>
  colorStyle('background-color', type);
export const color = (type: Color): FlattenSimpleInterpolation =>
  colorStyle('color', type);

export const rgba = (type: Color, alpha: number): string => {
  const hex = getColor(type);

  const r = parseInt((hex[1] ?? '') + (hex[2] ?? ''), 16);
  const g = parseInt((hex[3] ?? '') + (hex[4] ?? ''), 16);
  const b = parseInt((hex[5] ?? '') + (hex[6] ?? ''), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
