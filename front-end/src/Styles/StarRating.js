import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DivStars = styled.div`
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  width: 300px;
  border-radius: 1%;
  padding: 1rem;
  font-size: 14px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export const HiddenRadio = styled.input.attrs({ type: "radio" })`
  display: none;
`;
