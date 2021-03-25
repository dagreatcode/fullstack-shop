import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Shop from "./containers/Shop/Shop";
import Login from "./containers/Login/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/fullstack-shop" component={Login} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
