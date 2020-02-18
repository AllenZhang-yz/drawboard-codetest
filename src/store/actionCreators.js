import { fromJS } from "immutable";
import {
  CHANGE_INPUT,
  SAVE_MATCHED_STATIONS,
  TOGGLE_SHOW_MATCHED_STATIONS
} from "./actionTypes";
import { fetchMatchedStations } from "../utils/axios";

const saveMatchedStations = data => ({
  type: SAVE_MATCHED_STATIONS,
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

export const getMatchedStations = inputValue => {
  return dispatch => {
    let matchedStations = [];
    fetchMatchedStations(inputValue)
      .then(res => {
        const data = res.data.data;
        data.map(item => matchedStations.push(item.station.name));
        dispatch(saveMatchedStations(matchedStations));
      })
      .catch(err => console.log(err));
  };
};
