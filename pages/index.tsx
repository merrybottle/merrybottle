import { Box } from '@components/box';
import { ChatWindow } from '@components/chat-window';
import { Footer, FOOTER_HEIGHT, Logout } from '@components/footer';
import { MeetingTitle } from '@components/meeting-title';
import { Presenter } from '@components/presenter';
import { Text } from '@components/text';
import { steps } from '@helpers/step';
import { backgroundColor, getColor } from '@styles/color';
import { borderRadius } from '@styles/mixins';
import { paddingX, paddingY } from '@styles/space';
import type { NextPage } from 'next';
import Head from 'next/head';
import { darken } from 'polished';
import { useState } from 'react';
import styled from 'styled-components';

const Home: NextPage = () => {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>you.are@merrybottle.com</title>
      </Head>

      {steps[stepIndex] === 'START' ? (
        <Box
          $display="flex"
          $alignItems="center"
          $justifyContent="center"
          $minHeight="100vh"
        >
          <StyledStartButton onClick={() => setStepIndex(stepIndex + 1)}>
            <StyledStartButtonInner>
              <Text $variant="meeting" $size="xl" $color="white" as="span">
                Ready to join?
              </Text>
            </StyledStartButtonInner>
          </StyledStartButton>
        </Box>
      ) : (
        <StyledContainer>
          <Box
            $display={{ xs: 'flex', lg: 'none' }}
            $height={MEETING_TITLE_HEIGHT_XS}
            $paddingX="sm"
            $alignItems="center"
            $justifyContent="space-between"
          >
            <MeetingTitle />
            <Logout onStepIndexChange={setStepIndex} />
          </Box>

          <Box
            $display="flex"
            $alignItems="center"
            $justifyContent="center"
            $height={{
              xs: `calc(100% - ${MEETING_TITLE_HEIGHT_XS}px)`,
              lg: '100%',
            }}
            $paddingX={{ xs: 'sm', lg: 'md' }}
            $paddingTop={{ lg: 'md' }}
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
            onOpenChatWindow={() => setIsChatOpen(true)}
          />

          <ChatWindow
            isOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
          />
        </StyledContainer>
      )}
    </>
  );
};

const MEETING_TITLE_HEIGHT_XS = 96;

const StyledPresenterContainerBox = styled(Box).attrs({
  $width: '100%',
  $maxHeight: '100%',
})`
  position: relative;
  height: 100%;
`;

const StyledContainer = styled(Box).attrs({
  $height: '100vh',
  $width: '100vw',
  $overflow: 'hidden',
})`
  padding-bottom: ${FOOTER_HEIGHT}px;
`;

const StyledStartButton = styled.button`
  background: none;
  border: none;
  outline: none;
  position: relative;
  padding: 0;
  margin: 0;

  &::after {
    content: '';
    ${borderRadius('sm')}
    background-color: ${darken(0.4, getColor('red'))};
    border: 2px solid #ffffff;
    position: absolute;
    top: 10px;
    bottom: -10px;
    left: 12px;
    right: 12px;
    z-index: -1;
    transition: 0.1s ease-in;
  }
`;

const StyledStartButtonInner = styled.span`
  ${borderRadius('sm')}
  ${backgroundColor('red')}
  ${paddingX('xl')}
  ${paddingY('md')}
  cursor: pointer;
  display: inline-block;
  border: 2px solid #ffffff;
  transition: 0.1s ease-in;

  &:hover {
    background-color: ${darken(0.25, getColor('red'))};
    transform: translateY(-4px);
  }
`;

export default Home;
