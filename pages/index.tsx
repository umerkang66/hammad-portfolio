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
        <title>Home | Hammad</title>
        <meta
          name="description"
          content="Amazon Account Manager || PPC Expert || PL Wholesale Dropshipping Expert || Amazon Evangelist Consultant and Trainer."
        />
      </Head>
      <Hero />
      <HomePageTrainings />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
