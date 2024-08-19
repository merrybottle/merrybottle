import { Box } from '@components/box';
import { Footer, FOOTER_HEIGHT, Logout } from '@components/footer';
import { MeetingTitle } from '@components/meeting-title';
import { MessageWindow, MessageWindowRef } from '@components/message-window';
import { Presenter } from '@components/presenter';
import { Text } from '@components/text';
import { steps } from '@helpers/step';
import { backgroundColor, getColor } from '@styles/color';
import { mediaMatch } from '@styles/media';
import { borderRadius, height, width } from '@styles/mixins';
import { getSpace, paddingX, paddingY } from '@styles/space';
import type { NextPage } from 'next';
import { darken, mix } from 'polished';
import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Home: NextPage = () => {
  const messageWindowRef = useRef<MessageWindowRef>(null);
  const [stepIndex, setStepIndex] = useState<number>(0);

  return (
    <Box
      $maxWidth={{ xl: 1200 }}
      $marginX={{ xs: 'sm', xl: 'auto' }}
      $position="relative"
      $overflow="hidden"
    >
      {steps[stepIndex] === 'START' || steps[stepIndex] === 'JOIN_MEETING' ? (
        <Box
          $display="flex"
          $alignItems="center"
          $justifyContent="center"
          $minHeight="100vh"
        >
          <StyledJoinButton
            $showJoin={steps[stepIndex] === 'START'}
            onClick={() => {
              if (steps[stepIndex] === 'START') {
                setStepIndex(stepIndex + 1);

                setTimeout(() => {
                  setStepIndex(stepIndex + 2);
                }, 900);
              } else {
                setStepIndex(0);
              }
            }}
          >
            <StyledJoinButtonInner>
              <Text $variant="meeting" $size="xl" $color="dark" as="span">
                Ready to join?
              </Text>
            </StyledJoinButtonInner>
          </StyledJoinButton>
        </Box>
      ) : (
        <StyledContainer>
          <StyledMobileHeaderBox
            $display={{ xs: 'flex', lg: 'none' }}
            $height={MEETING_TITLE_HEIGHT_XS}
            $alignItems="center"
            $justifyContent="space-between"
            $padding="sm"
            $marginY={{ xs: 'sm', lg: 'none' }}
          >
            <MeetingTitle />
            <Logout onStepIndexChange={setStepIndex} />
          </StyledMobileHeaderBox>

          <Box
            $display="flex"
            $alignItems="center"
            $justifyContent="center"
            $height={{
              xs: `calc(100% - ${MEETING_TITLE_HEIGHT_XS}px - (${getSpace('sm')} * 2))`,
              lg: '100%',
            }}
            $paddingTop={{ lg: 'md' }}
            $paddingBottom={{ xs: 'lg', lg: 'xl' }}
          >
            <StyledPresenterContainerBox>
              <Presenter
                currentStepIndex={stepIndex}
                onStepIndexChange={setStepIndex}
              />
            </StyledPresenterContainerBox>
          </Box>

          <Footer
            currentStepIndex={stepIndex}
            onStepIndexChange={setStepIndex}
            onToggleChatWindow={(open) => {
              if (open) {
                messageWindowRef?.current?.open();
              } else {
                messageWindowRef?.current?.close();
              }
            }}
          />

          <MessageWindow ref={messageWindowRef} />
        </StyledContainer>
      )}
    </Box>
  );
};

const MEETING_TITLE_HEIGHT_XS = 80;

const StyledPresenterContainerBox = styled(Box).attrs({
  $width: '100%',
})`
  position: relative;
  height: 100%;
`;

const StyledContainer = styled(Box).attrs({
  $height: '100vh',
  $overflow: 'hidden',
})`
  padding-bottom: ${FOOTER_HEIGHT}px;
`;

const StyledJoinButton = styled.button<{
  $showJoin: boolean;
}>`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  padding: 0;
  margin: 0;
  width: max-content;
  transition: 0.45s 0.3s ease-in;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &::after {
    content: '';
    ${borderRadius('sm')}
    background-color: ${mix(0.6, getColor('background'), getColor('pink'))};
    border: 3px solid ${getColor('dark')};
    position: absolute;
    top: 10px;
    bottom: -10px;
    left: 16px;
    right: 16px;
    z-index: -1;
    transition: 0.1s ease-in;
  }

  ${({ $showJoin }) =>
    $showJoin
      ? ''
      : css`
          transform: translate(-100%, -50%);

          ${mediaMatch({
            xs: css`
              left: calc(100% - ${getSpace('sm')} - 3px);
              top: calc(${MEETING_TITLE_HEIGHT_XS / 2}px + ${getSpace('sm')});
            `,
            md: css`
              left: calc(100% - 24px);
              top: calc(100% - ${FOOTER_HEIGHT / 2}px);
            `,
          })}

          & ${StyledJoinButtonInner} {
            ${borderRadius('lg')}
            ${height(getSpace('xl'))}
      ${width(getSpace('xl'))}
      border-width: 2px;
            box-sizing: border-box;
            padding: 0;

            &:hover {
              transform: none;
            }
          }

          & ${StyledJoinButtonInner} span {
            display: inline-block;
            height: 0;
            width: 0;
            overflow: hidden;
          }

          &::after {
            top: 0;
            bottom: 0;
          }
        `}
`;

const StyledJoinButtonInner = styled.span`
  ${borderRadius('sm')}
  ${backgroundColor('pink')}
  ${paddingX('xl')}
  ${paddingY('md')}
  cursor: pointer;
  display: inline-block;
  border: 3px solid ${getColor('dark')};
  transition: 0.2s ease-in;

  &:hover {
    background-color: ${darken(0.05, getColor('pink'))};
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(4px);
  }
`;

const StyledMobileHeaderBox = styled(Box)`
  border: 3px solid ${getColor('dark')};
  ${borderRadius('md')}
  background-color: #fef9ec;
  box-sizing: border-box;
`;

export default Home;
