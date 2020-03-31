import React from "react";
import Index from "./pages/index";
import About from "./pages/about";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/About">
            <About />
          </Route>

          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
