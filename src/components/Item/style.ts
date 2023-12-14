import styled from "styled-components";
import { lighten, darken } from "polished";

export const StyledStoreItem = styled.div`
  border: 1px solid gray;
  font-family: "Hedvig Letters Serif", serif;

  width: 180px;
  height: 260px;
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 4px ${props => props.theme.text.color};
  background-color: ${props => props.theme.background.color.neutral};

  .item-img {
    display: block;
    height: 130px;
    border: 1px solid black;
    width: 100%;
  }

  .item-name {
    font-weight: 700;
    font-size: 1.2em;
    color: ${props => props.theme.text.color};
  }

  .item-price {
    color: ${props => props.theme.text.contrast};
    font-size: 1.1em;
  }
  .item-old-price {
    color: ${props => (props.theme.title === "light" ? lighten(0.5, props.theme.text.contrast) : darken(0.5, props.theme.text.contrast))};
    text-decoration: line-through;
    font-size: 0.9em;
  }
  .item-frete,
  .item-discount {
    color: ${props => props.theme.store.green};
    font-weight: 700;
    display: inline;
    margin-right: 5px;
  }
`;
