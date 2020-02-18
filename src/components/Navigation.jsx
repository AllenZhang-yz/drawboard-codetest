import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MatchedStation from "./MatchedStation";
import {
  searchInputHandler,
  getMatchedStations,
  toggleShowMatchedStations
} from "../store/actionCreators";

const Nav = styled.nav`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 3px rgba(0, 0, 0, 0.24);
  padding: 0.8rem 0 0.8rem 1rem;
  display: flex;
`;
const Input = styled.input`
  font-size: 100%;
  border-radius: 30px;
  background-color: #1e202b;
  color: #fff;
  padding: 0.5rem 1rem;
  width: 280px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
  margin-left: 10px;
`;

const MatchedStations = styled.div`
  position: absolute;
  width: 330px;
  max-height: 300px;
  background: #fff;
  overflow: scroll;
`;

let searchTimer;

const Navigation = ({
  changeInputValue,
  inputValue,
  getMatchedStations,
  matchedStations,
  showMatchedStations
}) => {
  return (
    <Fragment>
      <Nav>
        <Input
          onKeyUp={e => {
            clearTimeout(searchTimer);
            if (e.key === "Enter") return getMatchedStations(inputValue);
            searchTimer = setTimeout(getMatchedStations(inputValue), 500);
          }}
          placeholder="Search..."
          onChange={changeInputValue}
          value={inputValue}
        />
        <Button>Submit</Button>
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
};

const mapStateToProps = state => {
  return {
    inputValue: state.get("inputValue"),
    matchedStations: state.get("matchedStations"),
    showMatchedStations: state.get("showMatchedStations")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue: e => dispatch(searchInputHandler(e.target.value)),
    getMatchedStations: inputValue => {
      dispatch(getMatchedStations(inputValue));
      !!inputValue
        ? dispatch(toggleShowMatchedStations(true))
        : dispatch(toggleShowMatchedStations(false));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
