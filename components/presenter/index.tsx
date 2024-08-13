import { Box } from '@components/box';
import { ClosedCaption } from '@components/closed-caption';
import { Slides } from '@components/slides';
import { Step, steps } from '@helpers/step';
import { fadeInAnimation } from '@styles/animation';
import { backgroundColor } from '@styles/color';
import { mediaMatch } from '@styles/media';
import { borderRadius, minHeight, minWidth } from '@styles/mixins';
import { getSpace } from '@styles/space';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Me } from './me';
import skyscrapersImg from './assets/skyscrapers.jpg';

interface PresenterProps {
  currentStepIndex: number;
  onStepIndexChange: (stepIndex: number) => void;
}

export const Presenter: React.FC<PresenterProps> = ({
  currentStepIndex,
  onStepIndexChange,
}) => {
  const currentStep = steps[currentStepIndex]!;

  return (
    <StyledContainer>
      <StyledWindow>
        {currentStepIndex >= steps.indexOf('INTRO_8') && (
          <Slides step={currentStep} />
        )}

        <StyledPresenter step={currentStep}>
          <StyledMeContainer>
            <Me step={currentStep} />
          </StyledMeContainer>
        </StyledPresenter>
      </StyledWindow>

      <StyledClosedCaptionContainer>
        <ClosedCaption
          step={currentStep}
          onRestart={() => onStepIndexChange(0)}
        />
      </StyledClosedCaptionContainer>
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
  animation: ${expandWindowAnimation} 1s linear 0.3s forwards;
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
  animation: ${fadeInAnimation} 0.5s linear 1.5s forwards;
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: 0.5s ease-in;
  top: 100%;
  transform: translateY(-100%);
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
        height: 15vw;
        width: 15vw;
        ${minHeight({ xs: 120, md: 150, lg: 200 })}
        ${minWidth({ xs: 120, md: 150, lg: 200 })}
        overflow: hidden;

        ${mediaMatch({
          xs: css`
            top: 0;
            left: 50%;
            transform: translateX(-50%) translateY(-70%);
          `,
          md: css`
            top: calc(100% - ${getSpace('xs')});
            left: ${getSpace('xs')};
            transform: translateY(-100%);
          `,
        })}
      `;
    }

    return '';
  }}
`;

const StyledMeContainer = styled(Box).attrs({
  $height: { md: '50%', lg: '85%' },
})`
  line-height: 0;
  aspect-ratio: 1 / 1;
`;

const StyledClosedCaptionContainer = styled.div`
  animation: ${fadeInAnimation} 0.2s linear 2.5s forwards;
  opacity: 0;
  position: absolute;

  ${mediaMatch({
    xs: css`
      top: ${getSpace('md')};
    `,
    lg: css`
      top: auto;
      bottom: ${getSpace('sm')};
    `,
  })}
`;

// <a href='https://www.freepik.com/vectors/background'>Background vector created by vectorpocket - www.freepik.com</a>
