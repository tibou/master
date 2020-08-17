import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faEdit,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Compte(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const comptes = props.comptes;

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Comptes bancaires</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={handleShow}
          >
            <FontAwesomeIcon icon={faPlusCircle} /> &nbsp; Créer un compte
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>No</th>
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
                  <td>{index + 1}</td>
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
          <Modal.Title>Création d'un compte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formIntitule">
              <Form.Label>Intitulé</Form.Label>
              <Form.Control type="intitule" placeholder="Enter l'intitulé" />
              <Form.Text className="text-muted">
                L'intitulé est le libellé du compte.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="nom" placeholder="Votre nom" />
            </Form.Group>

            <Form.Group controlId="formPrenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="prenom" placeholder="Votre prénom" />
            </Form.Group>

            <Form.Group controlId="formBanque">
              <Form.Label>Banque</Form.Label>
              <Form.Control type="text" placeholder="Votre banque" />
            </Form.Group>

            <Form.Group controlId="formTelephone">
              <Form.Label>Telehpone</Form.Label>
              <Form.Control type="text" placeholder="Votre numéro" />
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

export default Compte;
