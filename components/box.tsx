import { backgroundColor, Color, color } from '@styles/color';
import {
  alignItems,
  borderRadius,
  display,
  flex,
  flexDirection,
  height,
  justifyContent,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  width,
} from '@styles/mixins';
import {
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY,
  SpaceProps,
} from '@styles/space';
import styled, { css } from 'styled-components';

export const Box = styled.div<{
  backgroundColor?: Color;
  borderRadius?: SpaceProps;
  color?: Color;
  display?: Parameters<typeof display>[0];
  flex?: Parameters<typeof flex>[0];
  flexDirection?: Parameters<typeof flexDirection>[0];
  alignItems?: Parameters<typeof alignItems>[0];
  justifyContent?: Parameters<typeof justifyContent>[0];
  width?: Parameters<typeof width>[0];
  maxWidth?: Parameters<typeof maxWidth>[0];
  minWidth?: Parameters<typeof minWidth>[0];
  height?: Parameters<typeof height>[0];
  maxHeight?: Parameters<typeof maxHeight>[0];
  minHeight?: Parameters<typeof minHeight>[0];
  margin?: SpaceProps;
  marginBottom?: SpaceProps;
  marginLeft?: SpaceProps;
  marginRight?: SpaceProps;
  marginTop?: SpaceProps;
  marginX?: SpaceProps;
  marginY?: SpaceProps;
  padding?: SpaceProps;
  paddingBottom?: SpaceProps;
  paddingLeft?: SpaceProps;
  paddingRight?: SpaceProps;
  paddingTop?: SpaceProps;
  paddingX?: SpaceProps;
  paddingY?: SpaceProps;
  opacity?: Parameters<typeof opacity>[0];
}>`
  box-sizing: border-box;

  ${(props) => {
    let styles = css``;

    if (props.backgroundColor) {
      styles = css`
        ${styles}${backgroundColor(props.backgroundColor)}
      `;
    }

    if (props.borderRadius) {
      styles = css`
        ${styles}${borderRadius(props.borderRadius)}
      `;
    }

    if (props.color) {
      styles = css`
        ${styles}${color(props.color)}
      `;
    }

    if (props.display) {
      styles = css`
        ${styles}${display(props.display)}
      `;
    }
    if (props.flex) {
      styles = css`
        ${styles}${flex(props.flex)}
      `;
    }
    if (props.flexDirection) {
      styles = css`
        ${styles}${flexDirection(props.flexDirection)}
      `;
    }
    if (props.alignItems) {
      styles = css`
        ${styles}${alignItems(props.alignItems)}
      `;
    }
    if (props.justifyContent) {
      styles = css`
        ${styles}${justifyContent(props.justifyContent)}
      `;
    }

    if (props.width !== undefined) {
      styles = css`
        ${styles}${width(props.width)}
      `;
    }
    if (props.maxWidth !== undefined) {
      styles = css`
        ${styles}${maxWidth(props.maxWidth)}
      `;
    }
    if (props.minWidth !== undefined) {
      styles = css`
        ${styles}${minWidth(props.minWidth)}
      `;
    }
    if (props.height !== undefined) {
      styles = css`
        ${styles}${height(props.height)}
      `;
    }
    if (props.maxHeight !== undefined) {
      styles = css`
        ${styles}${maxHeight(props.maxHeight)}
      `;
    }
    if (props.minHeight !== undefined) {
      styles = css`
        ${styles}${minHeight(props.minHeight)}
      `;
    }

    if (props.margin) {
      styles = css`
        ${styles}${margin(props.margin)}
      `;
    }
    if (props.marginBottom) {
      styles = css`
        ${styles}${marginBottom(props.marginBottom)}
      `;
    }
    if (props.marginLeft) {
      styles = css`
        ${styles}${marginLeft(props.marginLeft)}
      `;
    }
    if (props.marginRight) {
      styles = css`
        ${styles}${marginRight(props.marginRight)}
      `;
    }
    if (props.marginTop) {
      styles = css`
        ${styles}${marginTop(props.marginTop)}
      `;
    }
    if (props.marginX) {
      styles = css`
        ${styles}${marginX(props.marginX)}
      `;
    }
    if (props.marginY) {
      styles = css`
        ${styles}${marginY(props.marginY)}
      `;
    }
    if (props.padding) {
      styles = css`
        ${styles}${padding(props.padding)}
      `;
    }
    if (props.paddingBottom) {
      styles = css`
        ${styles}${paddingBottom(props.paddingBottom)}
      `;
    }
    if (props.paddingLeft) {
      styles = css`
        ${styles}${paddingLeft(props.paddingLeft)}
      `;
    }
    if (props.paddingRight) {
      styles = css`
        ${styles}${paddingRight(props.paddingRight)}
      `;
    }
    if (props.paddingTop) {
      styles = css`
        ${styles}${paddingTop(props.paddingTop)}
      `;
    }
    if (props.paddingX) {
      styles = css`
        ${styles}${paddingX(props.paddingX)}
      `;
    }
    if (props.paddingY) {
      styles = css`
        ${styles}${paddingY(props.paddingY)}
      `;
    }

    if (props.opacity) {
      styles = css`
        ${styles}${opacity(props.opacity)}
      `;
    }

    return styles;
  }}
`;
