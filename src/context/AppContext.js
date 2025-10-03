import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [visibleComponent, setVisibleComponent] = useState("default");

  return (
    <AppContext.Provider value={{ 
      users, 
      setUsers, 
      selectedUser, 
      setSelectedUser,
      visibleComponent,
      setVisibleComponent
    }}>
      {children}
    </AppContext.Provider>
  );
};
