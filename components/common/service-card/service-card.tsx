import Link from 'next/link';
import { FC, ReactElement } from 'react';
import styles from './service-card.module.scss';
import type { Service } from '../../../common-types/service';

interface ServiceCardProps extends Service {
  background: 'light' | 'dark';
}

const ServiceCard: FC<ServiceCardProps> = (props): ReactElement => {
  return (
    <div
      className={`${styles.card} ${
        props.background === 'dark' ? styles.card__dark : styles.card__light
      }`}
    >
      <div className={styles.card__heading_container}>
        <h3 className="heading-tertiary">{props.name}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
