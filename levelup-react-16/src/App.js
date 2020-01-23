import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'


class App extends Component {
state = {
  movies: []
}

async componentDidMount() {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a43cccf48122a6ee7a6489ec15ce92da&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    `);
    const movies = await res.json();
    this.setState({
      movies: movies.results
    })
  } catch(e) {
    console.log(e);
  }
}
  render() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Route path="/test" component={test} />
      {this.state.movies.map(movie => <Movie movie={movie} key = {movie.id}/>)}
    </div>
    </Router>
  );
}
};

const test = () => (
  <h1>TEST</h1>
);



export default App;
