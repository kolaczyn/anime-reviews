import classnames from 'classnames';
import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { NavbarContext } from '../../context/NavbarContext';
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
        'flex w-full justify-between',
        'transition duration-500',
        theme
      )}
    >
      <Logo />

      <nav>
        <ul className="flex">
          {links.map(({ to, label }) => (
            <li key={label}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
