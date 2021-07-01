import classnames from 'classnames';
import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { NavbarContext } from '../../context/NavbarContext';
import ContainerBig from './container/ContainerBig';
import Logo from '../branding/Logo';

type Props = {};

const links: { to: string; label: string }[] = [
  {
    to: '/donate',
    label: 'donate',
  },
  {
    to: '/about',
    label: 'about',
  },
];

const Navbar: React.FC<Props> = ({}) => {
  const { theme } = useContext(NavbarContext);
  return (
    <header
      className={classnames(
        'transition duration-500 border-b-2 border-light-gray',
        theme
      )}
    >
      <ContainerBig className="flex w-full justify-between items-center py-3">
        <Logo />

        <nav>
          <ul className="flex space-x-8">
            {links.map(({ to, label }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </ContainerBig>
    </header>
  );
};
export default Navbar;
