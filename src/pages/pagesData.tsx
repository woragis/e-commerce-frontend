import { pagesType } from "../types/pages.type";

import Home from "./Home";
import Cart from "./Cart";

const pagesData: pagesType[] = [
  { title: "Home", path: "/", element: <Home /> },
  { title: "Cart", path: "/cart", element: <Cart /> },
];

export default pagesData;
