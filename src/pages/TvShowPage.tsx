import React, { Fragment } from "react";
import MovieBanner from "../components/movie/MovieBanner";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux-toolkit/store";
// import FetchMoviesData from "../redux-toolkit/FetchMoviesData";

const TvShowPage: React.FC = () => {
  return (
    <Fragment>
      <div className="banner page-container h-[300px] mb-20 overflow-hidden ">
        <MovieBanner />
      </div>
    </Fragment>
  );
};

export default TvShowPage;
