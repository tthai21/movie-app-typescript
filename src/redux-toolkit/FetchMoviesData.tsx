import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { api_key, movie_db_url, tvdb_url } from "../config";
import { topTrendingUpdateState } from "./topTrendingSlice";
import { nowPlayingUpdateState } from "./nowPlayingSlice";
import { upComingUpdateState } from "./upComingSlice";
import { tvEpisodeUpdateState } from "./tvEpisodeSlice";

const FetchMoviesData = (): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        // Fetch now playing
        const nowPlaying: AxiosResponse = await axios.get(
          `${movie_db_url}popular?api_key=${api_key}&page=1`
        );
        const nowPlayingList: movieType[] = nowPlaying.data.results;
        dispatch(nowPlayingUpdateState(nowPlayingList));

        // Fetch top trending
        const topTrending: AxiosResponse = await axios.get(
          `${movie_db_url}/top_rated?api_key=${api_key}&page=1`
        );
        const topTrendingList: movieType[] = topTrending.data.results;
        dispatch(topTrendingUpdateState(topTrendingList));

        // Fetch up coming
        const upComing: AxiosResponse = await axios.get(
          `${movie_db_url}/upcoming?api_key=${api_key}&page=1`
        );
        const upComingList: movieType[] = upComing.data.results;
        dispatch(upComingUpdateState(upComingList));

        // Fetch Tv episode
        const tvEpisode: AxiosResponse = await axios.get(
          `${tvdb_url}/popular?api_key=${api_key}&page=1`
        );
        const tvEpisodeList: any[] = tvEpisode.data.results;
        dispatch(tvEpisodeUpdateState(tvEpisodeList));
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default FetchMoviesData;
