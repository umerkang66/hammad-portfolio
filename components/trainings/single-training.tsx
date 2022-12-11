import { FC, useEffect, useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { Training } from '../../common-types/training';
import styles from './single-training.module.scss';

interface Props {
  training: Training;
}

const SingleTraining: FC<Props> = ({ training }) => {
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
  }, [training.description]);

  return (
    <div className={styles.single_training}>
      <h2 className={styles.single_training__heading}>{training.name}</h2>

      <p className="paragraph">
        <span style={{ fontWeight: 'bold' }}>Duration:</span> 2 months
      </p>
      <p className="paragraph">
        <span style={{ fontWeight: 'bold' }}>Class:</span> Once in a week
      </p>

      <h3 className="heading-tertiary u-margin-top-small">
        What you will learn in this course
      </h3>

      <div className={styles.single_training__content}>
        <button
          className={styles.section_btn}
          onClick={() => {
            mainDescriptions.forEach((_, i) => {
              if (furtherDescriptions[i].length >= 1) {
                setWhichBlockActive(prevState => ({
                  ...prevState,
                  [i]: true,
                }));
              }
            });
          }}
        >
          Expand all sections
        </button>

        <button
          className={styles.section_btn + ' ' + styles.section_close}
          onClick={() => {
            mainDescriptions.forEach((_, i) =>
              setWhichBlockActive(prevState => ({ ...prevState, [i]: false }))
            );
          }}
        >
          Close all sections
        </button>

        {mainDescriptions.map((desc, i) => {
          return (
            <div key={i}>
              <div className={styles.single_training__main_desc}>
                <h2 className={styles.single_training__main_desc__heading}>
                  {i + 1 + ': ' + desc}
                </h2>

                {furtherDescriptions[i].length >= 1 ? (
                  <IoIosArrowDropdownCircle
                    onClick={() => {
                      setWhichBlockActive(prevState => ({
                        ...prevState,
                        [i]: !prevState[i],
                      }));
                    }}
                    className={`${styles.single_training__main_desc_btn} ${
                      whichBlockActive[i] &&
                      styles.single_training__main_desc_btn__active
                    }`}
                  />
                ) : (
                  // just for styling, add the div with same styling with the button
                  <div
                    className={`${styles.single_training__main_desc_btn} ${styles.single_training__main_desc_btn__no_hover}`}
                  ></div>
                )}
              </div>

              {whichBlockActive[i] && (
                <div className={styles.single_training__further_desc_container}>
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
  );
};

export default SingleTraining;
