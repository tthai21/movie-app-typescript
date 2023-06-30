import { Fragment } from "react";
import MoviesPage from "./pages/MoviesPage";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import MoviesRenderPage from "./pages/MoviesRenderPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<MoviesPage></MoviesPage>}></Route>
          <Route
            path="/now-playing"
            element={
              <MoviesRenderPage moviesType="now-playing"></MoviesRenderPage>
            }
          ></Route>
          <Route
            path="/top-trending"
            element={
              <MoviesRenderPage moviesType="top-trending"></MoviesRenderPage>
            }
          ></Route>
          <Route
            path="/up-coming"
            element={
              <MoviesRenderPage moviesType="up-coming"></MoviesRenderPage>
            }
          ></Route>
          <Route
            path="/tv-episode"
            element={
              <MoviesRenderPage moviesType="tv-episode"></MoviesRenderPage>
            }
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
