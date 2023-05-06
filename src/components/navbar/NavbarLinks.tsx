import { Link } from 'gatsby';
import React from 'react';

type Props = { className: string };
const links: { to: string; label: string }[] = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/article',
    label: 'Articles',
  },
  {
    to: '/review',
    label: 'Reviews',
  },
  {
    to: '/donate',
    label: 'Donate',
  },
];

const NavbarLinks: React.FC<Props> = ({ ...props }) => {
  return (
    <ul {...props}>
      {links.map(({ to, label }) => (
        <li key={label}>
          <Link activeClassName="underline" to={to}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default NavbarLinks;
