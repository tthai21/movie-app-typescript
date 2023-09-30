import React, { Fragment } from "react";
import MovieBanner from "../components/movie/MovieBanner";
import MovieList from "../components/movie/MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import FetchMoviesData from "../redux-toolkit/FetchMoviesData";

const SearchPage: React.FC = () => {
  const searchList: any[] = useSelector(
    (state: RootState) => state.search.searchList
  );
  console.log("🚀 ~ file: SearchPage.tsx:12 ~ searchList:", searchList);

  FetchMoviesData();
  return (
    <Fragment>
      <div className="banner page-container h-[300px] mb-20 mt-20 ">
        <MovieBanner bannerMovie={searchList} />
      </div>
      <MovieList
        moviesList={searchList}
        header="Now playing"
        path="now-playing"
      ></MovieList>
    </Fragment>
  );
};

export default SearchPage;
