import '../styles/main.scss';
import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { Fragment } from 'react';
import Head from 'next/head';

// pm2 start npm -- start
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
      <div id="notification"></div>
    </Fragment>
  );
};

export default App;
