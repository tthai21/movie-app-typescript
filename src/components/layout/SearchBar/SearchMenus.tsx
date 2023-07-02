import React from "react";
import SearchBar from "./SearchBar";
import { RootState } from "../../../redux-toolkit/store";
import { useSelector } from "react-redux";
import PopularMovies from "./PopularMovies";

const SearchMenus: React.FC = () => {
  const nowPlayingList: any[] = useSelector(
    (state: RootState) => state.nowPlaying.moviesList
  );
  const nowPlayingListHome = nowPlayingList?.slice(-2);
  return (
    <div className="sticky text-white top-0 body-right w-[420px] bg-user h-screen ">
      <SearchBar></SearchBar>
      <h2 className="mb-5 text-lg font-bold">Popular Movie</h2>
      {nowPlayingListHome.map((item) => (
        <PopularMovies
          url={item.backdrop_path || item.poster_path}
          title={item.original_title || item.name}
          key={item.id}
          rate={item.vote_average}
          year={item.release_date || item.first_air_date}
        ></PopularMovies>
      ))}
      <h2 className="mb-5 text-lg font-bold">Recent</h2>
      {nowPlayingListHome.map((item) => (
        <PopularMovies
          url={item.poster_path || item.backdrop_path}
          title={item.original_title || item.name}
          key={item.id}
          rate={item.vote_average}
          year={item.release_date || item.first_air_date}
        ></PopularMovies>
      ))}
    </div>
  );
};

export default SearchMenus;
