import { backgroundColor } from '@styles/color';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    ${backgroundColor('dark')}
    margin: 0;
    padding: 0;
  }
`;

export default App;
