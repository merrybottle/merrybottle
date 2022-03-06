import { fadeInAnimation } from '@styles/animation';
import { backgroundColor, rgba } from '@styles/color';
import { getSpace } from '@styles/space';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import skyskrapersImg from './skyskrapers.jpeg';

export const Presenter: React.FC = () => {
  return (
    <StyledContainer>
      <StyledWindow>
        <StyledPresenter />
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
  border-radius: ${getSpace('xs')};
  overflow: hidden;
`;

const StyledPresenter = styled.div`
  animation: ${fadeInAnimation} 0.5s linear 2s forwards;
  background: url('${skyskrapersImg.src}') no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0;
  height: 100%;
  width: 100%;
`;
