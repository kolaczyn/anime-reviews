import React, { createContext, useState } from 'react';

type Props = {};

export enum NavbarTheme {
  Light = 'bg-transparent text-ink border-b-2 border-light-gray',
  Dark = 'bg-ink text-white',
}

export const NavbarContext = createContext<{
  theme: NavbarTheme;
  setTheme: React.Dispatch<React.SetStateAction<NavbarTheme>>;
  toggleTheme: () => void;
  setThemeDark: () => void;
  setThemeLight: () => void;
}>(null);

const NavbarContextWrapper: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(NavbarTheme.Light);

  const setThemeLight = () => setTheme(NavbarTheme.Light);
  const setThemeDark = () => setTheme(NavbarTheme.Dark);
  const toggleTheme = () =>
    theme === NavbarTheme.Light ? setThemeDark : setThemeLight;

  return (
    <NavbarContext.Provider
      value={{ theme, setTheme, toggleTheme, setThemeDark, setThemeLight }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
export default NavbarContextWrapper;
