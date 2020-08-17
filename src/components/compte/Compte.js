import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faEdit,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";

import { getComptes, getCompte } from "../../actions/compteActions";

class Compte extends Component {
  constructor(props) {
    super(props);
  }

  // Cette méthode est exécutée juste après le chargement du composant
  componentDidMount() {
    // On déclenche la récupération des données
    this.props.getComptes();
  }

  render() {
    const { comptes } = this.props.compte;

    return (
      <React.Fragment>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Comptes bancaires</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <FontAwesomeIcon icon={faPlusCircle} /> &nbsp; Créer un compte
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Intitulé</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>RIB</th>
                <th>Banque</th>
                <th>Téléphone</th>
                <th>Solde</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {comptes.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.intitule}</td>
                    <td>{value.nom}</td>
                    <td>{value.prenom}</td>
                    <td>{value.rib}</td>
                    <td>{value.banque}</td>
                    <td>{value.telephone}</td>
                    <td>{value.solde}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <FontAwesomeIcon icon={faEdit} color={"blue"} />
                      </button>{" "}
                      &nbsp;
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <FontAwesomeIcon icon={faMinusCircle} color={"red"} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
