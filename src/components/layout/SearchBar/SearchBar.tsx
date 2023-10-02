import React, { useEffect, useState } from "react";
import Search from "../../../logo/Search.svg";
import { api_key } from "../../../config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { searchUpdateState } from "../../../redux-toolkit/searchMovieSlice";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const search_url: string = "https://api.themoviedb.org/3/search/movie?";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const res = await axios.get(
      `${search_url}api_key=${api_key}&page=1&include_adult=false&query=${searchTerm}`
    );
    const searchList: any[] = res.data.results;
    dispatch(searchUpdateState(searchList));
    navigate("/search/:id");
  };

  return (
    <div className="w-[80%] flex relative ">
      <input
        type="text"
        placeholder="Quick search"
        className="w-full px-4 py-2 mx-auto border border-white rounded-lg bg-slate-900"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src={Search}
        alt="search"
        className="absolute w-6 left-[85%] bottom-[20%] cursor-pointer "
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
