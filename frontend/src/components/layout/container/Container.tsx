import React from 'react';
import classnames from 'classnames';

type Props = { className?: string };

const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={classnames('mx-auto px-4', className)}>{children}</div>
  );
};
export default Container;

Container.defaultProps = {
  className: '',
};
