import React from 'react';

type Props = {};

const ContainerBig: React.FC<Props> = ({ children }) => {
  return <div className="max-w-6xl mx-auto px-2">{children}</div>;
};
export default ContainerBig;
