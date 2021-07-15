import React from 'react';
import Link from './Link';

type Props = { href: string } & any;

const ExternalLink: React.FC<Props> = ({ children, href, ...props }) => {
  return (
    <Link>
      <a href={href} {...props} target="_blank" rel="noopener">
        {children}
      </a>
    </Link>
  );
};
export default ExternalLink;
