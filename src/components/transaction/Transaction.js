import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import {
  getTransactions,
  getTransaction
} from "../../actions/transactionActions";

class Transaction extends Component {
  constructor(props) {
    super(props);
  }

  // Cette méthode est exécutée juste après le chargement du composant
  componentDidMount() {
    // On déclenche la récupération des données
    //this.props.getTransactions();
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="h2">Transactions</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button type="button" className="btn btn-sm btn-outline-secondary">
            <FontAwesomeIcon icon={faPlusCircle} /> &nbsp; Créer une transaction
          </button>
        </div>
      </React.Fragment>
    );
  }
}

Transaction.propType = {
  transaction: PropTypes.object.isRequired,
  getTransactions: PropTypes.func.isRequired,
  getTransaction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  transaction: state.transaction
});

export default connect(mapStateToProps, { getTransactions, getTransaction })(
  Transaction
);
