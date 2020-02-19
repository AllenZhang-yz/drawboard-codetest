import { fromJS } from "immutable";
import {
  TOGGLE_IS_LOADING_AQI,
  TOGGLE_HAS_ERROR,
  SAVE_AQI_DATA
} from "../actionTypes";

const defaultState = fromJS({
  isLoadingAQI: false,
  hasError: null,
  AQIData: null
});

export default (state = defaultState, action) => {
  switch (action.type) {
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
