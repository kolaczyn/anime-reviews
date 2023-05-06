import React from 'react';

type Props = {};

const Link: React.FC<Props> = ({ children, ...props }) => {
  return (
    <span className="hover:underline" {...props}>
      {children}
    </span>
  );
};
export default Link;
