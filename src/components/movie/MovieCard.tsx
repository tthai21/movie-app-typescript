import { FC, useEffect, useState } from "react";
import StarLogo from "../../logo/star-icon.svg";
import PlayLogo from "../../logo/play.svg";
import { useNavigate } from "react-router-dom";
import Heart from "../../logo/Heart.svg";
import Heart_Primary from "../../logo/Heart_Primary.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-toolkit/store";
import { favoriteListUpdateState } from "../../redux-toolkit/favoriteList";
import axios from "../../utils/axios";
import { current } from "@reduxjs/toolkit";

const MovieCard: FC<{
  id: number;
  url: string;
  title: string;
  year: string;
  rate: number;
  isMovie: boolean;
  genreId: number[];
  isFavorite: boolean;
}> = (props) => {
  const genresList = useSelector((state: RootState) => state.genres.genresList);
  const [isFavorite, setIsFavorite] = useState<boolean>(props.isFavorite);
  useEffect(() => {
    setIsFavorite(props.isFavorite);
  }, [props.isFavorite]);

  const dispatch = useDispatch();
  const userEmail = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();

  const navigateHandler = () => {
    if (props.isMovie) {
      navigate(`/movie/${props.id}`);
    } else {
      navigate(`/tv/${props.id}`);
    }
  };

  const addFavorite = async () => {
    if (userEmail) {
      setIsFavorite((favorites) => !favorites);
      let currentMoviesGenres = [];
      for (let i = 0; i < props.genreId?.length; i++) {
        const currentID = props.genreId[i];
        const matchingGenres = genresList.find((item) => item.id === currentID);
        if (matchingGenres) {
          currentMoviesGenres.push(matchingGenres);
        }
      }

      const currentMovie: {
        id: number;
        url: string;
        title: string;
        rate: number;
        year: number;
        genres: any[] | null;
        email: string | null;
      } = {
        email: userEmail,
        id: props.id,
        url: props.url,
        title: props.title,
        rate: Math.round(props.rate),
        year: new Date(props.year).getFullYear(),
        genres: currentMoviesGenres || null,
      };

      const currentMovieRedux: {
        id: number;
        url: string;
        title: string;
        rate: number;
        year: number;
        genres: any[] | null;
        email: string | null;
        isFavorite: boolean;
      } = {
        email: userEmail,
        id: props.id,
        url: props.url,
        title: props.title,
        rate: props.rate,
        year: new Date(props.year).getFullYear(),
        genres: currentMoviesGenres || null,
        isFavorite: isFavorite,
      };

      dispatch(favoriteListUpdateState(currentMovieRedux));
      try {
        if (currentMovieRedux.isFavorite === false) {
          await axios.post(
            "/api/Favorite/addFavorite",
            JSON.stringify(currentMovie),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else {
          await axios.post(
            "/api/Favorite/removeFavorite",
            JSON.stringify(currentMovie),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please login to add movie to favorite list");
    }
  };

  return (
    <div className="relative object-cover w-full p-2 rounded-lg movie-card bg-slate-700">
      <img
        src={`https://image.tmdb.org/t/p/original${props.url}`}
        alt=""
        className="w-full h-[180px] rounded-lg object-cover mb-3 relative "
      />
      {isFavorite ? (
        <img
          src={Heart_Primary}
          alt="heart"
          className="absolute z-50 w-10 cursor-pointer right-5 top-5"
          onClick={addFavorite}
        />
      ) : (
        <img
          src={Heart}
          alt="heart"
          className="absolute z-50 w-10 cursor-pointer right-5 top-5"
          onClick={addFavorite}
        />
      )}

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
        <div className=" flex ">
          <div className="flex gap-3 mx-auto">
            <span>Watch now</span>
            <img src={PlayLogo} alt="playLogo" className="w-6" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default MovieCard;
