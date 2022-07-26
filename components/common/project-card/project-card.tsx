import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import styles from './project-card.module.scss';
import type { Project as ProjectCardProps } from '../../home-page/featured-projects/featured-projects';

const ProjectCard: FC<ProjectCardProps> = (props): ReactElement => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image_container}>
        <Image
          alt={props.name}
          className={styles.card__image}
          src={`/images/projects/${props.image}`}
          width={400}
          height={250}
        />
      </div>

      <div className={styles.card__content}>
        <h3 className="heading-tertiary u-margin-top-small u-margin-bottom-small">
          {props.name}
        </h3>

        <p className="paragraph paragraph--card u-margin-bottom-small">
          {props.description}
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
