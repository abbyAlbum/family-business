const initState = {
    todos: [
    { id: 1, content: "make stuff up", exe: "eyal", private: "" },
    { id: 2, content: "buy things", exe: "family", private: "" },
    { id: 3, content: "buy games", exe: "family", private: "" }
  ]
};

const todoReducer = (state = initState, action) => {
    return state;
}

export default todoReducer;
