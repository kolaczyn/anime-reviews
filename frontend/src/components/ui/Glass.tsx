import classNames from 'classnames';
import React from 'react';

type Props = { on?: boolean };

const Glass: React.FC<Props> = ({ children, on: isOn }) => {
  return (
    <div
      className={classNames(
        isOn
          ? 'bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'
          : ''
      )}
    >
      <div className={classNames(isOn ? 'bg-white bg-opacity-60' : '')}>
        {children}
      </div>
    </div>
  );
};
export default Glass;
Glass.defaultProps = {
  on: false,
};
