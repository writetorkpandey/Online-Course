import React from "react";
import Header from "./Components/Admin/Header";
import Menu from "./Components/Admin/Menu";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Menu></Menu>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
