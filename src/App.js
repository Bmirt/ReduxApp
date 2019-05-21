import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Todos from "./components/Todos";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="*" component={Header} />
        <Route exact path="/" component={Categories} />
        <Route path="/:post_id" component={Todos} />
        <Route path="*" component={Footer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
