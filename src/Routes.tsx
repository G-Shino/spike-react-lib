import * as React from "react";
import { Switch } from "react-router";
import { Link, Route } from "react-router-dom";
import { Sample } from "./Sample";
import { CSSTransitionByStyledComponent1 } from "./CssTransitionExample/ByStyledComponent1";
import { CSSTransitionByStyledComponent2 } from "./CssTransitionExample/ByStyledComponent2";

export const Routes: React.FC<any> = (props) => {
  return (
    <div>
      <h1>Test Video</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sample">Sample</Link>
        </li>
        <li>
          <Link to="/css-transition-by-styled-component1">
            CssTransitionByStyledComponent1
          </Link>
        </li>
        <li>
          <Link to="/css-transition-by-styled-component2">
            CssTransitionByStyledComponent2
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/sample" component={Sample} />
        <Route
          exact
          path="/css-transition-by-styled-component1"
          component={CSSTransitionByStyledComponent1}
        />
        <Route
          exact
          path="/css-transition-by-styled-component2"
          component={CSSTransitionByStyledComponent2}
        />
      </Switch>
    </div>
  );
};
