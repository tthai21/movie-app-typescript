import React, { Fragment } from "react";
import MovieBanner from "../components/movie/MovieBanner";
import MovieList from "../components/movie/MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import FetchMoviesData from "../redux-toolkit/FetchMoviesData";

const NowPlaying: React.FC = () => {
  const nowPlayingList: any[] = useSelector(
    (state: RootState) => state.nowPlaying.moviesList
  );

  FetchMoviesData();
  return (
    <Fragment>
      <div className="banner page-container h-[300px] mb-20 overflow-hidden ">
        <MovieBanner />
      </div>
      <MovieList
        moviesList={nowPlayingList}
        header="Now playing"
        path="now-playing"
      ></MovieList>
    </Fragment>
  );
};

export default NowPlaying;
