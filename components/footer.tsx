import { formatMinDigits } from '@helpers/format';
import { steps } from '@helpers/step';
import React, { useEffect, useState } from 'react';
import {
  CameraOff,
  LogOut,
  MessageCircle,
  MicOff,
  Play,
  SkipBack,
} from 'react-feather';
import styled from 'styled-components';
import { Box } from './box';
import { ControlButton } from './control-button';
import { Inline } from './inline';
import { MeetingTitle } from './meeting-title';
import { Text } from './text';

export const FOOTER_HEIGHT = 120;

interface FooterProps {
  currentStepIndex: number;
  onStepIndexChange: (stepIndex: number) => void;
  onOpenChatWindow: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentStepIndex,
  onStepIndexChange,
  onOpenChatWindow,
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
              currentStepIndex > 1
                ? () => onStepIndexChange(currentStepIndex - 1)
                : undefined
            }
            onNext={
              currentStepIndex < steps.length - 1
                ? () => onStepIndexChange(currentStepIndex + 1)
                : undefined
            }
            onOpenChatWindow={onOpenChatWindow}
          />
        </Box>

        <Box
          display={{ xs: 'none', lg: 'flex' }}
          flex={1 / 3}
          justifyContent="flex-end"
        >
          <Logout onStepIndexChange={onStepIndexChange} />
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
  onOpenChatWindow: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  onBack,
  onNext,
  onOpenChatWindow,
}) => {
  return (
    <Inline space="sm">
      <ControlButton isImportantAction={true} disabled={true} label="Nope">
        <MicOff />
      </ControlButton>

      <ControlButton isImportantAction={true} disabled={true} label="Nope">
        <CameraOff />
      </ControlButton>

      <ControlButton onClick={onBack} disabled={!onBack} label="Back">
        <SkipBack />
      </ControlButton>

      <ControlButton onClick={onNext} disabled={!onNext} label="Next">
        <Play />
      </ControlButton>

      <ControlButton onClick={onOpenChatWindow} label="Chat">
        <MessageCircle />
      </ControlButton>
    </Inline>
  );
};

interface LogoutProps {
  onStepIndexChange: (stepIndex: number) => void;
}

export const Logout: React.FC<LogoutProps> = ({ onStepIndexChange }) => {
  return (
    <ControlButton
      isImportantAction={true}
      onClick={() => onStepIndexChange(0)}
      label="Exit"
    >
      <LogOut />
    </ControlButton>
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
