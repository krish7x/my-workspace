import React, { useReducer } from "react";
import { reducer } from "../redux/reducer";
import { initialState } from "../redux/store";

const SimpleReduxExample: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        Sub
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Add
      </button>
    </>
  );
};

export default SimpleReduxExample;
