import React, { Component } from "react";
import { Poster } from "./Movie";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMovie, resetMovie } from "./actions";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetail extends Component {
  componentDidMount() {
    const { getMovie, match } = this.props;

    getMovie(match.params.id);
  }

  componentWillUnmount() {
    this.props.resetMovie();
  }

  render() {
    const { movie } = this.props;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.poster_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
            />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h2>{movie.release_date}</h2>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie,
  isLoaded: state.movies.movieLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovie,
      resetMovie
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
