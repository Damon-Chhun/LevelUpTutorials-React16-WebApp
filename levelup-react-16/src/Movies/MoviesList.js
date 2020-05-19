import React, { Component } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMovies } from "./actions";

class MoviesList extends Component {
  componentDidMount() {
    const { getMovies, isLoaded } = this.props;
    if (!isLoaded) {
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
  isLoaded: state.movies.moviesLoaded
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
