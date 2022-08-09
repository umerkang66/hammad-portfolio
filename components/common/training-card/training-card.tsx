import Link from 'next/link';
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
      <div className={styles.training_card__text_content}>
        <h3 className="heading-tertiary heading-tertiary--light u-margin-bottom-small">
          {training.name}
        </h3>

        <p
          className={`paragraph paragraph--card u-margin-bottom-small ${
            background === 'dark'
              ? 'paragraph--card__light'
              : 'paragraph--card__dark'
          }`}
        >
          {training.excerptDesc}
        </p>
      </div>

      <div
        className={
          styles.training_card__link_container + ' u-margin-bottom-small'
        }
      >
        <Link href={`/trainings/${training.slug}`}>
          <a className="btn btn--tertiary">More Info</a>
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;
