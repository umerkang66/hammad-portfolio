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
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    image: 'project-1.jpg',
    slug: 'project-1',
  },

  {
    name: 'project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    image: 'project-2.jpg',
    slug: 'project-2',
  },

  {
    name: 'project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    image: 'project-3.jpg',
    slug: 'project-3',
  },
];

const FeaturedProjects: FC = (): ReactElement => {
  return (
    <section className={styles.featured_projects}>
      <div className="container">
        <h2 className="heading-secondary heading-secondary--white u-margin-bottom-medium">
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
            <a className="btn btn--secondary">
              All Projects <span className="btn__arrow">&rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
