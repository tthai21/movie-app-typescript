import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { api_key, movie_db_url, tmdb_url, tvdb_url } from "../config";
import { topTrendingUpdateState } from "./topTrendingSlice";
import { nowPlayingUpdateState } from "./nowPlayingSlice";
import { upComingUpdateState } from "./upComingSlice";
import { tvEpisodeUpdateState } from "./tvEpisodeSlice";
import { genresUpdateState } from "./genresList";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const FetchMoviesData = (): void => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(
    (state: RootState) => state.favoriteList.favoriteList
  );
  const favoriteListId = favoriteList.map((item) => item.id);
  useEffect(() => {
    const fetchNowPlaying = async (): Promise<void> => {
      let nowPlaying: AxiosResponse;
      let topTrending: AxiosResponse;
      let upComing: AxiosResponse;
      let tvEpisode: AxiosResponse;
      let genres: AxiosResponse;
      try {
        // Fetch genres list and save to redux store
        genres = await axios.get(
          `${tmdb_url}genre/movie/list?api_key=${api_key}`
        );
        const genresList = genres.data;
        dispatch(genresUpdateState(genresList.genres));

        // Fetch now playing and save to redux store
        nowPlaying = await axios.get(
          `${movie_db_url}popular?api_key=${api_key}&page=1`
        );
        const nowPlayingList: movieType[] = await nowPlaying.data.results;
        const newNowPlayList = nowPlayingList.map((item) => ({
          ...item,
          isMovie: true,
          isFavorite: false,
        }));
        if (favoriteListId.length > 0) {
          const checkedPlayList = newNowPlayList.map((item) => ({
            ...item,
            isFavorite: favoriteListId.includes(item.id),
          }));

          dispatch(nowPlayingUpdateState(checkedPlayList));
        } else {
          dispatch(nowPlayingUpdateState(newNowPlayList));
        }

        // Fetch top trending and save to redux store
        topTrending = await axios.get(
          `${movie_db_url}/top_rated?api_key=${api_key}&page=1`
        );
        const topTrendingList: movieType[] = await topTrending.data.results;
        const newTopTrendingList = topTrendingList.map((item) => ({
          ...item,
          isMovie: true,
          isFavorite: false,
        }));
        dispatch(topTrendingUpdateState(newTopTrendingList));

        // Fetch up coming and save to redux store
        upComing = await axios.get(
          `${movie_db_url}/upcoming?api_key=${api_key}&page=1`
        );
        const upComingList: movieType[] = await upComing.data.results;
        const newUpComingList = upComingList.map((item) => ({
          ...item,
          isMovie: true,
          isFavorite: false,
        }));
        dispatch(upComingUpdateState(newUpComingList));

        // Fetch Tv episode and save to redux store
        tvEpisode = await axios.get(
          `${tvdb_url}/popular?api_key=${api_key}&page=1`
        );
        const tvEpisodeList: any[] = await tvEpisode.data.results;
        const newTvEpisodeList = tvEpisodeList.map((item) => ({
          ...item,
          isMovie: false,
          isFavorite: false,
        }));
        dispatch(tvEpisodeUpdateState(newTvEpisodeList));
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default FetchMoviesData;
