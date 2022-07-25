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
          <a className="btn btn--blue u-center-text">Home Page</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
