import { createContext, useState } from "react";

export const IndicateContext = createContext("");

export const IndicateTabProvider = ({ children }) => {
  const [indicate, setIndicate] = useState(1);

  const value = { indicate, setIndicate };

  return (
    <IndicateContext.Provider value={value}>
      {children}
    </IndicateContext.Provider>
  );
};
