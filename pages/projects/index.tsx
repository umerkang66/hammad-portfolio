import { NextPage } from 'next';
import Head from 'next/head';
import { FC, Fragment, ReactElement } from 'react';
import AllProjects from '../../components/projects/all-projects/all-projects';

const Projects: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>All Projects | Hammad</title>
      </Head>
      <AllProjects />
    </Fragment>
  );
};

export default Projects;
