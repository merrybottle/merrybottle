import { Color, rgba } from '@styles/color';
import styled from 'styled-components';
import { Box } from './box';

interface HighlightProps {
  backgroundColor: Color;
}

export const Highlight = styled(Box).attrs({
  as: 'span',
  borderRadius: 'xs',
  paddingX: 'xs',
  paddingY: 'xxs',
})<HighlightProps>`
  display: inline-block;
  background-color: ${({ backgroundColor }) => rgba(backgroundColor, 0.2)};
`;
