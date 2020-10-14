const initState = {
  todos: []
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;

    case "FINISH_TODO_SUCCESS":
      console.log("finished todo successfully");
      return state;

    case "FINISH_TODO_ERROR":
      console.log("error in finishing todo");
      return state;

    case "ADD_TODO_SUCCESS":
      console.log("successfully added to do");
      return state;

    case "ADD_TODO_ERROR":
      console.log("error in adding todo");
      return state;

    case "DELETE_TODO_SUCCESS":
      console.log("todo deleted successfully");
      return state;

    case "DELETE_TODO_ERROR":
      console.log("error deleting todo");
      return state;

    default:
      return state;
  }
};

export default todoReducer;
