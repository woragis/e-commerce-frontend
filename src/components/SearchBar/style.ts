import styled from "styled-components";

export const StyledSearchBar = styled.div`
  position: relative;
  width: 450px;
  height: 40px;
  margin: 0 auto;
  border-radius: 30px;
  input {
    height: 100%;
    width: 100%;
    border-radius: 30px;
    outline: none;
    border: none;
    padding-left: 10px;
    font-size: 1em;
    background-color: ${props => props.theme.background.color.secondary};
    color: ${props => props.theme.text.color};

    &::after {
      content: "";
      height: 50%;
      width: 5px;
      background-color: ${props => props.theme.text.background};
      position: absolute;
      right: 0;
      z-index: 11;
    }
  }
  .icon {
    position: absolute;
    height: 100%;
    width: 40px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    background-color: white;
    outline: none;
    background-color: ${props => props.theme.background.color.secondary};
    color: ${props => props.theme.text.color};
    border: none;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      height: 70%;
      border-left: 1px solid ${props => props.theme.text.color};
    }

    &:hover {
      background-color: ${props => props.theme.background.color.main};
      color: ${props => props.theme.background.color.secondary};
    }
  }
`;
