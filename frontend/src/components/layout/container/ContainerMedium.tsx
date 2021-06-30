
import React from 'react';

type Props = {};

const ContainerMedium: React.FC<Props> = ({ children }) => {
  return <div className="max-w-5xl mx-auto px-8">{children}</div>;
};
export default ContainerMedium;
