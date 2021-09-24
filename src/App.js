import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Components/Admin/Header";
import Menu from "./Components/Admin/Menu";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
    </div>
  );
}

export default App;
