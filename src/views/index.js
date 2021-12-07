import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./home";

export const Views = () => {
  return (
    <Suspense fallback={<Home/>}>
      <Switch>
        <Route path={`/home`} component={lazy(() => import("./home"))} />
        <Route path={`/audio-box`} component={lazy(() => import("./audioBox"))} />
        <Route exact path={`/`} component={lazy(() => import("./home"))} />
        <Redirect from={`/`} to={`/`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(Views);
