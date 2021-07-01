import classnames from 'classnames';
import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { NavbarContext } from '../../context/NavbarContext';
import ContainerBig from './container/ContainerBig';
import Logo from '../branding/Logo';
import classNames from 'classnames';
import HamburgerMenu from '../navbar/HamburgerMenu';
import { SidebarContext } from '../../context/SidebarContext';
import Sidebar from '../sidebar/Sidebar';
import NavbarLinks from '../navbar/NavbarLinks';

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  const { theme } = useContext(NavbarContext);
  const { isSidebarOn } = useContext(SidebarContext);
  return (
    <header
      className={classnames('transition duration-500', 'relative', theme)}
    >
      <ContainerBig
        className={classNames('flex w-full justify-between items-center py-3')}
      >
        <Logo />
        <nav>
          <NavbarLinks className={classNames('space-x-8', 'hidden md:flex')} />
        </nav>
        <HamburgerMenu className={classNames('md:hidden inline')} />
      </ContainerBig>
      <div className="fixed top-100 translate-y-full left-0 right-0">
        {isSidebarOn && <Sidebar />}
      </div>
    </header>
  );
};
export default Navbar;
