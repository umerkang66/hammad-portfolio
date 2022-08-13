import Link from 'next/link';
import { FC, ReactElement } from 'react';
import styles from './featured-services.module.scss';

import ServiceGrid from '../../common/service-grid/service-grid';
import { allServices } from '../../../data/all-services';

const FeaturedServices: FC = (): ReactElement => {
  return (
    <section className={styles.featured_services}>
      <div className="container">
        <h2 className="heading-secondary heading-secondary__underline u-margin-bottom-medium">
          Services
        </h2>
        <ServiceGrid
          services={allServices.filter(srv => srv.isFeatured)}
          background="light"
        />
        <div className="u-margin-bottom-medium" />

        <div className={styles.featured_services__link_container}>
          <Link href="/services">
            <a className="btn btn--secondary btn--secondary__featured_services">
              All Services <span className="btn__arrow">&rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
