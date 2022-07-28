import { FC, ReactElement } from 'react';
import { Project } from '../../../common-types/project';
import styles from './single-project.module.scss';

interface SingleProjectProps {
  project: Project;
}

const SingleProject: FC<SingleProjectProps> = (props): ReactElement => {
  return (
    <div className={styles.single_project}>
      <div
        style={{
          backgroundImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url('/images/projects/${props.project.image}')`,
        }}
        className={styles.single_project__image_container}
      />

      <div className="container">
        <div className={styles.single_project__content}>
          <h2 className="heading-secondary heading-secondary__underline u-margin-bottom-medium">
            {props.project.name}
          </h2>

          <p className="paragraph paragraph--clear">
            {props.project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
