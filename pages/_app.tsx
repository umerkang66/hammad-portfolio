import '../styles/main.scss';
import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { Fragment } from 'react';
import NextNProgress from 'nextjs-progressbar';

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      {/* <NextNProgress height={5} color="#88E03C" /> */}
      <NextNProgress height={5} color="#969799" />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Fragment>
  );
}

export default App;