import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Product from "./containers/Product";
import Recipe from "./containers/Recipe"
import Login from "./containers/Login";
import AppliedRoute from "./containers/AppliedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} /> />
    <AppliedRoute path="/products" exact component={Product} props={childProps} />
    <AppliedRoute path="/recipes" exact component={Recipe} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />

    <Route component={NotFound} />
  </Switch>;