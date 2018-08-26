import styled, { keyframes } from 'styled-components';

const showHint = keyframes`
  100% {
    opacity: 1;
  }
`;

export const MerryBottleStyled = styled.div`
  background-color: #873600;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile.max}) {
    ${({ theme }) => theme.brickwall}

    padding: 70px 0 40px;
  }
`;

export const InstructionsStyled = styled.span`
  color: white;
  display: inline-block;
  font-family: ${({ theme }) => theme.font.title};
  font-size: 26px;
  letter-spacing: 7px;
  line-height: 32px;
  position: absolute;
  top: 10px;
  left: 50%;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile.max}) {
    display: none;
  }
`;

export const HintStyled = styled.small`
  animation: ${showHint} 0.2s linear 3s forwards;
  font-size: 12px;
  opacity: 0;
`;
