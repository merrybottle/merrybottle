import { Box } from '@components/box';
import { Step } from '@helpers/step';
import { fadeInAnimation } from '@styles/animation';
import { backgroundColor } from '@styles/color';
import { mediaMatch } from '@styles/media';
import { borderRadius } from '@styles/mixins';
import { getSpace } from '@styles/space';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ClosedCaption } from './closed-caption';
import { Me } from './me';
import skyscrapersImg from './skyscrapers.jpg';

interface PresenterProps {
  step: Step;
}

export const Presenter: React.FC<PresenterProps> = ({ step }) => {
  return (
    <StyledContainer>
      <StyledWindow>
        <StyledPresenter step={step}>
          <Box height={{ md: '90%' }}>
            <Me />
          </Box>

          <StyledClosedCaptionContainer>
            <ClosedCaption step={step} />
          </StyledClosedCaptionContainer>
        </StyledPresenter>
      </StyledWindow>
    </StyledContainer>
  );
};

const expandWindowAnimation = keyframes`
  0% {
    height: ${getSpace('xs')};
    width: 0;
  }

  40%, 60% {
    height: ${getSpace('xs')};
    width: 100%;
  }

  100% {
    height: 100%;
    width: 100%;
  }
`;

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledWindow = styled.div`
  animation: ${expandWindowAnimation} 1s linear 1s forwards;
  ${backgroundColor('white')}
  ${borderRadius('xs')}
  overflow: hidden;
  height: ${getSpace('xs')};
  width: 0;
`;

const StyledPresenter = styled.div<{
  step: Step;
}>`
  ${borderRadius('xs')}
  animation: ${fadeInAnimation} 0.5s linear 1.9s forwards;
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: 0.5s ease-in;
  bottom: 0;
  left: 0;
  overflow: hidden;

  ::before {
    content: '';
    background: url('${skyscrapersImg.src}') no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    filter: grayscale(0.6);
    z-index: -1;
  }

  ${({ step }) => {
    if (step.includes('SLIDES')) {
      return css`
        border-radius: 50%;
        height: 200px;
        width: 200px;
        overflow: hidden;
        bottom: ${getSpace('xs')};
        left: ${getSpace('xs')};
      `;
    }

    return '';
  }}
`;

const StyledClosedCaptionContainer = styled.div`
  position: absolute;

  ${mediaMatch({
    xs: css`
      top: ${getSpace('md')};
    `,
    md: css`
      top: auto;
      bottom: ${getSpace('md')};
    `,
  })}
`;

// <a href='https://www.freepik.com/vectors/background'>Background vector created by vectorpocket - www.freepik.com</a>
