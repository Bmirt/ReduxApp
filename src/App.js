import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/:post_id" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
