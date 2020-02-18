import React, { memo } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
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

const MatchedStation = memo(({ item, selectStation }) => {
  return (
    <StyledMatchedStation onClick={() => selectStation(item)}>
      {item}
    </StyledMatchedStation>
  );
});

const mapDispatchToProps = dispatch => {
  return {
    selectStation: item => {
      dispatch(searchInputHandler(item));
      dispatch(toggleShowMatchedStations(false));
    }
  };
};

MatchedStation.propTypes = {
  item: PropTypes.string,
  selectStation: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(MatchedStation);
