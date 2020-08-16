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
  // On fail un appel rest
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    body: compte,
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
  //On récupère à nouveau toute la liste
  const response = await fetch(API_BASE_URL);
  const res = await response.json();
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
      const response = await fetch(`${API_BASE_URL}/${compte_id}`, {
        method: "DELETE"
      });
      // On lance la mise à jour du state
      dispatch([
        {
          type: DELETE_COMPTE,
          payload: compte_id
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
  //On récupère un élément
  const response = await fetch(`${API_BASE_URL}/${compte_id}`);
  const res = await response.json();
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
