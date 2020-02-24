import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MoviesList from "./MoviesList";
import MoviesDetail from "./MovieDetail";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, {}, composeWithDevTools());

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route path="/:id" component={MoviesDetail} />
          <Route exact={true} path="/" component={MoviesList} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
