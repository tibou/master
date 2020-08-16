import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

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
      <div>
        <h1 className="h2">Transactions</h1>
      </div>
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
