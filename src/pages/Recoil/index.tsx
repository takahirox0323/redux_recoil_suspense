import React, {
  useReducer,
  lazy,
  Suspense,
  FunctionComponent,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { fetchdata } from "@/apis";
import { Fetcher } from "@/apis/fetcher";

export const Recoil: React.FC = () => {
  const history = useHistory();
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);
  const [usersFetcher, setUsersFetcher] = useState<Fetcher<any>>();

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <h1 onClick={() => history.push("redux")}>reduxページ</h1>
        <input type="text" value={text} onChange={onChange} />
        <p>
          selector: {count} Echo: {text}
        </p>
        <button
          onClick={() => {
            setUsersFetcher(new Fetcher(fetchdata));
          }}
        >
          Load Users
        </button>
        {usersFetcher ? <UserList usersFetcher={usersFetcher} /> : null}
      </Suspense>
    </>
  );
};

const UserList: FunctionComponent<{
  usersFetcher: Fetcher<any>;
}> = ({ usersFetcher }) => {
  const users = usersFetcher.get();
  return <ul>{users.data[0].name}</ul>;
};

///recoile
const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
const getData = selector({
  key: "getState", // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    const test = await fetchdata();

    return test;
  },
});
