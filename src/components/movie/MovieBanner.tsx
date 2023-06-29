import React from "react";

const MovieBanner: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-white rounded-lg">
      <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-black to-gray-200 opacity-20"></div>
      <img
        className="object-cover w-full h-full rounded-lg "
        src="https://helios-i.mashable.com/imagery/articles/033kBmLCuB3k8dcc8kpMftI/hero-image.fill.size_1248x702.v1623370357.jpg"
        alt=""
      />
      <div className="absolute w-full text-white left-10 bottom-5">
        <h2 className="mb-5 text-3xl font-bold">The Adventure: End Game</h2>
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

export default MovieBanner;
