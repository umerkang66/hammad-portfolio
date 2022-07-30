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

        <div className="container-small">
          <ul>
            {training.description.split('-----').map((desc, i) => {
              return (
                <li key={i} className="u-margin-bottom-small">
                  <p className="paragraph paragraph--clear">{desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTraining;
