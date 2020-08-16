import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

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
      <div>
        <h1 className="h2">Comptes bancaires</h1>
      </div>
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
