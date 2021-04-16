import { createContext, useState } from "react";

const GuideContext = createContext({
  toggleSidebarRow: false,
});

export default GuideContext;

export function GuideContextProvider({ children }) {
  const [toggleSidebarRow, setToggleSidebarRow] = useState(false);
  return (
    <GuideContext.Provider value={[toggleSidebarRow, setToggleSidebarRow]}>
      {children}
    </GuideContext.Provider>
  );
}
