import React, { Fragment } from "react";
import MovieBannerList from "./MovieBannerList";
import MobileMenus from "../layout/User/MobileMenus";

const MovieBanner: React.FC<{ bannerMovie: any[] }> = (props) => {
  const bannerItem = props.bannerMovie?.slice(-1);
  return (
    <Fragment>
      <MobileMenus></MobileMenus>
      {bannerItem && <MovieBannerList item={bannerItem[0]}></MovieBannerList>}
    </Fragment>
  );
};

export default MovieBanner;
