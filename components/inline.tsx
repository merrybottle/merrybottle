import { alignItems } from '@styles/mixins';
import { marginLeft, SpaceProps } from '@styles/space';
import styled from 'styled-components';

interface InlineProps {
  $space: SpaceProps;
  $alignY?: Parameters<typeof alignItems>[0];
}

export const Inline = styled.div<InlineProps>`
  display: inline-flex;
  flex-wrap: wrap;
  ${({ $alignY = 'center' }) => alignItems($alignY)}

  > *:not(:first-child) {
    ${({ $space }) => marginLeft($space)}
  }
`;
