import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import About from '../components/about';

const AboutPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About me | Hammad</title>
        <meta
          name="description"
          content="Experienced Professional Freelancer with a demonstrated history of
          working in the E-Commerce/internet industry."
        />
      </Head>
      <About />
    </Fragment>
  );
};

export default AboutPage;
