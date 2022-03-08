import { Box } from '@components/box';
import { Footer, FOOTER_HEIGHT, Logout } from '@components/footer';
import { MeetingTitle } from '@components/meeting-title';
import { Presenter } from '@components/presenter';
import { Step, steps } from '@helpers/step';
import { mediaMatch } from '@styles/media';
import { paddingTop, paddingX } from '@styles/space';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const Home: NextPage = () => {
  const [stepIndex, setStepIndex] = useState<number>(0);

  return (
    <>
      <Head>
        <title>you.are@merrybottle.com</title>
      </Head>

      <StyledContainer>
        <Box
          display={{ xs: 'flex', md: 'none' }}
          height={MEETING_TITLE_HEIGHT_XS}
          paddingX="sm"
          alignItems="center"
          justifyContent="space-between"
        >
          <MeetingTitle />
          <Logout />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={{
            xs: `calc(100% - ${MEETING_TITLE_HEIGHT_XS}px)`,
            md: '100%',
          }}
          paddingX={{ xs: 'sm', lg: 'md' }}
          paddingTop={{ lg: 'md' }}
        >
          <StyledPresenterContainerBox>
            <Presenter step={steps[stepIndex]} />
          </StyledPresenterContainerBox>
        </Box>

        <Footer currentStepIndex={stepIndex} onStepIndexChange={setStepIndex} />
      </StyledContainer>
    </>
  );
};

const MEETING_TITLE_HEIGHT_XS = 64;

const StyledPresenterContainerBox = styled(Box).attrs({
  width: '100%',
  maxHeight: '100%',
})`
  position: relative;
  height: 100%;

  ${mediaMatch({
    md: css`
      aspect-ratio: 1;
      height: unset;
    `,
  })}
`;

const StyledContainer = styled(Box).attrs({
  height: '100vh',
  width: '100vw',
})`
  padding-bottom: ${FOOTER_HEIGHT}px;
`;

export default Home;
