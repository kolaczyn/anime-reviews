import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Link from './Link';

type Props = { href: string } & any;

const InternalLink: React.FC<Props> = ({ children, href, ...props }) => {
  return (
    <Link>
      <GatsbyLink to={href} {...props} target="_blank">
        {children}
      </GatsbyLink>
    </Link>
  );
};
export default InternalLink;
