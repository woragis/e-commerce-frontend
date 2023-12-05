import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logo, StyledHeader, StyledNav, StyledNavLinks, StyledSearchBar } from "./style";
import { headerLinks } from "./headerData";
import { headerLinksType } from "../../types/headerLinks.type";
import ThemeButton from "../ThemeButton";

const Header = () => {
  const unloggedUserLinks = [
    { title: "register", path: "/register" },
    { title: "login", path: "/login" },
  ];
  const loggedUserLinks = [{ title: "logout", path: "logout" }];

  interface userType {
    user: {
      logged: boolean;
    };
  }
  const userLogged = useSelector((state: userType) => state.user.logged);

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
        <StyledSearchBar></StyledSearchBar>
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
