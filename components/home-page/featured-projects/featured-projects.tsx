import Link from 'next/link';
import { FC, ReactElement } from 'react';
import ProjectCard from '../../common/project-card';
import styles from './featured-projects.module.scss';

export interface Project {
  name: string;
  description: string;
  image: string;
  slug: string;
}

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
];

const FeaturedProjects: FC = (): ReactElement => {
  return (
    <section className={styles.featured_projects}>
      <div className="container">
        <h2 className="heading-secondary heading-secondary--white heading-secondary--white__underline u-margin-bottom-medium">
          Featured Projects
        </h2>

        <div
          className={styles.featured_projects__grid + ' u-margin-bottom-medium'}
        >
          {projects.map(project => {
            return <ProjectCard key={project.slug} {...project} />;
          })}
        </div>

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
