import * as React from "react";
import { Switch } from "react-router";
import { Link, Route } from "react-router-dom";
import { Sample } from "./sample";

export const Routes: React.FC<any> = (props) => {
  return (
    <div>
      <h1>Test Video</h1>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sample">Sample</Link>
      </li>
      <Switch>
        <Route exact path="/sample" component={Sample} />
      </Switch>
    </div>
  );
};
