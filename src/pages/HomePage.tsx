import React, { Fragment } from "react";
import MovieBanner from "../components/movie/MovieBanner";
import MovieList from "../components/movie/MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import FetchMoviesData from "../redux-toolkit/FetchMoviesData";

const HomePage: React.FC = () => {
  const nowPlayingList: any[] = useSelector(
    (state: RootState) => state.nowPlaying.moviesList
  );

  const nowPlayingListHome = nowPlayingList?.slice(-4);
  console.log(nowPlayingListHome);

  const topTrendingList: any[] = useSelector(
    (state: RootState) => state.topTrending.moviesList
  );
  const upComingList: any[] = useSelector(
    (state: RootState) => state.upComing.moviesList
  );
  FetchMoviesData();
  return (
    <Fragment>
      <div className="banner page-container h-[300px] mb-20 overflow-hidden ">
        <MovieBanner />
      </div>
      <MovieList
        moviesList={nowPlayingListHome}
        header="Now playing"
        path="now-playing"
      ></MovieList>
      <MovieList
        moviesList={topTrendingList}
        header="Top trending"
        path="now-playing"
      ></MovieList>
      <MovieList
        moviesList={upComingList}
        header="Up coming"
        path="now-playing"
      ></MovieList>
    </Fragment>
  );
};

export default HomePage;
