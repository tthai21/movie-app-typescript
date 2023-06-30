import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex py-6 text-xl text-white gap-x-5 page-container">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
      >
        Movies
      </NavLink>
      <NavLink
        to="/tv-show"
        className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
      >
        Tv Show
      </NavLink>
    </div>
  );
};

export default Header;
