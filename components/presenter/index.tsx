import { Box } from '@components/box';
import { fadeInAnimation } from '@styles/animation';
import { backgroundColor } from '@styles/color';
import { borderRadius } from '@styles/mixins';
import { getSpace } from '@styles/space';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ClosedCaption } from './closed-caption';
import { Me } from './me';
import skyscrapersImg from './skyscrapers.jpg';

export const Presenter: React.FC = () => {
  return (
    <StyledContainer>
      <StyledWindow>
        <StyledPresenter>
          <Box height={{ md: '80%' }}>
            <Me />
          </Box>

          <StyledClosedCaptionContainer>
            <ClosedCaption section="intro" />
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

const StyledPresenter = styled.div`
  animation: ${fadeInAnimation} 0.5s linear 1.9s forwards;
  opacity: 0;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

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
`;

const StyledClosedCaptionContainer = styled.div`
  position: absolute;
  bottom: ${getSpace('md')};
`;

// <a href='https://www.freepik.com/vectors/background'>Background vector created by vectorpocket - www.freepik.com</a>
