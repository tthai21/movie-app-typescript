import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import FetchMoviesData from "../redux-toolkit/FetchMoviesData";
import MoviesRender from "./MoviesRender";

const MoviesRenderPage: React.FC<{ moviesType: string }> = (props) => {
  const moviesType = props.moviesType;
  const nowPlayingList: any[] = useSelector(
    (state: RootState) => state.nowPlaying.moviesList
  );
  const topTrendingList: any[] = useSelector(
    (state: RootState) => state.topTrending.moviesList
  );
  const upComingList: any[] = useSelector(
    (state: RootState) => state.upComing.moviesList
  );
  const tvEpisode: any[] = useSelector(
    (state: RootState) => state.tvEpisode.moviesList
  );
  FetchMoviesData();
  switch (moviesType) {
    case "now-playing":
      return (
        <MoviesRender
          moviesList={nowPlayingList}
          header="Now Playing"
          path="now-playing"
        ></MoviesRender>
      );

    case "top-trending":
      return (
        <MoviesRender
          moviesList={topTrendingList}
          header="Top Trending"
          path="top-trending"
        ></MoviesRender>
      );

    case "up-coming":
      return (
        <MoviesRender
          moviesList={upComingList}
          header="Up Coming "
          path="up-coming"
        ></MoviesRender>
      );

    case "tv-episode":
      return (
        <MoviesRender
          moviesList={tvEpisode}
          header="Tv Episode "
          path="tv-episode"
        ></MoviesRender>
      );
    default:
      return null;
  }
};

export default MoviesRenderPage;
