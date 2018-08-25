import styled, { keyframes } from 'styled-components';
import SvgButton from 'shared/components/SvgButton';

const blinkClose = keyframes`
  from,
  30%,
  to {
    opacity: 1;
  }

  10%,
  20% {
    opacity: 0;
  }
`;

const blinkOpen = keyframes`
  from,
  30%,
  to {
    opacity: 0;
  }

  10%,
  20% {
    opacity: 1;
  }
`;

export const ClosedEyesStyled = styled.g`
  opacity: 0;
`;

export const OpenEyesStyled = styled.g`
  opacity: 1;
`;

export const MyselfStyled = styled(SvgButton)`
  bottom: 0;
  height: 520px;
  position: absolute;
  left: 50%;
  width: 274px;

  &:hover {
    ${ClosedEyesStyled} {
      animation: ${blinkOpen} 1s linear infinite;
    }

    ${OpenEyesStyled} {
      animation: ${blinkClose} 1s linear infinite;
    }
  }
`;
