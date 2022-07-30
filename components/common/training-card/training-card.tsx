import { FC, ReactElement } from 'react';
import { Training } from '../../../common-types/training';
import styles from './training-card.module.scss';

interface TrainingCardProps {
  training: Training;
  background: 'light' | 'dark';
}

const TrainingCard: FC<TrainingCardProps> = ({
  training,
  background,
}): ReactElement => {
  return (
    <div
      className={`${styles.training_card} ${
        background === 'light'
          ? styles.training_card__light
          : styles.training_card__dark
      }`}
    >
      <h3 className="heading-tertiary heading-tertiary--light u-margin-bottom-small">
        {training.name}
      </h3>

      <ul>
        {training.excerptDesc.split('-----').map((desc, i) => {
          return (
            <li className={styles.training_card__list_item} key={i}>
              <p
                className={`paragraph paragraph--card ${
                  background === 'dark'
                    ? 'paragraph--card__light'
                    : 'paragraph--card__dark'
                }`}
              >
                {desc}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrainingCard;
