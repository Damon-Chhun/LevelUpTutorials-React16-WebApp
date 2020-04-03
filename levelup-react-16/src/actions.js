export const TOGGLE_MESSAGE = "TOGGLE_MESSAGE";
export const GET_MOVIES = "GET_MOVIES";

export function toggleMessage() {
  return {
    type: "TOGGLE_MESSAGE"
  };
}

export function getMovies() {
  return async function(dispatch) {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/?api_key=a43cccf48122a6ee7a6489ec15ce92da&language=en-US"
    );
    const movies = await res.json();
    return dispatch({
      type: "GET_MOVIES",
      data: movies.results
    });
  };
}
