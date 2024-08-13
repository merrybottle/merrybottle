import { CSSProperties } from 'styled-components';
import { Query, responsiveStyle } from './media';
import { getSpace, SpaceProps } from './space';

export const borderRadius = (space: SpaceProps) => {
  return responsiveStyle('border-radius', space, getSpace);
};

export const display = (
  value:
    | Omit<CSSProperties['display'], 'undefined'>
    | Partial<Record<Query, CSSProperties['display']>>,
) => {
  return responsiveStyle('display', value);
};
export const flex = (
  value:
    | Omit<CSSProperties['flex'], 'undefined'>
    | Partial<Record<Query, CSSProperties['flex']>>,
) => {
  return responsiveStyle('flex', value);
};
export const flexWrap = (
  value:
    | Omit<CSSProperties['flexWrap'], 'undefined'>
    | Partial<Record<Query, CSSProperties['flexWrap']>>,
) => {
  return responsiveStyle('flex-wrap', value);
};
export const flexDirection = (
  value:
    | Omit<CSSProperties['flexDirection'], 'undefined'>
    | Partial<Record<Query, CSSProperties['flexDirection']>>,
) => {
  return responsiveStyle('flex-direction', value);
};
export const alignItems = (
  value:
    | Omit<CSSProperties['alignItems'], 'undefined'>
    | Partial<Record<Query, CSSProperties['alignItems']>>,
) => {
  return responsiveStyle('align-items', value);
};
export const justifyContent = (
  value:
    | Omit<CSSProperties['justifyContent'], 'undefined'>
    | Partial<Record<Query, CSSProperties['justifyContent']>>,
) => {
  return responsiveStyle('justify-content', value);
};

export const getSize = (size: string | number): string =>
  typeof size === 'number' ? `${size}px` : size;

export const width = (
  value:
    | Omit<CSSProperties['width'], 'undefined'>
    | Partial<Record<Query, CSSProperties['width']>>,
) => {
  return responsiveStyle('width', value, getSize);
};
export const minWidth = (
  value:
    | Omit<CSSProperties['minWidth'], 'undefined'>
    | Partial<Record<Query, CSSProperties['minWidth']>>,
) => {
  return responsiveStyle('min-width', value, getSize);
};
export const maxWidth = (
  value:
    | Omit<CSSProperties['maxWidth'], 'undefined'>
    | Partial<Record<Query, CSSProperties['maxWidth']>>,
) => {
  return responsiveStyle('max-width', value, getSize);
};
export const height = (
  value:
    | Omit<CSSProperties['height'], 'undefined'>
    | Partial<Record<Query, CSSProperties['height']>>,
) => {
  return responsiveStyle('height', value, getSize);
};
export const minHeight = (
  value:
    | Omit<CSSProperties['minHeight'], 'undefined'>
    | Partial<Record<Query, CSSProperties['minHeight']>>,
) => {
  return responsiveStyle('min-height', value, getSize);
};
export const maxHeight = (
  value:
    | Omit<CSSProperties['maxHeight'], 'undefined'>
    | Partial<Record<Query, CSSProperties['maxHeight']>>,
) => {
  return responsiveStyle('max-height', value, getSize);
};

export const opacity = (
  value:
    | Omit<CSSProperties['opacity'], 'undefined'>
    | Partial<Record<Query, CSSProperties['opacity']>>,
) => {
  return responsiveStyle('opacity', value);
};

export const overflow = (
  value:
    | Omit<CSSProperties['overflow'], 'undefined'>
    | Partial<Record<Query, CSSProperties['overflow']>>,
) => {
  return responsiveStyle('overflow', value);
};

export const textAlign = (
  value:
    | Omit<CSSProperties['textAlign'], 'undefined'>
    | Partial<Record<Query, CSSProperties['textAlign']>>,
) => {
  return responsiveStyle('text-align', value);
};
