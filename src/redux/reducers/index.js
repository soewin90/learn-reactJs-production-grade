import { combineReducers } from "redux";
import courses from "./courseReducer"; // name due to export so can name any thing
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses, // or courses: courses [coz LHS = RHS]
  authors,
  apiCallsInProgress,
});

export default rootReducer;
