import { FC } from 'react';
import styles from './all-services.module.scss';
import { allServices } from '../../../data/all-services';
import ServiceGrid from '../../common/service-grid/service-grid';

const AllServices: FC = () => {
  return (
    <div className={styles.all_services}>
      <div className="container">
        <h2 className="heading-secondary heading-secondary__underline u-margin-bottom-medium">
          All Services
        </h2>

        <ServiceGrid services={allServices} background="light" />
      </div>
    </div>
  );
};

export default AllServices;
