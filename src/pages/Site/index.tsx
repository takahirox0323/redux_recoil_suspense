import React, { useReducer } from "react";
import { useReduceContentEditor } from "./domain";

//useReducerを使用

export const SiteComponents: React.FC = () => {
  const { content, contentDispatch } = useReduceContentEditor();

  return (
    <>
      {content}
      <h1>fafasf</h1>
      <button onClick={() => contentDispatch({ type: "increment" })}>+</button>
      <button onClick={() => contentDispatch({ type: "decrement" })}>-</button>
    </>
  );
};
