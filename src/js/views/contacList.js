import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ContactList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContacts();
  }, []);

  return (
    <div className="container">
      <ul className="list-group">
        {store.contactList.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
              style={{ background: item.background }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
