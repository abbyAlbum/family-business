export const addNotification = (content) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notifications")
      .add({
        content: content,
      })
      .then(() => {
        dispatch({ type: "ADD_NOTIFICATION_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "ADD_NOTIFICATION_ERROR", err });
      });
  };
};
