import React, { Fragment } from "react";
import MovieBanner from "../components/movie/MovieBanner";
import MovieList from "../components/movie/MovieList";

const MoviesRender: React.FC<{
  moviesList: any[];
  header: string;
  path: string;
}> = ({ moviesList, header, path }) => {
  return (
    <Fragment>
      <div className="banner page-container h-[300px] mb-20 mt-20 ">
        <MovieBanner bannerMovie={moviesList} />
      </div>
      <MovieList
        moviesList={moviesList}
        header={header}
        path={path}
      ></MovieList>
    </Fragment>
  );
};

export default MoviesRender;
