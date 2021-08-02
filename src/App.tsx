import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Redux } from "@/pages/Redux/index";
import { Recoil } from "@/pages/Recoil/index";
import { SuspensePage } from "@/pages/Suspense/index";
import store from "./pages/Redux/store/index";
import { Provider as ReduxProvider } from "react-redux";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {<Redirect to="/redux" />}
        </Route>
        {/* redux検証用 */}
        <ReduxProvider store={store}>
          <RecoilRoot>
            <Route exact path="/redux" component={Redux} />

            {/* recoil検証用 */}
            <Route exact path="/recoil" component={Recoil} />
            {/* suspense検証用 */}
            <Route exact path="/suspense" component={SuspensePage} />
          </RecoilRoot>
        </ReduxProvider>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
