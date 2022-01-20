import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Landing from "./landing";

export const LandingViews = () => {
  return (
    <Suspense fallback={<Landing/>}>
      <Switch>
        <Route exact path={`/`} component={lazy(() => import("./landing"))} />
        <Redirect from={`/`} to={`/`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(LandingViews);
