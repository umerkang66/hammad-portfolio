import { FC, ReactElement } from 'react';
import { allTrainings } from '../../data/all-trainings';
import TrainingGrid from '../common/training-grid/training-grid';
import styles from './trainings.module.scss';

const TrainingsComponent: FC = (): ReactElement => {
  return (
    <div className={styles.trainings}>
      <div className="container">
        <div className={styles.trainings__content}>
          <h2 className="heading-secondary heading-secondary__underline u-margin-bottom-medium">
            Trainings
          </h2>

          <TrainingGrid trainings={allTrainings} background={'light'} />
        </div>
      </div>
    </div>
  );
};

export default TrainingsComponent;
