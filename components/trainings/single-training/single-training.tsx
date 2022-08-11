import { FC, ReactElement } from 'react';
import { Training } from '../../../common-types/training';
import styles from './single-training.module.scss';

interface SingleTrainingProps {
  training: Training;
}

const SingleTraining: FC<SingleTrainingProps> = ({
  training,
}): ReactElement => {
  return (
    <div className={styles.single_training}>
      <div className="container">
        <h2 className="heading-secondary heading-secondary__underline u-margin-bottom-medium">
          {training.name}
        </h2>

        <h3 className="heading-tertiary u-margin-bottom-medium">
          What you will learn in this course
        </h3>

        <div className="container-small">
          <ol className={styles.single_training__list_main}>
            {training.description.map((trainingDesc, i) => {
              return (
                <li className="u-margin-bottom-medium" key={i}>
                  {trainingDesc.name}
                  <ol
                    className={styles.single_training__list_secondary}
                    type="a"
                  >
                    {trainingDesc.furtherDesc.map(furtherDescription => {
                      return <li>{furtherDescription}</li>;
                    })}
                  </ol>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SingleTraining;