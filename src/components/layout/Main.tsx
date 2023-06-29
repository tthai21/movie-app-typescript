import React, { Fragment } from "react";
import Header from "./Header";
import UserMenus from "./UserMenus";
import SearchMenus from "./SearchMenus";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Fragment>
      <header className="flex">
        <UserMenus></UserMenus>
        <div className="w-[70%]">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <SearchMenus></SearchMenus>
      </header>
    </Fragment>
  );
};

export default Main;
