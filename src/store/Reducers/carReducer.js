const initState = {
  todos: [],
};

const carReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CAR_LIST":
      return action.payload;

    case "ADD_CAR_DAY_SUCCESS":
      console.log("success in adding car day");
      return state;

    case "ADD_CAR_DAY_ERROR":
      console.log("error in adding car day");
      return state;

    default:
      return state;
  }
};

export default carReducer;
