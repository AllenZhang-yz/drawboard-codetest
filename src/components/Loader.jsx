import React, { memo } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

export const LoaderWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = memo(() => {
  return (
    <LoaderWrapper>
      <CircularProgress size="8em" />
    </LoaderWrapper>
  );
});

export default Loader;
