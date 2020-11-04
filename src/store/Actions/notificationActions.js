export const addNotification = (notify) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notifications")
      .add({
        content: notify,
      })
      .then(() => {
        dispatch({ type: "ADD_NOTIFICATION_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "ADD_NOTIFICATION_ERROR", err });
      });
  };
};
