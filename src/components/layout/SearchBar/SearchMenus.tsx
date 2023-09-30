import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { RootState } from "../../../redux-toolkit/store";
import { useSelector } from "react-redux";
import SearchMoviesCard from "./SearchMoviesCard";

const SearchMenus: React.FC = () => {
  const [recentList, setRecentList] = useState<any[]>([]);
  let favoriteList = useSelector(
    (state: RootState) => state.favoriteList.favoriteList
  );
  const favoriteListReversed = favoriteList
    .map((element, index, array) => array[array.length - 1 - index])
    .slice(0, 3);

  const recent: any[] = useSelector(
    (state: RootState) => state.recent.moviesList
  ).slice(0, 2);

  const recentListLocalJSON: string | null = localStorage.getItem("recent");
  useEffect(() => {
    if (recentListLocalJSON) {
      const recentListLocal: any[] = JSON.parse(recentListLocalJSON);
      setRecentList(recentListLocal.slice(0, 2));
    } else {
      setRecentList(recent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recentListLocalJSON]);
  console.log(recentList);

  return (
    <div className="sticky text-white top-0 body-right w-[420px] bg-user h-screen lg:block hidden ">
      <div className="m-10 mb-20 w-full">
        <SearchBar></SearchBar>
      </div>
      <h2 className="mb-5 text-lg font-bold">Favorite Movie</h2>
      {favoriteListReversed?.map((item) => (
        <SearchMoviesCard
          url={item.url}
          title={item.title}
          key={item.id || Math.random()}
          rate={item.rate}
          year={item.year}
          genres={item.genres}
        ></SearchMoviesCard>
      ))}
      <h2 className="mb-5 text-lg font-bold">Recent</h2>
      {recentList?.map((item) => (
        <SearchMoviesCard
          url={item.poster_path || item.backdrop_path}
          title={item.original_title || item.name}
          key={item.id}
          rate={item.vote_average.toFixed(1)}
          year={item.release_date || item.first_air_date}
          genres={item.genres}
        ></SearchMoviesCard>
      ))}
    </div>
  );
};

export default SearchMenus;
