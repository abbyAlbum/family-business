const initState = {
    todos: [
    { id: 1, content: "make stuff up", exe: "eyal", private: "" },
    { id: 2, content: "buy things", exe: "family", private: "" },
    { id: 3, content: "buy games", exe: "family", private: "" }
  ]
};

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FINISH_TODO_SUCCESS':
            console.log('finished todo successfully')
            return state;
        case 'FINISH_TODO_ERROR':
            console.log('error in finishing todo')
            return state;
        default:
            return state;
    }
}

export default todoReducer;
