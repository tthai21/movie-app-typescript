import React from "react";
import StarLogo from "../../../logo/star-icon.svg";
import PlayLogo from "../../../logo/play.svg";

const PopularMovies: React.FC<{
  url: string;
  title: string;
  year: string;
  rate: number;
}> = (props) => {
  return (
    <div className="flex w-full p-2 mb-5 rounded-lg movie-card bg-slate-700">
      <div className="w-[100px] h-[100px] object-cover">
        <img
          src={`https://image.tmdb.org/t/p/original${props.url}`}
          alt=""
          className="object-cover w-full mb-3 rounded-lg"
        />
      </div>
      <div>
        <h3 className="mb-5 text-xl font-bold ">{props.title}</h3>
        <div className="flex justify-between mb-10 year-star ">
          <span className="opacity-50">
            {new Date(props.year).getFullYear()}
          </span>
          <div className=" flex w-[7%]">
            <span className="mr-1 opacity-50">{props.rate}</span>
            <img src={StarLogo} alt="star-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
