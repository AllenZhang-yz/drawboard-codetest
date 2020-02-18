import axios from "axios";

export const fetchMatchedStations = inputValue => {
  return axios.get(
    `http://api.waqi.info/search/?keyword=${inputValue}&token=b04f71f01d3fa37585097b6e8b99bfbdb90de1aa`
  );
};
