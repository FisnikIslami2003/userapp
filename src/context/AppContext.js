import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [visibleComponent, setVisibleComponent] = useState("default");
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);
  

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
