import Head from 'next/head';
// Components
import Hero from '../components/home-page/hero/hero';
import Projects from '../components/home-page/featured-projects/projects';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | Hammad</title>
      </Head>
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
