import styled from "styled-components";

export const StyledThemeButton = styled.span`
  height: 50px;
  width: 50px;
  font-size: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.text.color};
  border: 4px solid ${props => props.theme.text.color};
  border-radius: 50%;
  margin-right: 10px;
`;
