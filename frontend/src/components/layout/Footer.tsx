import React from 'react';
import ContainerMedium from './container/ContainerMedium';

type Props = {};

const MY_EMAIL = 'mailto:kolaczyn@protonmail.com';

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="text-white bg-ink">
      <ContainerMedium className="flex justify-around">
        <span>Paweł Kołaczyński © 2021</span>
        <span>
          <a href={MY_EMAIL}>{MY_EMAIL}</a>
        </span>
      </ContainerMedium>
    </footer>
  );
};
export default Footer;
