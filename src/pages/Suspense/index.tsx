import React, { Suspense, FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchdata } from "@/apis";
import { Fetcher } from "@/apis/fetcher";

export const SuspensePage: React.FC = () => {
  const history = useHistory();
  const [usersFetcher, setUsersFetcher] = useState<Fetcher<any>>();

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <h1 onClick={() => history.push("redux")}>reduxページ</h1>
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
