import React from "react";
import Navigation from "../layouts/navbar/Navigation";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <h1>Me contacter</h1>
      <ul>
        <li>Par mail: clement.touzet40@gmail.com</li>
        <li>
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/clement-touzet/">
            https://www.linkedin.com/in/clement-touzet/
          </a>
        </li>
        <li>Téléphone: +33 (0)6 49 18 33 43</li>
      </ul>
    </div>
  );
};

export default Contact;
