import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./containers/Home/Home";
import Shop from "./containers/Shop/Shop";
import Login from "./containers/Login/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (

      <Router>
      <Navbar/>
      <h1>Hi: USER</h1>
        <Switch>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>

  );
}

export default App;
