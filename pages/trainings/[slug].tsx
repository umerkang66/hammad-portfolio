import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { Fragment } from 'react';

import Head from 'next/head';
import { allTrainings } from '../../data/all-trainings';
import { Training } from '../../common-types/training';
import SingleTraining from '../../components/trainings/single-training/single-training';

const TrainingPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = props => {
  return (
    <Fragment>
      <Head>
        <title>{props.training.name} | Hammad</title>
      </Head>
      <SingleTraining training={props.training} />
    </Fragment>
  );
};

interface StaticReturnType {
  training: Training;
}

// Build the pages with this data (project)
export const getStaticProps: GetStaticProps<StaticReturnType> = context => {
  const slug = context.params?.slug;
  const training = allTrainings.find(training => {
    return training.slug === slug;
  });

  return {
    props: {
      training: training as Training,
    },
    notFound: training === undefined,
  };
};

// Which pages we want to build (currently all of them)
export const getStaticPaths: GetStaticPaths = () => {
  const paths = allTrainings.map(training => {
    return { params: { slug: training.slug } };
  });

  return {
    paths,
    // We have built as many pages, as their all whole trainings
    fallback: false,
  };
};

export default TrainingPage;
