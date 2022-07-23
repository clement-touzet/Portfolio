import React from "react";
import Form from "../../../components/projets/application_cinema/Form";
import HeaderCinema from "../../../components/projets/application_cinema/HeaderCinema";

const ApplicationCinema = () => {
  return (
    <div className="bodyAppCinema">
      <div className="home-page">
        <HeaderCinema />
        <Form />
      </div>
    </div>
  );
};

export default ApplicationCinema;
