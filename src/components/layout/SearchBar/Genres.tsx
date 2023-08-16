import React from "react";

const Genres: React.FC<{ genres: string }> = (props) => {
  return (
    <div className="px-2 py-1 text-xs border border-white rounded-lg">
      {props.genres}
    </div>
  );
};

export default Genres;
