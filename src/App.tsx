import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { SiteComponents } from "@/pages/Site/index";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {<Redirect to="/sites" />}
        </Route>
        <Route exact path="/sites" component={SiteComponents} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
