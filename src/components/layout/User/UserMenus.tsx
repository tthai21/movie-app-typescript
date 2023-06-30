import React from "react";
import MenuItem from "../MenuItem";
import MoviesSvg from "../../../logo/movie.svg";
import Notification from "../../../logo/Notification.svg";
import Community from "../../../logo/community.svg";
import User from "../../../logo/user.svg";
import Tv from "../../../logo/tv.svg";
import NowPlaying from "../../../logo/nowPlaying.svg";
import TopTrending from "../../../logo/topTrending.svg";
import UpComing from "../../../logo/upComing.svg";
import Recent from "../../../logo/recent.svg";
import Favorite from "../../../logo/favorite.svg";
import UserLogo from "../User/UserLogo";
const UserMenus: React.FC = () => {
  const userList: Array<{ title: string; svg: string; link: string }> = [
    { title: "Login" || "Sign out", svg: User, link: "/login" },
    { title: "Community", svg: Community, link: "/community" },
    { title: "Notification", svg: Notification, link: "/notificaton" },
  ];
  const menusList: Array<{ title: string; svg: string; link: string }> = [
    { title: "Movies", svg: MoviesSvg, link: "/" },
    { title: "Tv Episode", svg: Tv, link: "/tv-episode" },
    { title: "Now playing", svg: NowPlaying, link: "/now-playing" },
    { title: "Top Trending", svg: TopTrending, link: "/top-trending" },
    { title: "Up Coming", svg: UpComing, link: "/up-coming" },
  ];
  const libraryList: Array<{ title: string; svg: string; link: string }> = [
    { title: "Favorite", svg: Favorite, link: "/favorite" },
    { title: "Recent", svg: Recent, link: "/recent" },
  ];

  return (
    <div className="text-white body-left w-[240px] bg-user h-screen sticky top-0">
      <div className="flex gap-4 mt-10 mb-20 text-xl font-bold text-center">
        <span className="ml-7">FakeFlix</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="pink"
          className="w-6 h-6 fill-current text-primary"
        >
          <path
            strokeLinecap="round"
            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
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
  );
};

export default UserMenus;
