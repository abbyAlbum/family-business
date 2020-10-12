import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../store/Actions/todoActions";

function AddTodo({ todos, addTodo }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    setValue("");
    addTodo(value);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleOnChange}
        value={value}
        placeholder="You text here"
      />
      <button onClick={handleAdd}>Add Todo</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todos) => dispatch(addTodo(todos)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
