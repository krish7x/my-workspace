import { Actions } from "./actions";

interface Data {
  text: string;
  complete: boolean;
}

type State = Data[];

export const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        { text: action.text, complete: action.complete || false },
      ];
    }
    case "remove": {
      return state.filter((_, i) => action.index !== i);
    }
    default: {
      return state;
    }
  }
};
