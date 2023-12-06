import { BrowserRouter } from "react-router-dom";
import Router from "../pages/router";
import { ThemeProvider } from "styled-components";
import { RootState } from "../types/redux.type";
import { useSelector } from "react-redux";
import darkTheme from "../styles/themes/dark";
import lightTheme from "../styles/themes/light";

function App() {
  const themeName = useSelector((state: RootState) => state.theme);
  const theme = themeName === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
