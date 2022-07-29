import { Fragment } from 'react';
import { NextPage } from 'next';
import TrainingsComponent from '../components/trainings/trainings';

const Trainings: NextPage = () => {
  return (
    <Fragment>
      <TrainingsComponent />
    </Fragment>
  );
};

export default Trainings;
