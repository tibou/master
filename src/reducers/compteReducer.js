// On importe les types d'action
import { GET_COMPTES, DELETE_COMPTE, GET_COMPTE } from "../actions/types";

// Le state initial
const initialState = {
  comptes: [],
  compte: {}
};

// Le reducer qui gère les actions sur les comptes
const compteReducer = (state = initialState, action) => {
  switch (action.type) {
    // Cas où on récupère tous les comptes du serveur
    case GET_COMPTES:
      // On retourne le state courant et les données récupérées
      return {
        ...state,
        comptes: action.payload
      };
    // Cas où on récupère un seul compte
    case GET_COMPTE:
      // On retourne le state courant et le compte récupéré
      return {
        ...state,
        compte: action.payload
      };
    // Cas où on supprime un compte du serveur
    // Ce type d'action est dispatché pour mettre à jour le state en vue de faire disparaitre le compte supprimé
    case DELETE_COMPTE:
      // On retourne le state courant et les comptes excepté le compte supprimé
      return {
        ...state,
        comptes: state.comptes.filter(compte => compte.id !== action.payload)
      };
    default:
      return state;
  }
};

export default compteReducer;
