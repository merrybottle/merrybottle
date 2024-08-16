import React from 'react';
import { Text } from './text';
import { Coffee } from 'react-feather';
import { Inline } from './inline';

export const MeetingTitle: React.FC = () => {
  return (
    <Text $variant="meeting" $color="dark" $size="md">
      <Inline $space="xs" $alignY="center" as="span">
        <span>1:1 Intro</span>
        <Coffee />
      </Inline>
    </Text>
  );
};
