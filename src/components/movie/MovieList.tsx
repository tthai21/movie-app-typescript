import React from "react";
import MovieCard from "./MovieCard";

const MovieList: React.FC<{ moviesList: any[]; header: string }> = (props) => {
  const moviesList = props;
  const list = moviesList.moviesList?.slice(-4);
  return (
    <section className="pb-20 movies-layout">
      <h2 className="mb-5 text-2xl font-bold text-white page-container">
        {props.header}
      </h2>
      <div className="grid grid-cols-4 gap-10 mb-3 text-white movie-list page-container">
        {list?.map((item) => (
          <MovieCard
            url={item.backdrop_path}
            title={item.original_title}
            key={item.id}
            rate={item.vote_average}
            year={item.release_date}
          />
        ))}
      </div>
      <span className="float-right mr-5 text-white page-container ">
        Watch more ...
      </span>
    </section>
  );
};

export default MovieList;
