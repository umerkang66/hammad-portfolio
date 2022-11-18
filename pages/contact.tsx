import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import ContactForm from '../components/contact-form';

const ContactPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me | Hammad</title>
        <meta name="description" content="Contact Me" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
