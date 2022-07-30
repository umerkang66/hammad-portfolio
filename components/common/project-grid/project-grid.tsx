import { FC, ReactElement } from 'react';
import { Project } from '../../../common-types/project';
import styles from './project-grid.module.scss';
import ProjectCard from '../project-card/project-card';

interface ProjectGridProps {
  projects: Project[];
  background: 'light' | 'dark';
}

const ProjectGrid: FC<ProjectGridProps> = ({
  projects,
  background,
}): ReactElement => {
  return (
    <div className={styles.project_grid}>
      {projects.map(project => {
        return (
          <ProjectCard
            key={project.slug}
            {...project}
            background={background}
          />
        );
      })}
    </div>
  );
};

export default ProjectGrid;
