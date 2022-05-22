import React from "react";

const Projet = (props) => {
  return (
    <div
      className="projet"
      onClick={(e) => {
        document.location.href = props.lien;
      }}
    >
      <h3 className="titreProjet">{props.titre} </h3>
      <p className="descriptionProjet"> {props.description}</p>
    </div>
  );
};

export default Projet;
