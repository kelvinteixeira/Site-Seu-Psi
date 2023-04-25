import styled from "@emotion/styled";
import { Grid, OutlinedInput, Button } from "@mui/material";

export const StyledBox = styled(Grid)`
  height: 15rem;
  background: #1976d240;
`;

export const StyledSearchbar = styled(OutlinedInput)`
  width: 35rem;
  background-color: var(--bg-input);
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: 800;
`;

export const StyledButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  text-transform: none;
`;