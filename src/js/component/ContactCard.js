import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Modal } from "./Modal";

// actions.deleteContact(props.id)

export const ContactCard = (props) => {
  const imageContact =
    "https://as01.epimg.net/deporteyvida/imagenes/2017/10/17/portada/1508244075_414775_1508244230_noticia_normal_recorte1.jpg";

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setShowModal(true);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const confirmDelete = () => {
    actions.deleteContact(props.id);
    setShowModal(false);
    navigate("/");
  };

  return (
    <div
      key={props.id}
      className="d-flex m-3 border border-3 rounded p-2 text-dark bg-opacity-10"
    >
      <div className="px-5">
        <img
          src={imageContact}
          alt="image contact"
          className="rounded-circle mx-auto"
        />
      </div>
      <div className="ps-5">
        <label className="name lead">
          <b>{props.name}</b>
        </label>
        <br />
        <i className="fa fa-phone fa-fw text-muted mr-4" />
        <span className="text-muted">{props.phone}</span>

        <br />
        <i className="fa fa-envelope fa-fw text-muted mr-4" />
        <span className="text-muted">{props.email}</span>

        <br />
        <i className="fas fa-map-marker-alt text-muted mr-4" />
        <span className="text-muted">{props.address}</span>
      </div>

      <div className="ms-auto">
        <button className="btn" onClick={() => handleEdit(props.id)}>
          <i className="fas fa-pencil-alt mr-4" />
        </button>
        <button
          type="button"
          className="btn"
          title="Delete Contact"
          onClick={handleDelete}
        >
          <i className="fas fa-trash-alt" />
        </button>
      </div>
      <Modal show={showModal} onClose={closeModal} onConfirm={confirmDelete} />
    </div>
  );
};
