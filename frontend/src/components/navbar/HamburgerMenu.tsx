import classNames from 'classnames';
import React, { useContext } from 'react';
import { AiOutlineMenu as HamburgerIcon } from 'react-icons/ai';
import { GrClose as CloseIcon } from 'react-icons/gr';
import { SidebarContext } from '../../context/SidebarContext';

type Props = { className: string };

const HamburgerMenu: React.FC<Props> = ({ className }) => {
  const { isSidebarOn, setIsSidebarOn } = useContext(SidebarContext);
  const handleClick = () => setIsSidebarOn(old => !old);
  return (
    <button
      onClick={handleClick}
      className={classNames(
        'rounded-full p-3 bg-blue-100 text-ink shadow-md',
        'hover:bg-blue-200 transition duration-500 hover:shadow-lg',
        className
      )}
    >
      {isSidebarOn ? <CloseIcon size={24} /> : <HamburgerIcon size={24} />}
    </button>
  );
};
export default HamburgerMenu;
