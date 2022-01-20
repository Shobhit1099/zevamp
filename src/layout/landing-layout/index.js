import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { LandingViews } from "../../views/landing-views";

export const LandingLayout = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={LandingViews} />
      </Switch>
    </div>
  );
};

export default LandingLayout;
