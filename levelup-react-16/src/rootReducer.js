import { combineReducers } from "redux";
import toggle from "./Toggle/reducer";
import movies from "./Movies/reducer";

const rootReducer = combineReducers({
  toggle,
  movies
});

export default rootReducer;
