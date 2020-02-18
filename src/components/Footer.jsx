import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  p {
    margin: 3px auto;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        copyright &copy; Allen Zhang {new Date().getFullYear()} powered by React
      </p>
    </FooterWrapper>
  );
};

export default Footer;
