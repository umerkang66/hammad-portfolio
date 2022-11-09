import { FC, ReactElement, useEffect, useState } from 'react';
import { Training } from '../../../common-types/training';
import styles from './single-training.module.scss';

interface Props {
  training: Training;
}

const SingleTraining: FC<Props> = ({ training }): ReactElement => {
  const [mainDescriptions, setMainDescriptions] = useState<string[]>([]);
  const [furtherDescriptions, setFurtherDescriptions] = useState<{
    [key: number]: string[];
  }>({});
  const [whichBlockActive, setWhichBlockActive] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    setMainDescriptions(training.description.map(descPoint => descPoint.name));

    training.description.forEach((descPoint, i) => {
      setFurtherDescriptions(prevFurtherDescriptions => ({
        ...prevFurtherDescriptions,
        [i]: descPoint.furtherDesc,
      }));
    });
  }, []);

  return (
    <div className={styles.single_training}>
      <div className="container">
        <h2 className="heading-secondary heading-secondary__underline u-margin-bottom-medium">
          {training.name}
        </h2>

        <h3 className="heading-tertiary u-margin-bottom-medium">
          What you will learn in this course
        </h3>

        <div className={styles.single_training__content}>
          {mainDescriptions.map((desc, i) => {
            return (
              <div key={i}>
                <div className={styles.single_training__main_desc}>
                  <h2>{i + 1 + ': ' + desc}</h2>

                  {furtherDescriptions[i].length >= 1 && (
                    <button
                      onClick={() => {
                        setWhichBlockActive(prevState => {
                          return { ...prevState, [i]: !prevState[i] };
                        });
                      }}
                      className={`${styles.single_training__main_desc_btn} ${
                        whichBlockActive[i] &&
                        styles.single_training__main_desc_btn__active
                      }`}
                    >
                      <span>↓</span>
                    </button>
                  )}
                </div>

                {whichBlockActive[i] && (
                  <div
                    className={styles.single_training__further_desc_container}
                  >
                    {furtherDescriptions[i] &&
                      furtherDescriptions[i].map((furtherDesc, i) => (
                        <div key={i}>
                          <h3>{i + 1 + ': ' + furtherDesc}</h3>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleTraining;
