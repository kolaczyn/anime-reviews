import React, { CSSProperties } from 'react';
import classNames from 'classnames';

type ButtonTypes = 'primary' | 'success' | 'danger';

type Props = {
  type?: ButtonTypes;
  className?: string;
  outline?: boolean;
};

const DARK_BLUE = 'blue-600';
const DARK_GREEN = 'green-600';
const DARK_RED = 'red-600';

// const BLUE_BORDER = 

// there's a lot of redundancy, but Tailwind's purge doesn't allow progr
const solidClasses: Record<ButtonTypes, string> = {
  primary: `bg-blue border-blue hover:bg-blue-600 hover:border-blue-600`,
  success: `bg-green border-green hover:bg-green-600 hover:border-green-600`,
  danger: `bg-red border-red hover:bg-red-600 hover:border-red-600`,
};

const outlineClasses: Record<ButtonTypes, string> = {
  primary: `text-blue border-blue hover:border-blue-600 hover:text-blue-600`,
  success: `text-green border-green hover:border-green-600 hover:text-green-600`,
  danger: `text-red border-red hover:border-red-600 hover:text-red-600`,
};

const wiggle: CSSProperties = {
}

const ButtonStyle: React.FC<Props> = ({
  children,
  type,
  outline,
  className,
  ...rest
}) => {
  return (
    // <div className="bg-red">{children}</div>
    <span
    style={wiggle}
      className={classNames(
        'border-4 inline-block',
        outline ? outlineClasses[type] : solidClasses[type],
        'cursor-pointer px-4 py-2 rounded-xl font-bold text-white',
        'transition duration-200 ease-in-out',
        'hover:scale-105 wiggle transform',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
};
export default ButtonStyle;

ButtonStyle.defaultProps = {
  type: 'primary',
  className: '',
  outline: false,
};
