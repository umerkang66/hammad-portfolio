import { FC } from 'react';
import styles from './trainings.module.scss';

const TrainingsComponent: FC = () => {
  return (
    <div className={styles.trainings}>
      <div className="container">
        <div className={styles.trainings__content}>
          <h1 className="heading-secondary heading-secondary__underline">
            TRAININGS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TrainingsComponent;
