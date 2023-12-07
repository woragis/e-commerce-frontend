import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

  background-color: ${props => props.theme.background.color.neutral};
  color: ${props => props.theme.text.color};
  a {
    color: ${props => props.theme.text.color};
  }
  height: 60px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1em;
  box-shadow: 0 1px 5px black;
`;

export const StyledNav = styled.nav`
  width: inherit;
  height: inherit;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* width: 300px; */

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 5px;
    height: 30px;
    padding: 0 10px;
    font-size: 0.8em;
    text-align: center;
    list-style-type: none;
    margin: 0 15px;
    font-weight: 700;
    transition: 300ms;

    a {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
  }
  li:hover {
    background-color: ${props => props.theme.text.background};
    a {
      color: ${props => props.theme.text.color};
      &::after {
        content: "";
        background-color: ${props => props.theme.text.background};
        height: 3px;
        width: 80%;
        border-radius: 10px;
        position: absolute;
        bottom: -5px;
      }
    }
  }
`;

export const Logo = styled.h1`
  display: flex;
  margin: 0;
  padding: 0 40px;
  align-items: center;
`;
