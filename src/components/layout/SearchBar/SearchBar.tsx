import React from "react";
import Search from "../../../logo/Search.svg";

const SearchBar: React.FC = () => {
  return (
    <div className="w-[80%] flex relative ">
      <input
        type="text"
        placeholder="Quick search"
        className="w-full px-4 py-2 mx-auto border border-white rounded-lg bg-slate-900"
      />
      <img
        src={Search}
        alt="search"
        className="absolute w-6 left-[85%] bottom-[20%] cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
