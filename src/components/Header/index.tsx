import { Link } from "react-router-dom";
// eslint-disable-next-line
import { HeaderContainer, Logo, Nav, NavigationLink, StyledHeader } from "./style";
import { headerLinksType } from "../../types/headerLinks.type";
import { headerLinks } from "./headerData";

// redux:
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";

type RootState = {
  theme: {
    theme: string;
  };
};

const Header = () => {
  const headerNav = headerLinks.map(({ title, path }: headerLinksType) => {
    return (
      <li key={title}>
        <Link to={path}>{title.toUpperCase()}</Link>
      </li>
    );
  });

  const dispatch = useDispatch();
  const themeValue = useSelector((state: RootState) => state.theme.theme);

  return (
    <StyledHeader>
      <Nav>
        <Logo>Your Logo</Logo>

        <div>
          <ul>{headerNav}</ul>
        </div>
      </Nav>
      <p>Theme: {themeValue}</p>
      <button onClick={() => dispatch(toggleTheme())}>Toggle theme</button>
    </StyledHeader>
  );
};

export default Header;
