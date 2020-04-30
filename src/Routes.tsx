import * as React from "react";
import { Switch } from "react-router";
import { Link, Route } from "react-router-dom";
import { Sample } from "./Sample";
import { CSSTransitionByStyledComponent1 } from "./CssTransitionExample/ByStyledComponent1";
import { CSSTransitionByStyledComponent2 } from "./CssTransitionExample/ByStyledComponent2";
import { CssTransitionByReactTransitionGroup1 } from "./CssTransitionExample/ByReactTransitionGroup1";
import { CssTransitionByReactTransitionGroup2 } from "./CssTransitionExample/ByReactTransitionGroup2";

export const Routes: React.FC<any> = (props) => {
  return (
    <div>
      <h1>Spike React Lib</h1>
      <h2>Basic</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sample">Sample</Link>
        </li>
      </ul>
      <hr />
      <h2>Css Transition</h2>
      <ul>
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
        <li>
          <Link to="/css-transition-by-react-transition-group1">
            CssTransitionByReactTransitionGroup1
          </Link>
        </li>
        <li>
          <Link to="/css-transition-by-react-transition-group2">
            CssTransitionByReactTransitionGroup2
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
        <Route
          exact
          path="/css-transition-by-react-transition-group1"
          component={CssTransitionByReactTransitionGroup1}
        />
        <Route
          exact
          path="/css-transition-by-react-transition-group2"
          component={CssTransitionByReactTransitionGroup2}
        />
      </Switch>
    </div>
  );
};
