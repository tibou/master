// On importe combineReducers
import { combineReducers } from "redux";

// On importe les reducers
import errorReducer from "./errorReducer";
import compteReducer from "./compteReducer";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  errors: errorReducer,
  compte: compteReducer,
  transaction: transactionReducer
});
