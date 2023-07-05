import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface recentState {
  moviesList: any[];
  loading: boolean;
  error: string | null;
}

const initialState: recentState = {
  moviesList: [],
  loading: false,
  error: null,
};

export const recentSlice = createSlice({
  name: "recent",
  initialState,
  reducers: {
    recentUpdateState: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.moviesList = action.payload.concat(state.moviesList).slice(0, 3);
      localStorage.setItem("recent", JSON.stringify(state.moviesList));
    },
  },
});

export const { recentUpdateState } = recentSlice.actions;
