import React, { Component } from 'react';
import Movie from './Movie'

class MoviesList extends Component {
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
    <div className="App">
      <header className="App-header">
      </header>
      {this.state.movies.map(movie => <Movie movie={movie} key = {movie.id}/>)}
    </div>
  );
}
};

export default MoviesList;
