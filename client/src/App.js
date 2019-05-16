import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Day from "./pages/Day";
import Week from "./pages/Week";
// import Week from "./pages/Week";
// import User from "./pages/User";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        {/* <Route exact path="/user" component={User} /> */}
        <Route exact path="/day" component={Day} />
        <Route exact path="/week" component={Week} />
        {/* <Route component={User} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
