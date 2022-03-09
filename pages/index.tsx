import { Box } from '@components/box';
import { ChatWindow } from '@components/chat-window';
import { Footer, FOOTER_HEIGHT, Logout } from '@components/footer';
import { MeetingTitle } from '@components/meeting-title';
import { Presenter } from '@components/presenter';
import { Text } from '@components/text';
import { Step, steps } from '@helpers/step';
import { backgroundColor, rgba } from '@styles/color';
import { borderRadius } from '@styles/mixins';
import { getSpace, paddingTop, paddingX, paddingY } from '@styles/space';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styled, { css } from 'styled-components';

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
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
        >
          <StyledStartButton onClick={() => setStepIndex(stepIndex + 1)}>
            <Text variant="meeting" size="xl" color="white" fontWeight="bold">
              Ready to join?
            </Text>
          </StyledStartButton>
        </Box>
      ) : (
        <StyledContainer>
          <Box
            display={{ xs: 'flex', lg: 'none' }}
            height={MEETING_TITLE_HEIGHT_XS}
            paddingX="sm"
            alignItems="center"
            justifyContent="space-between"
          >
            <MeetingTitle />
            <Logout onStepIndexChange={setStepIndex} />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={{
              xs: `calc(100% - ${MEETING_TITLE_HEIGHT_XS}px)`,
              lg: '100%',
            }}
            paddingX={{ xs: 'sm', lg: 'md' }}
            paddingTop={{ lg: 'md' }}
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
  width: '100%',
  maxHeight: '100%',
})`
  position: relative;
  height: 100%;
`;

const StyledContainer = styled(Box).attrs({
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
})`
  padding-bottom: ${FOOTER_HEIGHT}px;
`;

const StyledStartButton = styled.button`
  ${borderRadius('sm')}
  ${backgroundColor('red')}
  ${paddingX('lg')}
  ${paddingY('sm')}
  cursor: pointer;
  outline: none;
  border: none;
  position: relative;

  ::after {
    content: '';
    ${backgroundColor('black')}
    ${borderRadius('lg')}
    position: absolute;
    opacity: 0;
    transition: 0.25s ease-in;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  :hover::after {
    opacity: 0.3;
    top: -${getSpace('md')};
    bottom: -${getSpace('md')};
    left: -${getSpace('md')};
    right: -${getSpace('md')};
  }
`;

export default Home;
