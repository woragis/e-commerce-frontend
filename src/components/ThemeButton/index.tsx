import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { StyledThemeButton } from "./style";
import { RootState } from "../../types/redux.type";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const themeValue = useSelector((state: RootState) => state.theme);
  const ThemeIcon = themeValue === "light" ? <MdLightMode /> : <MdDarkMode />;
  return <StyledThemeButton onClick={() => dispatch(toggleTheme())}>{ThemeIcon}</StyledThemeButton>;
};

export default ThemeButton;
