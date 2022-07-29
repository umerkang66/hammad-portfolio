import { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import TrainingsComponent from '../components/trainings/trainings';

const Trainings: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Trainings | Hammad</title>
      </Head>
      <TrainingsComponent />
    </Fragment>
  );
};

export default Trainings;
