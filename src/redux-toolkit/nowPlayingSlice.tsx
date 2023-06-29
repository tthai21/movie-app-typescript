import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface nowPlayingState {
  moviesList: any;
  loading: boolean;
  error: string | null;
}

const initialState: nowPlayingState = {
  moviesList: null,
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
