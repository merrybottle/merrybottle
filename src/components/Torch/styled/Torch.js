import styled from 'styled-components';

export const TorchStyled = styled.svg`
  display: inline-block;
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  pointer-events: none;
  position: fixed;
  top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile.max}),
  (-webkit-device-pixel-ratio:3) {
    display: none;
  }
`;
