import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./home";

export const HomeViews = () => {
  return (
    <Suspense fallback={<Home/>}>
      <Switch>
        <Route exact path={`/home`} component={lazy(() => import("./home"))} />
        <Redirect from={`/`} to={`/`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(HomeViews);
