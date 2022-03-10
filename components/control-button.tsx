import { backgroundColor, color, rgba } from '@styles/color';
import { borderRadius, height, width } from '@styles/mixins';
import { getSpace } from '@styles/space';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Text } from './text';

interface ControlButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
  isImportantAction?: boolean;
  needsAttention?: boolean;
}

export const ControlButton: React.FC<ControlButtonProps> = ({
  label,
  isImportantAction,
  needsAttention,
  children,
  ...props
}) => {
  return (
    <StyledControlButton
      $isImportantAction={isImportantAction}
      $needsAttention={needsAttention}
      {...props}
    >
      {children}
      <StyledControlButtonLabel>{label}</StyledControlButtonLabel>
    </StyledControlButton>
  );
};

const StyledControlButtonLabel = styled(Text).attrs({
  variant: 'meeting',
  size: 'xs',
  color: 'white',
  fontWeight: 'bold',
})`
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: absolute;
  top: calc(100% + ${getSpace('xxs')});
  opacity: 0;
  transition: 0.25s ease-in;
`;

const pulseAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  80% {
    opacity: 0.3;
    transform: scale(1.6);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
`;

const StyledControlButton = styled.button<{
  $isImportantAction?: boolean;
  $needsAttention?: boolean;
}>`
  ${({ $isImportantAction: isImportantAction }) =>
    isImportantAction
      ? backgroundColor('red')
      : `background-color: ${rgba('white', 0.1)};`}
  ${color('white')}
  ${borderRadius('md')}
  ${height(getSpace('xl'))}
  ${width(getSpace('xl'))}
  border: none;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  :disabled {
    cursor: not-allowed;
  }

  ::after {
    content: '';
    ${backgroundColor('black')}
    border-radius: 50%;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.25s ease-in;
    transform-origin: center;
    transform: scale(0);
    z-index: -1;
    ${({ $needsAttention: needsAttention }) =>
      needsAttention
        ? css`
            animation: ${pulseAnimation} 1s ease-in infinite;
          `
        : ''}
  }

  :hover ${StyledControlButtonLabel} {
    opacity: 1;
  }

  :not(:disabled):hover::after {
    opacity: 0.3;
    transform: scale(2);
  }
`;
