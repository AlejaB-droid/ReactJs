import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function APP() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/gallery" exact><Gallery /></Route>
          <Route path="/about" exact><About /></Route>
        </Switch>
      </Router>

      <footer>Pequeño footer</footer>
    </>
  );
}
