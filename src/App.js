import React from "react";

import "./styles.css";
import TopMenu from "./components/TopMenu";
import Products from "./components/Pages/Products"

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
  const Home = () => {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  };


  return (
    <div className="App">
      <Router>
        <TopMenu />
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
