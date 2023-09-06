import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_key, tmdb_api, tmdb_url } from "../config";
import axios, { AxiosResponse } from "axios";
import Casting from "../components/movie/Casting";
import Trailer from "../components/movie/Trailer";
import { useDispatch } from "react-redux";
import { recentUpdateState } from "../redux-toolkit/recentSlice";

const MovieDetailsPage: React.FC<{ movie: string }> = ({ movie }) => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const [currentMovie, setCurrentMovie] = useState<any>(null);
  const [recentList, setRecentList] = useState<any[]>([]);
  const recentJSON: string | null = localStorage.getItem("recent");
  useEffect(() => {
    const fetchNowPlaying = async (): Promise<void> => {
      let res: AxiosResponse;
      try {
        res = await axios.get(`${tmdb_url}${movie}/${id}?api_key=${api_key}`);
        setCurrentMovie(res.data);
        if (recentJSON) {
          // console.log("Storage");
          const recent: any[] = JSON.parse(recentJSON);
          // console.log(recent);
          const exitedItem: any = recent?.find(
            (item) => item.id === res.data.id
          );
          if (!exitedItem) {
            recent.unshift(res.data);
            dispatch(recentUpdateState(recent));
          }
        } else {
          recentList.unshift(res.data);
          dispatch(recentUpdateState(recentList));
          console.log("no storage");
        }

        // if (a === undefined) {
        // }
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (currentMovie === null) {
    return null;
  } else {
    return (
      <>
        <div className="mt-10 page-container">
          {/* backdrop */}
          <div className="hidden lg:block lg:w-full lg:h-[600px] lg:relative">
            <div className="bg-black lg:absolute lg:inset-0 opacity-70"></div>
            <div
              className="lg:w-full lg:h-full lg:bg-cover lg:bg-no-repeat"
              style={{
                backgroundImage: `url(${tmdb_api.photoUrl(
                  currentMovie.backdrop_path
                )})`,
              }}
            ></div>
          </div>

          {/* Movie Image */}
          <div className="w-f lg:h-[400px] lg:max-w-[800px] mx-auto lg:-mt-[180px] relative z-1 mb-10">
            <img
              src={tmdb_api.photoUrl(currentMovie.backdrop_path)}
              className="object-top w-full h-full rounded-lg"
              alt=""
            />
          </div>

          {/* Movie Title */}
          <div>
            <h1 className="mb-10 text-4xl font-bold text-center text-white">
              {currentMovie.name || currentMovie.title}
            </h1>
          </div>

          {/* Movie Tag */}
          <div className="flex items-center justify-center">
            <div className="grid items-center justify-center grid-cols-2 mb-10 text-white sm:flex gap-x-8 ">
              {currentMovie?.genres.map(
                (item: { id: number; name: string }) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-center px-2 mb-4 text-lg border rounded-lg border-slate-900 bg-slate-700"
                  >
                    {item.name}
                  </div>
                )
              )}
            </div>
          </div>

          {/* OverView */}
          <div className="lg:page-container mb-10 lg:w-[600px]">
            <p className="leading-relaxed text-center text-white">
              {currentMovie.overview}
            </p>
          </div>

          {/* casts */}
          <div className="flex items-center justify-center gap-x-5">
            <Casting movie={movie}></Casting>
          </div>

          {/* Trailer */}
          <div className="lg:w-full">
            <Trailer movie={movie}></Trailer>
          </div>
        </div>
      </>
    );
  }
};

export default MovieDetailsPage;
