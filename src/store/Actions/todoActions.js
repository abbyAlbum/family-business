import { actionBegin } from "@syncfusion/ej2-react-schedule";
import { auth } from "firebase";

export const finishTodo = (todo) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collections("todos")
      .doc(todo.id)
      .set({ done: true })
      .then(() => {
        dispatch({ type: "FINISH_TODO_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "FINISH_TODO_ERROR", err });
      });
  };
};

export const addTodo = (content) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("todos")
      .add({
        content: content,
        done: false,
        exe: "",
        private: false,
      })
      .then(() => {
        dispatch({ type: "ADD_TODO_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "ADD_TODO_ERROR" });
      });
  };
};
