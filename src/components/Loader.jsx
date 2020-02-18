import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Loader() {
  return (
    <LoaderWrapper>
      <CircularProgress size="8em" />
    </LoaderWrapper>
  );
}

export default Loader;
