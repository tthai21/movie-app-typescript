import React from "react";
import MovieCard from "./MovieCard";
import { NavLink } from "react-router-dom";

const MovieList: React.FC<{
  moviesList: any[];
  header: string;
  path: string;
}> = (props) => {
  const moviesList = props.moviesList;

  return (
    <>
      <section className="pb-20 movies-layout">
        <NavLink
          to={`/${props.path}`}
          className="ml-5 text-2xl font-bold text-white page-container"
        >
          {props.header}
        </NavLink>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-5 mb-3 text-white movie-list page-container">
          {moviesList?.map((item) => (
            <MovieCard
              id={item.id}
              isMovie={item.isMovie}
              url={item.backdrop_path || item.poster_path}
              title={item.original_title || item.name}
              key={item.id}
              rate={item.vote_average}
              year={item.release_date || item.first_air_date}
              genreId={item.genre_ids}
              isFavorite={item.isFavorite}
            />
          ))}
        </div>
        <NavLink
          to={`/${props.path}`}
          className="float-right mr-5 text-white page-container "
        >
          Watch more ...
        </NavLink>
      </section>
    </>
  );
};

export default MovieList;
