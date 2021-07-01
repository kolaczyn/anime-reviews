import React, { createContext, useState, Dispatch, useEffect } from 'react';
import { globalHistory } from '@reach/router';

type Props = {};

type SidebarContextData = {
  isSidebarOn: boolean;
  setIsSidebarOn: Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextData>(null);

// it probably shouldn't be hardcorded here, but whatever
const MD_TAILWIND_BREAKPOINT = 768;

const SidebarContextWrapper: React.FC<Props> = ({ children }) => {
  const [isSidebarOn, setIsSidebarOn] = useState(false);

  // TL;DR - hide sidebar if the user navigates to a different page or the hamburger menu gets hidden (because the viewport is now big)
  useEffect(() => {
    const historyUnsubscribe = globalHistory.listen(({ action }) => {
      if (action === 'PUSH') setIsSidebarOn(false);
    });
    const resizeEventListener = () => {
      if (window.innerWidth > MD_TAILWIND_BREAKPOINT) setIsSidebarOn(false);
    };
    window.addEventListener('resize', resizeEventListener);
    return () => {
      historyUnsubscribe();
      window.removeEventListener('resize', resizeEventListener);
    };
  }, [setIsSidebarOn]);

  return (
    <SidebarContext.Provider value={{ isSidebarOn, setIsSidebarOn }}>
      {children}
    </SidebarContext.Provider>
  );
};
export default SidebarContextWrapper;
