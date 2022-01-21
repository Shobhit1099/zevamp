import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppLayout from "../layout/app-layout";
import LandingLayout from "../layout/landing-layout";

export const Views = (props) => {
  return (
    <Switch>
      <Route path="/app">
        <AppLayout />
      </Route>
      <Route path={"/"}>
        <LandingLayout />
      </Route>
    </Switch>
  );
};

export default Views;
