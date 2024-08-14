import { Box } from '@components/box';
import { ClosedCaption } from '@components/closed-caption';
import { Slides } from '@components/slides';
import { Step, steps } from '@helpers/step';
import { fadeInAnimation } from '@styles/animation';
import { backgroundColor, getColor, rgba } from '@styles/color';
import { mediaMatch } from '@styles/media';
import { borderRadius, minHeight, minWidth } from '@styles/mixins';
import { getSpace, padding } from '@styles/space';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Me } from './me';
import backgroundImg from './assets/background.jpg';
import { mix } from 'polished';

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

        <Box $position="relative" $height="100%">
          <StyledPresenter step={currentStep}>
            <StyledMeContainer>
              <Me step={currentStep} />
            </StyledMeContainer>
          </StyledPresenter>
        </Box>
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
    height: 0;
    width: 0;
    border-color: ${rgba('dark', 0)};
  }

  40%, 60% {
    height: ${getSpace('xs')};
    width: 100%;
    border-color: ${rgba('dark', 1)};
  }

  100% {
    height: 100%;
    width: 100%;
    border-color: ${rgba('dark', 1)};
  }
`;

const expandWindowShadowAnimation = keyframes`
  0% {
    top: 16px;
    bottom: 0px;
    opacity: 0;
    border-color: ${rgba('dark', 0)};
  }

  100% {
    top: 16px;
    bottom: -16px;
    opacity: 1;
    border-color: ${rgba('dark', 1)};
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
  animation: ${expandWindowAnimation} 1.1s linear 0.5s forwards;
  ${backgroundColor('background')}
  ${borderRadius('md')}
  ${padding('sm')}
  box-sizing: border-box;
  border: 3px solid ${rgba('dark', 0)};
  overflow: hidden;

  &::after {
    animation: ${expandWindowShadowAnimation} 0.5s linear 1.6s forwards;
    content: '';
    ${borderRadius('sm')}
    background-color: ${mix(0.6, getColor('background'), getColor('yellow'))};
    border: 3px solid ${rgba('dark', 0)};
    opacity: 0;
    position: absolute;
    left: 24px;
    right: 24px;
    z-index: -1;
  }
`;

const StyledPresenter = styled.div<{
  step: Step;
}>`
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
    background: url('${backgroundImg.src}') no-repeat;
    background-size: cover;
    background-position: center;
    ${borderRadius('sm')}
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    filter: brightness(1.3) contrast(0.7) opacity(0.9);
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
  $height: { xs: '80%', lg: '85%' },
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
      top: ${getSpace('lg')};
    `,
    lg: css`
      top: auto;
      bottom: ${getSpace('lg')};
    `,
  })}
`;
