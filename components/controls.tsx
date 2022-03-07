import { formatMinDigits } from '@helpers/format';
import { paddingX, paddingY } from '@styles/space';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box } from './box';
import { Inline } from './inline';
import { MeetingTitle } from './meeting-title';
import { Text } from './text';

export const CONTROLS_HEIGHT = 120;

export const Controls: React.FC = () => {
  return (
    <StyledContainer>
      <Box display={{ xs: 'none', md: 'block' }}>
        <Inline space="sm">
          <Clock />
          <Text variant="meeting" color="white" size="md" opacity={0.6}>
            |
          </Text>
          <MeetingTitle />
        </Inline>
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

const StyledContainer = styled(Box).attrs({
  padding: 'md',
  display: 'flex',
  alignItems: 'center',
  height: CONTROLS_HEIGHT,
  width: '100%',
})`
  position: fixed;
  left: 0;
  bottom: 0;
`;
