import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavbarContext } from '../context/NavbarContext';

export default function AboutPage() {
  const { setThemeDark, setThemeLight } = useContext(NavbarContext);
  useEffect(() => {
    setThemeDark();
    return setThemeLight;
  }, []);
  return (
    <>
    <Helmet>
      <title>About | Anime Reviews</title>
    </Helmet>
    <div>
      <h1>about here. this page has a dark navbar</h1>
    </div>
    </>
  );
}
