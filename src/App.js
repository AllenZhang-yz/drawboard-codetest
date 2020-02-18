import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";

const AppWrapper = styled.div`
  background: #323544;
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

function App() {
  return (
    <AppWrapper>
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </AppWrapper>
  );
}

export default App;
