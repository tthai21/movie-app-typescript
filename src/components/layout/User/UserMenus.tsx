import React, { useState } from "react";
import MenuItem from "../MenuItem";
import MoviesSvg from "../../../logo/movie.svg";
import Notification from "../../../logo/Notification.svg";
import Community from "../../../logo/community.svg";
import User from "../../../logo/user.svg";
import NowPlaying from "../../../logo/nowPlaying.svg";
import TopTrending from "../../../logo/topTrending.svg";
import UpComing from "../../../logo/upComing.svg";
import Recent from "../../../logo/recent.svg";
import Favorite from "../../../logo/favorite.svg";
import UserLogo from "../User/UserLogo";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-toolkit/store";
import SearchBar from "../SearchBar/SearchBar";
import PageLogo from "./PageLogo";
import { NavLink } from "react-router-dom";
const UserMenus: React.FC = () => {
  const user: any = useSelector((state: RootState) => state.user.user);
  const userList: Array<{ title: string; svg: string; link: string }> = [
    user
      ? { title: "Logout", svg: User, link: "/logout" }
      : { title: "Login", svg: User, link: "/login" },
    { title: "Community", svg: Community, link: "/community" },
    { title: "Notification", svg: Notification, link: "/notificaton" },
  ];
  const menusList: Array<{ title: string; svg: string; link: string }> = [
    { title: "Movies", svg: MoviesSvg, link: "/" },
    { title: "Now playing", svg: NowPlaying, link: "/now-playing" },
    { title: "Top Trending", svg: TopTrending, link: "/top-trending" },
    { title: "Up Coming", svg: UpComing, link: "/up-coming" },
  ];
  const libraryList: Array<{ title: string; svg: string; link: string }> = [
    { title: "Favorite", svg: Favorite, link: "/favorite" },
    { title: "Recent", svg: Recent, link: "/recent" },
  ];



  return (
    <>
      
      {/* Desktop */}
      <div className="text-white body-left w-[240px] bg-user h-screen sticky top-0 hidden md:block">
        <PageLogo></PageLogo>
        <div className="lg:hidden m-5 mb-10 w-full ">
          <SearchBar></SearchBar>
        </div>
        <div>
          <h6 className="text-xs text-gray-500">MENU</h6>
          {userList.map((item) => (
            <MenuItem
              key={item.title}
              title={item.title}
              svg={item.svg}
              link={item.link}
            ></MenuItem>
          ))}
        </div>
        <div>
          <h6 className="text-xs text-gray-500">CATEGORIES</h6>
          {menusList.map((item) => (
            <MenuItem
              key={item.title}
              title={item.title}
              svg={item.svg}
              link={item.link}
            ></MenuItem>
          ))}
        </div>
        <div>
          <h6 className="text-xs text-gray-500">LIBRARY</h6>
          {libraryList.map((item) => (
            <MenuItem
              key={item.title}
              title={item.title}
              svg={item.svg}
              link={item.link}
            ></MenuItem>
          ))}
        </div>
        <UserLogo></UserLogo>
      </div>
    </>
  );
};

export default UserMenus;
