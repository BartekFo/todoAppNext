import { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { AppProps } from 'next/app';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';

const App: FunctionComponent<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
