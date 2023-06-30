import { Fragment } from "react";
import MoviesPage from "./pages/MoviesPage";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import TvShowPage from "./pages/TvShowPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import TopTrendingPage from "./pages/TopTrendingPage";
import UpComingPage from "./pages/UpComingPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<MoviesPage></MoviesPage>}></Route>
          <Route
            path="/now-playing"
            element={<NowPlayingPage></NowPlayingPage>}
          ></Route>
          <Route
            path="/top-trending"
            element={<TopTrendingPage></TopTrendingPage>}
          ></Route>
          <Route
            path="/up-coming"
            element={<UpComingPage></UpComingPage>}
          ></Route>
          <Route path="/tv-show" element={<TvShowPage></TvShowPage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
