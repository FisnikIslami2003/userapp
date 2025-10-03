import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./Userdetails.css";

export const Userdetails = () => {
  const { selectedUser, setVisibleComponent } = useContext(AppContext);

  if (!selectedUser) return null;

  const handleBack = () => {
    setVisibleComponent("default");
  };

  return (
    <div className="userdetails-container">
      <h1>User Details</h1>
      <div className="details-section">
        <h3>Address</h3>
        <p>Street: {selectedUser.address.street}</p>
        <p>Suite: {selectedUser.address.suite}</p>
        <p>City: {selectedUser.address.city}</p>
        <p>Zipcode: {selectedUser.address.zipcode}</p>
        <p>Geo:</p>
        <p>Lat: {selectedUser.address.geo.lat}</p>
        <p>Lng: {selectedUser.address.geo.lng}</p>
      </div>
      <div className="details-section">
        <h3>Phone & Website</h3>
        <p>Phone: {selectedUser.phone}</p>
        <p>Website: {selectedUser.website}</p>
      </div>
      <button className="back-btn" onClick={handleBack}>Back</button>
    </div>
  );
};
