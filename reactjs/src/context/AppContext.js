import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addRecord = (data) => {
    setHistory((prev) => [...prev, data]);
  };
  const formStyle = {
    backgroundColor: 'rgb(205 224 227)',
    padding: '20px',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style = {formStyle}>
    <AppContext.Provider value={{ history, addRecord }}>
      {children}
    </AppContext.Provider>
    </div>
  );
};