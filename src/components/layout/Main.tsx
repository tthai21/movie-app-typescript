import React, { Fragment } from "react";
// import Header from "./Header";
import UserMenus from "./User/UserMenus";
import { Outlet } from "react-router-dom";
import SearchMenus from "./SearchBar/SearchMenus";

const Main: React.FC = () => {
  return (
    <Fragment>
      <header className="flex">
        <UserMenus></UserMenus>
        <div className="w-[70%]">
          {/* <Header></Header> */}
          <Outlet></Outlet>
        </div>
        <SearchMenus></SearchMenus>
      </header>
    </Fragment>
  );
};

export default Main;
