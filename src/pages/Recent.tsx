import React, { Fragment, useEffect, useState } from "react";
import MovieBanner from "../components/movie/MovieBanner";
import MovieList from "../components/movie/MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import FetchMoviesData from "../redux-toolkit/FetchMoviesData";

const RecentPage: React.FC = () => {
  const [recentList, setRecentList] = useState<any[]>([]);

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

  FetchMoviesData();
  return (
    <Fragment>
      <div className="banner page-container h-[300px] mb-20 mt-20 ">
        <MovieBanner bannerMovie={recentList} />
      </div>
      <MovieList
        moviesList={recentList}
        header="Now playing"
        path="now-playing"
      ></MovieList>
    </Fragment>
  );
};

export default RecentPage;
