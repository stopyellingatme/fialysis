"use strict";
import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import FuelSavingsPage from "../containers/FuelSavingsPage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/fuel-savings" component={FuelSavingsPage} />
    <Route path="/about" component={AboutPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
