import styled from "styled-components";

export const StyledHomePage = styled.main`
  background-color: ${props => props.theme.background.color.secondary};
`;

export const StoreStyling = styled.section`
  margin: 0 auto;
  width: 800px;
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
