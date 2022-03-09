import { formatMinDigits } from '@helpers/format';
import { steps } from '@helpers/step';
import { backgroundColor, color, rgba } from '@styles/color';
import { fontFamily } from '@styles/font';
import { borderRadius, height, width } from '@styles/mixins';
import { getSpace, paddingX, paddingY } from '@styles/space';
import React, { useEffect, useState } from 'react';
import {
  CameraOff,
  LogOut,
  MessageCircle,
  MicOff,
  Play,
  SkipBack,
} from 'react-feather';
import styled, { css } from 'styled-components';
import { Box } from './box';
import { Inline } from './inline';
import { MeetingTitle } from './meeting-title';
import { Text } from './text';

export const FOOTER_HEIGHT = 120;

interface FooterProps {
  currentStepIndex: number;
  onStepIndexChange: (stepIndex: number) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentStepIndex,
  onStepIndexChange,
}) => {
  return (
    <StyledContainer>
      <Box display="flex" alignItems="center" width="100%">
        <Box display={{ xs: 'none', lg: 'block' }} flex={1 / 3}>
          <Inline space="sm">
            <Clock />
            <Text variant="meeting" color="white" size="md" opacity={0.6}>
              |
            </Text>
            <MeetingTitle />
          </Inline>
        </Box>

        <Box flex={{ xs: 1, lg: 1 / 3 }} display="flex" justifyContent="center">
          <Controls
            onBack={
              currentStepIndex > 0
                ? () => onStepIndexChange(currentStepIndex - 1)
                : undefined
            }
            onNext={
              currentStepIndex < steps.length - 1
                ? () => onStepIndexChange(currentStepIndex + 1)
                : undefined
            }
          />
        </Box>

        <Box
          display={{ xs: 'none', lg: 'flex' }}
          flex={1 / 3}
          justifyContent="flex-end"
        >
          <Logout />
        </Box>
      </Box>
    </StyledContainer>
  );
};

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timer = setInterval(refreshClock, 20000); // 20s
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Text variant="meeting" color="white" size="md">
      {formatMinDigits(date.getHours())}:{formatMinDigits(date.getMinutes())}
    </Text>
  );
};

interface ControlsProps {
  onBack?: () => void;
  onNext?: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onBack, onNext }) => {
  return (
    <Inline space="sm">
      <StyledControlButton isImportantAction={true} disabled={true}>
        <MicOff />
        <StyledControlButtonLabel>Nope</StyledControlButtonLabel>
      </StyledControlButton>

      <StyledControlButton isImportantAction={true} disabled={true}>
        <CameraOff />
        <StyledControlButtonLabel>Nope</StyledControlButtonLabel>
      </StyledControlButton>

      <StyledControlButton onClick={onBack} disabled={!onBack}>
        <SkipBack />
        <StyledControlButtonLabel>Back</StyledControlButtonLabel>
      </StyledControlButton>

      <StyledControlButton onClick={onNext} disabled={!onNext}>
        <Play />
        <StyledControlButtonLabel>Next</StyledControlButtonLabel>
      </StyledControlButton>

      <StyledControlButton>
        <MessageCircle />
        <StyledControlButtonLabel>Chat</StyledControlButtonLabel>
      </StyledControlButton>
    </Inline>
  );
};

export const Logout: React.FC = () => {
  return (
    <StyledControlButton isImportantAction={true}>
      <LogOut />
      <StyledControlButtonLabel>Exit</StyledControlButtonLabel>
    </StyledControlButton>
  );
};

const StyledContainer = styled(Box).attrs({
  padding: 'md',
  display: 'flex',
  alignItems: 'center',
  height: FOOTER_HEIGHT,
  width: '100%',
})`
  position: fixed;
  left: 0;
  bottom: 0;
`;

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

const StyledControlButton = styled.button<{
  isImportantAction?: boolean;
}>`
  ${({ isImportantAction }) =>
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
  }

  :hover ${StyledControlButtonLabel} {
    opacity: 1;
  }

  :not(:disabled):hover::after {
    opacity: 0.3;
    transform: scale(2);
  }
`;
