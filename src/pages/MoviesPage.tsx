import React, { Fragment } from "react";
import MovieBanner from "../components/movie/MovieBanner";
import MovieList from "../components/movie/MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import FetchMoviesData from "../redux-toolkit/FetchMoviesData";

const MoviesPage: React.FC = () => {
  const nowPlayingList: any[] = useSelector(
    (state: RootState) => state.nowPlaying.moviesList
  );
  const nowPlayingListHome = nowPlayingList?.slice(0, 4);
  const topTrendingList: any[] = useSelector(
    (state: RootState) => state.topTrending.moviesList
  );
  const topTrendingListHome = topTrendingList?.slice(0, 4);
  const upComingList: any[] = useSelector(
    (state: RootState) => state.upComing.moviesList
  );
  const upComingListHome = upComingList?.slice(0, 4);

  FetchMoviesData();
  return (
    <Fragment>
      <div className="banner page-container h-[300px] mb-20 mt-20 ">
        <MovieBanner bannerMovie={nowPlayingListHome} />
      </div>
      <MovieList
        moviesList={nowPlayingListHome}
        header="Now playing"
        path="now-playing"
      ></MovieList>
      <MovieList
        moviesList={topTrendingListHome}
        header="Top trending"
        path="top-trending"
      ></MovieList>
      <MovieList
        moviesList={upComingListHome}
        header="Up coming"
        path="up-coming"
      ></MovieList>
    </Fragment>
  );
};

export default MoviesPage;
