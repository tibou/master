// On importe les types d'action
import {
  GET_ERRORS,
  GET_COMPTE,
  GET_COMPTES,
  DELETE_COMPTE,
  API_BASE_URL
} from "./types";

// Cette action permet de créer un compte sur le serveur
export const addCompte = (compte, history) => async dispatch => {
  try {
    dispatch([
      {
        type: GET_COMPTES,
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
export const getComptes = () => async dispatch => {
  // On met à jour le state pour permettre l'affichage des données
  dispatch({
    type: GET_COMPTES,
    payload: res.data
  });
};

// Cette action permet de supprimer un compte  du serveur
export const deleteCompte = compte_id => async dispatch => {
  try {
    // On demande la confirmation avant suppression
    if (
      window.confirm(
        `Vous supprimez le compte ${compte_id},  Cette action est irréversible`
      )
    ) {
      // On lance la mise à jour du state
      dispatch([
        {
          type: DELETE_COMPTE,
          payload: compte_id
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
export const getCompte = (compte_id, history) => async dispatch => {
  try {
    // On lance la mise à jour du state
    dispatch({
      type: GET_COMPTE,
      payload: res.data
    });
  } catch (error) {
    // En cas d'erreur on fait juste la redirection
    history.push("/home");
  }
};
