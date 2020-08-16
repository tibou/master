import React from "react";

import "./Home.css";

const Footer = props => {
  return (
    <React.Fragment>
      <div className="row Footer-bande">
        <div className="col-4 Footer-vert"></div>
        <div className="col-4 Footer-jaune"></div>
        <div className="col-4 Footer-rouge"></div>
      </div>
      <div className="Footer-content">
        <br />
        Copyright © OBANSSI 2020. Tous droits réservés
      </div>
    </React.Fragment>
  );
};

export default Footer;
