import React from 'react';
import ExternalLink from '../ui/ExternalLink';
import InternalLink from '../ui/InternalLink';

export type LinkInfo = {
  label: string;
  href: string;
};

type Props = {
  label: string;
  linksInfo: LinkInfo[];
  isExternal?: boolean;
};

const FooterLinks: React.FC<Props> = ({ label, linksInfo, isExternal }) => {
  return (
    <section>
      <header className="font-bold">{label}</header>
      <ul>
        {linksInfo.map(({ href, label }) => (
          <li key={label}>
            {isExternal ? (
              <ExternalLink href={href}>{label}</ExternalLink>
            ) : (
              <InternalLink href={href}>{label}</InternalLink>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default FooterLinks;

FooterLinks.defaultProps = {
  isExternal: false,
};
