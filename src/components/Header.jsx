import React, { memo } from "react";
import styled from "styled-components";
import logo from "../asset/logo.png";

const HeaderWrapper = styled.header`
  background-color: rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
  margin: 0 20px 0 10px;
  vertical-align: middle;
  width: 30px;
`;

const HeaderTitle = styled.h1`
  color: #fff;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  vertical-align: middle;
`;

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <Img src={logo} alt="logo" />
      <HeaderTitle>Air Quality Index</HeaderTitle>
    </HeaderWrapper>
  );
});

export default Header;
