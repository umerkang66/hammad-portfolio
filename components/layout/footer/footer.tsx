import { FC, ReactElement } from 'react';
import styles from './footer.module.scss';
import Logo from '../logo/logo';
import Link from 'next/link';
import SocialMediaIcons from '../../common/social-media-icons/social-media-icons';

const Footer: FC = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <div className={styles.footer__left}>
            <Logo type="secondary" />
          </div>
          <div className={styles.footer__right}>
            <SocialMediaIcons fillColor="dark" />

            <div className="u-margin-bottom-medium" />

            <Link href="/contact">
              <a className="btn btn--primary">
                Contact Me <span className="btn__arrow">&rarr;</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
