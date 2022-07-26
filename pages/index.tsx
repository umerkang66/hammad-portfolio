import { NextPage } from 'next';
import Head from 'next/head';
// Components
import Hero from '../components/home-page/hero/hero';
import FeaturedProjects from '../components/home-page/featured-projects/featured-projects';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | Hammad</title>
      </Head>
      <Hero />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
