import React from "react";

export const ContactCard = (props) => {
  const imageContact =
    "https://as01.epimg.net/deporteyvida/imagenes/2017/10/17/portada/1508244075_414775_1508244230_noticia_normal_recorte1.jpg";
  return (
    <li
      key={props.index}
      className="list-group-item d-flex justify-content-between"
    >
      <div>
        <img
          src={imageContact}
          alt="image contact"
          className="rounded-circle mx-auto"
        />
      </div>
      <div>
        {props.name}
        {props.phone}
        {props.email}
        {props.address}
      </div>

      <div>
        <button className="btn" onClick={props.update}>
          <i className="fas fa-pencil-alt mr-3" />
        </button>
        <button className="btn" onClick={props.deleteContact}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </li>
  );
};
