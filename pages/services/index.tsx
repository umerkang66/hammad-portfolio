import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout/layout';
import AllServices from '../../components/services/all-services';

const services: NextPage = () => {
  return (
    <>
      <Head>
        <title>All services | Hammad</title>
      </Head>
      <Layout>
        <AllServices />
      </Layout>
    </>
  );
};

export default services;
