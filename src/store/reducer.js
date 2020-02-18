import { fromJS } from "immutable";
import {
  CHANGE_INPUT,
  SAVE_MATCHED_STATIONS,
  TOGGLE_SHOW_MATCHED_STATIONS
} from "./actionTypes";

const defaultState = fromJS({
  inputValue: "",
  matchedStations: [],
  showMatchedStations: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return state.set("inputValue", action.data);
    case SAVE_MATCHED_STATIONS:
      return state.set("matchedStations", action.data);
    case TOGGLE_SHOW_MATCHED_STATIONS:
      return state.set("showMatchedStations", action.data);
    default:
      return state;
  }
};
