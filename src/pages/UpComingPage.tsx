import React, { Fragment } from "react";
import MovieBanner from "../components/movie/MovieBanner";
import MovieList from "../components/movie/MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import FetchMoviesData from "../redux-toolkit/FetchMoviesData";

const UpComingPage: React.FC = () => {
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
        moviesList={upComingList}
        header="Up Coming"
        path="up-coming"
      ></MovieList>
    </Fragment>
  );
};

export default UpComingPage;
