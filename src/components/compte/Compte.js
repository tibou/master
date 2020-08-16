import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { getComptes, getCompte } from "../../actions/compteActions";

class Compte extends Component {
  constructor(props) {
    super(props);
  }

  // Cette méthode est exécutée juste après le chargement du composant
  componentDidMount() {
    // On déclenche la récupération des données
    //this.props.getComptes();
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="h2">Comptes bancaires</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button type="button" className="btn btn-sm btn-outline-secondary">
            <FontAwesomeIcon icon={faPlusCircle} /> &nbsp; Créer un compte
          </button>
        </div>
      </React.Fragment>
    );
  }
}

Compte.propType = {
  compte: PropTypes.object.isRequired,
  getComptes: PropTypes.func.isRequired,
  getCompte: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  compte: state.compte
});

export default connect(mapStateToProps, { getComptes, getCompte })(Compte);
