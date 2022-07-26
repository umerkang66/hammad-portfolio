import styles from './404.module.scss';
import { FC, ReactElement } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const NotFoundPage: FC = (): ReactElement => {
  return (
    <div className={styles.not_found_page}>
      <Head>
        <title>404 | Page not found</title>
      </Head>

      <div className={styles.not_found_page__content}>
        <p className={styles.not_found_page__text + ' u-margin-bottom-small'}>
          404 | Page not found
        </p>
        <Link href="/">
          <a className="btn btn--primary u-center-text">
            Home Page <span className="btn__arrow">&rarr;</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
