import React from "react";
import {
  Route,
  BrowserRouter as Routesr,
  Switch,
  HashRouter
} from "react-router-dom";




import LoginScreen from "./screen/loginscreen/LoginScreen";
import HomeScreen from  "./screen/homescreen/HomeScreen"

const routes = () => (
  <Routesr>
    <Switch>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/home" component={HomeScreen} />
      <Route  render={() => <h1>404 Error</h1>} />
    </Switch>
  </Routesr>
);

export default routes;