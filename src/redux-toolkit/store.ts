import { configureStore } from "@reduxjs/toolkit";
import { nowPlayingSlice } from "./nowPlayingSlice";
import { topTrendingSlice } from "./topTrendingSlice";
import { upComingSlice } from "./upComingSlice";
import { tvEpisodeSlice } from "./tvEpisodeSlice";
import { recentSlice } from "./recentSlice";
import { userSlice } from "./userSlice";
import { favoriteListSlice } from "./favoriteList";
import { genresListSlice } from "./genresList";
import { searchSlice } from "./searchMovieSlice";
// Define a slice for the API data

export const store = configureStore({
  reducer: {
    nowPlaying: nowPlayingSlice.reducer,
    topTrending: topTrendingSlice.reducer,
    upComing: upComingSlice.reducer,
    tvEpisode: tvEpisodeSlice.reducer,
    recent: recentSlice.reducer,
    user: userSlice.reducer,
    favoriteList: favoriteListSlice.reducer,
    genres: genresListSlice.reducer,
    search: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
