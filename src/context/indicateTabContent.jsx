import React, { createContext, useContext, useState } from "react";

export const IndicateContext = createContext("");

export const IndicateTabContext = ({ children }) => {
  const [indicate, setIndicate] = useState(1);

  const value = { indicate, setIndicate };

  return (
    <IndicateContext.Provider value={value}>
      {children}
    </IndicateContext.Provider>
  );
};
