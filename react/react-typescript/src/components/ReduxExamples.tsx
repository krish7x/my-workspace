import React, { useReducer } from "react";
import { TodoReducer } from "../redux/reducer";

const ReduxExamples: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <div>
      <h1>{JSON.stringify(todos)}</h1>
      <button
        onClick={() => {
          dispatch({ type: "add", text: "Krishna", complete: true });
        }}>
        Add
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "remove",
            index: todos.length - 1,
          });
        }}>
        Remove
      </button>
    </div>
  );
};

export default ReduxExamples;
