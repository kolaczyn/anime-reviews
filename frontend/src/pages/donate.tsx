import React, { useContext, useEffect } from 'react';
import { NavbarContext } from '../context/NavbarContext';

export default function DonatePage() {
  const { setThemeDark, setThemeLight } = useContext(NavbarContext);
  useEffect(() => {
    setThemeDark();
    return setThemeLight;
  }, []);
  return (
    <div>
      <h1>donate here. this page has a dark navbar</h1>
    </div>
  );
}
