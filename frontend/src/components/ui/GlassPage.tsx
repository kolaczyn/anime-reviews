import React from 'react';

type Props = {};

const GlassPage: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-2xl px-0 sm:px-4 mx-auto">
      <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
        <div className="p-4 sm:p-6 bg-white bg-opacity-60 rounded-xl">
          {children}
        </div>
      </div>
    </div>
  );
};
export default GlassPage;
