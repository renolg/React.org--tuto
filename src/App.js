import React from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Pages/Home";
import Games from "./components/Pages/Games.js";
import inGame from "./components/Pages/InGame.js";
import { Ad } from "./components/subcomponents/Ad.js";
import { Chat } from "./components/subcomponents/Chat.js";
import { Grid, Paper } from "@material-ui/core/";
import NavBar from "./components/subcomponents/Navbar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/games" component={Games} />
          <Route path="/ingame" component={inGame} />
          {/* <Route path="/about" component={About} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/log-in" component={LogIn} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
