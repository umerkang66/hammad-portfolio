import Link from 'next/link';
import { FC, ReactElement } from 'react';
import type { NavLink as NavLinkProps } from './main-navigation';
import styles from './nav-link.module.scss';

const NavLink: FC<NavLinkProps> = ({ href, text }): ReactElement => {
  return (
    <li className={styles.nav_list_item}>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  );
};

export default NavLink;
