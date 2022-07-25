import '../styles/main.scss';
import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default App;
