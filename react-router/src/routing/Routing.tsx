import React from "react";
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AboutPage from "../components/about/AboutPage";
import Details from "../components/details/Details";
import MainPage from "../components/main_page/MainPage";
import NotFound from "../components/not_found/NotFound";
import '../style.css';

export default function Routing(): JSX.Element {
  const location = useLocation()
  return <div>
    <TransitionGroup>
      <CSSTransition
        timeout={300}
        classNames="dialog"
        key={location.pathname}
      >
        <Switch>
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/details/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
}