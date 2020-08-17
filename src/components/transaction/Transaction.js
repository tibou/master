import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faEdit,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";

import {
  getTransactions,
  getTransaction,
  deleteTransaction
} from "../../actions/transactionActions";

class Transaction extends Component {
  constructor(props) {
    super(props);
  }

  // Cette méthode est exécutée juste après le chargement du composant
  componentDidMount() {
    // On déclenche la récupération des données
    this.props.getTransactions();
  }

  delete = id => {
    this.props.deleteTransaction(id);
  };

  render() {
    const { transactions } = this.props.transaction;
    return (
      <React.Fragment>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Transactions</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <FontAwesomeIcon icon={faPlusCircle} /> &nbsp; Créer une
              transaction
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Type</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Montant</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((value, index) => {
                const dateTimeFormat = new Intl.DateTimeFormat("fr", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit"
                });
                const [
                  { value: day },
                  ,
                  { value: month },
                  ,
                  { value: year },
                  ,
                  { value: hour },
                  ,
                  { value: minute }
                ] = dateTimeFormat.formatToParts(value.date);

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.type}</td>
                    <td>{value.source}</td>
                    <td>{value.destination}</td>
                    <td>{value.montant}</td>
                    <td>{`${day}-${month}-${year}  ${hour}:${minute}`}</td>
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
                        onClick={() => this.delete(value.id)}
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

Transaction.propType = {
  transaction: PropTypes.object.isRequired,
  getTransactions: PropTypes.func.isRequired,
  getTransaction: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  transaction: state.transaction
});

export default connect(mapStateToProps, {
  getTransactions,
  getTransaction,
  deleteTransaction
})(Transaction);
