import { Box } from '@components/box';
import { ControlButton } from '@components/control-button';
import { Text } from '@components/text';
import { Step, steps } from '@helpers/step';
import { rgba } from '@styles/color';
import React from 'react';
import { RefreshCw } from 'react-feather';
import styled from 'styled-components';

interface ClosedCaptionProps {
  step: Step;
  onRestart: () => void;
}

export const ClosedCaption: React.FC<ClosedCaptionProps> = ({
  step,
  onRestart,
}) => {
  let copy: React.ReactNode = '';

  switch (step) {
    case 'INTRO_1':
      copy = 'Hi there! 👋 《⤵️》';
      break;
    case 'INTRO_2':
      copy = 'Thanks for joining me here today.';
      break;
    case 'INTRO_3':
      copy = 'My name is Mary';
      break;
    case 'INTRO_4':
      copy = <>and I&apos;m a front-end developer.</>;
      break;
    case 'INTRO_5':
      copy = <>I&apos;ll only take a few minutes of your time</>;
      break;
    case 'INTRO_6':
      copy = 'to showcase a few things that';
      break;
    case 'INTRO_7':
      copy = <>I&apos;ve been up to until today.</>;
      break;
    case 'INTRO_8':
      copy = <>If you&apos;re ready, shall we start?</>;
      break;
    case 'END_1':
      copy = <>And that&apos;s it!</>;
      break;
    case 'END_2':
      copy = 'If you have any questions';
      break;
    case 'END_3':
      copy = 'feel free to drop me a message 《⤵️》';
      break;
    case 'END_4':
      copy = 'Otherwise, see you next time! 👋';
      break;
  }

  if (!copy) {
    return null;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <StyledBackgroundBox>
        <Text
          variant="meeting"
          size={{ xs: 'lg', lg: 'xxl' }}
          color="white"
          align="center"
        >
          {copy}
        </Text>
      </StyledBackgroundBox>

      {steps.indexOf(step) === steps.length - 1 && (
        <Box marginTop="xs">
          <ControlButton
            isImportantAction={true}
            label="Again"
            onClick={onRestart}
          >
            <RefreshCw />
          </ControlButton>
        </Box>
      )}
    </Box>
  );
};

const StyledBackgroundBox = styled(Box).attrs({
  borderRadius: 'xs',
  paddingX: 'xs',
  paddingY: 'xxs',
})`
  background-color: ${rgba('dark', 0.7)};
`;
