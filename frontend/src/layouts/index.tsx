import React from 'react';
import NavbarContextWrapper from '../context/NavbarContext';
import Footer from '../components/footer/Footer';
import Navbar from '../components/layout/Navbar';

type Props = {};

const GeneralLayout: React.FC<Props> = ({ children }) => {
  return (
    <NavbarContextWrapper>
      <div className="min-h-screen flex bg-white text-ink flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NavbarContextWrapper>
  );
};
export default GeneralLayout;
