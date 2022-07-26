import { FC, ReactElement } from 'react';
import SocialMediaIcons from '../../common/social-media-icons/social-media-icons';
import Logo from '../logo/logo';
import styles from './main-navigation.module.scss';
import NavLink from './nav-link';

export interface NavLink {
  href: string;
  text: string;
}

const navLinks: NavLink[] = [
  { href: '/about', text: 'About Me' },
  { href: '/projects', text: 'Projects' },
  { href: '/contact', text: 'Contact Me' },
];

const MainNavigation: FC = (): ReactElement => {
  return (
    <header className={styles.header}>
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
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
