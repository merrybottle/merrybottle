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
import styled, { keyframes } from 'styled-components';
import { Box } from './box';
import { ControlButton } from './control-button';
import { Inline } from './inline';
import { MeetingTitle } from './meeting-title';
import { Text } from './text';
import { getColor } from '@styles/color';
import { borderRadius } from '@styles/mixins';
import { fadeInAnimation } from '@styles/animation';

export const FOOTER_HEIGHT = 120;

interface FooterProps {
  currentStepIndex: number;
  onStepIndexChange: (stepIndex: number) => void;
  onToggleChatWindow: (open: boolean) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentStepIndex,
  onStepIndexChange,
  onToggleChatWindow,
}) => {
  return (
    <>
      <StyledFakeContainer />

      <StyledContainer>
        <Box $display="flex" $alignItems="center" $width="100%">
          <Box
            $display="flex"
            $alignItems="center"
            $flex={{ xs: 1, lg: 3 / 4 }}
          >
            <Box $display={{ xs: 'none', lg: 'block' }} $flex={1 / 3}>
              <Inline $space="sm">
                <Clock />
                <Text
                  $variant="meeting"
                  $color="dark"
                  $size="md"
                  $opacity={0.6}
                >
                  |
                </Text>
                <MeetingTitle />
              </Inline>
            </Box>

            <Box
              $flex={{ xs: 1, lg: 2 / 3 }}
              $display="flex"
              $justifyContent="center"
            >
              <Controls
                currentStepIndex={currentStepIndex}
                onBack={() => {
                  if (currentStepIndex > 2) {
                    onStepIndexChange(currentStepIndex - 1);
                  } else {
                    onStepIndexChange(0);
                  }

                  onToggleChatWindow(false);
                }}
                onNext={
                  currentStepIndex < steps.length - 1
                    ? () => onStepIndexChange(currentStepIndex + 1)
                    : undefined
                }
                onOpenChatWindow={() => onToggleChatWindow(true)}
              />
            </Box>
          </Box>

          <Box
            $display={{ xs: 'none', lg: 'flex' }}
            $flex={1 / 4}
            $justifyContent="flex-end"
          >
            <Logout onStepIndexChange={onStepIndexChange} />
          </Box>
        </Box>
      </StyledContainer>
    </>
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
    <Text $variant="meeting" $color="dark" $size="md">
      {formatMinDigits(date.getHours())}:{formatMinDigits(date.getMinutes())}
    </Text>
  );
};

interface ControlsProps {
  currentStepIndex: number;
  onBack?: () => void;
  onNext?: () => void;
  onOpenChatWindow: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  currentStepIndex,
  onBack,
  onNext,
  onOpenChatWindow,
}) => {
  const currentStep = steps[currentStepIndex];
  return (
    <Inline $space="sm">
      <StyledBounceIn $delay={0}>
        <ControlButton isImportantAction={true} disabled={true} label="Nope">
          <MicOff />
        </ControlButton>
      </StyledBounceIn>

      <StyledBounceIn $delay={0.1}>
        <ControlButton isImportantAction={true} disabled={true} label="Nope">
          <CameraOff />
        </ControlButton>
      </StyledBounceIn>

      <StyledBounceIn $delay={0.2}>
        <ControlButton onClick={onBack} disabled={!onBack} label="Back">
          <SkipBack />
        </ControlButton>
      </StyledBounceIn>

      <StyledBounceIn $delay={0.3}>
        <ControlButton
          onClick={onNext}
          disabled={!onNext}
          label="Next"
          needsAttention={currentStep === 'INTRO_1'}
        >
          <Play />
        </ControlButton>
      </StyledBounceIn>

      <StyledBounceIn $delay={0.4}>
        <ControlButton
          onClick={onOpenChatWindow}
          label="Message"
          needsAttention={currentStep === 'END_3'}
        >
          <MessageCircle />
        </ControlButton>
      </StyledBounceIn>
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
      <StyledFadeIn>
        <LogOut />
      </StyledFadeIn>
    </ControlButton>
  );
};

const slideUpAnimation = keyframes`
  from {
    bottom: -${FOOTER_HEIGHT}px;
  }
  to {
    bottom: 0;
  }
`;

const bounceInAnimation = keyframes`
  0% { transform: translateY(200px); }
  28% { transform: translateY(-100px); }
  65% { transform: translateY(20px); }
  80% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const StyledContainer = styled(Box).attrs({
  $padding: { xs: 'sm', lg: 'md' },
  $display: 'flex',
  $alignItems: 'center',
  $height: FOOTER_HEIGHT,
})`
  position: absolute;
  left: 0;
  right: 0;
`;

const StyledFakeContainer = styled(Box).attrs({
  $height: FOOTER_HEIGHT,
})`
  animation: ${slideUpAnimation} 0.3s ease-in;
  border: 3px solid ${getColor('dark')};
  border-bottom: none;
  ${borderRadius('md')}
  background-color: #fef9ec;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: absolute;
  left: 0;
  right: 0;
`;

const StyledBounceIn = styled.div<{
  $delay: number;
}>`
  animation: ${bounceInAnimation} 1.3s ease-out ${({ $delay }) => $delay}s
    forwards;
  transform: translateY(200px);
`;

const StyledFadeIn = styled.div`
  animation: ${fadeInAnimation} 0.2s ease-in;
`;
