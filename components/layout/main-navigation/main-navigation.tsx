import Link from 'next/link';
import { FC, ReactElement } from 'react';
import Logo from '../logo';
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
          <Link href="/">
            <a className={styles.header__logo}>
              <Logo />
            </a>
          </Link>

          <nav>
            <ul className={styles.header__nav_list}>
              {navLinks.map(link => (
                <NavLink key={link.href} {...link} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
