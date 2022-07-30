import Link from 'next/link';
import { FC, ReactElement } from 'react';
import styles from './featured-projects.module.scss';
import { Project } from '../../../common-types/project';
import ProjectsGrid from '../../common/project-grid/projects-grid';
import { allProjects } from '../../../data/all-projects';

const FeaturedProjects: FC = (): ReactElement => {
  return (
    <section className={styles.featured_projects}>
      <div className="container">
        <h2 className="heading-secondary heading-secondary--white heading-secondary--white__underline u-margin-bottom-medium">
          Trainings
        </h2>
        <ProjectsGrid
          projects={allProjects.filter(prj => prj.isFeatured)}
          background="dark"
        />
        <div className="u-margin-bottom-medium" />

        <div className={styles.featured_projects__link_container}>
          <Link href="/projects">
            <a className="btn btn--secondary btn--secondary__featured_projects">
              All Projects <span className="btn__arrow">&rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
