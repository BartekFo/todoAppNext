import { FunctionComponent } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@styles/global.css';
import { AuthProvider } from '@contextProviders/AuthContext';
import { TasksProvider } from '@contextProviders/TaskContext';

const App: FunctionComponent<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ThemeProvider enableSystem attribute="class">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <AuthProvider>
          <TasksProvider>
            <Component {...pageProps} />
          </TasksProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
