import React from 'react';
import {
  FaGithubSquare as GithubIcon,
  FaTwitterSquare as TwitterIcon,
  FaLinkedin as LinkedInIcon,
  FaRssSquare as RssIcon,
  FaMonero as MoneroIcon,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import ExternalLink from '../ui/ExternalLink';
import InternalLink from '../ui/InternalLink';

type Props = {};

export type IconLinkInfo = {
  Component: IconType;
  href: string;
  label: string;
};

const iconLinkInfo: IconLinkInfo[] = [
  {
    Component: TwitterIcon,
    href: 'https://twitter.com/kolaczyn',
    label: 'Twitter',
  },
  { Component: GithubIcon, href: 'https://github.com/kolaczyn', label: 'GitHub' },
  {
    Component: LinkedInIcon,
    href: 'https://linkedin.com/kolaczyn',
    label: 'LinkedIn',
  },
  // {component: 'MAL', href="https://myanimelist.com/kolaczyn"},
];

const ICON_SIZE = 24;

const FooterIconLinks: React.FC<Props> = ({}) => {
  return (
    <div className="font-bold">
      <ExternalLink className="flex items-center space-x-2" href="/rss-feed">
        <RssIcon size={ICON_SIZE} />
        <span>RSS Feed</span>
      </ExternalLink>
      <InternalLink className="flex items-center space-x-2 my-2" href="/donate">
        <MoneroIcon size={ICON_SIZE} />
        <span>Donate</span>
      </InternalLink>
      <section>
        <span>You can find me here</span>
        <ul className="space-x-2 flex">
          {iconLinkInfo.map(({ Component, href, label }) => (
            <li key={href}>
              <ExternalLink href={href}>
                <Component aria-label={label} size={ICON_SIZE} />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default FooterIconLinks;
