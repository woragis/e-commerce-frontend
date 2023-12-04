import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 60px;
  background-color: ${props => props.theme.colors.main.background};
  color: ${props => props.theme.colors.main.text};
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1em;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 5px;
    background-color: red;
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
export const HeaderContainer = styled.header`
  background-color: #3498db;
  color: #fff;
  padding: 20px;
`;

export const Logo = styled.h1`
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
