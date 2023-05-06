import classNames from 'classnames';
import React from 'react';
import ContainerMedium from '../layout/container/ContainerMedium';
import FooterIconLinks from './FooterIconLinks';
import FooterLinks, { LinkInfo } from './FooterLinks';
import FooterNotice from './FooterNotice';

type Props = {};

const sitemapLinks: LinkInfo[] = [
  { label: 'Home Page', href: '/' },
  { label: 'Latest Articles', href: '/article' },
  { label: 'Latest Reviews', href: '/review' },
];

const projectsLinks: LinkInfo[] = [
  { label: 'Portfolio', href: 'https://kolaczyn.com' },
  { label: 'Track Fit', href: 'https://track-fit.me' },
  { label: 'Luke Smith', href: 'https://luke-smith.kolaczyn.com' },
  { label: 'Tech Blog', href: 'https://tech-blog.kolaczyn.com' },
];

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="border-t-2 border-light-gray">
      <ContainerMedium className={classNames("flex justify-around py-5", "flex-col space-y-4", "sm:flex-row sm:space-y-0 sm:py-10")}>
        <FooterLinks label="Sitemap" linksInfo={sitemapLinks} />
        <FooterLinks
          label="My Other Projects"
          linksInfo={projectsLinks}
          isExternal
        />
        <FooterIconLinks />
      </ContainerMedium>
      <FooterNotice />
    </footer>
  );
};
export default Footer;
