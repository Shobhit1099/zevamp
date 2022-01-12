import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./home";

export const AppViews = () => {
  return (
    <Suspense fallback={<Home/>}>
      <Switch>
        <Route path={`/app/home`} component={lazy(() => import("./home"))} />
        <Route path={`/app/audio-box`} component={lazy(() => import("./audioBox"))} />
        <Route path={`/app/settings`} component={lazy(() => import("./settings"))} />
        <Route path={`/app/meeting-feedback`} component={lazy(() => import("./feedback"))} />
        <Redirect from={`/app`} to={`/app/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
