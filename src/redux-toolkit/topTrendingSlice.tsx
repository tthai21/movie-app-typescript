import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface topTrendingState {
  moviesList: any;
  loading: boolean;
  error: string | null;
}

const initialState: topTrendingState = {
  moviesList: null,
  loading: false,
  error: null,
};

export const topTrendingSlice = createSlice({
  name: "topTrending",
  initialState,
  reducers: {
    topTrendingUpdateState: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.moviesList = action.payload;
    },
  },
});

export const { topTrendingUpdateState } = topTrendingSlice.actions;
