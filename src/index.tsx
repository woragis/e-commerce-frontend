import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./app/App";
import GlobalStyles from "./styles/GlobalStyles";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
