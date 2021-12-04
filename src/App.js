import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Views from "./views";
import Home from "./views/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Views}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
