import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface nowPlayingState {
  moviesList: movieType[];
  loading: boolean;
  error: string | null;
}

const initialState: nowPlayingState = {
  moviesList: [],
  loading: false,
  error: null,
};

export const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState,
  reducers: {
    nowPlayingUpdateState: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.moviesList = action.payload;
    },
  },
});

export const { nowPlayingUpdateState } = nowPlayingSlice.actions;
