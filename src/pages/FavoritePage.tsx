import React, { Fragment } from "react";
import MovieBanner from "../components/movie/MovieBanner";
import MovieList from "../components/movie/MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import FetchMoviesData from "../redux-toolkit/FetchMoviesData";

const FavoritePage: React.FC = () => {
  const favoriteList: any[] = useSelector(
    (state: RootState) => state.favoriteList.favoriteList
  );
  const favoriteListReversed = favoriteList.map(
    (element, index, array) => array[array.length - 1 - index]
  );
  const newFavoriteListReversed = favoriteListReversed.map((item) => ({
    ...item,
    isFavorite: true,
  }));
  FetchMoviesData();
  return (
    <Fragment>
      <div className="banner page-container h-[300px] mb-20 mt-20 ">
        <MovieBanner bannerMovie={favoriteListReversed} />
      </div>
      <MovieList
        moviesList={newFavoriteListReversed}
        header="Now playing"
        path="now-playing"
      ></MovieList>
    </Fragment>
  );
};

export default FavoritePage;
