import { FC, ReactElement } from 'react';
import { Project } from '../../../common-types/project';
import styles from './projects-grid.module.scss';
import ProjectCard from '../project-card/project-card';

interface ProjectsGridProps {
  projects: Project[];
  background: 'light' | 'dark';
}

const ProjectsGrid: FC<ProjectsGridProps> = ({
  projects,
  background,
}): ReactElement => {
  return (
    <div className={styles.projects_grid}>
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

export default ProjectsGrid;
