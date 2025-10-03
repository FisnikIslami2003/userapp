import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { User } from "./user/User";
import "./Userlist.css";

export const Userlist = () => {
  const { users, setUsers } = useContext(AppContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [setUsers]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="userlist-container">
      <h1>List of Users</h1>
      <input
        type="search"
        placeholder="Search by name or email"
        style={{ height: "50px", width: "350px", padding: "8px", fontSize: "16px" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="users-container">
        {filteredUsers.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
