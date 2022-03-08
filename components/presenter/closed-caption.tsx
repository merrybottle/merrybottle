import { Box } from '@components/box';
import { Text } from '@components/text';
import { Step } from '@helpers/step';
import { rgba } from '@styles/color';
import React from 'react';
import styled from 'styled-components';

interface ClosedCaptionProps {
  step: Step;
}

export const ClosedCaption: React.FC<ClosedCaptionProps> = ({ step }) => {
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
  }

  return (
    <StyledBackgroundBox>
      <Text
        variant="meeting"
        size={{ xs: 'lg', lg: 'xl' }}
        color="white"
        align="center"
      >
        {copy}
      </Text>
    </StyledBackgroundBox>
  );
};

const StyledBackgroundBox = styled(Box).attrs({
  borderRadius: 'xs',
  paddingX: 'xs',
  paddingY: 'xxs',
})`
  background-color: ${rgba('dark', 0.7)};
`;
