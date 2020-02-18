import React from "react";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Error() {
  return (
    <ErrorWrapper>
      <Chip label="Sorry, something went wrong..." color="secondary" />
    </ErrorWrapper>
  );
}

export default Error;
