import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface tvEpisodeState {
  moviesList: any;
  loading: boolean;
  error: string | null;
}

const initialState: tvEpisodeState = {
  moviesList: null,
  loading: false,
  error: null,
};

export const tvEpisodeSlice = createSlice({
  name: "tvEpisode",
  initialState,
  reducers: {
    tvEpisodeUpdateState: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.moviesList = action.payload;
    },
  },
});

export const { tvEpisodeUpdateState } = tvEpisodeSlice.actions;
