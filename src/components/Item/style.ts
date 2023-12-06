import styled from "styled-components";

export const StyledStoreItem = styled.div`
  border: 1px solid gray;
  font-family: "Hedvig Letters Serif", serif;

  width: 180px;
  height: 260px;
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 4px ${props => props.theme.text.color};

  .item-img {
    display: block;
    height: 130px;
    border: 1px solid black;
    width: 100%;
  }

  .item-name {
    font-weight: 700;
    font-size: 1.2em;
  }

  .item-description {
  }
  .item-price {
    color: black;
    font-size: 1.1em;
  }
  .item-old-price {
    color: gray;
    text-decoration: line-through;
    font-size: 0.9em;
  }
  .item-frete {
    color: green;
  }
  .item-discount {
    color: green;
  }
`;
