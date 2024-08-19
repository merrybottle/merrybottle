import { Color, color, rgba } from '@styles/color';
import { Font, fontFamily } from '@styles/font';
import { Query, responsiveStyle } from '@styles/media';
import { textAlign } from '@styles/mixins';
import React from 'react';
import styled, { css } from 'styled-components';

type Size = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
type SizeProps = Size | Partial<Record<Query, Size>>;
type Variant = Omit<Font, 'text'>;

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3';
  $size: SizeProps;
  $variant: Variant;
  $color?: Color;
  $opacity?: number;
  $align?: Parameters<typeof textAlign>[0];
}

export const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  $color: textColor,
  $size: size,
  $variant: variant,
  $opacity: opacity,
  $align: align,
  ...props
}) => {
  return (
    <StyledHeading
      $color={textColor}
      $opacity={opacity}
      $size={size}
      $variant={variant}
      $align={align}
      {...props}
    />
  );
};

const fontSizes: Record<Size, string> = {
  lg: '48px',
  md: '32px',
  sm: '28px',
  xs: '20px',
  xxs: '16px',
};

const lineHeights: Record<Size, string> = {
  lg: '64px',
  md: '46px',
  sm: '42px',
  xs: '24px',
  xxs: '18px',
};

const getFontSize = (type: Size | string | number): string =>
  fontSizes[type as Size];
const getLineHeight = (type: Size | string | number): string =>
  lineHeights[type as Size];

const StyledHeading = styled.h1<{
  $size: SizeProps;
  $variant: Variant;
  $color?: Color;
  $opacity?: number;
  $align?: Parameters<typeof textAlign>[0];
}>`
  margin: 0;
  padding: 0;

  ${({ $color: textColor = 'dark', $opacity: opacity }) => {
    if (opacity !== undefined) {
      return css`
        color: ${rgba(textColor, opacity)};
      `;
    }

    return color(textColor);
  }}

  ${({ $size: size }) => responsiveStyle('font-size', size, getFontSize)}
  ${({ $size: size }) => responsiveStyle('line-height', size, getLineHeight)}

  ${({ $variant: variant }) => fontFamily(variant as Font)}

  ${({ $align: align = 'left' }) => textAlign(align)}

  ${({ $variant: variant }) => {
    if (variant === 'meeting') {
      return css`
        font-weight: 600;
      `;
    }

    return css`
      font-weight: 900;
      letter-spacing: 0.05em;
    `;
  }}
`;
