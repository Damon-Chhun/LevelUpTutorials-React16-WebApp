import React, { Component } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMovies } from "./actions";

class MoviesList extends Component {
  componentDidMount() {
    const oneHour = 60 * 60 * 1000;
    const { getMovies, isLoaded, moviesLoadedAt } = this.props;
    if (!isLoaded || new Date() - new Date(moviesLoadedAt) > oneHour) {
      getMovies();
    }
  }
  render() {
    const { movies } = this.props;
    return (
      <MovieGrid>
        {movies.map(movie => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </MovieGrid>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  moviesLoadedAt: state.movies.moviesLoadedAt
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
`;
