import styled, { keyframes } from 'styled-components';
import SvgButton from 'shared/components/SvgButton';

const showOff = keyframes`
  from, to {
    transform: rotate(30deg);
  }

  30% {
    transform: rotate(70deg);
  }

  60% {
    transform: rotate(30deg);
  }
`;

export const BlingStyled = styled.path`
  opacity: 0;
  transform-origin: 185px 75px;
  transition: all 0.2s linear;
`;

export const AwardStyled = styled(SvgButton)`
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  top: 110px;
  height: 160px;
  position: absolute;
  right: calc(50% + 200px);
  width: 120px;

  &:hover {
    ${BlingStyled} {
      animation: ${showOff} 1s linear infinite;
      opacity: 1;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.large.min}) {
    right: calc(50% + 250px);
  }
`;
