import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Product from "./containers/Product";
import Recipe from "./containers/Recipe"

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/products" exact component={Product} />
    <Route path="/recipes" exact component={Recipe} />
    <Route component={NotFound} />
  </Switch>;