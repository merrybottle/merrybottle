import { Box } from '@components/box';
import { Text } from '@components/text';
import { rgba } from '@styles/color';
import React from 'react';
import styled from 'styled-components';

interface ClosedCaptionProps {
  section: 'intro';
}

export const ClosedCaption: React.FC<ClosedCaptionProps> = ({ section }) => {
  let copy = '';

  switch (section) {
    case 'intro':
      copy = 'Hi👋 Thanks for taking the time to join me today.';
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
