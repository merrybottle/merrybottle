import styled, { keyframes } from 'styled-components';
import SvgButton from 'shared/components/SvgButton';

export const ArtworkStyled = styled(SvgButton)`
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  top: 310px;
  height: 152px;
  position: absolute;
  right: calc(50% + 230px);
  width: 200px;

  &:hover {
  }
`;
