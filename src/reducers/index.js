import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoriteReducer from "./favoriteReducer";

const combinedReducers = combineReducers({
  movieReducer,
  favoriteReducer,
});

export default combinedReducers;