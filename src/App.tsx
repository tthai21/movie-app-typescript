import { Fragment } from "react";
import MoviesPage from "./pages/MoviesPage";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import MoviesRenderPage from "./pages/MoviesRenderPage";
import MovieDetailsPage from "./pages/MovieDetailPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/Logout";

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
          <Route
            path="/movie/:id"
            element={<MovieDetailsPage movie="movie"></MovieDetailsPage>}
          ></Route>
          <Route
            path="/tv/:id"
            element={<MovieDetailsPage movie="tv"></MovieDetailsPage>}
          ></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/logout" element={<LogoutPage></LogoutPage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
