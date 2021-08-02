import React, { useReducer, lazy, Suspense } from "react";
import { useReduceContentEditor } from "./domain";
import { fetchdata } from "@/apis";
import { useSelector, useDispatch } from "react-redux";
import { addCount } from "@/pages/Redux/store/user";
import { RootState } from "@/types/index";
import { useHistory } from "react-router-dom";

export const Redux: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { content, contentDispatch } = useReduceContentEditor();
  const isSignedIn = useSelector(
    (state: RootState) => state.userReducer.user.point
  );

  const handle = () => {
    dispatch(addCount());
  };

  return (
    <>
      <h1 onClick={() => history.push("recoil")}>recoilページ</h1>
      <h1 onClick={() => history.push("suspense")}>suspenseページ</h1>
      {content.counter}
      {isSignedIn}
      <h1 className="bg-green-400">fafasf</h1>
      <button className="bg-green-400" onClick={() => handle()}>
        +
      </button>
      <button onClick={() => contentDispatch({ type: "decrement" })}>-</button>

      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </>
  );
};
