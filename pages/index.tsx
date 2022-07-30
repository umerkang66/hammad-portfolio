import { NextPage } from 'next';
import Head from 'next/head';
// Components
import Hero from '../components/home-page/hero/hero';
import FeaturedProjects from '../components/home-page/featured-projects/featured-projects';
import HomePageTrainings from '../components/home-page/homepage-trainings/homepage-trainings';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | Hammad</title>
      </Head>
      <Hero />
      <HomePageTrainings />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
