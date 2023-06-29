import { Fragment, useEffect } from "react";
import MovieList from "./components/movie/MovieList";
import { useDispatch } from "react-redux";
import { RootState } from "./redux-toolkit/store";
import { api_key, movie_db_url } from "./config";
import axios from "axios";
import { useSelector } from "react-redux";
import { nowPlayingUpdateState } from "./redux-toolkit/nowPlayingSlice";
import { topTrendingUpdateState } from "./redux-toolkit/topTrendingSlice";
import { upComingUpdateState } from "./redux-toolkit/upComingSlice";

function App() {
  const nowPlayingList = useSelector(
    (state: RootState) => state.nowPlaying.moviesList
  );
  const topTrendingList = useSelector(
    (state: RootState) => state.topTrending.moviesList
  );
  const upComingList = useSelector(
    (state: RootState) => state.upComing.moviesList
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        // Fetch now playing
        const nowPlaying = await axios.get(
          `${movie_db_url}popular?api_key=${api_key}&page=1`
        );
        const nowPlayingList: any[] = nowPlaying.data.results;
        dispatch(nowPlayingUpdateState(nowPlayingList));

        // Fetch top trending
        const topTrending = await axios.get(
          `${movie_db_url}/top_rated?api_key=${api_key}&page=1`
        );
        const topTrendingList: any[] = topTrending.data.results;
        dispatch(topTrendingUpdateState(topTrendingList));

        // Fetch up coming
        const upComing = await axios.get(
          `${movie_db_url}/top_rated?api_key=${api_key}&page=1`
        );
        const upComingList: any[] = upComing.data.results;
        dispatch(upComingUpdateState(upComingList));
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchNowPlaying();
  }, [dispatch]);

  return (
    <Fragment>
      <header className="header flex">
        <div className="text-white body-left w-[240px] bg-user h-screen sticky top-0">
          Watch!!!
        </div>
        <div className="body-main  w-[70%]">
          <div className="flex gap-x-5 py-6 text-white page-container text-xl">
            <span className="text-primary">Home</span>
            <span>Movies</span>
          </div>
          <section className="banner page-container h-[300px] mb-20 ">
            <div className="w-full h-full bg-white rounded-lg relative">
              <div className="overlay absolute inset-0  bg-gradient-to-t from-black to-gray-200 opacity-20 rounded-lg"></div>
              <img
                className="object-cover w-full h-full rounded-lg "
                src="https://helios-i.mashable.com/imagery/articles/033kBmLCuB3k8dcc8kpMftI/hero-image.fill.size_1248x702.v1623370357.jpg"
                alt=""
              />
              <div className="absolute left-10 bottom-5 w-full text-white">
                <h2 className="font-bold text-3xl mb-5">The Adventure</h2>
                <div className="flex items-center gap-x-3 mb-5">
                  <span className="border border-white px-4 py-2 rounded-lg font-bold text-sm ">
                    Adventure
                  </span>
                  <span className="border border-white px-4 py-2 rounded-lg font-bold text-sm">
                    Hero
                  </span>
                  <span className="border border-white px-4 py-2 rounded-lg font-bold text-sm">
                    Movie
                  </span>
                </div>
                <div>
                  <button className="bg-primary text-base font-bold px-4 py-2 rounded-lg">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </section>
          {}
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
