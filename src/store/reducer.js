import { fromJS } from "immutable";
import {
  CHANGE_INPUT,
  SAVE_MATCHED_STATIONS,
  TOGGLE_SHOW_MATCHED_STATIONS,
  TOGGLE_IS_LOADING_AQI,
  TOGGLE_HAS_ERROR,
  SAVE_AQI_DATA
} from "./actionTypes";

const defaultState = fromJS({
  inputValue: "",
  matchedStations: [],
  showMatchedStations: false,
  isLoadingAQI: false,
  hasError: null,
  AQIData: null
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return state.set("inputValue", action.data);
    case SAVE_MATCHED_STATIONS:
      return state.set("matchedStations", action.data);
    case TOGGLE_SHOW_MATCHED_STATIONS:
      return state.set("showMatchedStations", action.data);
    case TOGGLE_IS_LOADING_AQI:
      return state.set("isLoadingAQI", action.data);
    case TOGGLE_HAS_ERROR:
      return state.set("hasError", action.data);
    case SAVE_AQI_DATA:
      return state.set("AQIData", action.data);
    default:
      return state;
  }
};
