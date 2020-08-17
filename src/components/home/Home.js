import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChalkboard,
  faArchive,
  faBox,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
import Footer from "./Footer";
import Compte from "../compte/Compte";
import Transaction from "../transaction/Transaction";
import {
  getComptes,
  getCompte,
  deleteCompte
} from "../../actions/compteActions";
import {
  getTransactions,
  getTransaction,
  deleteTransaction
} from "../../actions/transactionActions";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      whatRender: 0,
      redirect: false
    };
  }

  // Cette méthode est exécutée juste après le chargement du composant
  componentDidMount() {
    this.props.getComptes();
    this.props.getTransactions();
  }

  toggleShowContent = v => {
    this.setState({ whatRender: v });
  };

  logout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("type");
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }

    const { comptes } = this.props.compte;
    const { transactions } = this.props.transaction;
    return (
      <div>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
            Portail OBANSSI
          </a>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Rechercher"
            aria-label="Search"
          />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#" onClick={this.logout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> &nbsp;Déconnexion
              </a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#"
                      onClick={() => this.toggleShowContent(0)}
                    >
                      <FontAwesomeIcon icon={faChalkboard} />
                      &nbsp; Tableau de Bord{" "}
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => this.toggleShowContent(1)}
                    >
                      <FontAwesomeIcon icon={faBox} />
                      &nbsp; Compte Bancaire
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => this.toggleShowContent(2)}
                    >
                      <FontAwesomeIcon icon={faArchive} />
                      &nbsp; Transactions
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              {this.state.whatRender === 0 ? (
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <React.Fragment>
                    <h1 className="h2">Tableau de bord</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary dropdown-toggle"
                      >
                        <FontAwesomeIcon icon={faCalendar} /> &nbsp; Cette
                        semaine
                      </button>
                    </div>
                  </React.Fragment>
                </div>
              ) : null}

              {this.state.whatRender === 1 ? (
                <Compte comptes={comptes} delete={this.props.deleteCompte} />
              ) : null}
              {this.state.whatRender === 2 ? (
                <Transaction
                  transactions={transactions}
                  delete={this.props.deleteTransaction}
                />
              ) : null}
            </main>
            <div className="fixed-bottom">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propType = {
  compte: PropTypes.object.isRequired,
  getComptes: PropTypes.func.isRequired,
  getCompte: PropTypes.func.isRequired,
  deleteCompte: PropTypes.func.isRequired,
  transaction: PropTypes.object.isRequired,
  getTransactions: PropTypes.func.isRequired,
  getTransaction: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  compte: state.compte,
  transaction: state.transaction
});

export default connect(mapStateToProps, {
  getComptes,
  getCompte,
  deleteCompte,
  getTransactions,
  getTransaction,
  deleteTransaction
})(Home);
