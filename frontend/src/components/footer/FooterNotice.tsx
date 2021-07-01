import React from 'react';
import ContainerMedium from '../layout/container/ContainerMedium';
import Link from '../ui/Link';

type Props = {};

const MY_EMAIL = 'kolaczyn@protonmail.com';

const FooterNotice: React.FC<Props> = ({}) => {
  return (
    <div className="text-white bg-ink">
      <ContainerMedium className="flex justify-around font-bold py-2 flex-col items-center md:flex-row">
        <span>Paweł Kołaczyński © 2021</span>
        <span>
          <Link>
            <a href={`mailto:${MY_EMAIL}`} target="_blank">
              {MY_EMAIL}
            </a>
          </Link>
        </span>
      </ContainerMedium>
    </div>
  );
};
export default FooterNotice;
