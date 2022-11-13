import styled from "styled-components";

export const Title = styled.h2`
  width: 100%;
  padding: 3rem;
  text-align: center;
  color: ${(props) => props.customColor || "black"};
  font-size: ${(props) => props.customFontSize || "2.5rem"};
  background: ${(props) => props.customBackground || "white"};
`;
