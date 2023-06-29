import { Fragment, useEffect } from "react";
import MovieList from "./components/movie/MovieList";
import { useDispatch } from "react-redux";
import { RootState } from "./redux-toolkit/store";
import { api_key, movie_db_url } from "./config";
import axios, { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { nowPlayingUpdateState } from "./redux-toolkit/nowPlayingSlice";
import { topTrendingUpdateState } from "./redux-toolkit/topTrendingSlice";
import { upComingUpdateState } from "./redux-toolkit/upComingSlice";
import MovieBanner from "./components/movie/MovieBanner";

function App() {
  const nowPlayingList: any[] = useSelector(
    (state: RootState) => state.nowPlaying.moviesList
  );
  const topTrendingList: any[] = useSelector(
    (state: RootState) => state.topTrending.moviesList
  );
  const upComingList: any[] = useSelector(
    (state: RootState) => state.upComing.moviesList
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        // Fetch now playing
        const nowPlaying: AxiosResponse = await axios.get(
          `${movie_db_url}popular?api_key=${api_key}&page=1`
        );
        const nowPlayingList: any[] = nowPlaying.data.results;
        dispatch(nowPlayingUpdateState(nowPlayingList));

        // Fetch top trending
        const topTrending: AxiosResponse = await axios.get(
          `${movie_db_url}/top_rated?api_key=${api_key}&page=1`
        );
        const topTrendingList: any[] = topTrending.data.results;
        dispatch(topTrendingUpdateState(topTrendingList));

        // Fetch up coming
        const upComing: AxiosResponse = await axios.get(
          `${movie_db_url}/upcoming?api_key=${api_key}&page=1`
        );
        const upComingList: any[] = upComing.data.results;
        dispatch(upComingUpdateState(upComingList));
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchNowPlaying();
  }, [dispatch]);
  console.log(nowPlayingList);

  return (
    <Fragment>
      <header className="flex header">
        <div className="text-white body-left w-[240px] bg-user h-screen sticky top-0">
          Watch!!!
        </div>
        <div className="body-main  w-[70%]">
          <div className="flex py-6 text-xl text-white gap-x-5 page-container">
            <span className="text-primary">Home</span>
            <span>Movies</span>
          </div>
          <div className="banner page-container h-[300px] mb-20 overflow-hidden ">
            <MovieBanner />
          </div>

          <MovieList
            moviesList={nowPlayingList}
            header="Now playing"
          ></MovieList>
          <MovieList
            moviesList={topTrendingList}
            header="Top trending"
          ></MovieList>
          <MovieList moviesList={upComingList} header="Up coming"></MovieList>

          {/* right menus */}
        </div>
        <div className="sticky text-white top-0 body-right w-[420px] bg-user h-screen ">
          Search bar
        </div>
      </header>
    </Fragment>
  );
}

export default App;
