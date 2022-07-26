import { FC, Fragment, ReactElement, ReactNode } from 'react';
import MainNavigation from './main-navigation/main-navigation';
import Footer from './footer/footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = (props): ReactElement => {
  // props.children is every page component that will be render through this
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
