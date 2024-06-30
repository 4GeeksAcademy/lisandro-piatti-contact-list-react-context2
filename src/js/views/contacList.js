import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

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
            <ContactCard
              key={index}
              name={item.name}
              address={item.address}
              phone={item.phone}
              email={item.email}
              id={item.id}
              deleteContact={() => actions.deleteContact(item.id)}
              update={() => deleteContact()}
            />
            // <li
            //   key={index}
            //   className="list-group-item d-flex justify-content-between"
            // >
            //   {item.name}
            //   <div>
            //     <button className="btn" onClick={() => actions.deleteContact()}>
            //       <i className="fas fa-pencil-alt mr-3" />
            //     </button>
            //     <button
            //       className="btn"
            //       onClick={() => actions.deleteContact(item.id)}
            //     >
            //       <i className="fas fa-trash-alt" />
            //     </button>
            //   </div>
            // </li>
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
