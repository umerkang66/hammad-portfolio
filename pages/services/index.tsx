import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import AllServices from '../../components/services/all-services';

const services: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>All services | Hammad</title>
      </Head>
      <AllServices />
    </Fragment>
  );
};

export default services;
