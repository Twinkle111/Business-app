import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../App";
import {
  BUSINESS_DETAILS_ROUTE,
  BUSINESS_LIST_ROUTE as HOME_PAGE_ROUTE,
} from "../Constant";
import BusinessDetails from "./BusinessDetails";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} component={App} />
        <Route path={BUSINESS_DETAILS_ROUTE} component={BusinessDetails} />
      </Switch>
    </Router>
  );
}
