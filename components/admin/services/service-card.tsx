import { FC } from 'react';
import { Service } from '../../../common-types/service';
import styles from './service-card.module.scss';

const ServiceCard: FC<{ service: Service }> = ({ service }) => {
  return <div className={styles.service_card}>{service.name}</div>;
};

export default ServiceCard;
