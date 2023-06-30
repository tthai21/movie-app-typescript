import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem: React.FC<{ title: string; svg: string; link: string }> = ({
  title,
  svg,
  link,
}) => {
  return (
    <>
      <NavLink to={link} className="flex gap-4 m-4 hover:text-primary ">
        <img src={svg} alt={title} className="w-7" />
        <h2>{title}</h2>
      </NavLink>
    </>
  );
};

export default MenuItem;
