import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Error from "./components/Error";

const AppWrapper = styled.div`
  background: #323544;
  width: 100vw;
  height: 100vh;
  position: relative;
  @media only screen and (min-width: 800px) {
    max-width: 800px;
    margin: 3rem auto 0 auto;
    border: 1px solid #666;
    border-radius: 10px;
    height: auto;
    box-shadow: 5px 5px 10px #999;
  }
`;

const App = ({ isLoadingAQI, hasError }) => {
  const renderMain = () => {
    return !hasError ? <Main /> : <Error />;
  };
  return (
    <AppWrapper>
      <Header />
      <Navigation />
      {isLoadingAQI ? <Loader /> : renderMain()}
      <Footer />
    </AppWrapper>
  );
};

const mapStateToProps = state => ({
  isLoadingAQI: state.get("isLoadingAQI"),
  hasError: state.get("hasError")
});

App.propTypes = {
  isLoadingAQI: PropTypes.bool.isRequired,
  hasError: PropTypes.bool
};

export default connect(mapStateToProps, null)(App);
