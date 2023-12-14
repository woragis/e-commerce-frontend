import styled from "styled-components";
import { darken, shade } from "polished";
export const StyledHomePage = styled.main`
  background-color: ${props => props.theme.background.color.body};
`;

export const StoreStyling = styled.section`
  margin: 0 auto;
  width: 800px;
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  background-color: ${props => darken(0.1, props.theme.background.color.neutral)};
`;
