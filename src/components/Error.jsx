import React, { memo } from "react";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";

export const ErrorWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Error = memo(() => {
  return (
    <ErrorWrapper>
      <Chip label="Sorry, can not get the AQI data..." color="secondary" />
    </ErrorWrapper>
  );
});

export default Error;
