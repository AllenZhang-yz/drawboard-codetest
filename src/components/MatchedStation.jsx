import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  searchInputHandler,
  toggleShowMatchedStations
} from "../store/actionCreators";

const StyledMatchedStation = styled.div`
  font-size: 14px;
  margin-left: 5px;
  :hover {
    background: #f2f2f2;
    cursor: default;
  }
`;

const MatchedStation = ({ item, selectStation }) => {
  return (
    <StyledMatchedStation onClick={() => selectStation(item)}>
      {item}
    </StyledMatchedStation>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    selectStation: item => {
      dispatch(searchInputHandler(item));
      dispatch(toggleShowMatchedStations(false));
    }
  };
};

export default connect(null, mapDispatchToProps)(MatchedStation);
