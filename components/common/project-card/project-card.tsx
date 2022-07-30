import Link from 'next/link';
import { FC, ReactElement } from 'react';
import styles from './project-card.module.scss';
import type { Project } from '../../../common-types/project';

interface ProjectCardProps extends Project {
  background: 'light' | 'dark';
}

const ProjectCard: FC<ProjectCardProps> = (props): ReactElement => {
  return (
    <div
      className={`${styles.card} ${
        props.background === 'dark' ? styles.card__dark : styles.card__light
      }`}
    >
      <div className={styles.card__content}>
        <h3 className="heading-tertiary u-margin-top-small u-margin-bottom-small">
          {props.name}
        </h3>

        <p
          className={`paragraph paragraph--card ${
            props.background === 'dark'
              ? 'paragraph--card__light'
              : 'paragraph--card__dark'
          } u-margin-bottom-small`}
        >
          {props.excerpt}
        </p>

        <div className={styles.card__link_container}>
          <Link href={`/projects/${props.slug}`}>
            <a className="btn btn--tertiary">More Info</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
