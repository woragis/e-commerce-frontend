import styled from "styled-components";

export const PromoContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
  border: 1px solid red;
  width: 100%;
  height: 180px;
  padding: 15px;
`;

export const StyledPromoItem = styled.article`
  height: 150px;
  width: 400px;
  border: 1px solid black;
  font-size: 2em;
  text-shadow: 3px 3px 3px lightblue;
  margin: 0 auto;
  color: ${props => props.theme.text.color};
  background-color: ${props => props.theme.background.color.main};
  background-image: url("ww.wwu.");
  background-repeat: no-repeat;
  background-size: cover;
`;
