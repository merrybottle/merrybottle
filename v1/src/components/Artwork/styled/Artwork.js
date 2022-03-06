import styled, { keyframes } from 'styled-components';
import SvgButton from 'shared/components/SvgButton';

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const rainboxPathStyles = `
  opacity: 0.8;
  stroke-dasharray: 420;
  stroke-dashoffset: 420;
`;

export const RedRainbowPathStyled = styled.path``;

export const OrangeRainbowPathStyled = styled.path``;

export const GreenRainbowPathStyled = styled.path``;

export const PurpleRainbowPathStyled = styled.path``;

export const ArtworkStyled = styled(SvgButton)`
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  top: 310px;
  height: 152px;
  position: absolute;
  right: calc(50% + 230px);
  width: 200px;

  ${GreenRainbowPathStyled},
  ${OrangeRainbowPathStyled},
  ${PurpleRainbowPathStyled},
  ${RedRainbowPathStyled} {
    ${rainboxPathStyles}
  }

  &:hover {
    ${RedRainbowPathStyled} {
      animation: ${dash} 0.8s linear forwards;
    }

    ${OrangeRainbowPathStyled} {
      animation: ${dash} 0.8s linear 0.2s forwards;
    }

    ${GreenRainbowPathStyled} {
      animation: ${dash} 0.8s linear 0.4s forwards;
    }

    ${PurpleRainbowPathStyled} {
      animation: ${dash} 0.8s linear 0.6s forwards;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.large.min}) {
    right: calc(50% + 320px);
  }
`;
