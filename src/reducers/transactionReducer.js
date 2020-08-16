// On importe les types d'action
import {
  GET_TRANSACTIONS,
  DELETE_TRANSACTION,
  GET_TRANSACTION
} from "../actions/types";

// Le state initial
const initialState = {
  transactions: [],
  transaction: {}
};

// Le reducer qui gère les actions sur les comptes
const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    // Cas où on récupère toutes les transactions du serveur
    case GET_TRANSACTIONS:
      // On retourne le state courant et les données récupérées
      return {
        ...state,
        transactions: action.payload
      };
    // Cas où on récupère une seule transaction
    case GET_TRANSACTION:
      // On retourne le state courant et la transaction récupérée
      return {
        ...state,
        transaction: action.payload
      };
    // Cas où on supprime une transaction du serveur
    // Ce type d'action est dispatché pour mettre à jour le state en vue de faire disparaitre la transaction supprimée
    case DELETE_TRANSACTION:
      // On retourne le state courant et les transactions excepté la transaction supprimée
      return {
        ...state,
        transactions: state.transactions.filter(tr => tr.id !== action.payload)
      };
    default:
      return state;
  }
};

export default transactionReducer;
