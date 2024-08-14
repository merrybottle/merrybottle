import { Box } from '@components/box';
import { ControlButton } from '@components/control-button';
import { Text } from '@components/text';
import { Step, stepClosedCaptions, steps } from '@helpers/step';
import { rgba } from '@styles/color';
import { mediaMatch } from '@styles/media';
import React from 'react';
import { RefreshCw } from 'react-feather';
import styled, { css, keyframes } from 'styled-components';

interface ClosedCaptionProps {
  step: Step;
  onRestart: () => void;
}

export const ClosedCaption: React.FC<ClosedCaptionProps> = ({
  step,
  onRestart,
}) => {
  const copy = stepClosedCaptions[step];

  if (!copy) {
    return null;
  }

  return (
    <Box $display="flex" $flexDirection="column" $alignItems="center">
      <StyledBackgroundBox key={step}>
        <Box $paddingX="sm" $paddingY="xxs">
          <Text
            $variant="meeting"
            $size={{ xs: 'lg', lg: 'xxl' }}
            $color="white"
            $align="center"
          >
            {copy}
          </Text>
        </Box>
      </StyledBackgroundBox>

      {steps.indexOf(step) === steps.length - 1 && (
        <Box $marginTop="xs">
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

const scrollAnimation = keyframes`
  0% {
    max-width: 0px;
  }
  100% {
    max-width: 3000px;
  }
`;

const StyledBackgroundBox = styled(Box).attrs({
  $borderRadius: 'xs',
})<{
  $step?: Step;
  $prevStep?: Step;
}>`
  background-color: ${rgba('dark', 0.5)};

  ${mediaMatch({
    lg: css`
      white-space: nowrap;
      overflow: hidden;
      animation: ${scrollAnimation} 4s ease-in forwards;
    `,
  })}
`;
