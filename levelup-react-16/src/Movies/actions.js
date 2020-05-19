export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";
export const RESET_MOVIE = "RESET_MOVIE";

export function getMovies() {
  return async function(dispatch) {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=a43cccf48122a6ee7a6489ec15ce92da&language=en-US"
      );
      const movies = await res.json();

      return dispatch({
        type: "GET_MOVIES",
        data: (movies && movies.results) || []
      });
    } catch (err) {
      console.warn("Error fetching", err);
      debugger;
    }
  };
}

export function getMovie(id) {
  return async function(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a43cccf48122a6ee7a6489ec15ce92da&language=en-US`
    );
    const movie = await res.json();

    return dispatch({
      type: "GET_MOVIE",
      data: movie || []
    });
  };
}

export function resetMovie() {
  return {
    type: "RESET_MOVIE"
  };
}
