import { Controls } from '@components/controls';
import { Presenter } from '@components/presenter';
import { paddingX, paddingY } from '@styles/space';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>you.are@merrybottle.com</title>
      </Head>

      <StyledContainer>
        <StyledScreen>
          <StyledPresenterContainer>
            <Presenter />
          </StyledPresenterContainer>
        </StyledScreen>

        <Controls />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const StyledScreen = styled.div`
  ${paddingX({ xs: 'sm', lg: 'xl' })}
  ${paddingY({ xs: 'sm', lg: 'md' })}
  box-sizing: border-box;
  flex: 1;
`;

const StyledPresenterContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export default Home;
