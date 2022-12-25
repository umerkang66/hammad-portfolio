import { FC } from 'react';
import { Service } from '../../../common-types/service';
import ServiceCard from './service-card';
import styles from './services.module.scss';

const Services: FC<{ services: Service[] }> = ({ services }) => {
  return (
    <div className={styles.services}>
      <h1>Update Services</h1>

      {services.map(service => {
        return <ServiceCard key={service.slug} service={service} />;
      })}
    </div>
  );
};

export default Services;
