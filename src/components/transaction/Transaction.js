import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faEdit,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Transaction(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const transactions = props.transactions;

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Transactions</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={handleShow}
          >
            <FontAwesomeIcon icon={faPlusCircle} /> &nbsp; Créer une transaction
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
                      onClick={() => props.delete(value.id)}
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Création d'une transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control type="type" placeholder="Enter le type" />
              <Form.Text className="text-muted">
                C'est le type d'opération.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formSource">
              <Form.Label>Source</Form.Label>
              <Form.Control type="source" placeholder="Source" />
            </Form.Group>

            <Form.Group controlId="formDestination">
              <Form.Label>Destination</Form.Label>
              <Form.Control type="destination" placeholder="Destination" />
            </Form.Group>

            <Form.Group controlId="formMontant">
              <Form.Label>Montant</Form.Label>
              <Form.Control
                type="text"
                placeholder="Montant"
                onKeyPress="return isNumber(event)"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Abandonner
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Soumettre
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Transaction;
