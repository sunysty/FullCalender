import React from "react";
import { Route, Switch } from "react-router-dom";


// import { ConnectRouter } from "connected-react-router";
// import { history } from "../redux/configStore.js";

import Calender from "../page/Calender";
import Create from "../page/Create";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Calender} />
      <Route path="/create" exact component={Create} />
    </Switch>
  );
}

export default App;
