import todoReducer from "./todoReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import carReducer from "./carReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  auth: authReducer,
  cars: carReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
