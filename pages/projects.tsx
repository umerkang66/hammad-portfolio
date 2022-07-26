import { FC, Fragment, ReactElement } from 'react';
import AllProjects from '../components/all-projects/all-projects';

const Projects: FC = (): ReactElement => {
  return (
    <Fragment>
      <AllProjects />
    </Fragment>
  );
};

export default Projects;
