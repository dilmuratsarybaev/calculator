import React, { createContext, useState } from "react";

export const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  
  return (
    <BackgroundContext.Provider value={{ theme, setTheme }}>
      {children}
    </BackgroundContext.Provider>
  );
};
