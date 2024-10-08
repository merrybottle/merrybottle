import { alignItems } from '@styles/mixins';
import { marginTop, SpaceProps } from '@styles/space';
import styled from 'styled-components';

interface StackProps {
  $space: SpaceProps;
  $alignX?: Parameters<typeof alignItems>[0];
}

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  ${({ $alignX }) => ($alignX ? alignItems($alignX) : '')}

  > *:not(:first-child) {
    ${({ $space }) => marginTop($space)}
  }
`;
