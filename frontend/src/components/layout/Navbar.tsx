import classnames from 'classnames';
import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { NavbarContext, NavbarTheme } from '../../context/NavbarContext';
import ContainerBig from './container/ContainerBig';
import Logo from '../branding/Logo';
import classNames from 'classnames';
import HamburgerMenu from '../navbar/HamburgerMenu';
import { SidebarContext } from '../../context/SidebarContext';
import Sidebar from '../sidebar/Sidebar';
import NavbarLinks from '../navbar/NavbarLinks';
import Glass from '../ui/Glass';

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  const { theme } = useContext(NavbarContext);
  const { isSidebarOn } = useContext(SidebarContext);
  return (
    <header className={classnames('transition duration-500', theme)}>
      {
        <Glass on={theme === NavbarTheme.Light}>
          <ContainerBig
            className={classNames(
              'flex w-full justify-between items-center py-3'
            )}
          >
            <Logo />
            <nav>
              <NavbarLinks
                className={classNames('space-x-8', 'hidden md:flex')}
              />
            </nav>
            <HamburgerMenu className={classNames('md:hidden inline')} />
          </ContainerBig>
          <div className="fixed top-100 translate-y-full left-0 right-0">
            {isSidebarOn && <Sidebar />}
          </div>
        </Glass>
      }
    </header>
  );
};
export default Navbar;
