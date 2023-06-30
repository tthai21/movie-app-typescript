import React, { Fragment } from "react";
import MovieBanner from "../components/movie/MovieBanner";
import MovieList from "../components/movie/MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import FetchMoviesData from "../redux-toolkit/FetchMoviesData";

const TopTrendingPage: React.FC = () => {
  const topTrendingList: any[] = useSelector(
    (state: RootState) => state.topTrending.moviesList
  );

  FetchMoviesData();
  return (
    <Fragment>
      <div className="banner page-container h-[300px] mb-20 overflow-hidden ">
        <MovieBanner />
      </div>
      <MovieList
        moviesList={topTrendingList}
        header="Top Trending"
        path="top-trending"
      ></MovieList>
    </Fragment>
  );
};

export default TopTrendingPage;
