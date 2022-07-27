import { FC } from 'react';
import styles from './all-projects.module.scss';
import { Project } from '../../common-types/project';
import ProjectsGrid from '../common/project-grid/projects-grid';

const projects: Project[] = [
  {
    name: 'project 1',
    description:
      'This is the description of the first dummy project, This one I did back when i was starting out my career. This is the description of the first dummy project, this one i did back when i was starting out my career',
    image: 'project-1.jpg',
    slug: 'project-1',
  },

  {
    name: 'project 2',
    description:
      'This is the description of the second dummy project, This one I did back when i was starting out my career. This is the description of the first dummy project, this one i did back when i was starting out my career',
    image: 'project-2.jpg',
    slug: 'project-2',
  },

  {
    name: 'project 3',
    description:
      'This is the description of the first dummy project, This one I did back when i was starting out my career. This is the description of the first dummy project, this one i did back when i was starting out my career',
    image: 'project-3.jpg',
    slug: 'project-3',
  },

  {
    name: 'project 4',
    description:
      'This is the description of the first dummy project, This one I did back when i was starting out my career. This is the description of the first dummy project, this one i did back when i was starting out my career',
    image: 'project-4.jpg',
    slug: 'project-4',
  },

  {
    name: 'project 5',
    description:
      'This is the description of the first dummy project, This one I did back when i was starting out my career. This is the description of the first dummy project, this one i did back when i was starting out my career',
    image: 'project-5.jpg',
    slug: 'project-5',
  },
];

const AllProjects: FC = () => {
  return (
    <div className={styles.all_projects}>
      <div className="container">
        <h2 className="heading-secondary heading-secondary__underline u-margin-bottom-medium">
          All Projects
        </h2>

        <ProjectsGrid projects={projects} background="light" />
      </div>
    </div>
  );
};

export default AllProjects;
