import React from 'react';
import { Link } from 'gatsby';
import Logo from '../branding/Logo';
import ContainerBig from './container/ContainerBig';

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
  return (
    <header className="flex w-full justify-between">
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
