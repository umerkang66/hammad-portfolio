import { FC, ReactElement } from 'react';
import styles from './footer.module.scss';
import Logo from '../logo/logo';
import Icons from '../../common/icons/icons';
import Link from 'next/link';

interface IconsInterface {
  type: 'facebook' | 'twitter' | 'linkedin' | 'instagram';
  href: string;
}

const icons: IconsInterface[] = [
  { type: 'facebook', href: 'https://www.facebook.com/hammadkakli' },
  { type: 'twitter', href: 'https://twitter.com/hammadkakli' },
  { type: 'instagram', href: 'https://www.instagram.com/hammadkakli' },
  { type: 'linkedin', href: 'https://pk.linkedin.com/in/hammadkakli' },
];

const Footer: FC = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <div className={styles.footer__left}>
            <Logo type="secondary" />
          </div>
          <div className={styles.footer__right}>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Social Media Links
            </h3>
            <ul className={styles.footer__icons + ' u-margin-bottom-medium'}>
              {icons.map(({ type, href }, i) => {
                return (
                  <li key={i} className={styles.footer__icon_list_item}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={href}
                      className={styles.footer__icon_link}
                    >
                      <Icons className={styles.footer__icon} type={type} />
                    </a>
                  </li>
                );
              })}
            </ul>

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
