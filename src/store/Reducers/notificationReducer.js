const initState = {
  notifys: [],
};

const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_NOTIFICATION_LIST":
      return action.payload;

    case "ADD_NOTIFICATION_SUCCESS":
      console.log("success in adding notification");
      return state;

    case "ADD_NOTIFICATION_ERROR":
      console.log("error in adding notification");
      return state;

    default:
      return state;
  }
};

export default notificationReducer;
