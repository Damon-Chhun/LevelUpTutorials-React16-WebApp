import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MoviesDetail extends Component {
state = {
  movie: []
}
async componentDidMount() {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=a43cccf48122a6ee7a6489ec15ce92da&language=en-US`);
    const movie = await res.json();
    this.setState({
      movie,
    })
  } catch(e) {
    console.log(e);
  }
}
  render() {
      const {movie} = this.state
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <img src ={`${BACKDROP_PATH}${movie.poster_path}`} alt = {movie.title} />
      <img src ={`${POSTER_PATH}${movie.poster_path}`} alt = {movie.title} />
      <h1>{this.state.movie.title}</h1>
      <h2>{this.state.movie.release_date}</h2>
      <p>{this.state.movie.overview}</p>
    </div>
  );
}
};

export default MoviesDetail;
