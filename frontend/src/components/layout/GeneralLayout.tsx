import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {};

const GeneralLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-white flex-col">
      <Navbar />

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
export default GeneralLayout;
