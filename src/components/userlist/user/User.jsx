import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./User.css";

export const User = ({ user }) => {
  const { setSelectedUser,setUsers } = useContext(AppContext);
  const navigate=useNavigate();

  const handleClick = () => {
    setSelectedUser(user);
    navigate('/details');
  };
  
  const handleDelete = async(id)=>{
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      method:"DELETE"
    })
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
  }
 

  return (
    <div className="user-card" onClick={handleClick}>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
      <button onClick={(e)=>{
        e.stopPropagation()
        handleDelete(user.id)
        }}>
        Delete
      </button>
       
    
    </div>
  );
};
