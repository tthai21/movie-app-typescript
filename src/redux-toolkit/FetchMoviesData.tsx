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
    const fetchNowPlaying = async (): Promise<void> => {
      let nowPlaying: AxiosResponse;
      let topTrending: AxiosResponse;
      let upComing: AxiosResponse;
      let tvEpisode: AxiosResponse;
      try {
        // Fetch now playing and save to redux store
        nowPlaying = await axios.get(
          `${movie_db_url}popular?api_key=${api_key}&page=1`
        );
        const nowPlayingList: movieType[] = await nowPlaying.data.results;
        dispatch(nowPlayingUpdateState(nowPlayingList));

        // Fetch top trending and save to redux store
        topTrending = await axios.get(
          `${movie_db_url}/top_rated?api_key=${api_key}&page=1`
        );
        const topTrendingList: movieType[] = await topTrending.data.results;
        dispatch(topTrendingUpdateState(topTrendingList));

        // Fetch up coming and save to redux store
        upComing = await axios.get(
          `${movie_db_url}/upcoming?api_key=${api_key}&page=1`
        );
        const upComingList: movieType[] = await upComing.data.results;
        dispatch(upComingUpdateState(upComingList));

        // Fetch Tv episode and save to redux store
        tvEpisode = await axios.get(
          `${tvdb_url}/popular?api_key=${api_key}&page=1`
        );
        const tvEpisodeList: any[] = await tvEpisode.data.results;
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
