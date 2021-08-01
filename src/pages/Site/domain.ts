import React, { useReducer } from "react";

export const useReduceContentEditor = () => {
  const initialState = { num: 0 };
  const contentsEditor = (state, action) => {
    switch (action.type) {
      case "decrement":
        return { ...state, num: state.num - 1 };
      case "increment":
        return { ...state, num: state.num + 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(contentsEditor, initialState);

  return { content: state, contentDispatch: dispatch };
};
