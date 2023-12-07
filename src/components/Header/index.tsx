import { Link } from "react-router-dom";
import { RootState } from "../../types/redux.type";
import { useSelector } from "react-redux";
import { Logo, StyledHeader, StyledNav, StyledNavLinks } from "./style";
import { headerLinks } from "./headerData";
import { headerLinksType } from "../../types/headerLinks.type";
import ThemeButton from "../ThemeButton";
import SearchBar from "../SearchBar";

const Header = () => {
  const unloggedUserLinks = [
    { title: "register", path: "/register" },
    { title: "login", path: "/login" },
  ];
  const loggedUserLinks = [{ title: "logout", path: "logout" }];

  const userLogged = useSelector((state: RootState) => state.user.logged);

  const chosenLinks = userLogged ? loggedUserLinks : unloggedUserLinks;

  const userLinks = chosenLinks.map(({ title, path }: headerLinksType) => {
    return (
      <li key={title}>
        <Link to={path}>{title.toUpperCase()}</Link>
      </li>
    );
  });

  const headerNav = headerLinks.map(({ title, path }: headerLinksType) => {
    return (
      <li key={title}>
        <Link to={path}>{title.toUpperCase()}</Link>
      </li>
    );
  });

  return (
    <StyledHeader>
      <StyledNav>
        <Logo>E Commerce Name</Logo>
        <SearchBar />
        <StyledNavLinks>
          {headerNav}
          {userLinks}
          <ThemeButton />
        </StyledNavLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
