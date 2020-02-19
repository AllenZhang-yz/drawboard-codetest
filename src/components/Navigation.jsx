import React, { Fragment, memo, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import MatchedStation from "./MatchedStation";
import {
  searchInputHandler,
  getMatchedStations,
  toggleShowMatchedStations,
  getAQIHandler,
  toggleIsLoadingAQI
} from "../store/actionCreators";

const Nav = styled.nav`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 3px rgba(0, 0, 0, 0.24);
  padding: 0.8rem 0 0.8rem 1rem;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  font-size: 100%;
  border-radius: 30px;
  background-color: #1e202b;
  color: #fff;
  padding: 0.5rem 1rem;
  width: ${props => (props.focused ? "280px" : "180px")};
  transition: width 1s;
`;

const StyledCancelRoundedIcon = styled(CancelRoundedIcon)`
  margin-left: -28px;
  opacity: 0.5;
  visibility: ${props => (props.visible > 0 ? "visible" : "hidden")};
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
  margin-left: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 2px #000;
  &:active {
    transform: translateY(1px);
  }
`;

const MatchedStations = styled.div`
  position: absolute;
  width: 330px;
  max-height: 400px;
  background: #fff;
  overflow: scroll;
`;

let searchTimer;

const Navigation = memo(
  ({
    changeInputValue,
    inputValue,
    clearSearchBar,
    getMatchedStations,
    matchedStations,
    showMatchedStations,
    getAQI
  }) => {
    const [searchBarFocused, setSearchBarFocused] = useState(false);
    return (
      <Fragment>
        <Nav>
          <Input
            focused={searchBarFocused}
            onFocus={() => setSearchBarFocused(true)}
            onBlur={() => inputValue.length === 0 && setSearchBarFocused(false)}
            onKeyUp={e => {
              clearTimeout(searchTimer);
              if (e.key === "Enter") return getAQI(inputValue);
              searchTimer = setTimeout(
                () => getMatchedStations(inputValue),
                300
              );
            }}
            placeholder="Melbourne"
            onChange={changeInputValue}
            value={inputValue}
          />
          <StyledCancelRoundedIcon
            fontSize="small"
            visible={inputValue.length}
            onClick={clearSearchBar}
          />
          <Button onClick={() => getAQI(inputValue)}>Submit</Button>
        </Nav>
        {showMatchedStations && (
          <MatchedStations>
            {matchedStations.map((item, index) => (
              <MatchedStation key={index} item={item} />
            ))}
          </MatchedStations>
        )}
      </Fragment>
    );
  }
);

const mapStateToProps = state => ({
  inputValue: state.getIn(["nav", "inputValue"]),
  matchedStations: state.getIn(["nav", "matchedStations"]),
  showMatchedStations: state.getIn(["nav", "showMatchedStations"])
});

const mapDispatchToProps = dispatch => ({
  changeInputValue: e => dispatch(searchInputHandler(e.target.value)),
  getMatchedStations: inputValue => {
    dispatch(getMatchedStations(inputValue));
    inputValue.length > 0
      ? dispatch(toggleShowMatchedStations(true))
      : dispatch(toggleShowMatchedStations(false));
  },
  getAQI: inputValue => {
    dispatch(getAQIHandler(inputValue));
    dispatch(toggleShowMatchedStations(false));
    dispatch(toggleIsLoadingAQI(true));
  },
  clearSearchBar: () => {
    dispatch(searchInputHandler(""));
    dispatch(getMatchedStations(""));
    dispatch(toggleShowMatchedStations(false));
  }
});

Navigation.propTypes = {
  changeInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  clearSearchBar: PropTypes.func.isRequired,
  getMatchedStations: PropTypes.func.isRequired,
  matchedStations: PropTypes.object,
  showMatchedStations: PropTypes.bool,
  getAQI: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
