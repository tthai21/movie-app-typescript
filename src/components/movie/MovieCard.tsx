import { FC } from "react";
// import StarLogo from "../../logo/star-icon.svg";

const MovieCard: FC<{
  url: string;
  title: string;
  year: string;
  rate: number;
}> = (props) => {
  return (
    <div className="movie-card rounded-lg bg-slate-700 p-2  ">
      <img
        src={`https://image.tmdb.org/t/p/original${props.url}`}
        alt=""
        className="w-full h-[180px] rounded-lg object-cover mb-3"
      />
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <div className="year-star flex justify-between w-full mb-10 ">
        <span className="opacity-50">{new Date(props.year).getFullYear()}</span>
        <div className="">
          <span className="opacity-50">{props.rate}</span>
          {/* <img src={StarLogo} alt="star-logo" /> */}
        </div>
      </div>
      <button className="bottom-2 bg-primary text-base font-bold px-4 py-2 rounded-lg box-border w-full ">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
