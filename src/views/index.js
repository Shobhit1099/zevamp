import { useContext, React } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppLayout from "../layout/app-layout";
import LandingLayout from "../layout/landing-layout";
import { AuthContext } from "../Context/AuthContext";

export const Views = (props) => {
  const { auth, setAuth, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);
  //console.log("AUTH: ", auth, " IS AUTHENTICATED: ", isAuthenticated);
  return (
    <Switch>
      <Route path="/app" key={1}>
        {isAuthenticated ? <AppLayout /> : <LandingLayout />}
      </Route>
      <Route path={"/"} key={2}>
        <LandingLayout />
      </Route>
    </Switch>
  );
};

export default Views;
