import { FC, Fragment, ReactElement, ReactNode, useEffect } from 'react';
import MainNavigation from './main-navigation/main-navigation';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = (props): ReactElement => {
  // props.children is every page component that will be render through this
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
