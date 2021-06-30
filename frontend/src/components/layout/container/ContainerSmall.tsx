import React from 'react';

type Props = {};

const ContainerSmall: React.FC<Props> = ({ children }) => {
  return <div className="max-w-xl mx-auto px-8">{children}</div>;
};
export default ContainerSmall;
