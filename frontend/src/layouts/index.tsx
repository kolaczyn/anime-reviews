import React from 'react';
import NavbarContextWrapper from '../context/NavbarContext';
import Footer from '../components/footer/Footer';
import Navbar from '../components/layout/Navbar';
import { Helmet } from 'react-helmet';
import SidebarContextWrapper from '../context/SidebarContext';

type Props = {};

const GeneralLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Anime Reviews</title>
      </Helmet>
      <NavbarContextWrapper>
        <SidebarContextWrapper>
          <div className="min-h-screen flex bg-white text-ink flex-col">
            <Navbar />
            <main className="flex-1 py-6">{children}</main>
            <Footer />
          </div>
        </SidebarContextWrapper>
      </NavbarContextWrapper>
    </>
  );
};
export default GeneralLayout;
