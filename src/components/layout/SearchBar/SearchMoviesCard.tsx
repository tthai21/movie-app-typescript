import React from "react";
import StarLogo from "../../../logo/star-icon.svg";
import Genres from "./Genres";

const SearchMoviesCard: React.FC<{
  url: string;
  title: string;
  year: string;
  rate: number;
  genres: { id: number; name: string }[];
}> = (props) => {
  return (
    <div className="grid w-full grid-cols-3 p-2 mb-5 rounded-lg bg-slate-700">
      <div className="w-[100px] h-[100px] object-cover">
        <img
          src={`https://image.tmdb.org/t/p/original${props.url}`}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="relative col-span-2 mx-2">
        <h3 className="text-xl font-bold ">{props.title}</h3>
        <div className="grid w-full grid-cols-2 year-star">
          <span className="opacity-50">
            {new Date(props.year).getFullYear()}
          </span>
          <div className=" flex w-[7%] ">
            <span className="mr-1 opacity-50 ">{props.rate}</span>
            <img src={StarLogo} alt="star-logo" className="float-right" />
          </div>
        </div>
        <div className="absolute flex gap-3 bottom-1 ">
          {props.genres?.slice(0, 2).map((genres, index) => (
            <Genres key={index} genres={genres.name}></Genres>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMoviesCard;
