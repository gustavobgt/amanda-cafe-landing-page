import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/Layout';

import 'aos/dist/aos.css';

import { GlobalStyles } from '../styles/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
