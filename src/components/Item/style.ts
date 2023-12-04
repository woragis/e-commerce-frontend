import styled from "styled-components";

export const StyledStoreItem = styled.div`
  border: 1px solid gray;

  width: 300px;
  margin: 0 auto;
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
