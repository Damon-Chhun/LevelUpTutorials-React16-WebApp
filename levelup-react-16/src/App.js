import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList'


const App = () => (
    <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
      <Route path="/:id" component={test} />
      <Route exact ={true} path="/" component ={MoviesList} />
      </Switch>
    </div>
    </Router>
)

const test = ({ match }) => (
  <h1>{match.params.id}</h1>
);



export default App;
