import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import ContactComponent from '../components/contact';

const ContactPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me | Hammad</title>
        <meta name="description" content="Contact Me" />
      </Head>
      <ContactComponent />
    </Fragment>
  );
};

export default ContactPage;
