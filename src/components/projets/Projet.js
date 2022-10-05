/* eslint-disable react/prop-types */
import React from "react";

const Projet = (props) => {
  return (
    <div
      className="projet"
      onClick={() => {
        document.location.href = props.lien;
      }}
    >
      <div className="contenuCarte">
        <h3 className="titreProjet">{props.titre} </h3>
        <p className="descriptionProjet"> {props.description}</p>
      </div>
    </div>
  );
};

export default Projet;
