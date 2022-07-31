import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import AboutComponent from '../components/about-page/about';

const About: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About me | Hammad</title>
        <meta
          name="description"
          content="Amazon Account Manager || PPC Expert || PL Wholesale Dropshipping Expert || Amazon Evangelist Consultant and Trainer."
        />
      </Head>
      <AboutComponent />
    </Fragment>
  );
};

export default About;
