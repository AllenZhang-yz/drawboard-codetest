import { fromJS } from "immutable";
import {
  CHANGE_INPUT,
  SAVE_MATCHED_STATIONS,
  TOGGLE_SHOW_MATCHED_STATIONS,
  TOGGLE_IS_LOADING_AQI,
  TOGGLE_HAS_ERROR,
  SAVE_AQI_DATA
} from "./actionTypes";
import { fetchMatchedStations, fetchAQI } from "../utils/axios";

const saveMatchedStations = data => ({
  type: SAVE_MATCHED_STATIONS,
  data: fromJS(data)
});

const saveAQIData = data => ({
  type: SAVE_AQI_DATA,
  data
});

const toggleHasError = data => ({
  type: TOGGLE_HAS_ERROR,
  data: fromJS(data)
});

export const searchInputHandler = data => ({
  type: CHANGE_INPUT,
  data: fromJS(data)
});

export const toggleShowMatchedStations = data => ({
  type: TOGGLE_SHOW_MATCHED_STATIONS,
  data: fromJS(data)
});

export const toggleIsLoadingAQI = data => ({
  type: TOGGLE_IS_LOADING_AQI,
  data: fromJS(data)
});

export const getMatchedStations = inputValue => {
  return dispatch => {
    let matchedStations = [];
    fetchMatchedStations(inputValue)
      .then(res => {
        const data = res.data.data;
        if (data.length === 0) {
          dispatch(toggleShowMatchedStations(false));
        }
        data.map(item => matchedStations.push(item.station.name));
        dispatch(saveMatchedStations(matchedStations));
      })
      .catch(err => {
        dispatch(toggleShowMatchedStations(false));
      });
  };
};

export const getAQIHandler = inputValue => {
  return dispatch => {
    const modifiedValue = inputValue.replace(/\(.*\)/, "");
    fetchAQI(modifiedValue)
      .then(res => {
        dispatch(toggleIsLoadingAQI(false));
        if (res.data.status === "error") {
          dispatch(toggleHasError(true));
        } else {
          dispatch(saveAQIData(res.data.data));
          dispatch(toggleHasError(false));
        }
      })
      .catch(err => {
        setTimeout(() => dispatch(toggleIsLoadingAQI(false)), 3000);
        dispatch(toggleHasError(true));
      });
  };
};
