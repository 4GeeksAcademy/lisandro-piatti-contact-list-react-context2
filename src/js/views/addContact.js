import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handlerSubmit = (e) => {
    e.preventDefault();
    actions.addContact(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    navigate("/");
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Add a new contact</h1>
        <form onSubmit={handlerSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              className="form-control"
              placeholder="Enter name"
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
              onChange={(e) =>
                setFormData((prevState) => {
                  return { ...prevState, email: e.target.value };
                })
              }
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              value={formData.phone}
              className="form-control"
              placeholder="Enter phone"
              onChange={(e) =>
                setFormData((preState) => {
                  return { ...preState, phone: e.target.value };
                })
              }
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={formData.address}
              className="form-control"
              placeholder="Enter address"
              onChange={(e) =>
                setFormData((prevState) => {
                  return { ...prevState, address: e.target.value };
                })
              }
            />
          </div>

          <input
            type="submit"
            value="Save"
            className="btn btn-primary form-control my-3 w-75 mx-auto d-block"
          ></input>

          {/* <button
            type="submit"
            onClick={handlerSubmit}
            className="btn btn-primary form-control"
          >
            save
          </button> */}

          <Link className="mt-3 w-100 text-center" to="/">
            Get back to contacts
          </Link>
        </form>
      </div>
    </div>
  );
};

/**
 * (
 */
