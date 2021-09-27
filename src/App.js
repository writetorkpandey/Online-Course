import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Admin/Dashboard";
import StudentList from "./Components/Admin/StudentList";
import StudentRegister from "./Components/Admin/StudentRegister";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/studentlist">
            <StudentList></StudentList>
          </Route>
          <Route path="/newstudent">
            <StudentRegister></StudentRegister>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
