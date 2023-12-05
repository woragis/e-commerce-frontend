import styled from "styled-components";

export const StyledHeader = styled.header`
  // White or Black
  background-color: ${props => props.theme.background.color.main};
  // Black or White
  color: ${props => props.theme.text.color};
  height: 60px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1em;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 5px;
    background-color: ${props => props.theme.background.color.secondary};
    position: absolute;
    top: 60px;
    left: 0;
  }

  .search-bar input {
    outline: none;
    height: 40px;
    width: 400px;
    border-radius: 50px;
    box-shadow: 0 0 10px red;
    margin: 0 auto;
    display: block;
  }
`;

export const StyledNav = styled.nav`
  width: inherit;
  height: inherit;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
`;
export const StyledSearchBar = styled.section``;

export const StyledNavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 30px;
    width: 100px;
    text-align: center;
    list-style-type: none;
    margin: 0 15px;
    background-color: ${props => props.theme.background.color.secondary};
    font-weight: 700;

    a {
      text-decoration: none;
      color: ${props => props.theme.text.color};
    }
  }
  li:hover {
    background-color: ${props => props.theme.background.color.secondary};
    &::after {
      content: "";
      background-color: ${props => props.theme.text.color};
      height: 2px;
      width: 80px;
      position: absolute;
      bottom: 1px;
    }
  }
`;

export const Logo = styled.h1`
  margin: 0;
`;
