import { createContext, useState, useContext } from "react";

const GuideContext = createContext();

export function GuideContextProvider({ children }) {
  const [toggleSidebarRow, setToggleSidebarRow] = useState(false);
  return (
    <GuideContext.Provider value={[toggleSidebarRow, setToggleSidebarRow]}>
      {children}
    </GuideContext.Provider>
  );
}
export function useGuide() {
  const context = useContext(GuideContext);
  if (context === undefined) {
    throw new Error("useGuide must be used within an GuideProvider component");
  }
  return context;
}
