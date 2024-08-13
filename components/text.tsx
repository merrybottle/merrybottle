import { Color, color, rgba } from '@styles/color';
import { Font, fontFamily } from '@styles/font';
import { Query, responsiveStyle } from '@styles/media';
import { textAlign } from '@styles/mixins';
import React from 'react';
import styled, { css } from 'styled-components';

type Size = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
type SizeProps = Size | Partial<Record<Query, Size>>;
type Variant = Omit<Font, 'heading'>;
type FontWeight = 'light' | 'regular' | 'bold';

interface TextProps {
  $size: SizeProps;
  $variant: Variant;
  $color?: Color;
  $fontWeight?: FontWeight;
  $opacity?: number;
  $align?: Parameters<typeof textAlign>[0];
}

export const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  $color: textColor,
  $size: size,
  $variant: variant,
  $fontWeight: fontWeight,
  $opacity: opacity,
  $align: align,
  ...props
}) => {
  return (
    <StyledP
      $color={textColor}
      $opacity={opacity}
      $size={size}
      $variant={variant}
      $fontWeight={fontWeight}
      $align={align}
      {...props}
    />
  );
};

const fontSizes: Record<Size, string> = {
  xxl: '48px',
  xl: '28px',
  lg: '20px',
  md: '16px',
  sm: '14px',
  xs: '12px',
};

const lineHeights: Record<Size, string> = {
  xxl: '64px',
  xl: '36px',
  lg: '30px',
  md: '26px',
  sm: '22px',
  xs: '18px',
};

const getFontSize = (type: Size | string | number): string =>
  fontSizes[type as Size];
const getLineHeight = (type: Size | string | number): string =>
  lineHeights[type as Size];

const StyledP = styled.p<{
  $size: SizeProps;
  $variant: Variant;
  $color?: Color;
  $fontWeight?: FontWeight;
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

  ${({ $variant: variant, $fontWeight: fontWeight }) => {
    if (variant === 'meeting') {
      switch (fontWeight) {
        case 'bold':
          return `font-weight: 600;`;
        case 'light':
        case 'regular':
        default:
          return `font-weight: 400;`;
      }
    }

    switch (fontWeight) {
      case 'light':
        return `font-weight: 300;`;
      case 'bold':
        return `font-weight: 500;`;
      case 'regular':
      default:
        return `font-weight: 400;`;
    }
  }}

  strong {
    ${({ $variant: variant }) => {
      if (variant === 'meeting') {
        return `font-weight: 600;`;
      }

      return `font-weight: 500;`;
    }}
  }
`;
