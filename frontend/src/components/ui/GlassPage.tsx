import classNames from 'classnames';
import React from 'react';
import ContainerSmall from '../layout/container/ContainerSmall';

type Props = { className?: string };

const GlassPage: React.FC<Props> = ({ children, className }) => {
  return (
    <div className="max-w-xl px-0 sm:px-4 mx-auto">
      <div
        className={classNames(
          'bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60',
          className
        )}
      >
        <div className="p-4 sm:p-6 bg-white bg-opacity-60 rounded-xl">{children}</div>
      </div>
    </div>
  );
};
export default GlassPage;
