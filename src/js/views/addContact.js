import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
  const { store, actions } = useContext(Context);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handlerSubmit = (result) => {
    // actions.addContact(formData);
    console.log(result);
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Add a new contact</h1>
        <form onSubmit={handlerSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={formData.name}
              className="form-control"
              placeholder="Full Name"
              onChange={(e) =>
                setFormData((prevState) => {
                  return { ...prevState, name: e.target.value };
                })
              }
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setFormData.email(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              value={formData.phone}
              className="form-control"
              placeholder="Enter phone"
              onChange={(e) => setFormData.phone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={formData.address}
              className="form-control"
              placeholder="Enter address"
              onChange={(e) => setFormData.address(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary form-control">
            save
          </button>

          <Link className="mt-3 w-100 text-center" to="/">
            or get back to contacts
          </Link>
        </form>
      </div>
    </div>
  );
};

/**
 * (
 */
