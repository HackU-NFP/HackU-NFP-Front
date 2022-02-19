import Header from 'components/UI/Header';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const GlobalStyle = createGlobalStyle`
    ${reset}
  `;

  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
