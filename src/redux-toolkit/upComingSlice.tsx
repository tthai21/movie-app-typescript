import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface upComingState {
  moviesList: any;
  loading: boolean;
  error: string | null;
}

const initialState: upComingState = {
  moviesList: null,
  loading: false,
  error: null,
};

export const upComingSlice = createSlice({
  name: "nowPlaying",
  initialState,
  reducers: {
    upComingUpdateState: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.moviesList = action.payload;
    },
  },
});

export const { upComingUpdateState } = upComingSlice.actions;
