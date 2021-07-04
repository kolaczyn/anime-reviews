import classNames from 'classnames';
import React from 'react';

type Props = {
  className?: string;
};

const Subtitle: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div className={classNames('text-dark-gray', className)} {...rest}>
      {children}
    </div>
  );
};
export default Subtitle;
