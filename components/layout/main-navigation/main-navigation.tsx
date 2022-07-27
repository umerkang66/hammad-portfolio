import { FC, ReactElement, useState } from 'react';
import Router from 'next/router';
import SocialMediaIcons from '../../common/social-media-icons/social-media-icons';
import Logo from '../logo/logo';
import NavigationResponsive from '../navigation-responsive/navigation-responsive';
import styles from './main-navigation.module.scss';
import NavLink from './nav-link';

export interface NavLinkInterface {
  href: string;
  text: string;
}

const navLinks: NavLinkInterface[] = [
  { href: '/about', text: 'About Me' },
  { href: '/projects', text: 'Projects' },
  { href: '/contact', text: 'Contact Me' },
];

const MainNavigation: FC = (): ReactElement => {
  const [isResponsiveBtnActive, setIsResponsiveBtnActive] = useState(false);

  Router.events.on('routeChangeComplete', () =>
    setIsResponsiveBtnActive(false)
  );
  Router.events.on('routeChangeError', () => setIsResponsiveBtnActive(false));

  return (
    <header className={styles.header}>
      <NavigationResponsive
        navLinks={navLinks}
        isResponsiveBtnActive={isResponsiveBtnActive}
        setIsResponsiveBtnActive={setIsResponsiveBtnActive}
      />

      <div className="container">
        <div className={styles.header__content}>
          <Logo type="primary" />

          <nav className={styles.header__navigation}>
            <ul className={styles.header__nav_list + ' u-margin-right-medium'}>
              {navLinks.map(link => (
                <NavLink key={link.href} {...link} />
              ))}
            </ul>
            <SocialMediaIcons fillColor="light" />
          </nav>

          <div
            onClick={() => setIsResponsiveBtnActive(prevValue => !prevValue)}
            className={styles.header__btn_container}
          >
            <div
              className={`${styles.header__btn_small_devices} ${
                isResponsiveBtnActive
                  ? styles.header__btn_small_devices__active
                  : ''
              }`}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
