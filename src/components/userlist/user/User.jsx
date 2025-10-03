import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import "./User.css";

export const User = ({ user }) => {
  const { setSelectedUser, setVisibleComponent } = useContext(AppContext);

  const handleClick = () => {
    setSelectedUser(user);
    setVisibleComponent("details");
  };

  return (
    <div className="user-card" onClick={handleClick}>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};
