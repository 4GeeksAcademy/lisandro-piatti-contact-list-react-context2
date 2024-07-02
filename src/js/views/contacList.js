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
    <div className="container-fluid w-75">
      <div>
        {store.contactList.map((item, index) => {
          return (
            <ContactCard
              key={index}
              name={item.name}
              address={item.address}
              phone={item.phone}
              email={item.email}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};
