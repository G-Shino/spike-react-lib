import * as React from "react";
import { Switch } from "react-router";
import { Link, Route } from "react-router-dom";
import { Sample } from "./Sample";
import { CSSTransitionByStyledComponent1 } from "./CssTransitionExample/ByStyledComponent1";
import { CSSTransitionByStyledComponent2 } from "./CssTransitionExample/ByStyledComponent2";
import { CssTransitionByReactTransitionGroup1 } from "./CssTransitionExample/ByReactTransitionGroup1";
import { CssTransitionByReactTransitionGroup2 } from "./CssTransitionExample/ByReactTransitionGroup2";
import { CssTransitionTry1 } from "./CssTransitionExample/Try1";
import { CssTransitionByReactSpring1 } from "./CssTransitionExample/ByReactSpring1";
import { CssTransitionByReactSpring2 } from "./CssTransitionExample/ByReactSpring2";
import { CssTransitionByReactSpring3 } from "./CssTransitionExample/ByReactSpring3";
import { CssTransitionByReactSpring4 } from "./CssTransitionExample/ByReactSpring4";
import { CssTransitionByReactSpring5 } from "./CssTransitionExample/ByReactSpring5";
import { ReactGestureSimpleExample } from "./ReactGesture/SimpleExanple";
import { ReactGestureMoveList } from "./ReactGesture/MoveList";

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
            StyledComponent1
          </Link>
        </li>
        <li>
          <Link to="/css-transition-by-styled-component2">
            ByStyledComponent2
          </Link>
        </li>
        <li>
          <Link to="/css-transition-by-react-transition-group1">
            ByReactTransitionGroup1
          </Link>
        </li>
        <li>
          <Link to="/css-transition-by-react-transition-group2">
            ByReactTransitionGroup2
          </Link>
        </li>
        <li>
          <Link to="/css-transition-by-react-spring1">
            ByReactSpring1 useSpring
          </Link>
        </li>
        <li>
          <Link to="/css-transition-by-react-spring2">
            ByReactSpring2 useSpring
          </Link>
        </li>
        <li>
          <Link to="/css-transition-by-react-spring3">
            ByReactSpring3 useSprings
          </Link>
        </li>
        <li>
          <Link to="/css-transition-by-react-spring4">
            ByReactSpring4 useTrail
          </Link>
        </li>
        <li>
          <Link to="/css-transition-by-react-spring5">
            ByReactSpring5 useSprings
          </Link>
        </li>
        <li>
          <Link to="/css-transition-try-1">Try1</Link>
        </li>
      </ul>
      <hr />
      <h2>React Gesture</h2>
      <ul>
        <li>
          <Link to="react-gesture-simple-example">SimpleExanple</Link>
        </li>
        <li>
          <Link to="react-gesture-move-list">MoveList</Link>
        </li>
      </ul>
      <hr />
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
        <Route
          exact
          path="/css-transition-try-1"
          component={CssTransitionTry1}
        />
        <Route
          exact
          path="/css-transition-by-react-spring1"
          component={CssTransitionByReactSpring1}
        />
        <Route
          exact
          path="/css-transition-by-react-spring2"
          component={CssTransitionByReactSpring2}
        />
        <Route
          exact
          path="/css-transition-by-react-spring3"
          component={CssTransitionByReactSpring3}
        />
        <Route
          exact
          path="/css-transition-by-react-spring4"
          component={CssTransitionByReactSpring4}
        />
        <Route
          exact
          path="/css-transition-by-react-spring5"
          component={CssTransitionByReactSpring5}
        />
        <Route
          exact
          path="/react-gesture-simple-example"
          component={ReactGestureSimpleExample}
        />
        <Route
          exact
          path="/react-gesture-move-list"
          component={ReactGestureMoveList}
        />
      </Switch>
    </div>
  );
};
