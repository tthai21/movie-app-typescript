import React from "react";

const MovieBannerList: React.FC<{ item: any[] }> = (props) => {
  const item: any = props?.item;
  return (
    <div className="relative w-full h-full bg-white rounded-lg">
      <div className="absolute rounded-lg opacity-50 overlay bg-gradient-to-t from-black to-black"></div>
      <img
        className="object-cover w-full h-full rounded-lg "
        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
        alt=""
      />
      <div className="absolute w-full text-white left-10 bottom-5">
        <h2 className="mb-5 text-3xl font-bold">{item?.title}</h2>
        <div className="flex items-center mb-5 gap-x-3">
          <span className="px-4 py-2 text-sm font-bold border border-white rounded-lg ">
            Adventure
          </span>
          <span className="px-4 py-2 text-sm font-bold border border-white rounded-lg">
            Hero
          </span>
          <span className="px-4 py-2 text-sm font-bold border border-white rounded-lg">
            Movie
          </span>
        </div>
        <div>
          <button className="px-4 py-2 text-base font-bold rounded-lg bg-primary">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieBannerList;
