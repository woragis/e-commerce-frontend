import { Routes, Route } from "react-router-dom";
import { pagesType } from "../types/pages.type";
import pagesData from "./pagesData";
import Layout from "./Layout";

const Router = () => {
  const pages = pagesData.map(({ title, path, element }: pagesType) => {
    return <Route key={title} path={path} element={element} />;
  });

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          {pages}
        </Route>
      </Routes>
    </>
  );
};
export default Router;
