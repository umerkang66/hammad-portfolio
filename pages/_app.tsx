import '../styles/main.scss';
import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { Fragment } from 'react';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextNProgress height={5} color="#969799" />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Fragment>
  );
};

export default App;

// pm2 start npm -- start
