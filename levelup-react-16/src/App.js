import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MoviesList from "./Movies/MoviesList";
import MoviesDetail from "./Movies/MovieDetail";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import Toggle from "./Toggle/Toggle";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route path="/:id" component={MoviesDetail} />
          <Route exact={true} path="/" component={MoviesList} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
