import styled, { keyframes } from 'styled-components';
import SvgButton from 'shared/components/SvgButton';

const ring = keyframes`
  from,
  to {
    transform: scale(1, 1) rotate(0);
  }

  16.66% {
    transform: scale(1.1, 1.1) rotate(10deg);
  }

  33.33% {
    transform: scale(1.2, 1.2) rotate(-15deg);
  }

  49.99% {
    transform: scale(1.3, 1.35) rotate(30deg);
  }

  66.66% {
    transform: scale(1.2, 1.2) rotate(-15deg);
  }

  83.33% {
    transform: scale(1.1, 1.1) rotate(10);
  }
`;

export const PhonePathStyled = styled.path`
  fill: #cb4335;
  stroke: none;
`;

export const PhoneHandlePathStyled = styled.path`
  fill: #cb4335;
  stroke: none;
`;

export const DialStyled = styled.circle`
  fill: #b2babb;
  stroke: #2c3e50;
  stroke-width: 25;
`;

export const DialNumberStyled = styled.circle`
  fill: #f2f3f4;
`;

export const PhoneStyled = styled(SvgButton)`
  bottom: 5px;
  height: 150px;
  position: absolute;
  right: 150px;
  width: 150px;

  &:hover {
    ${PhoneHandlePathStyled} {
      animation: ${ring} 1s linear infinite;
      transform-origin: center center;
    }
  }
`;
