import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Todos from "./containers/Todos";
import Categories from "./containers/Categories";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/:post_id" component={Todos} />
          <Route exact path="/" component={Categories} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
