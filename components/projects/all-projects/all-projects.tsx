import { FC } from 'react';
import styles from './all-projects.module.scss';
import { allProjects } from '../../../data/all-projects';
import ProjectsGrid from '../../common/project-grid/project-grid';

const AllProjects: FC = () => {
  return (
    <div className={styles.all_projects}>
      <div className="container">
        <h2 className="heading-secondary heading-secondary__underline u-margin-bottom-medium">
          All Projects
        </h2>

        <ProjectsGrid projects={allProjects} background="light" />
      </div>
    </div>
  );
};

export default AllProjects;
