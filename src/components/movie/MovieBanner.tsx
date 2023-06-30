import React, { Fragment } from "react";
import MovieBannerList from "./MovieBannerList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-toolkit/store";

const MovieBanner = () => {
  const nowPlayingList: any[] = useSelector(
    (state: RootState) => state.nowPlaying.moviesList
  );
  const bannerItem = nowPlayingList?.slice(-1);
  if (bannerItem) {
    const firstItem = bannerItem[0];
    console.log(firstItem);
  }
  return (
    <Fragment>
      {bannerItem && <MovieBannerList item={bannerItem[0]}></MovieBannerList>}
    </Fragment>
  );
};

export default MovieBanner;
