import { FC, ReactElement } from 'react';
import { Service } from '../../../common-types/service';
import styles from './service-grid.module.scss';
import ServiceCard from '../service-card/service-card';

interface ServiceGridProps {
  services: Service[];
  background: 'light' | 'dark';
}

const ServiceGrid: FC<ServiceGridProps> = ({
  services,
  background,
}): ReactElement => {
  return (
    <div className={styles.service_grid}>
      {services.map(service => {
        return (
          <ServiceCard
            key={service.slug}
            {...service}
            background={background}
          />
        );
      })}
    </div>
  );
};

export default ServiceGrid;
