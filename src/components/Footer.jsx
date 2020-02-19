import React, { memo } from "react";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  p {
    margin: 3px auto;
    text-align: center;
  }
  @media only screen and (max-width: 800px) {
    position: absolute;
    width: 100vw;
    bottom: 0;
  }
`;

const Footer = memo(() => {
  return (
    <FooterWrapper>
      <p>
        copyright &copy; Allen Zhang {new Date().getFullYear()} powered by React
      </p>
    </FooterWrapper>
  );
});

export default Footer;
