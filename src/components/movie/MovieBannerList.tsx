import React from "react";

const MovieBannerList: React.FC<{ item: any[] }> = (props) => {
  const item: any = props?.item;
  return (
    <div className="relative w-full h-full bg-white rounded-lg mb-20">
      <div className="absolute rounded-lg opacity-50 overlay bg-gradient-to-t from-black to-black mb-20"></div>
      <img
        className="object-cover w-full h-full rounded-lg "
        src={`https://image.tmdb.org/t/p/original/${
          item?.backdrop_path || item?.url
        }`}
        alt=""
      />
      <div className="absolute w-full text-white left-10 bottom-5">
        <h2 className="mb-5 text-3xl font-bold">{item?.title || item?.name}</h2>

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
