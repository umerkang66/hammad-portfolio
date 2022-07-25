import { FC, ReactElement } from 'react';
import styles from './projects.module.scss';

const Projects: FC = (): ReactElement => {
  return (
    <section className={styles.featured_projects}>
      <div className="container">
        <h2 className="heading-secondary heading-secondary--white">
          Featured Projects
        </h2>
      </div>
    </section>
  );
};

export default Projects;
