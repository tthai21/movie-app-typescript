import React from "react";
import MovieCard from "./MovieCard";

const MovieList: React.FC = () => {
  return (
    <section className="movies-layout pb-20">
      <h2 className="text-white page-container text-2xl font-bold mb-5">
        Now Playing
      </h2>
      <div className="movie-list grid grid-cols-4 gap-10 page-container text-white">
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </div>
    </section>
  );
};

export default MovieList;
