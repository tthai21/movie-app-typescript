import { Fragment } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import About from "./pages/AboutPage";
import NowPlaying from "./pages/NowPlayingPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/now-playing"
            element={<NowPlaying></NowPlaying>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
