import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "components/home";
import StorePage from "components/store";
import Layout from "components/layout"
import NotFound from "components/404";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/store" component={StorePage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}