import { FC } from "react";
import StarLogo from "../../logo/star-icon.svg";
import PlayLogo from "../../logo/play.svg";
import { useNavigate } from "react-router-dom";

const MovieCard: FC<{
  id: number;
  url: string;
  title: string;
  year: string;
  rate: number;
  isMovie: boolean;
}> = (props) => {
  const navigate = useNavigate();
  console.log(props.isMovie);

  const navigateHandler = () => {
    if (props.isMovie) {
      navigate(`/movie/${props.id}`);
    } else {
      navigate(`/tv/${props.id}`);
    }
  };
  return (
    <div className="object-cover w-full p-2 rounded-lg movie-card bg-slate-700 ">
      <img
        src={`https://image.tmdb.org/t/p/original${props.url}`}
        alt=""
        className="w-full h-[180px] rounded-lg object-cover mb-3"
      />
      <h3 className="h-8 mb-5 text-xl font-bold">{props.title}</h3>
      <div className="flex justify-between w-[90%] mb-10 year-star ">
        <span className="opacity-50">{new Date(props.year).getFullYear()}</span>
        <div className=" flex w-[7%]">
          <span className="mr-1 opacity-50">{props.rate}</span>
          <img src={StarLogo} alt="star-logo" />
        </div>
      </div>
      <button
        onClick={navigateHandler}
        className="box-border w-full gap-5 px-4 py-2 text-base font-bold rounded-lg bottom-2 bg-primary"
      >
        <div className="flex gap-3 ml-14">
          <span>Watch now</span>
          <img src={PlayLogo} alt="playLogo" className="w-6" />
        </div>
      </button>
    </div>
  );
};

export default MovieCard;
