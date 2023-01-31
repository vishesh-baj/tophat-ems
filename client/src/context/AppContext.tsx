import React, { createContext, useState } from "react";

interface AppContextProps {
  theme: string;
  setTheme: (value: string) => void;
}

export const AppContext = createContext<AppContextProps>({
  theme: "light",
  setTheme: () => {},
});

const AppContextProvider: React.FC = (children) => {
  const [theme, setTheme] = useState("light");

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
