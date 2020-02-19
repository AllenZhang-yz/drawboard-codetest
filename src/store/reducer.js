import { combineReducers } from "redux-immutable";
import navReducer from "./reducers/navReducer";
import AQIReducer from "./reducers/AQIReducer";

export default combineReducers({
  nav: navReducer,
  AQI: AQIReducer
});
