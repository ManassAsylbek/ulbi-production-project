import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import MainPage from "./pages/MainPage/MainPage";
import { Link } from "react-router-dom";
import { Suspense, useContext, useState } from "react";

import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [theme])}
    >
      <button onClick={toggleTheme}>toggle</button>
      <Link to="/">MAIN</Link>
      <Link to="/about">about</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />}></Route>
          <Route path={"/"} element={<MainPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
