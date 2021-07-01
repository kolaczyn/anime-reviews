import classNames from 'classnames';
import React from 'react';
import ContainerSmall from '../layout/container/ContainerSmall';
import NavbarLinks from '../navbar/NavbarLinks';

type Props = {};

const Sidebar: React.FC<Props> = ({}) => {
  return (
    <div className="bg-light-gray text-ink opacity-95 py-2">
      <ContainerSmall>
          <NavbarLinks className={classNames()} />
      </ContainerSmall>
    </div>
  );
};
export default Sidebar;
