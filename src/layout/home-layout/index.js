import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { HomeViews } from "../../views/home-views";

export const HomeLayout = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" component={HomeViews} />
      </Switch>
    </div>
  );
};

export default HomeLayout;
