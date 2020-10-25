export const finishTodo = (todo) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("todos")
      .doc(todo.id)
      .set({ ...todo, done: true })
      .then(() => {
        dispatch({ type: "FINISH_TODO_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "FINISH_TODO_ERROR", err });
      });
  };
};

export const deleteTodo = (todo) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("todos")
      .doc(todo.id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_TODO_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_TODO_ERROR", err });
      });
  };
};

export const addTodo = (content) => {
  return (dispatch, getState, { getFirestore }) => {
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
        dispatch({ type: "ADD_TODO_ERROR", err });
      });
  };
};
