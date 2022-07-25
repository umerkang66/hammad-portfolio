import Head from 'next/head';
// Components
import Hero from '../components/home-page/hero/Hero';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | Hammad</title>
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
