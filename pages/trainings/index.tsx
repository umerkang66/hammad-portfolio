import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import TrainingsComponent from '../../components/trainings/all-trainings';
import { allTrainings } from '../../data/all-trainings';
import { Training } from '../../common-types/training';

const Trainings: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = props => {
  return (
    <Fragment>
      <Head>
        <title>Trainings | Hammad</title>
      </Head>
      <TrainingsComponent trainings={props.trainings} />
    </Fragment>
  );
};

interface StaticPropsReturns {
  trainings: Training[];
}

export const getStaticProps: GetStaticProps<StaticPropsReturns> = () => {
  return {
    props: {
      trainings: allTrainings,
    },
  };
};

export default Trainings;
