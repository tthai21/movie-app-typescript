import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { RootState } from "../../../redux-toolkit/store";
import { useSelector } from "react-redux";
import SearchMoviesCard from "./SearchMoviesCard";

const SearchMenus: React.FC = () => {
  const [recentList, setRecentList] = useState<any[]>([]);

  const recent: any[] = useSelector(
    (state: RootState) => state.recent.moviesList
  );

  const recentListLocalJSON: string | null = localStorage.getItem("recent");
  useEffect(() => {
    if (recentListLocalJSON) {
      const recentListLocal: any[] = JSON.parse(recentListLocalJSON);

      setRecentList(recentListLocal);
    } else {
      setRecentList(recent);
    }
  }, [recentListLocalJSON, recent]);

  return (
    <div className="sticky text-white top-0 body-right w-[420px] bg-user h-screen ">
      <SearchBar></SearchBar>
      <h2 className="mb-5 text-lg font-bold">Favorite Movie</h2>
      {/* {list1.splice(0, 2).map((item) => (
        <SearchMoviesCard
          url={item.backdrop_path || item.poster_path}
          title={item.original_title || item.name}
          key={item.id}
          rate={item.vote_average}
          year={item.release_date || item.first_air_date}
          genres={item.genres}
        ></SearchMoviesCard>
      ))} */}
      <h2 className="mb-5 text-lg font-bold">Recent</h2>
      {recentList.splice(0, 3).map((item) => (
        <SearchMoviesCard
          url={item.poster_path || item.backdrop_path}
          title={item.original_title || item.name}
          key={item.id}
          rate={item.vote_average}
          year={item.release_date || item.first_air_date}
          genres={item.genres}
        ></SearchMoviesCard>
      ))}
    </div>
  );
};

export default SearchMenus;
