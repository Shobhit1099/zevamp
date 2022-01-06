import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Landing from "./landing";

export const Views = () => {
  return (
    <Suspense fallback={<Landing/>}>
      <Switch>
        <Route path={`/home`} component={lazy(() => import("./home"))} />
        <Route path={`/audio-box`} component={lazy(() => import("./audioBox"))} />
        <Route exact path={`/`} component={lazy(() => import("./landing"))} />
        <Redirect from={`/`} to={`/`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(Views);
