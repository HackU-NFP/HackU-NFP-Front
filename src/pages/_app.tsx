import Header from 'components/UI/Header';
import ProfileProvider from 'contexts/profile';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const GlobalStyle = createGlobalStyle`
    ${reset}
  `;

  return (
    <ProfileProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ProfileProvider>
  );
};

export default MyApp;
