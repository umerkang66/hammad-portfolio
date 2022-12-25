import { NextPage } from 'next';
import Head from 'next/head';
// Components
import Hero from '../components/home-page/hero';
import FeaturedServices from '../components/home-page/featured-services';
import HomePageTrainings from '../components/home-page/homepage-trainings';
import Layout from '../components/layout/layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Hammad</title>
        <meta
          name="description"
          content="Amazon Account Manager || PPC Expert || PL Wholesale Dropshipping Expert || Amazon Evangelist Consultant and Trainer."
        />
      </Head>
      <Layout>
        <Hero />
        <HomePageTrainings />
        <FeaturedServices />
      </Layout>
    </>
  );
};

export default Home;
