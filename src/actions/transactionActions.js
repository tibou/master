// On importe les types d'action
import {
  GET_ERRORS,
  GET_TRANSACTION,
  GET_TRANSACTIONS,
  DELETE_TRANSACTION,
  API_BASE_URL
} from "./types";

// Cette action permet de créer un compte sur le serveur
export const addTransaction = (transaction, history) => async dispatch => {
  // On fail un appel rest
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    body: transaction,
    headers: {
      "Content-Type": "application/json"
    }
  });
  const rdata = await response.json();

  //On récupère à nouveau toute la liste
  const response2 = await fetch(API_BASE_URL);
  const res = await response2.json();

  try {
    dispatch([
      {
        type: GET_TRANSACTIONS,
        payload: res.data
      },
      {
        type: GET_ERRORS,
        payload: {}
      }
    ]);
  } catch (error) {
    // En cas d'erreur, on dispatche GET_ERRORS avec les erreurs venues du serveur pour mettre à jour le state
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

// Cette action permet de récupérer tous les comptes de l'utilisateur du serveur
export const getTransactions = () => async dispatch => {
  //On récupère à nouveau toute la liste
  /* const response = await fetch(API_BASE_URL);
  const res = await response.json(); */
  //On définit un dummy data
  const data = [
    {
      type: "DEBIT",
      source: "08964452272281",
      destination: "Lui-même",
      montant: 100000,
      date: new Date()
    },
    {
      type: "CREDIT",
      source: "Lui-même",
      destination: "08964452272281",
      montant: 200000,
      date: new Date()
    },
    {
      type: "TRANSFERT",
      source: "08964452272281",
      destination: "05674509876252",
      montant: 50000,
      date: new Date()
    }
  ];
  // On met à jour le state pour permettre l'affichage des données
  dispatch({
    type: GET_TRANSACTIONS,
    payload: data
  });
};

// Cette action permet de supprimer un compte  du serveur
export const deleteTransaction = t_id => async dispatch => {
  const res = null;
  try {
    // On demande la confirmation avant suppression
    if (
      window.confirm(
        `Vous supprimez la transaction ${t_id},  Cette action est irréversible`
      )
    ) {
      const response = await fetch(`${API_BASE_URL}/${t_id}`, {
        method: "DELETE"
      });
      // On lance la mise à jour du state
      dispatch([
        {
          type: DELETE_TRANSACTION,
          payload: t_id
        },
        {
          type: GET_ERRORS,
          payload: res.data
        }
      ]);
    }
  } catch (error) {
    // En cas d'erreur, on dispatche GET_ERRORS avec les erreurs venues du serveur pour mettre à jour le state
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

// // Cette action permet de récupérer un compte
export const getTransaction = (t_id, history) => async dispatch => {
  //On récupère un élément
  const response = await fetch(`${API_BASE_URL}/${t_id}`);
  const res = await response.json();
  try {
    // On lance la mise à jour du state
    dispatch({
      type: GET_TRANSACTION,
      payload: res.data
    });
  } catch (error) {
    // En cas d'erreur on fait juste la redirection
    history.push("/home");
  }
};
