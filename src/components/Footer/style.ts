import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.background.color.neutral};
  p,
  a,
  strong {
    color: ${props => props.theme.text.color};
  }
  height: 200px;
  width: 100%;

  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 1px;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: ${props => props.theme.background.color.main};
  }
`;

export const SocialMedia = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 15px;
    list-style-type: none;
    a {
      text-decoration: none;
      color: ${props => props.theme.text.color};
    }
  }
`;

export const StyledDescription = styled.article`
  font-size: 1em;
  font-family: "Zilla Slab", serif;
`;

export const StyledCopyright = styled.section`
  position: absolute;
  font-size: 0.8em;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
