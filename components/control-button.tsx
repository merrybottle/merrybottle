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
    <StyledControlButton $isImportantAction={isImportantAction} {...props}>
      {children}
      <StyledControlButtonLabel
        $variant="meeting"
        $size="xs"
        $needsAttention={needsAttention}
      >
        {label}
      </StyledControlButtonLabel>
    </StyledControlButton>
  );
};

const wiggleAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  20% {
    transform: rotate(-10deg) scale(1.15);
  }
  40% {
    transform: rotate(15deg) scale(1.2) ;
  }
  60% {
    transform: rotate(-5deg) scale(1.15);
  }
  80% {
    transform: rotate(3deg) scale(1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;

const StyledControlButtonLabel = styled(Text).attrs({
  $color: 'white',
  $fontWeight: 'bold',
})<{
  $needsAttention?: boolean;
}>`
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: absolute;
  top: calc(100% + ${getSpace('xxs')});
  opacity: ${({ $needsAttention: needsAttention }) => (needsAttention ? 1 : 0)};
  transition: 0.25s ease-in;

  ${({ $needsAttention: needsAttention }) =>
    needsAttention
      ? css`
          animation: ${wiggleAnimation} 1.2s ease-in 100;
        `
      : ''}
`;

const StyledControlButton = styled.button<{
  $isImportantAction?: boolean;
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

  :hover ${StyledControlButtonLabel} {
    opacity: 1;
  }

  :not(:disabled):hover::after {
    opacity: 0.3;
    transform: scale(2);
  }
`;
