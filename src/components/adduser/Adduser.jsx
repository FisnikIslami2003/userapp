import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./Adduser.css";

export const Adduser = () => {
  const { users, setUsers } = useContext(AppContext);

  const [form, setForm] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
    companyName: "",
    catchPhrase: "",
    bs: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: form.id || users.length + 1,
      name: form.name,
      username: form.username,
      email: form.email,
      phone: form.phone,
      website: form.website,
      address: {
        street: form.street,
        suite: form.suite,
        city: form.city,
        zipcode: form.zipcode,
        geo: {
          lat: form.lat,
          lng: form.lng,
        },
      },
      company: {
        name: form.companyName,
        catchPhrase: form.catchPhrase,
        bs: form.bs,
      },
    };
    setUsers([newUser, ...users]);
    setForm({
      id: "",
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      lat: "",
      lng: "",
      companyName: "",
      catchPhrase: "",
      bs: "",
    });
  };

  return (
    <div className="adduser-container">
      <h1>Add a New User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="section">
            <h3>User Details</h3>
            <input type="text" name="id" value={form.id} onChange={handleChange} placeholder="ID" />
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" />
            <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
            <input type="text" name="website" value={form.website} onChange={handleChange} placeholder="Website" />
          </div>

          <div className="section">
            <h3>Address</h3>
            <input type="text" name="street" value={form.street} onChange={handleChange} placeholder="Street" />
            <input type="text" name="suite" value={form.suite} onChange={handleChange} placeholder="Suite" />
            <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="City" />
            <input type="text" name="zipcode" value={form.zipcode} onChange={handleChange} placeholder="Zipcode" />
          </div>

          <div className="section">
            <h3>Geo</h3>
            <input type="text" name="lat" value={form.lat} onChange={handleChange} placeholder="Latitude" />
            <input type="text" name="lng" value={form.lng} onChange={handleChange} placeholder="Longitude" />
          </div>

          <div className="section">
            <h3>Company</h3>
            <input type="text" name="companyName" value={form.companyName} onChange={handleChange} placeholder="Company Name" />
            <input type="text" name="catchPhrase" value={form.catchPhrase} onChange={handleChange} placeholder="Catch Phrase" />
            <input type="text" name="bs" value={form.bs} onChange={handleChange} placeholder="BS" />
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};
