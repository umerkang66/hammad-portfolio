import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { Fragment } from 'react';
import { Project } from '../../common-types/project';
import { allProjects } from '../../data/all-projects';
import SingleProject from '../../components/projects/single-project/single-project';
import Head from 'next/head';

const ProjectPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = props => {
  return (
    <Fragment>
      <Head>
        <title>{props.project.name} | Hammad</title>
      </Head>
      <SingleProject project={props.project} />
    </Fragment>
  );
};

interface StaticReturnType {
  project: Project;
}

// Build the pages with this data (project)
export const getStaticProps: GetStaticProps<StaticReturnType> = context => {
  const slug = context.params?.slug;
  const project = allProjects.find(project => {
    return project.slug === slug;
  });

  return {
    props: {
      project: project as Project,
    },
    notFound: project === undefined,
  };
};

// Which pages we want to build (currently all of them)
export const getStaticPaths: GetStaticPaths = () => {
  const paths = allProjects.map(project => {
    return { params: { slug: project.slug } };
  });

  return {
    paths,
    // We have built as many pages, as their all whole projects
    fallback: false,
  };
};

export default ProjectPage;
